import { flipArray } from "./flipArray";

export class ChartValues {
	constructor(data, chartColors) {
		this.data = data;
		this.chartColors = chartColors;
		this.dataLabels = [];
		this.labels = [];
		this.datasets = [];
	}

	getDataLabels = () => {
		this.data.forEach(item => this.dataLabels.push(item.head[0]));
		return this.dataLabels;
	};

	getLabels = () => {
		this.data.forEach(item => this.labels.push(item.head[1]));
		return this.labels;
	};

	getDatasets = () => {
		this.data.forEach(item => this.datasets.push(flipArray(item.data)));
		return this.datasets;
	};

	getColors = () => {
		const basic = [];
		const hover = [];

		this.datasets.forEach(item => {
			item.forEach((_, i) => {
				const basicSet = [];
				const hoverSet = [];

				basicSet.push(this.chartColors.basic[i] ?? this.chartColors.basic[0]);
				hoverSet.push(this.chartColors.hover[i] ?? this.chartColors.hover[0]);

				basic.push(basicSet);
				hover.push(hoverSet);
			});
		});

		return { basic, hover };
	};

	getValues = () => {
		return {
			dataLabels: this.getDataLabels(),
			labels: this.getLabels(),
			data: this.getDatasets(),
			colors: this.getColors(),
		};
	};
}
