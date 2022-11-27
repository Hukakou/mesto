const settings = {
    formSelector: '.form',
    inputSelector: '.form__input',
    labelSelector: '.form__section',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_disabled',
    inputErrorClass: '.form__input-error',
    errorClass: 'form__input-error_active',
}

const checkInputValidity = (inputElement, {labelSelector, inputErrorClass}) => {
    const isValid = inputElement.validity.valid;

    const form = inputElement.closest(labelSelector);
    const errorElement = form.querySelector(inputErrorClass);

    if (isValid) {
        hideInputError(errorElement, settings);
    } else {
        showInputError(errorElement, inputElement.validationMessage, settings);
    }
}

const showInputError = (errorElement, errorMessage, { errorClass }) => {
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
}

// Тут костыль ввиде (settings.errorClass). Никак не могу докинуть errorClass,
// пробовал всё и вся...
const hideInputError = (errorElement, errorMessage) => {
    errorElement.textContent = errorMessage;
    errorElement.classList.remove(settings.errorClass);
    
}


const toggleButtonState = (inputList, buttonElement, {inactiveButtonClass}) => {
    const hasNotValidInput = inputList.some(inputElement => !inputElement.validity.valid);

    if (hasNotValidInput) { 
        disableSubmitButton(buttonElement, settings);
    } 
    else {
        buttonElement.removeAttribute('disabled');
        buttonElement.classList.remove(inactiveButtonClass);
    }
}

const disableSubmitButton = (buttonElement, { inactiveButtonClass}) => {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add(inactiveButtonClass);
}

const setEventListenersForm = (formElement, {inputSelector, submitButtonSelector}) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    

    toggleButtonState(inputList, buttonElement, settings);

    disableSubmitButton(buttonElement, settings);

    inputList.forEach(inputElement => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(inputElement, settings);
            toggleButtonState(inputList, buttonElement, settings);
        })
    })
}

const enableValidation = ({formSelector}) => {
    const formList = document.querySelectorAll(formSelector);
    formList.forEach(formElement => {
        setEventListenersForm(formElement, settings);
})
}


