export function showLoadingText(btnForm, text) {
  btnForm.textContent = text;
}

export const config = {
  selectorList: '.elements__card',
  selectorTemplate: '#card',
  cardImgSelector: '.elements__image',
  cardTitleSelector: '.elements__title',
  cardDeleteBtnSelector: '.elements__delete-button',
  toggleLikeSelector: '.elements__vector',
  activeLikeBtnClass: 'elements__vector_active',
  countLikes: '.elements__likes-number'
}

export const formSetting = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};