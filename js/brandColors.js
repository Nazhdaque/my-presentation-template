export class BrandColors {
	constructor() {
		this.brandColors = [];
	}

	getValues = colorNames => {
		colorNames.forEach(colorName =>
			this.brandColors.push(
				`hsl(${getComputedStyle(
					document.documentElement,
					null
				).getPropertyValue(colorName)})`
			)
		);
		return this.brandColors;
	};
}
