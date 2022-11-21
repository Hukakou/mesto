// popups
const popupProfile = document.querySelector('.popup-profile');
const popupCard = document.querySelector('.popup-card');
const popupImages = document.querySelector('.popup-img');

// popups close buttons
const closePopupProfile = popupProfile.querySelector('.pop-up__exit-profile');
const closePopupCard = popupCard.querySelector('.pop-up__exit-card');
const closePopupImage = popupImages.querySelector('.pop-up__exit-img');

// popups open button
const openPopupProfile = document.querySelector('.profile__edit-button');
const openPopupCard = document.querySelector('.profile__add-button');

//popups form
const formElementProfole = popupProfile.querySelector('.pop-up__form-profile');
const formElementCard = popupCard.querySelector('.pop-up__form-card');

//popups form inputs
const nameInput = document.querySelector('.pop-up__user-input_info_name');
const jobInput = document.querySelector('.pop-up__user-input_info_job');

// profile information
const nameProfile = document.querySelector('.profile__name-profile');
const jobProfile = document.querySelector('.profile__subname-profile');

// element card
const cardElement = document.querySelector('.elements');

function addCard(cardNameValue, cardLinkValue) {
    
    const clonElementCard = cardElement.content.querySelector('.elements__element').cloneNode(true);

    clonElementCard.querySelector('.elements__element-text').textContent = cardNameValue;
    clonElementCard.querySelector('.elements__mask-group').src = cardLinkValue;
    clonElementCard.querySelector('.elements__mask-group').alt = cardNameValue;
    cardElement.prepend(clonElementCard);

    setElementListeners(clonElementCard);

    return clonElementCard;
}

// submit карточек
formElementCard.addEventListener('submit', function (event) {
    event.preventDefault();
    const cardName = document.querySelector('.pop-up__user-input_card_name');
    const cardLink = document.querySelector('.pop-up__user-input_card_link');

    addCard(cardName.value, cardLink.value);

    togglePopup(popupCard);

    formElementCard.reset();
});

// удаление карточки
const deleteHander = (event) => {
    const target = event.target;
    const currentListCard = target.closest('.elements__element');
    currentListCard.remove();
}

// лайк карточки
const likeHander = (event) => {
    const target = event.target;
    target.classList.toggle('elements__group_active');
}

// развернуть карточку
const openImgHander = (event) => {
    const target = event.target;
    const img = popupImages.querySelector('.pop-up__card-img');
    const imgInfo = popupImages.querySelector('.pop-up__img-info');
    const cardImgInfo = target.parentElement.children[1].children[0].textContent;
    imgInfo.textContent = cardImgInfo;
    img.src = target.src;
    popupImages.classList.add('pop-up_active');
}

// слушатель элементов карточки
const setElementListeners = (clonElementCard) => {
    const elementDel = clonElementCard.querySelector('.elements__trash'); 

    elementDel.addEventListener('click', deleteHander);

    const elementLike = clonElementCard.querySelector('.elements__group'); 

    elementLike.addEventListener('click', likeHander);

    const elementOpenImg = clonElementCard.querySelector('.elements__mask-group'); 
    
    elementOpenImg.addEventListener('click', openImgHander);
}

// popups open/close logics
const togglePopup = (popup) => {
    popup.classList.toggle('pop-up_active');
}

openPopupProfile.addEventListener('click', () => {
    togglePopup(popupProfile);
})

openPopupCard.addEventListener('click', () => {
    togglePopup(popupCard)
})

closePopupProfile.addEventListener('click', () => {
    togglePopup(popupProfile);
})

closePopupCard.addEventListener('click', () => {
    togglePopup(popupCard)
})

closePopupImage.addEventListener('click', () => {
    togglePopup(popupImages)
})
  
// const closePopUpByClickOnOverlay = function (event) {
//     if (event.target !== event.currentTarget) {
//         return;
//     }
//     togglePopup(popupProfile);
//     formElementProfole.reset();
// }

// submit информации пользователя
function formSubmitHandler(event) {
    event.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    togglePopup(popupProfile);
    formElementProfole.reset();
}

// popupProfile.addEventListener('click', closePopUpByClickOnOverlay);
// popupCard.addEventListener('click', closePopUpByClickOnOverlay);
// popupImages.addEventListener('click', closePopUpByClickOnOverlay);
formElementProfole.addEventListener('submit', formSubmitHandler);



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

initialCards.forEach((el) => {
    addCard(el.name, el.link);
})