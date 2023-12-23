import "./css/main.css";
import "./js/importHTML.js";
import "./js/sidebar.js";
import "./js/swiper.js";
import "./js/proxiEmail.js";
import "./js/scrollDownPromptDisable.js";
import "material-icons/iconfont/round.css";
import { SizeSetter } from "./js/sizeSetter.js";
import { AttrSetter } from "./js/attrSetter";
import { accenTable } from "./js/accenTable";
import "./js/chartDoughnut.js";
import "./js/chartBar.js";
import "./js/chartLine.js";
import "./js/video.js";
import "./js/form.js";
// import "./js/yandexMap.js";

// ---
accenTable(document.querySelectorAll("table"));

const attrSetter = new AttrSetter();
attrSetter.initWith("role", {
	// table: "table",
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
const widthSetter = new SizeSetter("w");
widthSetter.initWith([
	// ["w-master-1", "w-slave-1"],
	["w-master-2", "w-slave-2"],
]);

// const heightSetter = new SizeSetter("h");
// heightSetter.initWith([
// 	["h-master-1", "h-slave-1"],
// 	["h-master-2", "h-slave-2"],
// 	["h-master-3", "h-slave-3"],
// ]);

// ---
console.log(
	"%cCoded by ✨Nazhdaque✨\nhttps://www.frontendmentor.io/profile/Nazhdaque/solutions",
	"background: #222; color: chartreuse;"
);

// const getExactTime = () =>
// 	new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000)
// 		.toISOString()
// 		.replace(/T/, " ")
// 		.replace(/\./, "::")
// 		.replace(/Z/, "ms");
