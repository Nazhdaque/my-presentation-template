import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const ctx = document.getElementById("chart-doughnut");

const data = {
	labels: ["Red", "Blue", "Yellow"],
	datasets: [
		{
			label: "My First Dataset",
			data: [128, 256, 512],
			backgroundColor: [
				"rgb(255, 99, 132)",
				"rgb(54, 162, 235)",
				"rgb(255, 205, 86)",
			],
			hoverOffset: 4,
		},
	],
};

const options = {
	cutout: 50,
	plugins: {
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

new Chart(ctx, config);
