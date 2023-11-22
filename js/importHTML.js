import slide_title from "../html/parts/slide-title-slide.html?raw";
import slide_advantages from "../html/parts/slide-advantages.html?raw";
import slide_grid from "../html/parts/slide-grid-system.html?raw";
import slide_typography from "../html/parts/slide-typography.html?raw";
import slide_cards from "../html/parts/slide-cards.html?raw";
import slide_video from "../html/parts/slide-video.html?raw";
import slide_table from "../html/parts/slide-table.html?raw";
import slide_charts from "../html/parts/slide-charts.html?raw";
import slide_doughnut from "../html/parts/slide-doughnut.html?raw";
import slide_form from "../html/parts/slide-form.html?raw";

import slide_diag_bg from "../html/parts/slide-diag-bg.html?raw";
import slide_trapeze_bg from "../html/parts/slide-trapeze-bg.html?raw";
import slide_blobs_bg from "../html/parts/slide-blobs-bg.html?raw";
import formModal from "../html/parts/form-modal.html?raw";
import sidebar from "../html/parts/sidebar.html?raw";
import slide_plarson from "../html/parts/__plarson.html?raw";

document.querySelector(".sidebar").insertAdjacentHTML("beforeend", sidebar);

const slidesContainer = document.querySelector(".swiper-wrapper");
slidesContainer.insertAdjacentHTML("beforeend", slide_title);
slidesContainer.insertAdjacentHTML("beforeend", slide_advantages);
slidesContainer.insertAdjacentHTML("beforeend", slide_grid);
slidesContainer.insertAdjacentHTML("beforeend", slide_typography);
slidesContainer.insertAdjacentHTML("beforeend", slide_cards);
slidesContainer.insertAdjacentHTML("beforeend", slide_video);
slidesContainer.insertAdjacentHTML("beforeend", slide_table);
slidesContainer.insertAdjacentHTML("beforeend", slide_charts);
slidesContainer.insertAdjacentHTML("beforeend", slide_doughnut);
slidesContainer.insertAdjacentHTML("beforeend", slide_form);
slidesContainer.insertAdjacentHTML("beforeend", slide_trapeze_bg);
slidesContainer.insertAdjacentHTML("beforeend", slide_diag_bg);
slidesContainer.insertAdjacentHTML("beforeend", slide_blobs_bg);
slidesContainer.insertAdjacentHTML("beforeend", slide_plarson);

document
	.querySelector(".form-modal")
	.insertAdjacentHTML("beforeend", formModal);
