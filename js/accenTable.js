export const accenTable = tables => {
	tables.forEach(table => {
		const colHeads = table.querySelectorAll("thead th:not(:first-child)");
		const rowHeads = table.querySelectorAll("tbody th");
		const rows = table.querySelectorAll("tbody tr");

		rows.forEach((row, rowIndex) => {
			const cells = row.querySelectorAll("td");

			cells.forEach((cell, colIndex) => {
				const handleOver = () => {
					colHeads[colIndex].classList.add("clr-accent");
					rowHeads[rowIndex].classList.add("clr-accent");
				};
				const handleOut = () => {
					colHeads[colIndex].classList.remove("clr-accent");
					rowHeads[rowIndex].classList.remove("clr-accent");
				};
				const handleClick = () => cell.classList.toggle("clr-accent");

				const setState = isDesktop => {
					switch (isDesktop) {
						case true:
							cell.addEventListener("mouseover", handleOver);
							cell.addEventListener("mouseout", handleOut);
							cell.addEventListener("click", handleClick);
							break;
						case false:
							cell.removeEventListener("mouseover", handleOver);
							cell.removeEventListener("mouseout", handleOut);
							cell.removeEventListener("click", handleClick);
							break;
					}
				};

				const checkState = breakpoint =>
					window.innerWidth >= breakpoint && setState(true);

				const toggleState = isDesktopSize =>
					isDesktopSize ? setState(true) : setState(false);

				const watchState = breakpoint => {
					const mediaQueryList = window.matchMedia(
						`(min-width: ${breakpoint}px)`
					);
					mediaQueryList.addEventListener("change", event =>
						toggleState(event.matches)
					);
				};

				const turnOffOn = breakpoint => {
					checkState(breakpoint);
					watchState(breakpoint);
				};

				turnOffOn(992);
			});
		});
	});
};
