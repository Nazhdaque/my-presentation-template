import Swiper from "swiper";
import "swiper/css";
import {
	Navigation,
	Pagination,
	Keyboard,
	// Autoplay,
	// Mousewheel,
	// Scrollbar,
	// Parallax,
	// EffectCreative,
	// EffectCoverflow,
} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/parallax";
// import "swiper/css/scrollbar";

const mainSlider = new Swiper(".main-slider", {
	modules: [Navigation, Pagination, Keyboard],
	initialSlide: 5,
	slidesPerView: 1,
	speed: 0,
	spaceBetween: 32,
	direction: "horizontal",
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
	breakpoints: {
		576: { pagination: { dynamicBullets: false } },
	},

	// effect: "creative",
	// creativeEffect: {
	// 	prev: {
	// 		shadow: true,
	// 		translate: [0, 0, -400],
	// 	},
	// 	next: {
	// 		translate: ["100%", 0, 0],
	// 	},
	// },
	// mousewheel: {
	// 	sensitivity: 2,
	// 	invert: true,
	// },
	// grabCursor: true,
});

// ---
const jumpToSlide = number => mainSlider.slideTo(number);

document
	.querySelectorAll(".slide-to")
	.forEach((item, index) =>
		item.addEventListener("click", () => jumpToSlide(index))
	);
