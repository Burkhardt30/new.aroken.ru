import burgerInit from './modules/burger.js';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

burgerInit();

const swiper = new Swiper('.slider-section__slider', {
	modules: [Navigation, Pagination],
	navigation: true,
	pagination: true,
	slidesPerView: 3,
	spaceBetween: 30,
});