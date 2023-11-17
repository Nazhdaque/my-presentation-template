import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

class BrandColors {
	constructor() {
		this.brandColors = [];
	}

	getValues = colorNames => {
		colorNames.forEach(colorName =>
			this.brandColors.push(
				getComputedStyle(document.documentElement, null).getPropertyValue(
					colorName
				)
			)
		);
		return this.brandColors;
	};
}

const brandColors = new BrandColors();
const chartColors = brandColors.getValues([
	"--clr-1a-solid",
	"--clr-1b-solid",
	"--clr-2a-solid",
	"--clr-2b-solid",
	"--clr-2c-solid",
]);

const data = {
	labels: ["Data-1", "Data-2", "Data-3", "Data-4", "Data-5"],
	datasets: [
		{
			label: "Amount",
			data: [65, 72, 88, 43, 56],
			backgroundColor: [
				chartColors[0],
				chartColors[1],
				chartColors[2],
				chartColors[3],
				chartColors[4],
			],
			hoverOffset: 50,
		},
	],
};

const options = {
	cutout: 50,
	plugins: {
		colors: {
			enabled: true,
		},
		datalabels: {
			backgroundColor: "#000",
			borderRadius: 3,
			font: {
				size: 14,
			},
			formatter: (value, ctx) => {
				const datapoints = ctx.chart.data.datasets[0].data;
				const total = datapoints.reduce(
					(total, datapoint) => total + datapoint,
					0
				);
				const percentage = (value / total) * 100;
				return percentage.toFixed(2) + "%";
			},
			color: "#fff",
		},
	},
};

const config = {
	type: "doughnut",
	plugins: [ChartDataLabels],
	options: options,
	data: data,
};

document
	.querySelectorAll(".chart-doughnut")
	.forEach(chart => new Chart(chart, config));
