export class BrandColors {
	constructor() {
		this.brandColors = [];
	}

	getValues = colorNames => {
		colorNames.forEach(colorName =>
			this.brandColors.push(
				getComputedStyle(document.documentElement, null).getPropertyValue(
					colorName
				)
			)
		);
		return this.brandColors;
	};
}
