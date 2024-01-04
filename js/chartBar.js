import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { getChartData } from "./getChartData";
import { MobileDesktopStatesManager } from "./MobileDesktopStatesManager";

const getChart = async () => {
	const barChart = await getChartData("demo-data.json");
	const labelsOnTop = {
		id: "labelsOnTop",
		afterDatasetsDraw(chart, args, pluginOptions) {
			const {
				ctx,
				scales: { x, y },
			} = chart;

			chart.data.datasets[0].data.forEach((datapoints, index) => {
				const datasetArray = [];

				chart.data.datasets.forEach(dataset =>
					datasetArray.push(dataset.data[index])
				);

				const sum = datasetArray
					.reduce((total, values) => total + values, 0)
					.toFixed(2);

				ctx.font = "bold 0.85rem sans-serif";
				ctx.fillStyle = chart.data.datasets[2].borderColor[index];
				ctx.textAlign = "center";
				ctx.fillText(
					sum,
					x.getPixelForValue(index),
					chart.getDatasetMeta(2).data[index].y - 10
				);
			});
		},
	};

	const config = {
		type: "bar",
		plugins: [ChartDataLabels, labelsOnTop],
		data: {
			labels: barChart.dataLabels[0],
			datasets: [
				{
					label: barChart.labels[0][0], // [first]: index of object with data, [second]: index of value in the array
					data: barChart.data[0][0],
					backgroundColor: barChart.colors.basic[0],
					hoverBackgroundColor: barChart.colors.hover[0],
					borderColor: barChart.colors.hover[0],
					borderWidth: 2,
					datalabels: {
						// color: chart => chart.dataset.borderColor[chart.dataIndex],
						color: barChart.colors.hover[1],
					},
				},
				{
					label: barChart.labels[0][1],
					data: barChart.data[0][1],
					backgroundColor: barChart.colors.basic[1],
					hoverBackgroundColor: barChart.colors.hover[1],
					borderColor: barChart.colors.hover[1],
					borderWidth: 2,
					datalabels: { color: barChart.colors.hover[2] },
				},
				{
					label: barChart.labels[0][2],
					data: barChart.data[0][2],
					backgroundColor: barChart.colors.basic[2],
					hoverBackgroundColor: barChart.colors.hover[2],
					borderColor: barChart.colors.hover[2],
					borderWidth: 2,
					datalabels: { color: barChart.colors.hover[0] },
				},
			],
		},

		options: {
			plugins: {
				tooltip: { enabled: false },
			},
			maintainAspectRatio: false,
			scales: {
				x: { stacked: true },
				y: {
					beginAtZero: true,
					stacked: true,
					grace: 10,
				},
			},
		},
	};

	document
		.querySelectorAll(".chart-bar")
		.forEach(ctx => new Chart(ctx, config));
};

getChart();

// ---
const barsFontSize = new MobileDesktopStatesManager(
	() => {
		Chart.defaults.font.size = 8;
	},
	() => {
		Chart.defaults.font.size = 13;
	}
);
barsFontSize.toggleStateOn(576);
