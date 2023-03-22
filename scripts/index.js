import  {Card, config, initialCards} from "./cards.js";
import { FormValidator, formSetting } from "./validation.js";


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


//открытие попапа
function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscape);
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

function openImagePopup (img, name) {
  bigImage.src = img.src;
  bigImage.alt = `${name}.`;
  bigTitle.textContent = name; 
  openPopup(cardImage)
};




// универсальная функция закрытия попапов
const closeButtons = document.querySelectorAll('.popup__close-popup');

closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап 
  const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener('click', () => closePopup(popup));
});


//Слушатель на открытие добавления карточек
openCardButton.addEventListener('click', () => { 
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

//добавление и удаление лайка
const toggleLike = (e) => {
  e.target.classList.toggle('elements__vector_active');
};


//Добавление своей карточки
const addCard = (event) => {
  event.preventDefault()
  renderCard(popupImageName.value, popupImageLink.value);
  event.target.reset();
  closePopup(cardPopup);
}
//Слушатель на сабмит для добавления карточки
 addCardForm.addEventListener('submit', addCard);

//добавление карточки
const renderCard = (name, link) => {
  const card = new Card(name, link, config);
  cardsConteiner.prepend(card.createNewCard());
};

// вставляем карточки из массива
initialCards.forEach ((element) => {                                      
  renderCard(element.name, element.link);
});


//закрытие формы по нажатию на фон
const popupsFon = Array.from(document.querySelectorAll('.popup'));


popupsFon.forEach((popup) => {
    // слушатель клика
    popup.addEventListener('click', (evt) => {
      if(evt.target.classList.contains('popup_opened')){
        closePopup(popup);
      }
    })
  })


  // //
  forms.forEach((formElement) => {
    formElement.addEventListener('submit', (e) => {
      e.preventDefault();
    })
  
    const form = new FormValidator(formSetting, formElement)
    form.enableValidation();
  })

export { openImagePopup }