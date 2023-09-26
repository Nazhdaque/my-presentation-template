export class SizeSetter {
	observer = slaves =>
		new ResizeObserver(masters =>
			masters.forEach(master => {
				const width = master.borderBoxSize[0].inlineSize;
				// const height = master.borderBoxSize[0].blockSize;
				slaves.forEach(slave => (slave.style.maxWidth = `${width}px`));
				// slaves.forEach(slave => (slave.style.height = `${height}px`));
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

// const sizeSetter = new SizeSetter();
// sizeSetter.initWith([
// 	["master-1", "slave-1"],
// 	["master-2", "slave-2"],
// ]);
