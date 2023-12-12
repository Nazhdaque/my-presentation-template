import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { BrandColors } from "./brandColors";

const brandColors = new BrandColors();
const chartColors = brandColors.getValues([
	"--clr-1a",
	"--clr-1b",
	"--clr-2a",
	"--clr-2b",
	"--clr-2c",
]);

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
					.backgroundColor[chart._active[0].index];
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
		cutout: 70,
		layout: {
			padding: {
				top: 10,
				bottom: 10,
			},
		},
		maintainAspectRatio: false,
		plugins: {
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
	},
	data: {
		labels: ["Data-1", "Data-2", "Data-3", "Data-4", "Data-5"],
		datasets: [
			{
				label: "Amount",
				data: [35.91, 42.36, 28.07, 24.39, 21.28],
				backgroundColor: [
					`hsl(${chartColors[0]})`,
					`hsl(${chartColors[1]})`,
					`hsl(${chartColors[2]})`,
					`hsl(${chartColors[3]})`,
					`hsl(${chartColors[4]})`,
				],
				hoverOffset: 50,
			},
		],
	},
};

document
	.querySelectorAll(".chart-doughnut")
	.forEach(ctx => new Chart(ctx, config));
