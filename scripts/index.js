const popUpElement = document.querySelector('.pop-up');
const popUpExitButtonElement = popUpElement.querySelector('.pop-up__exit');
const profileEditButtonElement = document.querySelector('.profile__edit-button');
const popUpFormElement = document.querySelector('.pop-up__form');
const nameInput = document.querySelector('.pop-up__name-input');
const jobInput = document.querySelector('.pop-up__job-input');
const nameProfile = document.querySelector('.profile__name-profile');
const jobProfile = document.querySelector('.profile__subname-profile');
const formElement = popUpElement.querySelector('.pop-up__form');


const openPopUp = function () {
    popUpElement.classList.add('pop-up_active');
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
}
const closePopUp = function () {
    popUpElement.classList.remove('pop-up_active');
    formElement.reset();
}
const closePopUpByClickOnOverlay = function (event) {
    if (event.target !== event.currentTarget) {
        return;
    }
    closePopUp()
    formElement.reset();
}

function formSubmitHandler(event) {
    event.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closePopUp()
}

profileEditButtonElement.addEventListener('click', openPopUp);
popUpExitButtonElement.addEventListener('click', closePopUp);
popUpElement.addEventListener('click', closePopUpByClickOnOverlay);
formElement.addEventListener('submit', formSubmitHandler);






