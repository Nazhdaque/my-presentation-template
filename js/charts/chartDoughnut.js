import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { getChartData } from "./getChartData.js";

const getChart = async () => {
	const doughnutChart = await getChartData("demo-data.csv", [0, 1, 0, 5]);
	const labelCenter = {
		id: "labelCenter",
		beforeDatasetsDraw(chart, args, pluginOptions) {
			const { ctx, data } = chart;
			ctx.save();
			const xAxis = chart.getDatasetMeta(0).data[0].x;
			const yAxis = chart.getDatasetMeta(0).data[0].y;
			if (chart._active.length > 0) {
				// const txtLabel = chart.config.data.labels[chart._active[0].index];
				const numLabel =
					chart.config.data.datasets[chart._active[0].datasetIndex].data[
						chart._active[0].index
					];
				const clr =
					chart.config.data.datasets[chart._active[0].datasetIndex]
						.hoverBackgroundColor[chart._active[0].index];
				ctx.font = "600 2em Montserrat";
				ctx.fillStyle = clr;
				ctx.textAlign = "center";
				ctx.textBaseline = "middle";
				ctx.fillText(`${numLabel}`, xAxis, yAxis);
			}
			ctx.restore();
		},
	};

	const config = {
		type: "doughnut",
		plugins: [ChartDataLabels, labelCenter],
		options: {
			plugins: {
				tooltip: { enabled: false },
				legend: { position: "left" },
				colors: { enabled: true },
				datalabels: {
					backgroundColor: "#000",
					borderRadius: 3,
					font: { size: 14 },
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
			maintainAspectRatio: false,
			cutout: 70,
			layout: {
				padding: {
					top: 12,
					bottom: 12,
				},
			},
		},

		data: {
			labels: doughnutChart.dataLabels,
			datasets: [
				{
					data: doughnutChart.data.flat(),
					backgroundColor: doughnutChart.colors.basic.flat(),
					hoverBackgroundColor: doughnutChart.colors.hover.flat(),
					borderColor: doughnutChart.colors.hover.flat(),
					borderWidth: 2,
					borderAlign: "inner",
					hoverOffset: 50,
				},
			],
		},
	};

	document
		.querySelectorAll(".chart-doughnut")
		.forEach(ctx => new Chart(ctx, config));
};

getChart();

// [35.91, 42.36, 28.07, 24.39, 21.28]
