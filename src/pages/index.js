import { Card, config, initialCards } from "../scripts/Card.js";
import { FormValidator, formSetting } from "../scripts/FormValidator.js";
import { Section } from '../scripts/Section.js';
import { Popup } from '../scripts/Popup.js';
import { PopupWithImage } from '../scripts/PopupWithImage.js';
import { PopupWithForm } from '../scripts/PopupWithForm.js';
import { UserInfo } from '../scripts/UserInfo.js';
import '../pages/index.css';


const forms = document.querySelectorAll('.popup__form')
const openProfileButtton = document.querySelector('.profile__edit-button'); // Кнопки для показа окна
const nameInfo = document.querySelector('.profile__name');// Воспользуйтесь инструментом .querySelector()
const jobInfo = document.querySelector('.profile__text');// Воспользуйтесь инструментом .querySelector()
const inputName = document.querySelector('#input-name');
const inputInfo = document.querySelector('#input-info');

//5 спринт


const openCardButton = document.querySelector('.profile__add-button')

export const bigImage = document.querySelector('.popup__big-image');
export const bigTitle = document.querySelector('.popup__big-title');
export const cardImage = document.querySelector('.popup_image')


const formEditProfile = document.querySelector(".popup__form-profile");
const formAddCard = document.querySelector(".popup__form-card");

const getInput = document.getElementById("input-name-card");
const getInputUrl = document.getElementById("input-url");

// Селектор для выбора контейнера карточек:
const selector = '.elements__list';

const validatorProfileForm = new FormValidator(formSetting, formEditProfile);
validatorProfileForm.enableValidation()
const validatorCardForm = new FormValidator(formSetting, formAddCard);
validatorCardForm.enableValidation()


function handleCardClick(name, link) {
  imagePopup.open(name, link);
}


const cleanInput = () => {
  getInput.value = '';
  getInputUrl.value = '';
}


// Селекторы попапов:
const profilePopupSelector = '.popup_profile';
const addCardPopupSelector = '.popup_card';
const imagePopupSelector = '.popup_image';





const data = {
  profileNameSelector: '.profile__name',
  profileInfoSelector: '.profile__text'
}

const userData = new UserInfo(data);

const profilePopup = new PopupWithForm(profilePopupSelector,
  (data) => {
    userData.setUserInfo(data)
    profilePopup.close();
  });// profileSubmitHandler);

//Слушатель на открытие для профиля
openProfileButtton.addEventListener('click', () => {
  inputName.value = nameInfo.textContent;
  inputInfo.value = jobInfo.textContent;
  validatorProfileForm.resetValidation();
  profilePopup.open()
});



// сабмита для карточек
const addCardPopup = new PopupWithForm(
  addCardPopupSelector,
  (item) => {
    addCardPopup.close();
    section.addItem(createCard(item).createNewCard());
  });

// слушатель на открытие попапа card
openCardButton.addEventListener('click', () => {
  cleanInput();
  addCardPopup.open();
  validatorCardForm.resetValidation();
});



const imagePopup = new PopupWithImage(imagePopupSelector);




// создания карточки из класса
function createCard(item) {
  return new Card(item.name, item.link, config, handleCardClick);
}

forms.forEach((formElement) => {
  formElement.addEventListener('submit', (e) => {
    e.preventDefault();
  })

})


// обработчики событий попапов
profilePopup.setEventListeners();
addCardPopup.setEventListeners();
imagePopup.setEventListeners();


// отрисоква карочек из массива
const section = new Section({
  items: initialCards, renderer: (item) => {
    const cardElement = createCard(item).createNewCard();
    section.addItem(cardElement);
  },
}, selector)
section.renderItems()





