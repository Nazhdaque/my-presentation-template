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
import { FillTable } from "./js/FillTable.js";
import "./js/yandexMap.js";
import Papa from "papaparse";
import { flipArray } from "./js/flipArray.js";

// ---
const parseCSV = async url => {
	const responce = await fetch(url);
	const data = await responce.text();
	return Papa.parse(data).data;
};
const demoData = await parseCSV("demo-data.csv");
const autoTable = new FillTable(".auto-table", flipArray(demoData));
autoTable.fillTable();

accenTable(document.querySelector(".auto-table"));

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
