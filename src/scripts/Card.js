


//Селектор класса
const config = {
  selectorList: '.elements__card',
  selectorTemplate: '#card',
  cardImgSelector: '.elements__image',
  cardTitleSelector: '.elements__title',
  cardDeleteBtnSelector: '.elements__delete-button',
  toggleLikeSelector: '.elements__vector',
  activeLikeBtnClass: 'elements__vector_active',
  countLikes: '.elements__likes-number'
}
//Класс
class Card {
  constructor(cardData, config, handleCardClick, userId, {handleLikeCard}, {handleDeleteCard}) {
    this._cardData = cardData;
    this._name = cardData.name;
    this._link = cardData.link;
    this._config = config;
    this._handleCardClick = handleCardClick;
    
    this._userId = userId;
    this._handleLikeCard = handleLikeCard;
    this._likes = cardData.likes
    this._handleDeleteCard = handleDeleteCard;
    this._cardOwner = cardData.owner._id;
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

  _deleteCardForSure = () => {
   this._handleDeleteCard(this._cardData, this)
  }

  //удалениe карточки 
  deleteCard() {  
     this._element.remove()
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
      this._deleteCardForSure()
    })

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    })

    elementsLike.addEventListener('click', () => {
      this._handleLikeCard(this._cardData);
    })
  }

  //Добавление своей карточки
  createNewCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(this._config.cardImgSelector);

    this._cardImage.src = this._link;
    this._cardImage.alt = ` ${this._link}.`;
    this._element.querySelector(this._config.cardTitleSelector).textContent = this._name;

    this._likeButton = this._element.querySelector(this._config.toggleLikeSelector);
    this._likeNumber = this._element.querySelector(this._config.countLikes);

    this._likes = this._cardData.likes;
    this._likeNumber.innerHTML = this._likes.length;
   
    this.isLiked = false;
   
    this._deleteButton = this._element.querySelector(this._config.cardDeleteBtnSelector); 
    this._setDeleteButton();

    this._setEventListeners();

    this._getCardLike();
    this.getLikesNumber(this._likes.length);
    return this._element;

    
  }


  _getCardLike = () => {
    if (this._likes.some(liker => liker._id === this._userId)) {
      this._likeButton.classList.add('elements__vector_active');
      this.isLiked = true;
    }
    else {
      this._likeButton.classList.remove('elements__vector_active');
    }
  }

  getLikesNumber = (likesNumber) => {
    this._likeNumber.innerHTML = likesNumber;
  }

  likeCard = () => {
    this._likeButton.classList.toggle('elements__vector_active');
  }
  _setDeleteButton = () => {
    if (this._cardOwner === this._userId) {
      this._deleteButton.classList.remove('elements__delete-button_hidden');
    }
  }

};

export { Card, config}