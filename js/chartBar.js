import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { GetCustomPropsValues } from "./getCustomPropsValues";

const brandColors = new GetCustomPropsValues();
const chartColors = brandColors.getValues([
	"--clr-1a",
	"--clr-1b",
	"--clr-2a",
	"--clr-2b",
	"--clr-2c",
]);

//---
class ChartValues {
	constructor(data) {
		this.data = data;
		this.chartColors = [
			{
				mainColor: `hsl(${chartColors[0]}, 0.6)`,
				activeMainColor: `hsl(${chartColors[0]}, 1)`,
				// accentColor: `hsl(${chartColors[1]}, 0.6)`,
				// accentActiveColor: `hsl(${chartColors[1]}, 1)`,
			},
			{
				mainColor: `hsl(${chartColors[1]}, 0.6)`,
				activeMainColor: `hsl(${chartColors[1]}, 1)`,
				// accentColor: `hsl(${chartColors[3]}, 0.6)`,
				// accentActiveColor: `hsl(${chartColors[3]}, 1)`,
			},
			{
				mainColor: `hsl(${chartColors[3]}, 0.6)`,
				activeMainColor: `hsl(${chartColors[3]}, 1)`,
				// accentColor: `hsl(${chartColors[2]}, 0.6)`,
				// accentActiveColor: `hsl(${chartColors[2]}, 1)`,
			},
		];

		this.labels = [];
		this.datasets = [];
		this.maxValues = [];
	}

	getLabels = () => {
		this.labels.push(Object.keys(this.data));
		return this.labels;
	};
	getDatasets = () => {
		const data = Object.values(this.data);
		for (let i = data[0].length; i > 0; i--) {
			const dataItem = [];
			data.forEach(item => dataItem.push(item.shift()));
			this.datasets.push(dataItem);
		}
		return this.datasets;
	};
	getMaxValues = () => {
		this.datasets.forEach(entry => this.maxValues.push(Math.max(...entry)));
		return this.maxValues;
	};
	colorizeChart = () => {
		const mainColors = [];
		const activeColors = [];

		this.datasets.forEach((dataset, index) => {
			const colorsMain = [];
			const colorsActive = [];

			for (const key in dataset) {
				switch (dataset[key]) {
					case this.getMaxValues()[index]:
						const clrMain = this.chartColors[index].accentColor;
						const clrActive = this.chartColors[index].accentActiveColor;

						clrMain && colorsMain.push(clrMain);
						clrActive && colorsActive.push(clrActive);
						break;
					default:
						colorsMain.push(this.chartColors[index].mainColor);
						colorsActive.push(this.chartColors[index].activeMainColor);
				}
			}

			mainColors.push(colorsMain);
			activeColors.push(colorsActive);
		});

		return {
			mainColors: mainColors,
			activeColors: activeColors,
		};
	};

	getValues = () => {
		return {
			labels: this.getLabels(),
			data: this.getDatasets(),
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

// {
// 	"August": [22.95, 17.45, 35.14],
// 	"September": [28.41, 34.91, 41.28],
// 	"November": [61.34, 52.36, 19.76],
// 	"December": [33.66, 31.07, 26.12],
// 	"January": [36.89, 23.39, 37.5],
// 	"February": [24.16, 43.28, 18.28],
// 	"March": [31.74, 25.48, 23.11]
// }
