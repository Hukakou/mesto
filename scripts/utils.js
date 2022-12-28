import { popupProfile,nameInput, jobInput, nameProfile, jobProfile} from './constants.js';
import { popupImages, img, imgInfo} from './constants.js';
import { openPopup, closePopup } from './index.js';

// Открытие и закрытие попапа через escape
export function closeByEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.pop-up_active');
        closePopup(openedPopup);
    };
};

//логика изменения данных пользователя при открытии формы
export function openProfilePopup() {
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
    openPopup(popupProfile);
};

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

 