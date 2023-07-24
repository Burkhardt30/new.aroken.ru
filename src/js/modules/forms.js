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

let submitButtonText = ''

export function turnIntoLoader(e) {
	const button = e.submitter
	if (!button.classList.contains('btn-mini--loading')) {
		button.classList.add('btn-mini--loading')
		submitButtonText = button.innerHTML
		button.innerHTML = '<span class="btn-mini__spinner"></span>'
	}
}
export function turnIntoButton(target) {
	let button
	if (typeof target === 'string') {
		button = document.querySelector(target)
	} else {
		button = target
	}
	button.classList.remove('btn-mini--loading')
	button.innerHTML = submitButtonText
	submitButtonText = ''
}