import { MobileDesktopStatesManager } from "../helpers.js";

export const accenTable = table => {
	const colHeads = table.querySelectorAll(".-col-heading:not(:first-child)");
	const rowHeads = table.querySelectorAll(".-row-heading");
	const rows = table.querySelectorAll(".tbl__row");

	rows.forEach((row, rowIndex) => {
		const cells = row.querySelectorAll(".tbl__cell");

		cells.forEach((cell, colIndex) => {
			const handleOver = () => {
				colHeads[colIndex]?.classList.add("clr-accent");
				rowHeads[rowIndex]?.classList.add("clr-accent");
			};
			const handleOut = () => {
				colHeads[colIndex]?.classList.remove("clr-accent");
				rowHeads[rowIndex]?.classList.remove("clr-accent");
			};
			const handleClick = () => cell.classList.toggle("clr-accent");

			const onMobile = () => {
				cell.removeEventListener("mouseover", handleOver);
				cell.removeEventListener("mouseout", handleOut);
				cell.removeEventListener("click", handleClick);
			};
			const onDesktop = () => {
				cell.addEventListener("mouseover", handleOver);
				cell.addEventListener("mouseout", handleOut);
				cell.addEventListener("click", handleClick);
			};

			const manager = new MobileDesktopStatesManager(onMobile, onDesktop);
			manager.toggleStateOn(992);
		});
	});
};
