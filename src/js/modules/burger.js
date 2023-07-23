function burgerInit() {
	const burger = document.querySelector('.burger')

	burger.addEventListener('click', e => {

		const btn = e.target.closest('.burger__btn')
		const link = e.target.closest('.burger__nav a')
		const target = btn || link

		if (!target) return

		if (btn) {
			document.body.classList.toggle('opened-menu')
		} else {
			document.body.classList.remove('opened-menu')
		}

	})
}

export default burgerInit;