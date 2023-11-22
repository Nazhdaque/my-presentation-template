import Chart from "chart.js/auto";

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const data = {
	labels: labels,
	datasets: [
		{
			label: "Dataset-1",
			data: [65, 34, 82, 75, 47, 55, 91],
			backgroundColor: [
				"rgba(255, 99, 132, 0.2)",
				"rgba(255, 159, 64, 0.2)",
				"rgba(255, 205, 86, 0.2)",
				"rgba(75, 192, 192, 0.2)",
				"rgba(54, 162, 235, 0.2)",
				"rgba(153, 102, 255, 0.2)",
				"rgba(201, 203, 207, 0.2)",
			],
			borderColor: [
				"rgb(255, 99, 132)",
				"rgb(255, 159, 64)",
				"rgb(255, 205, 86)",
				"rgb(75, 192, 192)",
				"rgb(54, 162, 235)",
				"rgb(153, 102, 255)",
				"rgb(201, 203, 207)",
			],
			borderWidth: 1,
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
	type: "bar",
	data: data,
	options: options,
};

document
	.querySelectorAll(".chart-bar")
	.forEach(chart => new Chart(chart, config));
