const getExactTime = () =>
	new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000)
		.toISOString()
		.replace(/T/, " ")
		.replace(/\./, "::")
		.replace(/Z/, "ms");

// |||||||||| |||||||||| plarson test starts here |||||||||| ||||||||||
const beforeMsg = "документ прочитан";
const afterMsg = "документ прочитан, ресурсы загружены";

const logMessage = (msg, date) =>
	console.log(
		`%cPLARSON test message: ${date} - ${msg}`,
		`background: #222; color: magenta;`
	);

const completeTest = () => {
	document.onreadystatechange = e => {
		// e.target.readyState === "interactive" &&
		// 	logMessage(beforeMsg, getExactTime());
		// e.target.readyState === "complete" && logMessage(afterMsg, getExactTime());
		switch (e.target.readyState) {
			case "interactive":
				return logMessage(beforeMsg, getExactTime());
			case "complete":
				return logMessage(afterMsg, getExactTime());
		}
	};
};

completeTest();
