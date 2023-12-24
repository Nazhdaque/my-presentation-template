import Swiper from "swiper";
import "swiper/css";
import {
	Navigation,
	Pagination,
	Keyboard,
	HashNavigation,
	Autoplay,
	Mousewheel,
	// Scrollbar,
	// Parallax,
	EffectCreative,
	// EffectCoverflow,
} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/parallax";
// import "swiper/css/scrollbar";

// ---
const jumpToSlide = number => mainSlider.slideTo(number);

document
	.querySelectorAll(".slide-to")
	.forEach((item, index) =>
		item.addEventListener("click", () => jumpToSlide(index))
	);

// ---
const mainSlider = new Swiper(".main-slider", {
	modules: [Navigation, Pagination, Keyboard, HashNavigation],
	initialSlide: 0,
	slidesPerView: 1,
	speed: 0,
	spaceBetween: 32,
	direction: "horizontal",
	hashNavigation: true,
	virtual: { enabled: true },
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	simulateTouch: true,
	breakpoints: {
		576: {
			pagination: { dynamicBullets: false },
			simulateTouch: false,
		},
	},
});

// ---
const swiperBasic = new Swiper(".swiper-basic", {
	modules: [Autoplay, Keyboard, Mousewheel, EffectCreative],
	loop: true,
	speed: 1000,
	autoplay: {
		delay: 5000,
		disableOnInteraction: true,
		pauseOnMouseEnter: true,
	},
	spaceBetween: 16,
	direction: "horizontal",
	mousewheel: {
		sensitivity: 2,
		invert: true,
	},
	grabCursor: true,
	slidesPerView: 1,
	initialSlide: 0,

	effect: "creative",
	creativeEffect: {
		prev: {
			shadow: true,
			translate: [0, 0, -400],
		},
		next: {
			translate: ["100%", 0, 0],
		},
	},
});
