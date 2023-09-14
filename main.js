import "./css/main.css";
import "./js/swiper.js";
import "./js/sidebar.js";

// ---
const sidebar = document.querySelector(".sidebar");
const sidebarToggle = document.querySelector(".sidebar-toggle");
let timerId = null;

sidebarToggle.addEventListener("click", () => {
	sidebarToggle.classList.toggle("active");

	if (sidebar.classList.contains("isOpen")) {
		sidebar.classList.remove("isOpen");
		clearTimeout(timerId);
	} else {
		sidebar.style.display = "initial";
		timerId = setTimeout(
			() => requestAnimationFrame(() => sidebar.classList.add("isOpen")),
			0.1
		);
	}
});

sidebar.addEventListener(
	"transitionend",
	() =>
		!sidebar.classList.contains("isOpen") && (sidebar.style.display = "none")
);

// --- demo

// console.log(
// 	"%cCoded by ✨Nazhdaque✨\nhttps://www.frontendmentor.io/profile/Nazhdaque/solutions",
// 	"background: #222; color: chartreuse; font-size: 1.25rem"
// );
