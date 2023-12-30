import "./css/main.css";
import "./js/importHTML.js";
import "./js/sidebar.js";
import "./js/swiper.js";
import "./js/proxiEmail.js";
import "./js/scrollDownPromptDisable.js";
import "material-icons/iconfont/round.css";
import { SizeSetter } from "./js/SizeSetter.js";
import { AttrSetter } from "./js/AttrSetter.js";
import { accenTable } from "./js/accenTable.js";
import "./js/chartDoughnut.js";
import "./js/chartBar.js";
import "./js/chartLine.js";
import "./js/video.js";
import "./js/form.js";
import "./js/yandexMap.js";

// ---
accenTable(document.querySelector(".demo-table"));

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
widthSetter.initWith([["w-master-1", "w-slave-1"]]);

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
