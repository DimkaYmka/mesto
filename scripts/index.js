const popups = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.popup_profile')
const profileForm = document.querySelector('.popup__form');
const openProfileButtton = document.querySelector('.profile__edit-button'); // Кнопки для показа окна
const profileCloseButton = document.querySelector('.popup__close-popup');
const nameInfo = document.querySelector('.profile__name');// Воспользуйтесь инструментом .querySelector()
const jobInfo = document.querySelector('.profile__text');// Воспользуйтесь инструментом .querySelector()
const inputName = document.querySelector('#input-name');
const inputInfo = document.querySelector('#input-info');

//5 спринт
const like = document.querySelector('.elements__vector');
const cardPopup = document.querySelector('.popup_card');
const buttonCloseAddCardPopup = document.querySelector('.popup__close-card-popup');
const popupImage = document.querySelector('.elements__image')
const cardsConteiner = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#card'); //.content.querySelector('.elements__card');
const addCardForm = document.querySelector('.popup__form-card')
const openCardButton = document.querySelector('.profile__add-button')

const bigPopup = document.querySelector('.popup_image')
const popupImageName = document.querySelector('.popup__input-name');
const popupImageLink = document.querySelector('.popup__input-link');
const elementsTitle = document.querySelector('.elements__title');

const bigImage = document.querySelector('.popup__big-image');
const bigTitle = document.querySelector('.popup__big-title');
const popupBigClose = document.querySelector('.popup__close-popup-big');
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

function openImagePopup (link, name) {
  bigImage.src = link;
  bigImage.alt = name;
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

//для открытия картинки
const createNewCard = (name, link) => {
  const newCard = cardTemplate.content.querySelector('.elements__card').cloneNode(true);

  newCard.querySelector('.elements__title').textContent = name;
  const elementsImage = newCard.querySelector('.elements__image');
  elementsImage.src = link;
  elementsImage.alt = name;

  //для добавления лайка
  newCard.querySelector('.elements__vector').addEventListener('click', toggleLike);

  //удалениe карточки 
  const deleteCard = newCard.querySelector('.elements__delete-button');    
  deleteCard.addEventListener('click', () => {
    newCard.remove();
  });

  //большая картинка
  elementsImage.addEventListener('click', () => {     
    openImagePopup(link, name);
  });

  return newCard;
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
  cardsConteiner.prepend(createNewCard(name, link));
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






enableValidation(formSetting);
