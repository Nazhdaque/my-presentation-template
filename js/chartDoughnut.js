import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { BrandColors } from "./brandColors";

const brandColors = new BrandColors();
const chartColors = brandColors.getValues([
	"--clr-1a",
	"--clr-1b",
	"--clr-2a",
	"--clr-2b",
	"--clr-2c",
]);

const data = {
	labels: ["Data-1", "Data-2", "Data-3", "Data-4", "Data-5"],
	datasets: [
		{
			label: "Amount",
			data: [65, 72, 88, 43, 56],
			backgroundColor: [
				`hsl(${chartColors[0]})`,
				`hsl(${chartColors[1]})`,
				`hsl(${chartColors[2]})`,
				`hsl(${chartColors[3]})`,
				`hsl(${chartColors[4]})`,
			],
			hoverOffset: 50,
		},
	],
};

const options = {
	cutout: 50,
	maintainAspectRatio: false,
	plugins: {
		legend: { position: "left" },
		colors: { enabled: true },
		datalabels: {
			backgroundColor: "#000",
			borderRadius: 3,
			font: { size: 14 },
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
