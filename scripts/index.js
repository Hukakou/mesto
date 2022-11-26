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
const cardName = document.querySelector('.pop-up__user-input_card_name');
const cardLink = document.querySelector('.pop-up__user-input_card_link');

// profile information
const nameProfile = document.querySelector('.profile__name-profile');
const jobProfile = document.querySelector('.profile__subname-profile');

// element card
const cardSection = document.querySelector('.elements');

// element cadr img
const img = popupImages.querySelector('.pop-up__card-img');
const imgInfo = popupImages.querySelector('.pop-up__img-info');


// создать карточку
function createCard(cardNameValue, cardLinkValue) {
  const duplicationCards = cardSection.content.querySelector('.elements__element').cloneNode(true);
  const nameCard = duplicationCards.querySelector('.elements__element-text');
  const imgCard = duplicationCards.querySelector('.elements__mask-group');

  nameCard.textContent = cardNameValue;
  imgCard.alt = cardNameValue;
  imgCard.src = cardLinkValue;

  setElementListeners(duplicationCards);
  
  return duplicationCards;
}

function addCard(cardNameValue, cardLinkValue) {
  const clonElementCard = createCard(cardNameValue, cardLinkValue);
    
  cardSection.prepend(clonElementCard);
}

// submit карточек
formElementCard.addEventListener('submit', function (event) {
    event.preventDefault();

    addCard(cardName.value, cardLink.value);

    closePopup(popupCard);

  formElementCard.reset();
  enableValidation(selectors);
});

// удаление карточки
const deleteCard = (event) => {
    const target = event.target;
    const currentListCard = target.closest('.elements__element');
    currentListCard.remove();
}

// лайк карточки
const addLikeCard = (event) => {
    const target = event.target;
    target.classList.toggle('elements__group_active');
}

// развернуть карточку
const openImgCard = (event) => {
    const target = event.target;
    imgInfo.textContent = target.alt || 'Название отсутствует';
    img.src = target.src;
    img.alt = target.alt || 'Изображение не загруженно';
  
    openPopup(popupImages);
}

// слушатель элементов карточки
const setElementListeners = (clonElementCard) => {
    const elementDel = clonElementCard.querySelector('.elements__trash'); 

    elementDel.addEventListener('click', deleteCard);

    const elementLike = clonElementCard.querySelector('.elements__group'); 

    elementLike.addEventListener('click', addLikeCard);

    const openPopupImage = clonElementCard.querySelector('.elements__mask-group'); 
    
    openPopupImage.addEventListener('click', openImgCard);
}



const closePopupOnEscape = (evt) => {
  if (evt.key === 'Escape') {
    closePopup(popupProfile);
    closePopup(popupCard);
    closePopup(popupImages);
    enableValidation(selectors)
  }
};

// popups open/close logics
const openPopup = (popup) => {
  popup.classList.add('pop-up_active');
  document.addEventListener('keyup', closePopupOnEscape);
}

const closePopup = (popup) => {
  popup.classList.remove('pop-up_active');
  document.removeEventListener('keyup', closePopupOnEscape);
}

openPopupProfile.addEventListener('click', () => {
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
    openPopup(popupProfile);
})

openPopupCard.addEventListener('click', () => {
  openPopup(popupCard);
})

closePopupProfile.addEventListener('click', () => {
  closePopup(popupProfile);
  enableValidation(selectors)
})

closePopupCard.addEventListener('click', () => {
  closePopup(popupCard);
})

closePopupImage.addEventListener('click', () => {
  closePopup(popupImages);
})

// Закрытие попапа вне окна попапа
const closePopUpByClickOnOverlay = function (event) {
    if (event.target !== event.currentTarget) {
        return;
    }
  closePopup(popupProfile);
  closePopup(popupCard);
  closePopup(popupImages);
  enableValidation(selectors)
}

// submit информации пользователя
function handleProfileFormSubmit(event) {
    event.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
  closePopup(popupProfile);
  enableValidation(selectors);
}

popupProfile.addEventListener('click', closePopUpByClickOnOverlay);
popupCard.addEventListener('click', closePopUpByClickOnOverlay);
popupImages.addEventListener('click', closePopUpByClickOnOverlay);
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

initialCards.forEach((el) => {
    addCard(el.name, el.link);
})

enableValidation(selectors);