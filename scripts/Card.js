export class Card {
    constructor(cardNameValue, cardLinkValue, template, closeByEscape) {
        this._cardNameValue = cardNameValue;
        this._cardLinkValue = cardLinkValue;
        this._template = template;
        this._closeByEscape = closeByEscape;
    }

    addCard = (cardSection) => {
        this._createCard();
        cardSection.prepend(this._view);
        this._setElementListeners();
    }

    _createCard = () => {
        this._view = this._template.cloneNode(true).children[0];
        this.cardImg = this._view.querySelector('.elements__mask-group');
        this.cardText = this._view.querySelector('.elements__element-text');

        this.cardImg.src = this._cardLinkValue;
        this.cardImg.alt = this._cardNameValue;
        this.cardText.textContent = this._cardNameValue;
    }

    _setElementListeners = () => {
        const elementDel = this._view.querySelector('.elements__trash');
        elementDel.addEventListener('click', () => this._view.remove());

        const elementLike = this._view.querySelector('.elements__group');
        elementLike.addEventListener('click', (event) => {
            const target = event.target;
            target.classList.toggle('elements__group_active');
        })

        const openPopupImage = this._view.querySelector('.elements__mask-group'); 
        openPopupImage.addEventListener('click', (event) => {
            const popupImages = document.querySelector('.popup-img');
            const img = popupImages.querySelector('.pop-up__card-img');
            const imgInfo = popupImages.querySelector('.pop-up__img-info');
            const target = event.target;
            imgInfo.textContent = target.alt || 'Название отсутствует';
            img.src = target.src;
            img.alt = target.alt || 'Изображение не загруженно';
            popupImages.classList.add('pop-up_active');
            document.addEventListener('keyup', this._closeByEscape);
        });
    }
    
}




