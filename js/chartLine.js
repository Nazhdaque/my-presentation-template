import Chart from "chart.js/auto";

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const data = {
	labels: labels,
	datasets: [
		{
			label: "Data-1",
			data: [65, 34, 82, 75, 47, 55, 91],
			fill: {
				target: true,
				above: "rgba(54, 162, 235, 0.1)",
			},
			tension: 0.25,
		},
		{
			label: "Data-2",
			data: [25, 44, 54, 32, 14, 46, 52],
			fill: {
				target: true,
				above: "rgba(255, 99, 132, 0.1)",
			},
			tension: 0.25,
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
