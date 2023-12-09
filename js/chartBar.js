import Chart from "chart.js/auto";
import { BrandColors } from "./brandColors";

const brandColors = new BrandColors();
const chartColors = brandColors.getValues([
	"--clr-1a",
	"--clr-1b",
	"--clr-2a",
	"--clr-2b",
	"--clr-2c",
]);

class chartValues {
	constructor(data) {
		this.data = data;
		this.chartColors = {
			main: `hsl(${chartColors[0]}, 0.6)`,
			mainOnHover: `hsl(${chartColors[0]}, 1)`,
			accent: `hsl(${chartColors[1]}, 0.6)`,
			accentOnHover: `hsl(${chartColors[1]}, 1)`,
		};
		this.keys = [...new Set(this.data.flatMap(Object.keys))];
		this.amounts = this.getAmounts();
		this.maxValue = this.getMaxValue();
	}

	getlabels = () => this.data.map(entry => entry[this.keys[0]]);
	getAmounts = () => this.data.map(entry => entry[this.keys[1]]);
	getMaxValue = () => Math.max(...this.amounts);
	getMainBgColor = () =>
		this.data.map(entry =>
			entry[this.keys[1]] === this.maxValue
				? this.chartColors.accent
				: this.chartColors.main
		);
	getHoverBgColor = () =>
		this.data.map(entry =>
			entry[this.keys[1]] === this.maxValue
				? this.chartColors.accentOnHover
				: this.chartColors.mainOnHover
		);
	getValues = () => {
		return {
			labels: this.getlabels(),
			data: this.getAmounts(),
			bgClr: this.getMainBgColor(),
			hoverBgClr: this.getHoverBgColor(),
			chartColors: this.chartColors,
		};
	};
}

const getData = async () => {
	const responce = await fetch("chart-data.json");
	const data = await responce.json();
	const values = new chartValues(data);
	return values.getValues();
};

const getChart = async () => {
	const demoChart = await getData();

	document.querySelectorAll(".chart-bar").forEach(
		chart =>
			new Chart(chart, {
				type: "bar",
				data: {
					labels: demoChart.labels,
					datasets: [
						{
							label: "Income",
							data: demoChart.data,
							backgroundColor: demoChart.bgClr,
							hoverBackgroundColor: demoChart.hoverBgClr,
							borderColor: demoChart.hoverBgClr,
							borderWidth: 2,
						},
					],
				},
				options: {
					maintainAspectRatio: false,
					scales: {
						y: { beginAtZero: true },
					},
				},
			})
	);
};

getChart();
