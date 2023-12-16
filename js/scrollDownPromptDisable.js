const scrollDownPromptDisable = (scrollContainer, prompt) => {
	const prompts = document.querySelectorAll(`${scrollContainer} ${prompt}`);
	prompts.forEach(el => {
		const container = el.closest(`${scrollContainer}`);
		const handler = () => {
			el.style.display = "none";
			container.removeEventListener("scrollend", handler, { passive: true });
		};
		container.addEventListener("scrollend", handler, { passive: true });
	});
};
scrollDownPromptDisable(".layout-center", ".scroll-down");
