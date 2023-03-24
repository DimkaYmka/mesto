import { Card, config, initialCards } from "./Card.js";
import { FormValidator, formSetting } from "./FormValidator.js";


const popups = document.querySelectorAll('.popup');
const forms = document.querySelectorAll('.popup__form')
const popupProfile = document.querySelector('.popup_profile')
const profileForm = document.querySelector('.popup__form');
const openProfileButtton = document.querySelector('.profile__edit-button'); // Кнопки для показа окна
const nameInfo = document.querySelector('.profile__name');// Воспользуйтесь инструментом .querySelector()
const jobInfo = document.querySelector('.profile__text');// Воспользуйтесь инструментом .querySelector()
const inputName = document.querySelector('#input-name');
const inputInfo = document.querySelector('#input-info');

//5 спринт

const cardPopup = document.querySelector('.popup_card');
const cardsConteiner = document.querySelector('.elements__list');
const addCardForm = document.querySelector('.popup__form-card')
const openCardButton = document.querySelector('.profile__add-button')
const popupImageName = document.querySelector('.popup__input-name');
const popupImageLink = document.querySelector('.popup__input-link');
const bigImage = document.querySelector('.popup__big-image');
const bigTitle = document.querySelector('.popup__big-title');
const cardImage = document.querySelector('.popup_image')
const cardTemplate = document.querySelector('#card');

const formEditProfile = document.querySelector(".popup__form-profile");
const formAddCard = document.querySelector(".popup__form-card");


const validatorProfileForm = new FormValidator(formSetting, formEditProfile);
  validatorProfileForm.enableValidation()
  const validatorCardForm = new FormValidator(formSetting, formAddCard);
  validatorCardForm.enableValidation()



//открытие попапа
function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscape);
  validatorProfileForm.resetValidation();
  validatorCardForm.resetValidation();
};


//закрытие попапа
function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscape);
};

//закрытие формы по esc
function closePopupEscape(evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  };
};

//открытие большой картинки

function openImagePopup(img, name) {
  bigImage.src = img.src;
  bigImage.alt = `${name}.`;
  bigTitle.textContent = name;
  openPopup(cardImage)
};




// универсальная функция закрытия попапов

const cleanInput = () => {
  const getInput = document.getElementById("input-name-card");
  const getInputUrl = document.getElementById("input-url");
  getInput.value = ''; 
  getInputUrl.value = '';                      
}

//Слушатель на открытие добавления карточек
openCardButton.addEventListener('click', () => {
  cleanInput();
  openPopup(cardPopup)
});


//Слушатель на открытие для профиля
openProfileButtton.addEventListener('click', () => {
  inputName.value = nameInfo.textContent;
  inputInfo.value = jobInfo.textContent;
  openPopup(popupProfile)
});


//сабмит для профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  nameInfo.textContent = inputName.value;
  jobInfo.textContent = inputInfo.value;
  closePopup(popupProfile);

}
//Слушатель на сабмит для профиля
profileForm.addEventListener('submit', handleProfileFormSubmit);




//Добавление своей карточки
const addCard = (event) => {
  event.preventDefault()
  renderCard(popupImageName.value, popupImageLink.value);
  event.target.reset();
  validatorCardForm.disableSubmit();
  closePopup(cardPopup);
}
//Слушатель на сабмит для добавления карточки
addCardForm.addEventListener('submit', addCard);

function createCard(name, link) {
  const newCard = cardTemplate.content.querySelector('.elements__card').cloneNode(true);

  newCard.querySelector('.elements__title').textContent = name;
  const elementsImage = newCard.querySelector('.elements__image');
  elementsImage.src = link;
  elementsImage.alt = name;
 
  return newCard;
};


const renderCard = (name, link) => {
  const card = createCard(name, link)
  cardsConteiner.prepend(card);
};



// вставляем карточки из массива
initialCards.forEach((element) => {
  renderCard(element.name, element.link);
});


//закрытие формы по нажатию 


popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
          closePopup(popup)
      }
      if (evt.target.classList.contains('popup__close-popup')) {
        closePopup(popup)
      }
  })
})



// //
forms.forEach((formElement) => {
  formElement.addEventListener('submit', (e) => {
    e.preventDefault();
  })

})

export { openImagePopup }