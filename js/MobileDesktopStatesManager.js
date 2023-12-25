export class MobileDesktopStatesManager {
	constructor(onMobile, onDesktop) {
		this.onMobile = onMobile;
		this.onDesktop = onDesktop;
	}

	setState = isMobileSize =>
		isMobileSize ? this.onMobile() : this.onDesktop();

	checkState = breakpoint =>
		window.innerWidth <= breakpoint
			? this.setState(true)
			: this.setState(false);

	watchState = breakpoint =>
		window
			.matchMedia(`(max-width: ${breakpoint}px)`)
			.addEventListener("change", e => this.setState(e.matches));

	toggleStateOn = breakpoint => {
		this.checkState(breakpoint);
		this.watchState(breakpoint);
	};
}
