//import elementstemplate
import { popupCard, formElementProfole, formElementCard, cardName, cardLink, validationConfig, initialCards, formList } from './constants.js';
import { closePopup, handleProfileFormSubmit, renderCards, createCard } from "./utils.js";
import { FormValidator } from "./FormValidator.js";

formElementProfole.addEventListener('submit', handleProfileFormSubmit);

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

//Проброс валидации на формы
formList.forEach(formElement => {
  const formValidator = new FormValidator(validationConfig, formElement);
  formValidator.enableValidation();
});