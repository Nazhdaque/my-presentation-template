export class FillTable {
	constructor(tableName, data) {
		this.tableName = tableName;
		this.thead = document.querySelector(`${this.tableName} .tbl-head`);
		this.tbody = document.querySelector(`${this.tableName} .tbl-body`);
		this.tableData = data;
		this.colHeads = data.shift(0);
		this.setClass = i => (i % 2 ? "-even" : "-odd");
	}

	fillThead = () => {
		let cells = ``;

		this.colHeads.forEach(
			(item, i) =>
				(cells += `
					<th class="tbl-heading -col-heading ${this.setClass(i)}" scope="col">
						<span class="ellipsis">${item}</span>
					</th>`)
		);

		return `<tr>${cells}</tr>`;
	};

	fillTbody = () => {
		let rows;

		this.tableData.forEach((item, i) => {
			let cells = `
				<th class="tbl-heading -row-heading ${this.setClass(i)}" scope="row">
					<span class="ellipsis">${item[0]}</span>
				</th>`;

			item.forEach(
				(item, i) =>
					i > 0 &&
					(cells += `
						<td class="tbl-cell" data-cell="${this.colHeads[i]}">
							<span class="ellipsis">${item}</span>
						</td>`)
			);

			const row = `<tr class="tbl-row ${this.setClass(i)}">${cells}</tr>`;
			i === 0 ? (rows = row) : (rows += row);
		});

		return rows;
	};

	fillTable = () => {
		this.thead.innerHTML = this.fillThead();
		this.tbody.innerHTML = this.fillTbody();
	};
}
