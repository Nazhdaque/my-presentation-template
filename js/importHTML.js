import sidebarContent from "../html/parts/sidebar.html?raw";
import slide_1 from "../html/parts/slide-1.html?raw";
import slide_2 from "../html/parts/slide-2.html?raw";
import slide_3 from "../html/parts/slide-3.html?raw";
import slide_4 from "../html/parts/slide-4.html?raw";
import slide_5 from "../html/parts/slide-5.html?raw";
import slide_6 from "../html/parts/slide-6.html?raw";
import slide_7 from "../html/parts/slide-7.html?raw";
import slide_8 from "../html/parts/slide-8.html?raw";
import slide_9 from "../html/parts/slide-9.html?raw";
import slide_10 from "../html/parts/slide-10.html?raw";
import slide_11 from "../html/parts/slide-11.html?raw";
import slide_12 from "../html/parts/slide-12.html?raw";
import slide_13 from "../html/parts/slide-13.html?raw";
import slide_14 from "../html/parts/slide-14.html?raw";

// import modalContent from "../html/parts/modal.html?raw";

const sidebar = document.querySelector(".sidebar");
sidebar.insertAdjacentHTML("beforeend", sidebarContent);

const slidesContainer = document.querySelector(".swiper-wrapper");
slidesContainer.insertAdjacentHTML("beforeend", slide_1);
slidesContainer.insertAdjacentHTML("beforeend", slide_2);
slidesContainer.insertAdjacentHTML("beforeend", slide_3);
slidesContainer.insertAdjacentHTML("beforeend", slide_4);
slidesContainer.insertAdjacentHTML("beforeend", slide_5);
slidesContainer.insertAdjacentHTML("beforeend", slide_6);
slidesContainer.insertAdjacentHTML("beforeend", slide_7);
slidesContainer.insertAdjacentHTML("beforeend", slide_8);
slidesContainer.insertAdjacentHTML("beforeend", slide_9);
slidesContainer.insertAdjacentHTML("beforeend", slide_10);
slidesContainer.insertAdjacentHTML("beforeend", slide_11);
slidesContainer.insertAdjacentHTML("beforeend", slide_12);
slidesContainer.insertAdjacentHTML("beforeend", slide_13);
// slidesContainer.insertAdjacentHTML("beforeend", slide_14);

// const modal = document.querySelector(".modal");
// modal.insertAdjacentHTML("beforeend", modalContent);
