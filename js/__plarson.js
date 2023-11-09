// --- PLARSON
const logMessage = () =>
	console.log(
		"%cPLARSON test message: страница полностью загружена",
		"background: #222; color: magenta;"
	);

const completeTest = () => {
	document.onreadystatechange = () => {
		document.readyState === "complete" && logMessage();
	};
};

completeTest();
