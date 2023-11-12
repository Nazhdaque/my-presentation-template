import JustValidate from "just-validate";

const elements = {
	form: document.querySelector("#sign-up-form"),
	input: document.querySelector("#email"),
	btn: document.querySelector("#submit-form"),
	modal: document.querySelector(".form-modal"),
	userEmail: document.querySelector(".user-email"),
};

const messages = {
	emptyMessage: "Заполните это поле",
	errorMessage: "Некорректный email",
	successMessage: "Успешно",
};

const cssClasses = {
	fields: {
		success: "success-field",
		error: "error-field",
	},
	labels: {
		general: "labels",
		success: "success-label",
		error: "error-label",
	},
	modifiers: {
		granted: "unlocked",
		denied: "locked",
	},
};

const validator = new JustValidate(elements.form, {
	successFieldCssClass: [cssClasses.fields.success],
	errorFieldCssClass: [cssClasses.fields.error],
	successLabelCssClass: [cssClasses.labels.general, cssClasses.labels.success],
	errorLabelCssClass: [cssClasses.labels.general, cssClasses.labels.error],
	validateBeforeSubmitting: true,
});

validator.addField(
	elements.input,
	[
		{ rule: "required", errorMessage: messages.emptyMessage },
		{ rule: "email", errorMessage: messages.errorMessage },
	],
	{ successMessage: messages.successMessage }
);

class FormEventsHandler {
	constructor(elements, cssClasses) {
		this.form = elements.form;
		this.input = elements.input;
		this.btn = elements.btn;
		this.modal = elements.modal;
		this.userEmail = elements.userEmail;
		this.cssClasses = cssClasses;
	}

	unlockSubmitBtn = () => {
		this.btn.classList.replace(
			this.cssClasses.modifiers.denied,
			this.cssClasses.modifiers.granted
		);
	};

	lockSubmitBtn = () => {
		this.btn.classList.replace(
			this.cssClasses.modifiers.granted,
			this.cssClasses.modifiers.denied
		);
	};

	getState = () =>
		this.input.classList.contains(this.cssClasses.fields.success);

	handleInputChange = () =>
		this.getState() ? this.unlockSubmitBtn() : this.lockSubmitBtn();

	removeSuccessLabel = () =>
		document.querySelector(`.${this.cssClasses.labels.success}`).remove();

	clearInput = () => (this.input.value = "");

	insertUserEmail = () => (this.userEmail.textContent = this.input.value);

	restoreInitialState = () => {
		this.clearInput();
		this.removeSuccessLabel();
		this.lockSubmitBtn();
	};

	handleFormSubmit = e => {
		if (this.getState()) {
			e.preventDefault();
			this.insertUserEmail();
			this.modal.showModal();
			this.restoreInitialState();
		}
	};

	init = () => {
		this.input.addEventListener("input", this.handleInputChange);
		this.form.addEventListener("submit", this.handleFormSubmit);
	};
}

const formHandler = new FormEventsHandler(elements, cssClasses);
formHandler.init();
