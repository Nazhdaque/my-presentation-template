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

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const data = {
	labels: labels,
	datasets: [
		{
			label: "Data-1",
			data: [65, 34, 82, 75, 47, 55, 91],
			borderColor: `hsl(${chartColors[2]}, 1)`,
			fill: {
				target: true,
				above: `hsl(${chartColors[2]}, 0.1)`,
			},
			tension: 0.25,
			pointStyle: "circle",
			backgroundColor: `hsl(${chartColors[2]}, 1)`,
			pointRadius: 5,
			pointHoverRadius: 15,
		},
		{
			label: "Data-2",
			data: [25, 44, 54, 32, 14, 46, 52],
			borderColor: `hsl(${chartColors[3]}, 1)`,
			borderDash: [6, 2],
			fill: {
				target: true,
				above: `hsl(${chartColors[3]}, 0.1)`,
			},
			tension: 0.25,
			pointStyle: "circle",
			backgroundColor: `hsl(${chartColors[3]}, 1)`,
			pointRadius: 5,
			pointHoverRadius: 15,
		},
	],
};

const options = {
	maintainAspectRatio: false,
	scales: {
		y: {
			beginAtZero: true,
		},
	},
};

const config = {
	type: "line",
	data: data,
	options: options,
};

document
	.querySelectorAll(".chart-line")
	.forEach(chart => new Chart(chart, config));
