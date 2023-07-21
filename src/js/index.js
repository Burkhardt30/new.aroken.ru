import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

import 'fslightbox/index.js';

import burgerInit from './modules/burger.js';
import showMore from './modules/showmore.js';
import { Modal } from './modules/modal.js'
import smoothScrollToAnchor from './modules/smoothScrollToAnchor.js';
import { header } from './modules/header.js'
import accordionInit from './modules/accordion.js'

burgerInit();
showMore();
document.addEventListener('click', smoothScrollToAnchor)
header()
accordionInit('.program__stages')

// Иниты слайдеров только на мобилке ------------------------------------------------

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

// Иниты слайдеров ----------------------------------------------------------------

new Swiper('.cases__slider', {
	modules: [Navigation],
	slidesPerView: 1,
	navigation: {
		nextEl: '.cases__next',
		prevEl: '.cases__prev',
	},
});
new Swiper('.process__slider', {
	modules: [Navigation, Pagination, EffectFade],
	slidesPerView: 1,
	effect: 'fade',
	pagination: {
		el: '.process__pagination',
		type: 'fraction',
	},
	navigation: {
		nextEl: '.process__next',
		prevEl: '.process__prev',
	},
});
new Swiper('.testimonials__video', {
	modules: [Navigation],
	spaceBetween: 30,
	slidesPerView: 1.5,
	centeredSlides: true,
	navigation: {
		nextEl: '.testimonials__video-next',
		prevEl: '.testimonials__video-prev',
	},
	breakpoints: {
		500: {
			centeredSlides: false,
			slidesPerView: 2.5,
			spaceBetween: 20,
		},
		768: {
			centeredSlides: false,
			slidesPerView: 3,
			spaceBetween: 20,
		},
		992: {
			centeredSlides: false,
			slidesPerView: 4,
			spaceBetween: 20,
		},
	}
});
new Swiper('.testimonials__messages', {
	modules: [Navigation],
	spaceBetween: 60,
	slidesPerView: 1,
	loop: true,
	navigation: {
		nextEl: '.testimonials__messages-next',
		prevEl: '.testimonials__messages-prev',
	},
});

// Инит модалки + функция для открытия модалки thank -------------------------------

const modal = new Modal();

// openTheModal('[data-target="thank"]')

function openTheModal(selector) {
	if (!modal) return
	if (modal.isOpen) {
		modal.close()
		setTimeout(open, modal.speed + 100);
	} else {
		open()
	}
	function open() {
		modal.modalContainer = document.querySelector(selector)
		modal.open()
	}
}
