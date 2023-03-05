import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(selector , formSubmitHandler) {
        super(selector);
        this._formSubmitHandler = formSubmitHandler;
        this._form = this._popup.querySelector('.pop-up__form');
        this._formInputs = this._popup.querySelectorAll('.form__input');
        this._formSave = this._form.querySelector('.pop-up__save');
        this._formSaveDefault = this._formSave.textContent;
    }

    loadElement(isLoading, loading = 'Сохранение...') {
        if (isLoading) {
            this._formSave.textContent = loading;
        } else {
            this._formSave.textContent = this._formSaveDefault;
        }
    }

    closePopup() {
        super.closePopup();
        this._form.reset();
    }

    _getInputValues() {
        this._inputValue = {};
        this._formInputs.forEach(input => {
            const name = input.name;
            const value = input.value;
            this._inputValue[name] = value;
        })
        return this._inputValue;
    }

    _handleSubmitForm = (evt) => {
        evt.preventDefault();
        const inputData = this._getInputValues();
        this._formSubmitHandler(inputData);
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._handleSubmitForm);
    }
    
    newFormSubmitHandler(newForm) {
        this._formSubmitHandler = newForm;
    }
}
