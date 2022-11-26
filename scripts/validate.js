const selectors = {
    formSelector: '.form',
    inputSelector: '.form__input',
    labelSelector: '.form__section',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_disabled',
    inputErrorClass: '.form__input-error',
    errorClass: 'form__input-error_active',
}

const checkInputValidity = (inputElement) => {
    const isValid = inputElement.validity.valid;

    const form = inputElement.closest(selectors.labelSelector);
    const errorElement = form.querySelector(selectors.inputErrorClass);

    if (isValid) {
        hideInputError(errorElement);
    } else {
        showInputError(errorElement, inputElement.validationMessage);
    }
}

const showInputError = (errorElement, errorMessage) => {
    errorElement.textContent = errorMessage;
    errorElement.classList.add(selectors.errorClass);
}

const hideInputError = (errorElement, errorMessage) => {
    errorElement.textContent = errorMessage;
    errorElement.classList.remove(selectors.errorClass);
}

const toggleButtonState = (inputList, buttonElement) => {
    const hasNotValidInput = inputList.some(inputElement => !inputElement.validity.valid);

    if (hasNotValidInput) { 
        disableSubmitButton(buttonElement);
    } 
    else {
        buttonElement.removeAttribute('disabled');
        buttonElement.classList.remove(selectors.inactiveButtonClass);
    }
}

const disableSubmitButton = (buttonElement) => {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add(selectors.inactiveButtonClass);
}

const setEventListenersForm = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(selectors.inputSelector));
    const buttonElement = formElement.querySelector(selectors.submitButtonSelector);

    toggleButtonState(inputList, buttonElement);

    disableSubmitButton(buttonElement);

    inputList.forEach(inputElement => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(inputElement);
            toggleButtonState(inputList, buttonElement);
        })
    })
}

const enableValidation = () => {
    const formList = document.querySelectorAll(selectors.formSelector);

    formList.forEach(formElement => {
        setEventListenersForm(formElement);
})
}


