//import elementstemplatevalidationConfig
import { popupCard, popupProfile, profileAvatar, popupAvatar, nameProfile, openPopupProfile, openPopupAvatar, jobProfile, nameInput, jobInput, validationConfig, cardForm, formElementAvatar, profileForm, cardsSection, cardTemplate, openPopupCard, popupCardImageSelectors } from '../utils/constants.js';
import { FormValidator } from "../components/FormValidator.js";
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupConfirm from '../components/PopupConfirm.js';
import './index.css';

//Класс Api
const api = new Api({
    baseUrl: 'https://nomoreparties.co/v1/cohort-60/',
    headers: {
        authorization: '885318d6-d19f-4157-94c3-3c974e90ff3d',
        'Content-Type': 'application/json'
    }
});

Promise.all([api.getProfileInfo(), api.getCards()])
    .then(([userData, cards]) => {
        userInfo.setUserInfo(userData);
        section.renderItems(cards);
    })
    .catch((err) => {
        console.log(err);
    })

// Класс FormValidator
const cardFormValidator = new FormValidator(validationConfig, cardForm);
cardFormValidator.enableValidation();
const profileFormValidator = new FormValidator(validationConfig, profileForm);
profileFormValidator.enableValidation();
const avatarFormValidator = new FormValidator(validationConfig, formElementAvatar);
avatarFormValidator.enableValidation();

// Класс PopupWithImage
const popupWithImage = new PopupWithImage(popupCardImageSelectors);
function openPopupImage(name, link) {
    popupWithImage.openPopup(name, link);
};
popupWithImage.setEventListeners();

// Класс Section
const section = new Section({ renderer: createCard }, cardsSection);

function addCard(data) {
    popupAddCard.loadElement(true);
    api.addCard(data.name, data.link)
        .then((res) => {
            const newCard = createCard(res);
            section.addItem(newCard);
            popupAddCard.closePopup();
        })
        .catch((err) => { console.log(err) })
        .finally(() => {
            popupAddCard.loadElement(false);        
        })
}

// Класс PopupWithForm
const popupEditProfile = new PopupWithForm(popupProfile, submitEditProfile);
popupEditProfile.setEventListeners();

const popupAddCard = new PopupWithForm(popupCard, addCard);
popupAddCard.setEventListeners();
function openCardPopup() {
    popupAddCard.openPopup();
}

const popupEditAvatar = new PopupWithForm(popupAvatar, submitEditAvatar);
popupEditAvatar.setEventListeners();
function openAvatarPopup() {
    popupEditAvatar.openPopup();
}

const popupDelete = new PopupConfirm('.popup-delete-card', submitHandlerDel);
popupDelete.setEventListeners();

function submitHandlerDel(id, card) {
    api.deleteCard(id).then((res) => {
        card.remove();
        popupDelete.closePopup();
    })
        .catch((err) => { console.log(err); });
};

function requestDelete(cardId, cardElemment) {
    popupDelete.openPopup(cardId, cardElemment)
}

//Класс UserInfo
const userInfo = new UserInfo(nameProfile, jobProfile, profileAvatar);
function openPopupEditProfile() {
    profileFormValidator.resetValidation();
    const info = userInfo.getUserInfo();
    nameInput.value = info.name;
    jobInput.value = info.job;
    popupEditProfile.openPopup();
}

function submitEditProfile(data) {
    popupEditProfile.loadElement(true);
    api.patchProfileInfo(data.name, data.job)
        .then((data) => {
            userInfo.setUserInfo(data);
        })
        .catch((err) => { console.log(err) })
        .finally(() => {
            popupEditProfile.loadElement(false);
            popupEditProfile.closePopup();
        })
}

function submitEditAvatar(data) {
    popupEditAvatar.loadElement(true);
    api.patchProfileAvatar(data.link)
        .then((data => {
            console.log(data);
            userInfo.setUserInfo(data);
        }))
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            popupEditAvatar.loadElement(false);
            popupEditAvatar.closePopup()
        })
}

// Класс Card
export function createCard(data) {
    const card = new Card(data, cardTemplate, openPopupImage, userInfo.getUserId(), requestDelete, (cardIns) => {
        const cardIdElement = cardIns.getId();
        if (cardIdElement.isLiked) {
            api.deleteLikeCard(cardIdElement.cardId)
                .then((res) => {
                    cardIns.toggleLike(res);
            })
                .catch((err) => {
                    console.log(err);
            })
        } else {
            api.addLikeCard(cardIdElement.cardId)
                .then((res) => {
                    cardIns.toggleLike(res);
            })
                .catch((err) => {
                    console.log(err);
            })
        }
    });
    return card.getCardElement();
};

//Открытие формы юзера
openPopupProfile.addEventListener('click', openPopupEditProfile);

//дезактивация кнопки отправки формы создания карточки
openPopupCard.addEventListener('click', () => {
    openCardPopup();
    cardFormValidator.resetValidation();
});

//Открытие формы редактирования аватарки
openPopupAvatar.addEventListener('click', () => {
    openAvatarPopup();
    avatarFormValidator.resetValidation();
});
