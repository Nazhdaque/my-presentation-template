import { GetCustomPropsValues } from "./GetCustomPropsValues";

export const getChartData = async url => {
	const responce = await fetch(url);
	const data = await responce.json();
	const values = new ChartValues(data, chartColors);
	return values.getValues();
};

const clrProps = new GetCustomPropsValues();
const clrValues = clrProps.getValues([
	"--clr-1a",
	"--clr-1b",
	"--clr-2a",
	"--clr-2b",
	"--clr-2c",
]);

const chartColors = [
	{
		basicColor: `hsl(${clrValues[0]}, 0.6)`,
		hoverColor: `hsl(${clrValues[0]}, 1)`,
	},
	{
		basicColor: `hsl(${clrValues[1]}, 0.6)`,
		hoverColor: `hsl(${clrValues[1]}, 1)`,
	},
	{
		basicColor: `hsl(${clrValues[3]}, 0.6)`,
		hoverColor: `hsl(${clrValues[3]}, 1)`,
	},
];

class ChartValues {
	constructor(data, chartColors) {
		this.data = data;
		this.chartColors = chartColors;
		this.labels = [];
		this.datasets = [];
		this.maxValues = [];
	}

	getLabels = () => {
		this.data.forEach(item => this.labels.push(Object.keys(item)));
		return this.labels;
	};
	getDatasets = () => {
		this.data.forEach(item => {
			const datasetArray = [];
			for (const key in item) {
				for (let i = item[key].length; i > 0; i--) {
					const dataset = [];
					Object.values(item).forEach(item => dataset.push(item.shift()));
					datasetArray.push(dataset);
				}
			}
			this.datasets.push(datasetArray);
		});
		return this.datasets;
	};
	colorizeChart = () => {
		const basicColors = [];
		const hoverColors = [];

		this.datasets.forEach(datasetArray => {
			datasetArray.forEach((dataset, index) => {
				const basicColorSet = [];
				const hoverColorSet = [];

				basicColorSet.push(
					this.chartColors[index]?.basicColor ?? this.chartColors[0].basicColor
				);
				hoverColorSet.push(
					this.chartColors[index]?.hoverColor ?? this.chartColors[0].hoverColor
				);

				basicColors.push(basicColorSet);
				hoverColors.push(hoverColorSet);
			});
		});

		return {
			basicColors: basicColors,
			hoverColors: hoverColors,
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
