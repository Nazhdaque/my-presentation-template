import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { getChartData } from "./getChartData";

const getChart = async () => {
	const demoChart = await getChartData("chart-data.json");
	const labesOnTop = {
		id: "labesOnTop",
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
		plugins: [ChartDataLabels, labesOnTop],
		data: {
			labels: demoChart.labels[0],
			datasets: [
				{
					label: "data-1",
					data: demoChart.data[0][0], // [first]: index of object with data, [second]: index of value in the array
					backgroundColor: demoChart.colors.basicColors[0],
					hoverBackgroundColor: demoChart.colors.hoverColors[0],
					borderColor: demoChart.colors.hoverColors[0],
					borderWidth: 2,
					datalabels: {
						// color: chart => chart.dataset.borderColor[chart.dataIndex],
						color: demoChart.colors.hoverColors[1],
					},
				},
				{
					label: "data-2",
					data: demoChart.data[0][1],
					backgroundColor: demoChart.colors.basicColors[1],
					hoverBackgroundColor: demoChart.colors.hoverColors[1],
					borderColor: demoChart.colors.hoverColors[1],
					borderWidth: 2,
					datalabels: { color: demoChart.colors.hoverColors[2] },
				},
				{
					label: "data-3",
					data: demoChart.data[0][2],
					backgroundColor: demoChart.colors.basicColors[2],
					hoverBackgroundColor: demoChart.colors.hoverColors[2],
					borderColor: demoChart.colors.hoverColors[2],
					borderWidth: 2,
					datalabels: { color: demoChart.colors.hoverColors[0] },
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
