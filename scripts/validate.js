const settings = {
    formSelector: '.form',
    inputSelector: '.form__input',
    labelSelector: '.form__section',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_disabled',
    inputErrorClass: '.form__input-error',
    errorClass: 'form__input-error_active',
}

const checkInputValidity = (inputElement, {labelSelector, inputErrorClass, errorClass, ...rest}) => {
    const isValid = inputElement.validity.valid;
    
    const form = inputElement.closest(labelSelector);
    const errorElement = form.querySelector(inputErrorClass);

    if (isValid) {
        hideInputError(errorElement, rest, {errorClass});
    } else {
        showInputError(errorElement, inputElement.validationMessage, { errorClass });
    }
}

const showInputError = (errorElement, errorMessage, { errorClass }) => {
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
}

const hideInputError = (errorElement, errorMessage, { errorClass }) => {
    errorElement.textContent = errorMessage;
    errorElement.classList.remove(errorClass);
}


const toggleButtonState = (inputList, buttonElement, {inactiveButtonClass}) => {
    const hasNotValidInput = inputList.some(inputElement => !inputElement.validity.valid);
    if (hasNotValidInput) {
        disableSubmitButton(buttonElement, { inactiveButtonClass });
    } 
    else {
        buttonElement.removeAttribute('disabled');
        buttonElement.classList.remove(inactiveButtonClass);
    }
}

const disableSubmitButton = (buttonElement, {inactiveButtonClass}) => {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add(inactiveButtonClass);

}

const setEventListenersForm = (formElement, {inputSelector, submitButtonSelector, ...rest}) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);

    toggleButtonState(inputList, buttonElement, rest);

    disableSubmitButton(buttonElement, rest);

    inputList.forEach(inputElement => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(inputElement, rest);
            toggleButtonState(inputList, buttonElement, rest);
        })
    })
}

const enableValidation = (settings) => {
    const formList = document.querySelectorAll(settings.formSelector);

    formList.forEach(formElement => {
        setEventListenersForm(formElement, settings);
})
}
