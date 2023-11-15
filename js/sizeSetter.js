export class SizeSetter {
	constructor(prop) {
		this.prop = prop;
	}

	observer = slaves =>
		new ResizeObserver(masters =>
			masters.forEach(master => {
				const width = master.borderBoxSize[0].inlineSize;
				const height = master.borderBoxSize[0].blockSize;
				switch (this.prop) {
					case "w":
						slaves.forEach(slave => (slave.style.maxWidth = `${width}px`));
						break;
					case "h":
						slaves.forEach(slave => (slave.style.minHeight = `${height}px`));
						break;
				}
			})
		);

	initWith = relatedItems => {
		relatedItems.forEach(([m, s], i) => {
			const master = document.querySelector(`.${m}`);
			const slaves = document.querySelectorAll(`.${s}`);
			const index = i + 1;

			master && slaves
				? this.observer(slaves).observe(master)
				: console.error(
						`SizeSetter: there is no master-${index} or slave-${index}`
				  );
		});
	};
}
