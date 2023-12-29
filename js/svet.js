import { FetchWrapper } from "./FetchWrapper.js";
import { html, render } from "lit-html";
import { accenTable } from "./accenTable.js";

const container = document.querySelector("#svet-table tbody");
const tableRows = [];
const template = (date = "", total = 0, data = [], sum = []) => html`
	<tr>
		<th scope="row" class="t-align-c">${date}</th>
		<td data-cell="Всего" class="grid-center">${total} ₽</td>
		<td data-cell="К" class="cell-person">
			<div class="cell-item">
				<span>${data[0]} кВт</span>
				<span>${sum[0]} ₽</span>
			</div>
		</td>
		<td data-cell="Л" class="cell-person">
			<div class="cell-item">
				<span>${data[1]} кВт</span>
				<span>${sum[1]} ₽</span>
			</div>
		</td>
		<td data-cell="Б" class="cell-person">
			<div class="cell-item">
				<span>${data[2]} кВт</span>
				<span>${sum[2]} ₽</span>
			</div>
		</td>
	</tr>
`;

const API = new FetchWrapper("");
API.get("svet.json").then(data => {
	const periodData = [];
	const personData = [];
	const personConsum = [];
	const periodConsum = [];
	const totalSum = [];
	const personSum = [];

	data.forEach(item => {
		const data = [];
		for (let i = 0; item.data.length > i; i++) data.push(item.data[i]);
		periodData.push(data);
		totalSum.push(item.total);
	});

	for (let i = 0; i < periodData.length; i++) {
		const data = [];
		periodData.forEach(item => data.push(item[i]));
		personData.push(data);
	}

	personData.forEach(item => {
		const data = [];
		for (let i = 0; i < item.length; i++) {
			const diff = item[i] - item[i - 1];
			data.push(diff ? diff : 0);
		}
		personConsum.push(data);
	});

	for (let i = 0; i < personConsum.length; i++) {
		const data = [];
		personConsum.forEach(item => data.push(item[i]));
		periodConsum.push(data);
	}

	periodConsum.forEach((item, index) => {
		const consum = item.reduce((total, current) => total + current, 0);
		const data = [];
		for (let i = 0; i < periodConsum[index].length; i++) {
			const sum = Number.parseFloat(
				((periodConsum[index][i] / consum) * totalSum[index]).toFixed(2)
			);
			data.push(sum ? sum : 0);
		}
		personSum.push(data);
	});

	data.forEach((item, i) =>
		tableRows.push(template(item.date, item.total, item.data, personSum[i]))
	);

	render(tableRows.reverse(), container);
	accenTable(document.querySelectorAll("table"));
});
