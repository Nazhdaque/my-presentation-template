const beforeMsg = "документ прочитан";
const afterMsg = "документ прочитан, ресурсы загружены";

const logMessage = msg =>
	console.log(
		`%cPLARSON test message: ${msg}`,
		`background: #222; color: magenta;`
	);

const completeTest = () => {
	document.onreadystatechange = e => {
		switch (e.target.readyState) {
			case "interactive":
				return logMessage(beforeMsg);
			case "complete":
				return logMessage(afterMsg);
		}
	};
};

completeTest();
