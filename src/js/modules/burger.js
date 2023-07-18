function burgerInit() {
	const burgerBtn = document.querySelector('.burger-btn');
	const burgerMenu = document.querySelector('.burger-menu');
	const burgerIcon = document.querySelector('.burger-icon');

	burgerBtn.onclick = function () {
		burgerMenu.classList.toggle('burger-menu--open');
		burgerIcon.classList.toggle('burger-icon--active');
		document.body.classList.toggle('no-scroll');
	};
}

export default burgerInit;