import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleProfileFormSubmit, btnFormSelector) {
    super(popupSelector);
    this._handleProfileFormSubmit = handleProfileFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._btnForm = this._form.querySelector(btnFormSelector)
  }



  _getInputValues = () => {
    const inputValues = {};
    this._inputList.forEach(inputItem => {
      inputValues[inputItem.name] = inputItem.value;
    })
    return inputValues;
  }

  getInputValues() {
    return this._inputFormValues;
  }

  setEventListeners = () => {
    super.setEventListeners();

    this._form.addEventListener('submit', (e) => {
      e.preventDefault();
      this._handleProfileFormSubmit(this._getInputValues(), this._btnForm);
      this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}