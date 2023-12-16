const mail = document.querySelector(`[href="mailto:nospam@google.com"]`);
let mailTimerId = null;
const setEmail = () =>
	mail.setAttribute("href", "mailto:KrivoshlykovNN@yandex.ru");
const setProxiEmail = () =>
	mail.setAttribute("href", "mailto:nospampls@google.com");
const handleEmailClick = () => {
	clearTimeout(mailTimerId);
	setEmail();
	mailTimerId = setTimeout(setProxiEmail, 1);
};
mail.addEventListener("click", handleEmailClick);
