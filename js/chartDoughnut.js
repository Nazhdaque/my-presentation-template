import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const ctx = document.getElementById("chart-doughnut");

const data = {
	labels: ["Data-1", "Data-2", "Data-3", "Data-4", "Data-5"],
	datasets: [
		{
			label: "Amount",
			data: [65, 72, 88, 43, 56],
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

new Chart(ctx, config);
