export default function accordionInit(selector) {

	const accordionsParent = document.querySelector(selector);

	accordionsParent?.addEventListener('click', e => {

		const parent = e.currentTarget
		const button = e.target.closest('[data-acc="button"]')
		if (!button) return
		e.preventDefault()
		const accordion = button.closest('[data-acc="parent"]')
		if (!accordion) return
		const content = accordion.querySelector('[data-acc="content"]')
		if (!content) return

		const currentAccordion = parent.querySelector('[data-acc-progress="opened"]')

		if (currentAccordion && currentAccordion != accordion) {
			const currentContent = currentAccordion.querySelector('[data-acc="content"]')
			currentContent.style.maxHeight = currentContent.scrollHeight + 'px'
			setTimeout(() => {
				currentContent.style.maxHeight = null;
				currentAccordion.dataset.accProgress = 'closed'
			}, 0);
		}

		if (accordion.dataset.accProgress === 'closed') {
			content.style.maxHeight = content.scrollHeight + 'px'
			accordion.dataset.accProgress = 'process'
			content.addEventListener("transitionend", clearMaxHeight)

			function clearMaxHeight() {
				content.style.maxHeight = 'none';
				content.removeEventListener("transitionend", clearMaxHeight)
				accordion.dataset.accProgress = 'opened'
			}
		} else if (accordion.dataset.accProgress === 'opened') {
			content.style.maxHeight = content.scrollHeight + 'px'
			setTimeout(() => {
				content.style.maxHeight = null;
				accordion.dataset.accProgress = 'closed'
			}, 0);
		}

	})

}