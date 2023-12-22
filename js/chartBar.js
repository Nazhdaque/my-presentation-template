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

// ---

//---
class ChartValues {
	constructor(data) {
		this.data = data;
		this.chartColors = [
			{
				main: `hsl(${chartColors[0]}, 0.6)`,
				main_active: `hsl(${chartColors[0]}, 1)`,
				// accent: `hsl(${chartColors[1]}, 0.6)`,
				// accent_active: `hsl(${chartColors[1]}, 1)`,
			},
			{
				main: `hsl(${chartColors[1]}, 0.6)`,
				main_active: `hsl(${chartColors[1]}, 1)`,
				// accent: `hsl(${chartColors[3]}, 0.6)`,
				// accent_active: `hsl(${chartColors[3]}, 1)`,
			},
			{
				main: `hsl(${chartColors[3]}, 0.6)`,
				main_active: `hsl(${chartColors[3]}, 1)`,
				// accent: `hsl(${chartColors[3]}, 0.6)`,
				// accent_active: `hsl(${chartColors[3]}, 1)`,
			},
		];

		this.labels = [];
		this.amounts = [];
		this.maxValues = [];
	}

	getChartLabels = () => {
		this.data.forEach(entry => this.labels.push(Object.keys(entry)));
		return this.labels;
	};
	getChartData = () => {
		this.data.forEach(entry => this.amounts.push(Object.values(entry)));
		return this.amounts;
	};
	getMaxValues = () => {
		this.amounts.forEach(entry => this.maxValues.push(Math.max(...entry)));
		return this.maxValues;
	};
	colorizeChart = () => {
		const mainColors = [];
		const activeColors = [];

		this.data.forEach((dataset, index) => {
			const clrSet_main = [];
			const clrSet_active = [];

			for (const key in dataset) {
				switch (dataset[key]) {
					case this.getMaxValues()[index]:
						const color = this.chartColors[index].accent;
						const color_active = this.chartColors[index].accent_active;

						color && clrSet_main.push(color);
						color_active && clrSet_active.push(color_active);
						break;
					default:
						clrSet_main.push(this.chartColors[index].main);
						clrSet_active.push(this.chartColors[index].main_active);
				}
			}

			mainColors.push(clrSet_main);
			activeColors.push(clrSet_active);
		});

		return {
			mainColors: mainColors,
			activeColors: activeColors,
		};
	};

	getValues = () => {
		return {
			labels: this.getChartLabels(),
			data: this.getChartData(),
			colors: this.colorizeChart(),
		};
	};
}

const getData = async () => {
	const responce = await fetch("chart-data.json");
	const data = await responce.json();
	const values = new ChartValues(data);
	return values.getValues();
};

const getChart = async () => {
	const demoChart = await getData();
	const topLabels = {
		id: "topLabels",
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

				const totalSum = (total, values) => total + values;
				let sum = datasetArray.reduce(totalSum, 0).toFixed(2);

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
		plugins: [ChartDataLabels, topLabels],
		data: {
			labels: demoChart.labels[0],
			datasets: [
				{
					label: "data-1",
					data: demoChart.data[0],
					backgroundColor: demoChart.colors.mainColors[0],
					hoverBackgroundColor: demoChart.colors.activeColors[0],
					borderColor: demoChart.colors.activeColors[0],
					borderWidth: 2,
					datalabels: {
						// color: chart => chart.dataset.borderColor[chart.dataIndex],
						color: demoChart.colors.activeColors[1],
					},
				},
				{
					label: "data-2",
					data: demoChart.data[1],
					backgroundColor: demoChart.colors.mainColors[1],
					hoverBackgroundColor: demoChart.colors.activeColors[1],
					borderColor: demoChart.colors.activeColors[1],
					borderWidth: 2,
					datalabels: {
						color: demoChart.colors.activeColors[2],
					},
				},
				{
					label: "data-3",
					data: demoChart.data[2],
					backgroundColor: demoChart.colors.mainColors[2],
					hoverBackgroundColor: demoChart.colors.activeColors[2],
					borderColor: demoChart.colors.activeColors[2],
					borderWidth: 2,
					datalabels: {
						color: demoChart.colors.activeColors[0],
					},
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
