import { openImagePopup } from './index.js'

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

//Селектор класса
const config = {
  selectorList: '.elements__card',
  selectorTemplate: '#card',
  cardImgSelector: '.elements__image',
  cardTitleSelector: '.elements__title',
  cardDeleteBtnSelector: '.elements__delete-button',
  toggleLikeSelector: '.elements__vector',
  activeLikeBtnClass: 'elements__vector_active'
}
//Класс
class Card {
  constructor(name, link, config) {
    this._name = name;
    this._link = link;
    this._config = config

  }


  //Добавление своей карточки
  _getTemplate() {
  
    const newCard = document
      .querySelector(this._config.selectorTemplate)
      .content
      .querySelector('.elements__card')
      .cloneNode(true);

    return newCard;
  }

  

  //удалениe карточки 
  _deleteCard(deleteCard) {
    //  this._element.remove()
    deleteCard.closest(this._config.selectorList).remove()
  }

  //добавление лайка
  _toggleLike(elementsLike) {
    elementsLike.classList.toggle(this._config.activeLikeBtnClass)
  }

  // слушатели на добавление лайка, удаление карточки и открытие фото
  _setEventListeners() {
    const deleteCard = this._element.querySelector(this._config.cardDeleteBtnSelector);
    const elementsLike = this._element.querySelector(this._config.toggleLikeSelector);

    deleteCard.addEventListener('click', () => {
      this._deleteCard(deleteCard)
    })

    this._cardImage.addEventListener('click', () => {
      openImagePopup(elementsImage, this._name);
    })

    elementsLike.addEventListener('click', () => {
      this._toggleLike(elementsLike);
    })
  }

  //Добавление своей карточки
  createNewCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(this._config.cardImgSelector);

    this._cardImage.src = this._link;
    this._cardImage.alt = ` ${this._link}.`;
    this._element.querySelector(this._config.cardTitleSelector).textContent = this._name;

    this._setEventListeners();

    return this._element;
  }



};

export { Card, config, initialCards }