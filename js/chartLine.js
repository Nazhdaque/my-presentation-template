import Chart from "chart.js/auto";

const ctx = document.getElementById("chart-line");

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const data = {
	labels: labels,
	datasets: [
		{
			label: "My First Dataset",
			data: [65, 34, 82, 75, 47, 55, 91],
			borderColor: "rgb(75, 192, 192)",
			fill: {
				target: "origin",
				above: "rgba(255, 159, 64, 0.2)",
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

new Chart(ctx, config);
