import "./css/main.css";
import "./js/importHTML.js";
import "./js/swiper.js";
import "./js/sidebar.js";
import "material-icons/iconfont/round.css";
import "material-icons/iconfont/sharp.css";
import { SizeSetter } from "./js/sizeSetter.js";
import { AttrSetter } from "./js/attrSetter";
import { accenTable } from "./js/accenTable";
import "./js/chartDoughnut.js";
import "./js/chartBar.js";
import "./js/chartLine.js";

// ---
accenTable(document.querySelectorAll("table"));

const attrSetter = new AttrSetter();
attrSetter.initWith("role", {
	table: "table",
	// caption: "caption",
	thead: "rowgroup",
	tbody: "rowgroup",
	tfoot: "rowgroup",
	tr: "row",
	td: "cell",
	th: "columnheader",
	"th[scope=row]": "rowheader",
});

// ---
const sizeSetter = new SizeSetter();
sizeSetter.initWith([["master-1", "slave-1"]]);

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

// ---
console.log(
	"%cCoded by ✨Nazhdaque✨\nhttps://www.frontendmentor.io/profile/Nazhdaque/solutions",
	"background: #222; color: chartreuse; font-size: 1.25rem"
);
