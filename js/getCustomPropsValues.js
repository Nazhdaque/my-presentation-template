export class GetCustomPropsValues {
	constructor() {
		this.values = [];
	}

	getValues = props => {
		props.forEach(prop =>
			this.values.push(
				getComputedStyle(document.documentElement, null).getPropertyValue(prop)
			)
		);
		return this.values;
	};
}
