export class FillTable {
	constructor(tableName, data) {
		this.tableName = tableName;
		this.thead = document.querySelector(`${this.tableName} thead`);
		this.tbody = document.querySelector(`${this.tableName} tbody`);
		this.tableData = data;
		this.colHeads = data.shift(0);
	}

	fillThead = () => {
		let rowContent = ``;
		this.colHeads.forEach(
			item =>
				(rowContent += `<th scope="col"><p class="ellipsis">${item}</p></th>`)
		);
		return `<tr>${rowContent}</tr>`;
	};

	fillTbody = () => {
		let rows;
		this.tableData.forEach((item, i) => {
			let rowContent = `<th scope="row"><p class="ellipsis">${item[0]}</p></th>`;
			item.forEach(
				(item, i) =>
					i > 0 &&
					(rowContent += `<td data-cell="${this.colHeads[i]}">${item}</td>`)
			);
			i === 0
				? (rows = `<tr>${rowContent}</tr>`)
				: (rows += `<tr>${rowContent}</tr>`);
		});
		return rows;
	};

	fillTable = () => {
		this.thead.innerHTML = this.fillThead();
		this.tbody.innerHTML = this.fillTbody();
	};
}
