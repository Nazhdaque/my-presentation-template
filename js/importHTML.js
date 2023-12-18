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
import slide_snake_list from "../html/parts/slide-snake-list.html?raw";
import slide_yandex_map from "../html/parts/slide-yandex-map.html?raw";
import slide_diamonds_bg from "../html/parts/slide-diamonds-bg.html?raw";
import slide_stripes_rubik_bg from "../html/parts/slide-stripes-rubik-bg.html?raw";
import formModal from "../html/parts/form-modal.html?raw";
import sidebar from "../html/parts/sidebar.html?raw";

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
slidesContainer.insertAdjacentHTML("beforeend", slide_yandex_map);
slidesContainer.insertAdjacentHTML("beforeend", slide_snake_list);
slidesContainer.insertAdjacentHTML("beforeend", slide_diamonds_bg);
slidesContainer.insertAdjacentHTML("beforeend", slide_stripes_rubik_bg);

document
	.querySelector(".form-modal")
	.insertAdjacentHTML("beforeend", formModal);
