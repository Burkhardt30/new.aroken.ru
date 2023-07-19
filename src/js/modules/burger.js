function burgerInit() {
	const burgerBtn = document.querySelector('.burger__btn');

	burgerBtn.onclick = function () {
		document.body.classList.toggle('opened-menu');
	};
}

export default burgerInit;