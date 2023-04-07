import { Card, config} from "../components/Card.js";
import { FormValidator, formSetting } from "../components/FormValidator.js";
import { Section } from '../components/Section.js';
import { Popup } from '../components/Popup.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';
import '../pages/index.css';
import { PopupWithApply } from "../components/PopupWithApply.js";
import {showLoadingText} from "../utils/utils.js";

const openProfileButtton = document.querySelector('.profile__edit-button'); // Кнопки для показа окна
const inputName = document.querySelector('#input-name');
const inputInfo = document.querySelector('#input-info');
//5 спринт
const openCardButton = document.querySelector('.profile__add-button')

const bigImage = document.querySelector('.popup__big-image');
const bigTitle = document.querySelector('.popup__big-title');
const cardImage = document.querySelector('.popup_image')


// Селекторы попапов:
const profilePopupSelector = '.popup_profile';
const addCardPopupSelector = '.popup_card';
const imagePopupSelector = '.popup_image';
const avatarPopupSelector = '.popup_avatar';


const formEditProfile = document.querySelector(".popup__form-profile");
const formAddCard = document.querySelector(".popup__form-card");
const formAvatar = document.querySelector('.popup__form-avatar')


// Селектор для выбора контейнера карточек:
const selector = '.elements__list';

const btnFormSelector = '.popup__save-btn';
const btnLoadingText = 'Сохранение...';

//9
const apiOptions = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-62',
  headers: {
    authorization: 'bc440bce-88d2-40de-813f-9186a5211a71',
    'Content-Type': 'application/json'
  }
};


const validatorProfileForm = new FormValidator(formSetting, formEditProfile);
validatorProfileForm.enableValidation()
const validatorCardForm = new FormValidator(formSetting, formAddCard);
validatorCardForm.enableValidation()
const avatarFormValidator = new FormValidator(formSetting, formAvatar)
avatarFormValidator.enableValidation()
// экземпляр класса Api:
const api = new Api(apiOptions);

//  userId
let userId;



const dataProfile = {
  profileNameSelector: '.profile__name',
  profileInfoSelector: '.profile__text',
  avatarSelector: '.profile__avatar'
}

const userData = new UserInfo(dataProfile);
const imagePopup = new PopupWithImage(imagePopupSelector);
const popupWithApply = new PopupWithApply('.popup_delete');



const section = new Section({
  renderer: (item) => {
    const cardElement = createCard(item).createNewCard();
    section.addItem(cardElement);
  },
}, selector)



//данные с сервера 
api.getUserData()
  .then((user) => {
    userData.setUserInfo({ name: user.name, about: user.about });
    userData.setUserAvatar({ link: user.avatar });
    userId = user._id;
    api.getInitialCards()
      .then((cards) => {
        section.renderItems(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => alert(err));

const profilePopup = new PopupWithForm(profilePopupSelector,
  (userInfo, btnForm) => {
    const btnFormInitialText = btnForm.textContent;
    showLoadingText(btnForm, btnLoadingText);
    api.editUserData(userInfo)
      .then((res) => {
        userData.setUserInfo(res);
        profilePopup.close();
      })

      // .then(() => {
      //   profilePopup.close();
      // })
      .catch((err) => {alert(err)
        // userData.setUserInfo(userInfo)
      })
    
    .finally(() => {
      showLoadingText(btnForm, btnFormInitialText)
    })
  }, btnFormSelector);


//Слушатель на открытие для профиля
// openProfileButtton.addEventListener('click', () => {
//   const infoObject = userData.getUserInfo();
//   inputName.value = infoObject.name;
//   inputInfo.value = infoObject.info;
//   validatorProfileForm.resetValidation();
//   profilePopup.open()
// });
function profileDataSet (){
  const infoObject = userData.getUserInfo();
  inputName.value = infoObject.name;
  inputInfo.value = infoObject.info;
  validatorProfileForm.resetValidation();
  profilePopup.open()
};
openProfileButtton.addEventListener('click', (profileDataSet));


// сабмита для карточек
const addCardPopup = new PopupWithForm(
  addCardPopupSelector,
  (data, btnForm) => {
    const btnFormInitialText = btnForm.textContent;
    showLoadingText(btnForm, btnLoadingText);
    api.createCard(data)
      .then((item) => {
        createCard(item);
        section.addItem(createCard(item).createNewCard());
        addCardPopup.close()
      })
    
    .catch((err) => alert(err))
  
  .finally(() => {
    showLoadingText(btnForm, btnFormInitialText)
  })
}, btnFormSelector);

// слушатель на открытие попапа card
openCardButton.addEventListener('click', () => {
  addCardPopup.open();
  validatorCardForm.resetValidation();
});




function createCard(cardData) {
  const card = new Card(cardData, config, handleCardClick, userId, {
    handleLikeCard: (data) => {
      if (card.isLiked) {
        api.deleteLike(data._id)
          .then((data) => {
            card.isLiked = false;
            card.getLikesNumber(data.likes.length);
            card.likeCard();
          })
          .catch((err) => {
            console.log(err);
          });
      }
      else {
        api.addLike(data)
          .then((data) => {
            card.isLiked = true;
            card.getLikesNumber(data.likes.length);
            card.likeCard();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  },
  {
    handleDeleteCard: (data, card) => {
      popupWithApply.open();
      popupWithApply.handleDeleteConfirm({
        handleProfileFormSubmit: () => {
          api.deleteCard(data._id)
          .then(() => {
            card.deleteCard();
            popupWithApply.close();
          })
          // .then(() => {
          //   popupWithApply.close();
          // })
          .catch((err) => {
            console.log(err);
          });
        }
      });
    }
  },
  );
  return card
}

const avatarPopup = new PopupWithForm('.popup_avatar', 
   (inputData, btnForm) => {
    const btnFormInitialText = btnForm.textContent;
    showLoadingText(btnForm, btnLoadingText);
    api.editUserAvatar(inputData.link)
      .then((user) => {
        userData.setUserAvatar({ link: user.avatar });
        avatarPopup.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        showLoadingText(btnForm, btnFormInitialText)
      })
    }, btnFormSelector
  )

// Открываем форму аватара
const avatar = document.querySelector('.profile__avatar-button');
avatar.addEventListener('click', () => {
  avatarFormValidator.resetValidation();
  avatarPopup.open();
});



function handleCardClick(name, link) {
  imagePopup.open(name, link);
}


// обработчики событий попапов
profilePopup.setEventListeners();
addCardPopup.setEventListeners();
imagePopup.setEventListeners();
avatarPopup.setEventListeners();
popupWithApply.setEventListeners();






