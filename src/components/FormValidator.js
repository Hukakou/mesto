export class FormValidator {

    constructor(validationConfig, formElement) {
        this._inputSelector = validationConfig.inputSelector;
        this._labelSelector = validationConfig.labelSelector;
        this._submitButtonSelector = validationConfig.submitButtonSelector;
        this._inactiveButtonClass = validationConfig.inactiveButtonClass;
        this._inputErrorClass = validationConfig.inputErrorClass;
        this._errorClass = validationConfig.errorClass;
        this._popupInputErrorClass = validationConfig.popupInputErrorClass;
        this._formElement = formElement;
     };

    _checkInputValidity = (inputElement) => {
        this._isValid = inputElement.validity.valid;
        this._form = inputElement.closest(this._labelSelector);
        this._inputError = this._form.querySelector(this._inputSelector);
        this._errorElement = this._form.querySelector(this._inputErrorClass);
        if (this._isValid) {
            this._hideInputError();
        } else {
            this._showInputError(inputElement.validationMessage);
        }
    };

    _showInputError = (errorMessage) => {
        this._errorElement.textContent = errorMessage;
        this._errorElement.classList.add(this._errorClass);
        this._inputError.classList.add(this._popupInputErrorClass);
    };

    _hideInputError = (errorMessage) => {
        this._errorElement.textContent = errorMessage;
        this._errorElement.classList.remove(this._errorClass);
        this._inputError.classList.remove(this._popupInputErrorClass);
    };

    _toggleButtonState = () => {
        this._hasNotValidInput = this._inputList.some(inputElement => !inputElement.validity.valid);
        if (this._hasNotValidInput) {
            this._disableSubmitButton();
        }
        else {
            this._buttonElement.removeAttribute('disabled');
            this._buttonElement.classList.remove(this._inactiveButtonClass);
        }
    };

    _disableSubmitButton = () => {
        this._buttonElement.setAttribute('disabled', true);
        this._buttonElement.classList.add(this._inactiveButtonClass);
    };

    resetValidation = () => {
        this._disableSubmitButton();
        this._inputList.forEach((inputElement) => {
            const error = inputElement.parentNode.querySelector(this._inputErrorClass);
            error.classList.remove(this._errorClass);
            inputElement.classList.remove(this._popupInputErrorClass);
        })
    };

    enableValidation = () => {
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);

        this._toggleButtonState();

        this._disableSubmitButton();

        this._inputList.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            })
        })
    };
};
