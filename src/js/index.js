import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import burgerInit from './modules/burger.js';

burgerInit();

mobileSliderInit('.features__slider', {
	media: 768,
	sliderOptions: {
		modules: [Autoplay],
		slidesPerView: 1,
		spaceBetween: 10,
		loop: true,
		autoplay: true,
		breakpoints: {
			500: {
				slidesPerView: 1.5,
			}
		}
	}
})
mobileSliderInit('.freelance__slider', {
	media: 768,
	sliderOptions: {
		modules: [Autoplay],
		autoplay: true,
		loop: true,
		slidesPerView: 1,
		spaceBetween: 10,
		breakpoints: {
			500: {
				slidesPerView: 1.5,
			}
		}
	}
})

function mobileSliderInit(selector = '.swiper', settings = {
	media: 768,
	sliderOptions: {},
}) {

	let slider = null

	const mediaQuery = settings.media
	const options = settings.sliderOptions

	window.addEventListener('load', sliderSwitch);
	window.addEventListener('resize', sliderSwitch);

	function sliderSwitch() {

		const viewportWidth = document.documentElement.clientWidth

		if (viewportWidth <= mediaQuery) {
			sliderInit()
		} else {
			sliderDestroy()
		}
	}
	function sliderInit() {
		if (!slider) {
			slider = new Swiper(selector, options);
		}
	}
	function sliderDestroy() {
		if (slider) {
			slider.destroy();
			slider = null;
		}
	}
}

new Swiper('.cases__slider', {
	modules: [Navigation],
	slidesPerView: 1,
	navigation: {
		nextEl: '.cases__next',
		prevEl: '.cases__prev',
	},
});