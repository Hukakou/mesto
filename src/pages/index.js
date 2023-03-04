//import elementstemplatevalidationConfig
import { popupCard, popupProfile, profileAvatar, popupAvatar, nameProfile, openPopupProfile, openPopupAvatar, jobProfile, nameInput, jobInput, validationConfig, cardForm, formElementAvatar, profileForm, cardsSection, cardTemplate, openPopupCard, popupCardImageSelectors } from '../utils/constants.js';
import { FormValidator } from "../components/FormValidator.js";
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
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
        userInfo.getUserId();
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
// section.renderItems();

function addCard(data) {
    popupAddCard.loadElement(true);
    api.addCard(data.name, data.link)
        .then((res) => {
            const newCard = createCard(res);
            console.log(newCard);
            section.addItem(newCard);
        })
        .catch((err) => { console.log(err) })
        .finally(() => {popupAddCard.loadElement(false);})
    // const newCard = createCard(data);
    // section.addItem(newCard);
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

const popupDelete = new PopupWithForm('.popup-delete-card');
popupDelete.setEventListeners();

//Класс UserInfo
const userInfo = new UserInfo(nameProfile, jobProfile, profileAvatar);
function openPopupEditProfile() {
    profileFormValidator.disableSubmitButtonPublic();
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
        .finally(() => {popupEditProfile.loadElement(false)})
}

function submitEditAvatar(data) {
    popupEditAvatar.loadElement(true);
    api.patchProfileAvatar(data.link)
        .then((data => {
            console.log(data);
            userInfo.setUserInfo(data);
            popupEditAvatar.closePopup()
        }))
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {popupEditAvatar.loadElement(false);})
}

// Класс Card
export function createCard(data) {
    const card = new Card(data, cardTemplate, openPopupImage, userInfo.getUserId(), (id) => {
        popupDelete.openPopup();
        popupDelete.newFormSubmitHandler(() => {
            api.deleteCard(id).then((res) => {
                popupDelete.closePopup();
                card.deleteElement();
            })
                .catch((err) => { console.log(err); })
        })
    }, (cardIns) => {
        const attrs = cardIns.getId();
        if (attrs.isLiked) {
            api.deleteLikeCard(attrs.cardId)
                .then((res) => {
                    cardIns.toggleLike(res);
            })
                .catch((err) => {
                    console.log(err);
            })
        } else {
            api.addLikeCard(attrs.cardId)
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

//
// fetch('https://mesto.nomoreparties.co/v1/cohort-60/users/me', {
//   headers: {
//     authorization: '885318d6-d19f-4157-94c3-3c974e90ff3d'
//   }
// })
//   .then(res => res.json())
//   .then((result) => {
//     console.log(result);
//   }); 
//

//Открытие формы юзера
openPopupProfile.addEventListener('click', openPopupEditProfile);

//дезактивация кнопки отправки формы создания карточки
openPopupCard.addEventListener('click', () => {
    openCardPopup();
    cardFormValidator.disableSubmitButtonPublic();
});

//Открытие формы редактирования аватарки
openPopupAvatar.addEventListener('click', () => {
    openAvatarPopup();
    avatarFormValidator.disableSubmitButtonPublic();
});
