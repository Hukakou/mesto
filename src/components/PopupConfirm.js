import Popup from "./Popup.js";

export default class PopupConfirm extends Popup{
    constructor(selector , formSubmitHandler) {
        super(selector);
        this._formSubmitHandler = formSubmitHandler;
        this._submitBtn = this._popup.querySelector('.pop-up__save');
        console.log(this._formSubmitHandler)
    }

    setEventListeners() {
        super.setEventListeners();
        this._submitBtn.addEventListener('click', () => this._formSubmitHandler(this._cardId, this._cardElemment));
    }

    openPopup(cardId, cardElemment) {
        super.openPopup();
        this._cardId = cardId;
        this._cardElemment = cardElemment;
    }
}