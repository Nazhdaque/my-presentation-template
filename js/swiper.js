import Swiper from "swiper";
import "swiper/css";
import {
	Navigation,
	Pagination,
	// Autoplay,
	Keyboard,
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
const className = "swiper-bullet";

const swiperCreative = new Swiper(".swiper-creative", {
	modules: [Navigation, Pagination, Keyboard, Mousewheel, EffectCreative],
	initialSlide: 0,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
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
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	speed: 500,
	spaceBetween: 16,
	direction: "horizontal",
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	// mousewheel: {
	// 	sensitivity: 2,
	// 	invert: true,
	// },
	grabCursor: true,
	slidesPerView: 1,
	breakpoints: {
		576: {
			pagination: { dynamicBullets: false },
		},
	},
});

// ---
const jumpToSlide = number => swiperCreative.slideTo(number);

document
	.querySelectorAll(".slide-to")
	.forEach((item, index) =>
		item.addEventListener("click", () => jumpToSlide(index))
	);
