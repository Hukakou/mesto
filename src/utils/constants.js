// popupsprofileAvatar
export const popupProfile = '.popup-profile';
export const popupCard = '.popup-card';
export const popupAvatar = '.popup-avatar';

// popups open button
export const openPopupProfile = document.querySelector('.profile__edit-button');
export const openPopupCard = document.querySelector('.profile__add-button');
export const openPopupAvatar = document.querySelector('.profile__btn-add-avatar');

// popups form
export const formElementProfole = document.querySelector('.pop-up__form-profile');
export const formElementCard = document.querySelector('.pop-up__form-card');
export const formElementAvatar = document.querySelector('.pop-up__form-avatar');

// popups form inputs
export const nameInput = document.querySelector('.pop-up__user-input_info_name');
export const jobInput = document.querySelector('.pop-up__user-input_info_job');
export const cardName = document.querySelector('.pop-up__user-input_card_name');
export const cardLink = document.querySelector('.pop-up__user-input_card_link');

// profile information
export const nameProfile = document.querySelector('.profile__name-profile');
export const jobProfile = document.querySelector('.profile__subname-profile');
export const profileAvatar = document.querySelector('.profile__avatar');

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
// проверь тут
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