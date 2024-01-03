export class FillTable {
	constructor(tableName, data) {
		this.tableName = tableName;
		this.thead = document.querySelector(`${this.tableName} thead`);
		this.tbody = document.querySelector(`${this.tableName} tbody`);
		this.tableContent = data;
		this.colHeads = flip => this.tableContent.heads[flip === "flip" ? 1 : 0];
		this.rowHeads = flip => this.tableContent.heads[flip === "flip" ? 0 : 1];
		this.tableData = flip =>
			flip === "flip"
				? this.tableContent.data
				: this.flipArray(this.tableContent.data);
	}

	flipArray = source => {
		const result = [];
		source.forEach(
			(_, i) =>
				i < source[i].length &&
				result.push(
					source.reduce((total, current) => [...total, current[i]], [])
				)
		);
		return result;
	};

	fillThead = flip => {
		let rowContent = `<th scope="col"></th>`;
		this.colHeads(flip).forEach(
			item =>
				(rowContent += `<th scope="col"><p class="ellipsis">${item}</p></th>`)
		);
		return `<tr>${rowContent}</tr>`;
	};

	fillTbody = flip => {
		let rows;
		this.tableData(flip).forEach((item, i) => {
			let row = `<th scope="row"><p class="ellipsis">${
				this.rowHeads(flip)[i]
			}</p></th>`;
			item.forEach(
				(item, i) =>
					(row += `<td data-cell="${this.colHeads(flip)[i]}">${item}</td>`)
			);
			i === 0 ? (rows = `<tr>${row}</tr>`) : (rows += `<tr>${row}</tr>`);
		});
		return rows;
	};

	fillTable = flip => {
		this.thead.innerHTML = this.fillThead(flip);
		this.tbody.innerHTML = this.fillTbody(flip);
	};
}
