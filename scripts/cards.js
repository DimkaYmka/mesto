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


const cardsConteiner = document.querySelector('.elements__list');
// console.log(cardsConteiner.innerHTML);
const cardTemplate = document.querySelector('#card').content.querySelector('.elements__card');
// console.log(cardTemplate);


// //создание карточки
// function createCard(text){
// const card = cardTemplate.cloneNode(true);
// const cardElement = card.querySelector('.elements__title')
// cardElement.querySelector('.elements__title').textContent = name;
// // cardText.textContent = text;

// return card;
// } 
// //вставляем карточку из массива

// initialCards.forEach(card => {
//   renderCard(card.name, card.link)
// })
// //добавление карточки

// function renderCard(){
//   initialCards.forEach(initialCards =>{
//     const cardHtml = createCard(initialCards);
//     cardsConteiner.append(cardHtml);
//   })
// } 
// renderCard()


//
// initialCards.forEach(function (element) {
//   const cardsElement = cardTemplate.cloneNode(true);
//   cardElement.querySelector('.elements__title').textContent = element.name;
// })

