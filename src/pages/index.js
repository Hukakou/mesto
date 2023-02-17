//import elementstemplate
import { popupCard, popupProfile, nameProfile, openPopupProfile, jobProfile, nameInput, jobInput, validationConfig, initialCards, cardForm, profileForm, cardsSection, cardTemplate, openPopupCard, popupCardImageSelectors } from '../components/constants.js';
import { FormValidator } from "../components/FormValidator.js";
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';


// Класс FormValidator
const cardFormValidator = new FormValidator(validationConfig, cardForm);
cardFormValidator.enableValidation();
const profileFormValidator = new FormValidator(validationConfig, profileForm);
profileFormValidator.enableValidation();

// Класс PopupWithImage
const popupWithImage = new PopupWithImage(popupCardImageSelectors);
function openPopupImage(name, link) {
    popupWithImage.openPopup(name, link);
}

// Класс Card
export function createCard(data) {
    const card = new Card(data, cardTemplate, openPopupImage);
    return card.getCardElement();
};

// Класс Section
const section = new Section({ items: initialCards, renderer: createCard }, cardsSection);
section.renderItems();

function addCard(data) {
    const newCard = createCard(data);
    section.addItem(newCard);
}

// Класс PopupWithForm
const popupEditProfile = new PopupWithForm(popupProfile, submitEditProfile);
const popupAddCard = new PopupWithForm(popupCard, addCard);
function addPostCard() {
    popupAddCard.openPopup();
}

//Класс UserInfo
const userInfo = new UserInfo(nameProfile, jobProfile);
function openPopupEditProfile() {
    profileFormValidator.disableSubmitButtonPublic();
    const info = userInfo.getUserInfo();
    nameInput.value = info.name;
    jobInput.value = info.job;
    popupEditProfile.openPopup();
}

function submitEditProfile(data) {
    userInfo.setUserInfo(data);
}

// Рендер карточки
export function renderCards(visualPartCard) {
    cardsSection.prepend(visualPartCard);
};

//Открытие формы юзера
openPopupProfile.addEventListener('click', openPopupEditProfile);

//дезактивация кнопки отправки формы создания карточки
openPopupCard.addEventListener('click', () => {
    addPostCard();
    cardFormValidator.disableSubmitButtonPublic();
});
