import burgerInit from './modules/burger.js';

import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

burgerInit();

new Swiper('.features__slider', {
	modules: [Autoplay],
	slidesPerView: 1,
	spaceBetween: 10,
	loop: true,
	autoplay: true,
	centeredSlides: true,
	breakpoints: {
		500: {
			slidesPerView: 1.5,
		}
	}
});

new Swiper('.slider-section__slider', {
	modules: [Navigation, Pagination],
	navigation: true,
	pagination: true,
	slidesPerView: 3,
	spaceBetween: 30,
});