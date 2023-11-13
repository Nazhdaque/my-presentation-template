import { html, render } from "lit-html";
import Accordion from "accordion-js";

const container = document.querySelector(".sidebar");
const items = [];
const template = i => html`
	<li class="sidebar-item">
		<h2 class="ac-header sidebar-item__ttl">
			<button
				class="sidebar-item__btn marker ellipsis-box slide-to"
				type="button">
				<span class="ellipsis">Перейти к слайду</span>
				<svg class="chevron chevron-right">
					<use href="images/icons/chevron.svg#chevron"></use>
				</svg>
			</button>
		</h2>
	</li>
`;

for (let i = 0; i <= 16; i++) items.push(template(i + 1));

render(items, container);

new Accordion(".sidebar", {
	duration: 200,
	showMultiple: true,
});
