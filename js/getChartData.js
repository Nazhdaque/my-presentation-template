import { GetCustomPropsValues } from "./getCustomPropsValues";

export const getChartData = async url => {
	const responce = await fetch(url);
	const data = await responce.json();
	const values = new ChartValues(data);
	return values.getValues();
};

const brandColors = new GetCustomPropsValues();
const chartColors = brandColors.getValues([
	"--clr-1a",
	"--clr-1b",
	"--clr-2a",
	"--clr-2b",
	"--clr-2c",
]);

class ChartValues {
	constructor(data) {
		this.data = data;
		this.chartColors = [
			{
				basicColor: `hsl(${chartColors[0]}, 0.6)`,
				hoverColor: `hsl(${chartColors[0]}, 1)`,
			},
			{
				basicColor: `hsl(${chartColors[1]}, 0.6)`,
				hoverColor: `hsl(${chartColors[1]}, 1)`,
			},
			{
				basicColor: `hsl(${chartColors[3]}, 0.6)`,
				hoverColor: `hsl(${chartColors[3]}, 1)`,
			},
		];

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

				basicColorSet.push(this.chartColors[index].basicColor);
				hoverColorSet.push(this.chartColors[index].hoverColor);

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
