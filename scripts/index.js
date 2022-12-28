//import elementstemplate
import { popupCard, formElementProfole, formElementCard, cardName, cardLink, validationConfig, initialCards, cardForm, profileForm, cardsSection, cardTemplate, openPopupProfile, openPopupCard } from './constants.js';
import { handleProfileFormSubmit, openImagePopup, openProfilePopup, closeByEscape } from "./utils.js";
import { FormValidator } from "./FormValidator.js";
import { Card } from './Card.js';

// Создать новые классы валидации форм
const cardFormValidator = new FormValidator(validationConfig, cardForm);
cardFormValidator.enableValidation();
const profileFormValidator = new FormValidator(validationConfig, profileForm);
profileFormValidator.enableValidation();

//Создание карточек
export function createCard(cardNameValue, cardLinkValue) {
    const card = new Card(cardNameValue, cardLinkValue, cardTemplate, openImagePopup);
    return card.getCardElement();
};

// Рендер карточки
export function renderCards(visualPartCard) {
    cardsSection.prepend(visualPartCard);
};

//Проброс начальных карточек
initialCards.forEach((el) => {
    renderCards(createCard(el.name, el.link));
});

//Добавление карточек через submit
formElementCard.addEventListener('submit', function (event) {
    event.preventDefault();
    renderCards(createCard(cardName.value, cardLink.value));
    closePopup(popupCard);
    formElementCard.reset();
});

// submit данных профиля
formElementProfole.addEventListener('submit', handleProfileFormSubmit);

// popups open/close logics
export const openPopup = (popup) => {
    popup.classList.add('pop-up_active');
    document.addEventListener('keyup', closeByEscape);
};

export const closePopup = (popup) => {
    popup.classList.remove('pop-up_active');
    document.removeEventListener('keyup', closeByEscape);
};

//Открытие формы юзера
openPopupProfile.addEventListener('click', openProfilePopup);

//дезактивация кнопки отправки формы создания карточки
openPopupCard.addEventListener('click', () => {
    openPopup(popupCard);
    cardFormValidator.disableSubmitButtonPublic();
});

// *Магия* Закрытие попапов через оверлей, либо крестик
export const popups = document.querySelectorAll('.pop-up')
popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('pop-up_active')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('pop-up__exit')) {
            closePopup(popup)
        }
    })
});
