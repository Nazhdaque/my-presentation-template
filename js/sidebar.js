import { html, render } from "lit-html";
import Accordion from "accordion-js";

// const container = document.querySelector(".sidebar");
// const items = [];
// const template = i => html`
// 	<li class="ac sidebar-item">
// 		<h2 class="ac-header sidebar-item__ttl">
// 			<button
// 				class="ac-trigger sidebar-item__btn marker ellipsis-container"
// 				type="button">
// 				<span class="ellipsis">chapter ${i}</span>
// 				<svg class="chevron">
// 					<use href="images/chevron.svg#chevron"></use>
// 				</svg>
// 			</button>
// 		</h2>

// 		<div class="ac-panel">
// 			<ol class="sidebar-item__links">
// 				<li>
// 					<a href="#" class="marker sidebar-item__link ellipsis-container">
// 						<span class="ellipsis"> Lorem ipsum dolor.</span>
// 					</a>
// 				</li>

// 				<li>
// 					<a href="#" class="marker sidebar-item__link ellipsis-container">
// 						<span class="ellipsis">
// 							Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
// 							inventore.
// 						</span>
// 					</a>
// 				</li>

// 				<li>
// 					<a href="#" class="marker sidebar-item__link ellipsis-container">
// 						<span class="ellipsis">
// 							Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
// 							inventore.
// 						</span>
// 					</a>
// 				</li>
// 			</ol>
// 		</div>
// 	</li>
// `;

// for (let i = 0; i <= 19; i++) items.push(template(i + 1));

// render(items, container);

new Accordion(".sidebar", {
	duration: 200,
	showMultiple: true,
});
