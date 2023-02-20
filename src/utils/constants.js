// popups
export const popupProfile = '.popup-profile';
export const popupCard = '.popup-card';

// popups open button
export const openPopupProfile = document.querySelector('.profile__edit-button');
export const openPopupCard = document.querySelector('.profile__add-button');

// popups form
export const formElementProfole = document.querySelector('.pop-up__form-profile');
export const formElementCard = document.querySelector('.pop-up__form-card');

// popups form inputs
export const nameInput = document.querySelector('.pop-up__user-input_info_name');
export const jobInput = document.querySelector('.pop-up__user-input_info_job');
export const cardName = document.querySelector('.pop-up__user-input_card_name');
export const cardLink = document.querySelector('.pop-up__user-input_card_link');

// profile information
export const nameProfile = document.querySelector('.profile__name-profile');
export const jobProfile = document.querySelector('.profile__subname-profile');

// element card
export const cardsSection = document.querySelector('.elements');

// Элементы карты 
export const popupCardImageSelectors = {
  popupImages : '.popup-img',
  img : '.pop-up__card-img',
  imgInfo : '.pop-up__img-info',
}

//Class Card
export const cardTemplate = document.querySelector('.elements').content;

//Элемент валидации
// export const formList = document.querySelectorAll('.form');
export const btnCard = document.querySelector('#button-card');
export const cardForm = document.querySelector('.pop-up__form-card');
export const profileForm = document.querySelector('.pop-up__form-profile');

export const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  labelSelector: '.form__section',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: '.form__input-error',
  errorClass: 'form__input-error_active',
  popupInputErrorClass: 'pop-up__input-error',
};

// Добавили начальный контент
export const initialCards = [
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