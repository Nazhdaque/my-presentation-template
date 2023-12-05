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
			label: "Dataset-1",
			data: [65, 34, 82, 75, 47, 55, 91],
			backgroundColor: [
				`hsl(${chartColors[0]}, 0.3)`,
				`hsl(${chartColors[1]}, 0.3)`,
				`hsl(${chartColors[2]}, 0.3)`,
				`hsl(${chartColors[3]}, 0.3)`,
				`hsl(${chartColors[4]}, 0.3)`,
				`hsl(${chartColors[0]}, 0.6)`,
				`hsl(${chartColors[1]}, 0.6)`,
			],
			borderColor: [
				`hsl(${chartColors[0]})`,
				`hsl(${chartColors[1]})`,
				`hsl(${chartColors[2]})`,
				`hsl(${chartColors[3]})`,
				`hsl(${chartColors[4]})`,
			],
			borderWidth: 1,
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
	type: "bar",
	data: data,
	options: options,
};

document
	.querySelectorAll(".chart-bar")
	.forEach(chart => new Chart(chart, config));
