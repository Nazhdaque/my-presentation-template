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
			item => (rowContent += `<th scope="col"><span>${item}</span></th>`)
		);
		return `<tr>${rowContent}</tr>`;
	};

	fillTbody = () => {
		let rows;
		this.tableData.forEach((item, i) => {
			let rowContent = `<th scope="row"><span>${item[0]}</span></th>`;
			item.forEach(
				(item, i) =>
					i > 0 &&
					(rowContent += `<td data-cell="${this.colHeads[i]}"><span>${item}</span></td>`)
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
