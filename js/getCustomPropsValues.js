export class GetCustomPropsValues {
	constructor() {
		this.props = [];
	}

	getValues = props => {
		props.forEach(prop =>
			this.props.push(
				getComputedStyle(document.documentElement, null).getPropertyValue(prop)
			)
		);
		return this.props;
	};
}
