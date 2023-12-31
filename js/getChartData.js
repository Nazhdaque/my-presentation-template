import { GetCustomPropsValues } from "./GetCustomPropsValues";

export const getChartData = async url => {
	const responce = await fetch(url);
	const data = await responce.json();
	const values = new ChartValues(data, chartColors);
	return values.getValues();
};

const flipArray = source => {
	const result = [];
	source.forEach(
		(_, i) =>
			i < source[i].length &&
			result.push(source.reduce((total, current) => [...total, current[i]], []))
	);
	return result;
};

const getColors = new GetCustomPropsValues();
const clrValues = getColors.getValues([
	"--clr-1a",
	"--clr-1b",
	"--clr-2a",
	"--clr-2b",
	"--clr-2c",
]);

const chartColors = {
	basic: [
		`hsl(${clrValues[0]}, 0.6)`,
		`hsl(${clrValues[1]}, 0.6)`,
		`hsl(${clrValues[3]}, 0.6)`,
	],
	hover: [
		`hsl(${clrValues[0]}, 1)`,
		`hsl(${clrValues[1]}, 1)`,
		`hsl(${clrValues[3]}, 1)`,
	],
};

class ChartValues {
	constructor(data, chartColors) {
		this.data = data;
		this.chartColors = chartColors;
		this.labels = [];
		this.datasets = [];
	}

	getLabels = () => {
		this.data.forEach(item => this.labels.push(Object.keys(item)));
		return this.labels;
	};

	getDatasets = () => {
		this.data.forEach(item =>
			this.datasets.push(flipArray(Object.values(item)))
		);
		return this.datasets;
	};

	getColors = () => {
		const basic = [];
		const hover = [];

		this.datasets.forEach(item => {
			item.forEach((item, i) => {
				const basicSet = [];
				const hoverSet = [];

				basicSet.push(this.chartColors.basic[i] ?? this.chartColors.basic[0]);
				hoverSet.push(this.chartColors.hover[i] ?? this.chartColors.hover[0]);

				basic.push(basicSet);
				hover.push(hoverSet);
			});
		});

		return {
			basic: basic,
			hover: hover,
		};
	};

	getValues = () => {
		return {
			labels: this.getLabels(),
			data: this.getDatasets(),
			colors: this.getColors(),
		};
	};
}
