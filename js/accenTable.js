import { MobileDesktopStatesManager } from "./MobileDesktopStatesManager.js";

export const accenTable = table => {
	const colHeads = table.querySelectorAll("thead th:not(:first-child)");
	const rowHeads = table.querySelectorAll("tbody th");
	const rows = table.querySelectorAll("tbody tr");

	rows.forEach((row, rowIndex) => {
		const cells = row.querySelectorAll("td");

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
			manager.toggleStateOn(1200);
		});
	});
};
