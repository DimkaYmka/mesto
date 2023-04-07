import { Popup } from "./Popup.js";

export class PopupWithApply extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._submitButton = this._popup.querySelector('.popup__save-btn');
  }

  handleDeleteConfirm({ handleProfileFormSubmit }) {
    this._handleProfileFormSubmit = handleProfileFormSubmit;
  }

  setEventListeners = () => {
    super.setEventListeners();
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();
      this._handleProfileFormSubmit();
      // this.close();
    });
  }
}
