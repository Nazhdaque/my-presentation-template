import "./css/main.css";
import "./js/importHTML.js";
import "./js/sidebar.js";
import "./js/swiper.js";
import "./js/proxiEmail.js";
import "./js/scrollDownPromptDisable.js";
import "material-icons/iconfont/round.css";
import {
	SizeSetter,
	AttrSetter,
	flipArray,
	parseCSV,
	trimData,
} from "./js/helpers.js";
import { accenTable } from "./js/table/accenTable.js";
import { FillTable } from "./js/table/FillTable.js";
import "./js/charts/chartDoughnut.js";
import "./js/charts/chartBar.js";
import "./js/charts/chartLine.js";
import "./js/video.js";
import "./js/form.js";
import "./js/yandexMap.js";

const buildTable = async () => {
	const demoData = await parseCSV("demo-data.csv");

	const autoTable = new FillTable(
		".auto-table",
		trimData(flipArray(demoData), [0, 9, 0, 3])
	);
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
};
buildTable();

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
