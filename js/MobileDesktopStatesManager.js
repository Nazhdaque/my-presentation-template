export class MobileDesktopStatesManager {
	constructor(onMobile, onDesktop) {
		this.onMobile = onMobile;
		this.onDesktop = onDesktop;
	}

	setState = isMobileSize =>
		isMobileSize ? this.onMobile() : this.onDesktop();
	chooseState = isMobileSize => this.setState(isMobileSize);
	checkState = breakpoint => {
		window.innerWidth <= breakpoint
			? this.setState(true)
			: this.setState(false);
	};
	watchState = breakpoint => {
		const mediaQueryList = window.matchMedia(`(max-width: ${breakpoint}px)`);
		mediaQueryList.addEventListener("change", event =>
			this.chooseState(event.matches)
		);
	};
	toggleStateOn = breakpoint => {
		this.checkState(breakpoint);
		this.watchState(breakpoint);
	};
}
