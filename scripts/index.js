// popups
const popupProfile = document.querySelector('.popup-profile');
const popupCard = document.querySelector('.popup-card');

// popups open button
const openPopupProfile = document.querySelector('.profile__edit-button');
const openPopupCard = document.querySelector('.profile__add-button');

//popups form
const formElementProfole = popupProfile.querySelector('.pop-up__form-profile');
const formElementCard = popupCard.querySelector('.pop-up__form-card');

//popups form inputs
const nameInput = document.querySelector('.pop-up__user-input_info_name');
const jobInput = document.querySelector('.pop-up__user-input_info_job');
const cardName = document.querySelector('.pop-up__user-input_card_name');
const cardLink = document.querySelector('.pop-up__user-input_card_link');

// profile information
const nameProfile = document.querySelector('.profile__name-profile');
const jobProfile = document.querySelector('.profile__subname-profile');

//element card
const cardSection = document.querySelector('.elements');

// Открытие и закрытие попапа через escape
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.pop-up_active');
    closePopup(openedPopup);
  }
}

// popups open/close logics
const openPopup = (popup) => {
  popup.classList.add('pop-up_active');
  document.addEventListener('keyup', closeByEscape);
}

const closePopup = (popup) => {
  popup.classList.remove('pop-up_active');
  document.removeEventListener('keyup', closeByEscape);
}

openPopupProfile.addEventListener('click', () => {
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
    openPopup(popupProfile);
})

openPopupCard.addEventListener('click', () => {
  openPopup(popupCard);
  disableButton(settings);
})

// Деактивация кнопки
const disableButton = ({ inactiveButtonClass }) => {
  const btnCard = document.querySelector('#button-card');
  btnCard.setAttribute('disabled', true);
  btnCard.classList.add(inactiveButtonClass);
}

// *Магия* Закрытие попапов через оверлей, либо крестик
 const popups = document.querySelectorAll('.pop-up')
      popups.forEach((popup) => {
          popup.addEventListener('mousedown', (evt) => {
              if (evt.target.classList.contains('pop-up_active')) {
                  closePopup(popup)
              }
              if (evt.target.classList.contains('pop-up__exit')) {
                closePopup(popup)
              }
          })
      })

// submit информации пользователя
function handleProfileFormSubmit(event) {
    event.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
  closePopup(popupProfile);
}

formElementProfole.addEventListener('submit', handleProfileFormSubmit);


// Добавили начальный контент
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 


//Class Card
const template = document.querySelector('.elements').content;

import { Card } from "./Card.js";

initialCards.forEach((el) => {
    const card = new Card(el.name, el.link, template, closeByEscape);
    card.addCard(cardSection);
})

formElementCard.addEventListener('submit', function (event) {
    event.preventDefault();

    const card = new Card(cardName.value, cardLink.value, template, closeByEscape);
    card.addCard(cardSection);

    closePopup(popupCard);

  formElementCard.reset();
});

//Class FormValidator
import { FormValidator } from "./FormValidator.js";

const settings = {
    formSelector: '.form',
    inputSelector: '.form__input',
    labelSelector: '.form__section',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_disabled',
    inputErrorClass: '.form__input-error',
    errorClass: 'form__input-error_active',
}

const formList = document.querySelectorAll('.form');
formList.forEach(formElement => {
    const formValidator = new FormValidator(settings, formElement);
    formValidator.enableValidation();
    })