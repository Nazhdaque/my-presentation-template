import Chart from "chart.js/auto";
import { GetCustomPropsValues } from "./GetCustomPropsValues";

const brandColors = new GetCustomPropsValues();
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
			data: [22.95, 28.41, 61.34, 33.66, 36.89, 24.16, 31.74],
			borderColor: `hsl(${chartColors[0]}, 1)`,
			fill: {
				target: true,
				above: `hsl(${chartColors[0]}, 0.1)`,
			},
			tension: 0.25,
			pointStyle: "circle",
			backgroundColor: `hsl(${chartColors[1]}, 1)`,
			pointRadius: 5,
			pointHoverRadius: 15,
		},
		{
			label: "Data-2",
			data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
			borderColor: `hsl(${chartColors[3]}, 1)`,
			borderDash: [6, 2],
			fill: {
				target: true,
				above: `hsl(${chartColors[3]}, 0.1)`,
			},
			tension: 0.25,
			pointStyle: "circle",
			backgroundColor: `hsl(${chartColors[2]}, 1)`,
			pointRadius: 5,
			pointHoverRadius: 15,
		},
	],
};

const options = {
	maintainAspectRatio: false,
	scales: {
		y: { beginAtZero: true },
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
