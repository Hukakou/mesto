export class Card {
    constructor(data, cardTemplate, openImagePopup, userId, requestDelete, requestLike) {
        this._likes = data.likes;
        this._cardNameValue = data.name;
        this._cardLinkValue = data.link;
        this._id = data._id;
        this._cardOwner = data.owner._id;
        this._userId = userId;
        this._cardTemplate = cardTemplate;
        this._openImagePopup = openImagePopup;
        this._requestDelete = requestDelete;
        this._requestLike = requestLike;
        this._isLiked = data.likes.some((user) => {return user._id === this._userId});
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

    deleteElement = () => {
        this._view.remove();
        this._view = null;
    }

    _setBtnDelete() {
        if (this._cardOwner === this._userId) {
            this._elementDel.addEventListener('click', () => this._requestDelete(this._id));
        } else {
            this._elementDel.remove();
        }
    }

    _setElementListeners() {
        this._elementDel = this._view.querySelector('.elements__trash');
        this._setBtnDelete()

        this._numberOfLikes = this._view.querySelector('.elements__number-of-likes');
        this._elementLike = this._view.querySelector('.elements__group');
        this._likes.length == 0
            ? this._numberOfLikes.textContent = 0
            : this._numberOfLikes.textContent = this._likes.length;
        if (this._isLiked) {
            this._elementLike.classList.toggle('elements__group_active');
        }
        this._elementLike.addEventListener('click', () => {
            this._requestLike(this);
        });

        this.cardImg.addEventListener('click', () => {
            this._openImagePopup(this._cardNameValue, this._cardLinkValue);
        }
        );
    };

    getId() {
        return {
            isLiked: this._isLiked,
            cardId: this._id
        }
    }

    toggleLike(newData) {
        this._isLiked = !this._isLiked;
        if (newData.likes.length == 0) {
            this._numberOfLikes.textContent = 0;
        } else {
            this._numberOfLikes.textContent = newData.likes.length;
        }
        this._elementLike.classList.toggle('elements__group_active');
    }
};




