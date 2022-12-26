import { popupProfile, popupCard, openPopupProfile, openPopupCard, nameInput, jobInput, nameProfile, jobProfile, cardsSection, validationConfig } from './constants.js';
import { popupImages, img, imgInfo, btnCard } from './constants.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const disableButton = new FormValidator(validationConfig, btnCard);

// Открытие и закрытие попапа через escape
export function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.pop-up_active');
    closePopup(openedPopup);
    };
};

// popups open/close logics
export const openPopup = (popup) => {
    popup.classList.add('pop-up_active');
    document.addEventListener('keyup', closeByEscape);
};

export const closePopup = (popup) => {
    popup.classList.remove('pop-up_active');
    document.removeEventListener('keyup', closeByEscape);
};

function enterUserValue() {
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
    openPopup(popupProfile);
};

openPopupProfile.addEventListener('click', enterUserValue);

openPopupCard.addEventListener('click', () => {
    openPopup(popupCard);
    disableButton.disableSubmitButton(btnCard);
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

// submit информации пользователя
export function handleProfileFormSubmit(event) {
    event.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closePopup(popupProfile);
};


//Развернуть картинику карточки во весь экран
export function openImagePopup(cardName, cardLink) {
    imgInfo.textContent = cardName || 'Название отсутствует';
    img.src = cardLink;
    img.alt = cardName || 'Изображение не загруженно';
    openPopup(popupImages);
};

//Class Card
const cardTemplate = document.querySelector('.elements').content;

//Создание карточки
export function createCard(cardNameValue, cardLinkValue) {
    const card = new Card(cardNameValue, cardLinkValue, cardTemplate, openImagePopup);
    return card.getCardElement();
};

// Рендер карточки
export function renderCards(visualPartCard) {
    cardsSection.prepend(visualPartCard);
};

 