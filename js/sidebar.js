// disabled: lit-html - del, Accordion - del

// import { html, render } from "lit-html";
// import Accordion from "accordion-js";

// const container = document.querySelector(".sidebar");
// const items = [];
// const template = i => html`
// 	<li class="sidebar-item">
// 		<h2 class="ac-header sidebar-item__ttl">
// 			<button
// 				class="sidebar-item__btn marker ellipsis-box slide-to"
// 				type="button">
// 				<span class="ellipsis">Пустая ссылка</span>
// 				<svg class="chevron chevron-right">
// 					<use href="images/icons/chevron.svg#chevron"></use>
// 				</svg>
// 			</button>
// 		</h2>
// 	</li>
// `;

// for (let i = 0; i <= 3; i++) items.push(template(i + 1));

// render(items, container);

// new Accordion(".sidebar", {
// 	duration: 200,
// 	showMultiple: true,
// });

const sidebar = document.querySelector(".sidebar");
const sidebarToggle = document.querySelector(".sidebar-toggle");
let sidebarTimerId = null;

sidebarToggle.addEventListener("click", () => {
	sidebarToggle.classList.toggle("active");

	if (sidebar.classList.contains("isOpen")) {
		sidebar.classList.remove("isOpen");
		clearTimeout(sidebarTimerId);
	} else {
		sidebar.style.display = "initial";
		sidebarTimerId = setTimeout(
			() => requestAnimationFrame(() => sidebar.classList.add("isOpen")),
			0.1
		);
	}
});

sidebar.addEventListener(
	"transitionend",
	() =>
		!sidebar.classList.contains("isOpen") && (sidebar.style.display = "none")
);
