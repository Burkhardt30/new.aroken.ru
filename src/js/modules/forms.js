export function createError(form, text) {

	let currentForm

	if (typeof form === 'string') {
		currentForm = document.querySelector(form)
	} else {
		currentForm = form
	}

	currentForm?.insertAdjacentHTML('beforeend',
		`<div class="err">
			${text}
		</div>`
	)
}
export function removeError(selector) {
	const err = document.querySelector(selector)
	err?.remove()
}