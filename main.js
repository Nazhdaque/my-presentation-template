import "./css/main.css";
import "./js/swiper.js";
import "./js/sidebar.js";
import "material-icons/iconfont/round.css";

// ---
const sidebar = document.querySelector(".sidebar");
const sidebarToggle = document.querySelector(".sidebar-toggle");
let sidebarTimerId = null;

sidebarToggle.addEventListener("click", () => {
	sidebarToggle.classList.toggle("active");

	if (sidebar.classList.contains("isOpen")) {
		sidebar.classList.remove("isOpen");
		clearTimeout(sidebarTimerId);
	} else {
		sidebar.style.display = "initial";
		sidebarTimerId = setTimeout(
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

// ---
const mail = document.querySelector(`[href="mailto:nospam@google.com"]`);
let mailTimerId = null;
const setEmail = () =>
	mail.setAttribute("href", "mailto:KrivoshlykovNN@yandex.ru");
const setProxiEmail = () =>
	mail.setAttribute("href", "mailto:nospampls@google.com");
const handleEmailClick = () => {
	clearTimeout(mailTimerId);
	setEmail();
	mailTimerId = setTimeout(setProxiEmail, 1);
};
mail.addEventListener("click", handleEmailClick);

// console.log(
// 	"%cCoded by ✨Nazhdaque✨\nhttps://www.frontendmentor.io/profile/Nazhdaque/solutions",
// 	"background: #222; color: chartreuse; font-size: 1.25rem"
// );
