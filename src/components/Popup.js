export default class Popup{
    constructor(selector) {
        this._popup = document.querySelector(selector);
    };

    openPopup() {
        this._popup.classList.add('pop-up_active');
        document.addEventListener('keyup', this._closeByEscape);
    };

    closePopup(){
        this._popup.classList.remove('pop-up_active');
        document.removeEventListener('keyup', this._closeByEscape);
    };

    _closeByEscape = (evt) => {
        if (evt.key === 'Escape') {
            this.closePopup();
        };
    };

    setEventListeners() {
            this._popup.addEventListener('mousedown', (evt) => {
                if (evt.target.classList.contains('pop-up_active')) {
                    this.closePopup();
                }
                if (evt.target.classList.contains('pop-up__exit')) {
                    this.closePopup();
                }
        });
    };
};