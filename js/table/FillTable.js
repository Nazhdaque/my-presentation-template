export class FillTable {
	constructor(tableName, data) {
		this.tableName = tableName;
		this.thead = document.querySelector(`${this.tableName} .tbl-head`);
		this.tbody = document.querySelector(`${this.tableName} .tbl-body`);
		this.tableData = data;
		this.colHeads = data.shift(0);
	}

	fillThead = () => {
		let rowContent = ``;
		this.colHeads.forEach(
			item =>
				(rowContent += `
					<th class="tbl-heading tbl-column-heading" scope="col">
						<span>${item}</span>
					</th>`)
		);
		return `<tr class="tbl-row">${rowContent}</tr>`;
	};

	fillTbody = () => {
		let rows;
		this.tableData.forEach((item, i) => {
			let rowContent = `
				<th class="tbl-heading tbl-row-heading" scope="row">
					<span>${item[0]}</span>
				</th>`;
			item.forEach(
				(item, i) =>
					i > 0 &&
					(rowContent += `
						<td class="tbl-cell" data-cell="${this.colHeads[i]}">
							<span>${item}</span>
						</td>`)
			);
			i === 0
				? (rows = `<tr class="tbl-row">${rowContent}</tr>`)
				: (rows += `<tr class="tbl-row">${rowContent}</tr>`);
		});
		return rows;
	};

	fillTable = () => {
		this.thead.innerHTML = this.fillThead();
		this.tbody.innerHTML = this.fillTbody();
	};
}
