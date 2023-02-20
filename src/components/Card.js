export class Card {
    constructor( data , cardTemplate, openImagePopup) {
        this._cardNameValue = data.name;
        this._cardLinkValue = data.link;
        this._cardTemplate = cardTemplate;
        this._openImagePopup = openImagePopup;
    };

    getCardElement() {
        this._createCard();
        this._setElementListeners();
        this._visualPartCard = this._view;
        return this._visualPartCard;
    };

    _createCard() {
        this._view = this._cardTemplate.cloneNode(true).children[0];
        this.cardImg = this._view.querySelector('.elements__mask-group');
        this.cardText = this._view.querySelector('.elements__element-text');

        this.cardImg.src = this._cardLinkValue;
        this.cardImg.alt = this._cardNameValue;
        this.cardText.textContent = this._cardNameValue;
    };

    _setElementListeners() {
        const elementDel = this._view.querySelector('.elements__trash');
        elementDel.addEventListener('click', () => this._view.remove());

        const elementLike = this._view.querySelector('.elements__group');
        elementLike.addEventListener('click', () => {
            elementLike.classList.toggle('elements__group_active');
        });

        this.cardImg.addEventListener('click', () => {
            this._openImagePopup(this._cardNameValue, this._cardLinkValue);
        }
        );
    };
    
};




