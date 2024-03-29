import { formSetting } from "../utils/utils.js";


class FormValidator {
  constructor(formSetting, formElement) {
    this._formSetting = formSetting;
    this._formElement = formElement

    this._inputList = Array.from(this._formElement.querySelectorAll(this._formSetting.inputSelector));
    this._submitButton = this._formElement.querySelector(this._formSetting.submitButtonSelector);
  }

  //
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    // console.log(errorElement);
    inputElement.classList.add(this._formSetting.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._formSetting.errorClass);
  }
  //
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    // console.log(errorElement);
    errorElement.textContent = '';
    inputElement.classList.remove(this._formSetting.inputErrorClass);
    errorElement.classList.remove(this._formSetting.errorClass);

  }
  //
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }
  //

  resetValidation() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
    });

  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._submitButton.classList.add(this._formSetting.inactiveButtonClass);
      this._submitButton.disabled = true;
    } else {
      this._submitButton.classList.remove(this._formSetting.inactiveButtonClass);
      this._submitButton.disabled = false;
    }
  }
  //
  _hasInvalidInput() {
  
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  //
  _setEventListeners() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }
  //
  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners();
  }
}

export { FormValidator, formSetting }