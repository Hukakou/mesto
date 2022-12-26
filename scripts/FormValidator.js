export class FormValidator {

    constructor(validationConfig, formElement) {
        this._inputSelector = validationConfig.inputSelector;
        this._labelSelector = validationConfig.labelSelector;
        this._submitButtonSelector = validationConfig.submitButtonSelector;
        this._inactiveButtonClass = validationConfig.inactiveButtonClass;
        this._inputErrorClass = validationConfig.inputErrorClass;
        this._errorClass = validationConfig.errorClass;
        this._formElement = formElement;
     };

    _checkInputValidity = (inputElement) => {
        const isValid = inputElement.validity.valid;
        const form = inputElement.closest(this._labelSelector);
        const errorElement = form.querySelector(this._inputErrorClass);
        if (isValid) {
            this._hideInputError(errorElement);
        } else {
            this._showInputError(errorElement, inputElement.validationMessage);
        }
    };

    _showInputError = (errorElement, errorMessage) => {
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    };

    _hideInputError = (errorElement, errorMessage) => {
        errorElement.textContent = errorMessage;
        errorElement.classList.remove(this._errorClass);
    };

    _toggleButtonState = (inputList, buttonElement) => {
        const hasNotValidInput = inputList.some(inputElement => !inputElement.validity.valid);
        if (hasNotValidInput) {
            this.disableSubmitButton(buttonElement);
        }
        else {
            buttonElement.removeAttribute('disabled');
            buttonElement.classList.remove(this._inactiveButtonClass);
        }
    };

    disableSubmitButton = (buttonElement) => {
        buttonElement.setAttribute('disabled', true);
        buttonElement.classList.add(this._inactiveButtonClass);

    };

    enableValidation = () => {
        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        const buttonElement = this._formElement.querySelector(this._submitButtonSelector);

        this._toggleButtonState(inputList, buttonElement);

        this.disableSubmitButton(buttonElement);

        inputList.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(inputList, buttonElement);
            })
        })
    };
};
