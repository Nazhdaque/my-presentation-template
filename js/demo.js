export class Demo {
	constructor() {
		this.deg = this.getRandomBetween();
	}

	getElements = selector => document.querySelectorAll(selector);

	setClass = (cls = "xxx", selector = ".demo > *") =>
		this.getElements(selector).forEach(element => element.classList.add(cls));

	getRandomBetween = (min = 0, max = 360) =>
		Math.floor(Math.random() * (max - min + 1)) + min;

	setColor = () =>
		document.styleSheets[0].cssRules[23].cssRules[0].style.setProperty(
			"--clr-shift",
			this.deg
		);

	getInfo = () => console.log("hue color shift =", this.deg + `°`);
}
