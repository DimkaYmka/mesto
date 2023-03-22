
// const profileForm = document.querySelector('.popup__form');
// const inputName = document.querySelector('#input-name');
// const inputInfo = document.querySelector('#input-info');
// const popupImageName = document.querySelector('.popup__input-name');
// const popupImageLink = document.querySelector('.popup__input-link');


// const showInputError = (formElement, inputElement, errorMessage, formSetting) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add(formSetting.inputErrorClass);
//   errorElement.textContent = errorMessage; //inputElement.validationMessenge;
//   errorElement.classList.add(formSetting.errorClass);
// };

// const hideInputError = (formElement, inputElement, formSetting) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   errorElement.textContent = '';
//   inputElement.classList.remove(formSetting.inputErrorClass);
//   errorElement.classList.remove(formSetting.errorClass);
// };


// const checkInputValidity = (formElement, inputElement, formSetting) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage, formSetting);
//   } else {
//     hideInputError(formElement, inputElement, formSetting);
//   }
// };




// const setEventListeners = (formElement, formSetting) => {
//   const inputList = Array.from(formElement.querySelectorAll(formSetting.inputSelector));
//   const buttonElement = formElement.querySelector(formSetting.submitButtonSelector);

//   // чтобы проверить состояние кнопки в самом начале
//   toggleButtonState(inputList, buttonElement, formSetting);

//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', function () {
//       checkInputValidity(formElement, inputElement, formSetting);
//       toggleButtonState(inputList, buttonElement, formSetting);
//     });
//   });
// };



// const enableValidation = (formSetting) => {
//   const formList = Array.from(document.querySelectorAll(formSetting.formSelector));
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', function (evt) {
//       evt.preventDefault();
//     });

//     setEventListeners(formElement, formSetting);
//     const fieldsetList = Array.from(formElement.querySelectorAll(formSetting.formSelector));
//     fieldsetList.forEach((fieldSet) => {
//       setEventListeners(fieldSet);
//     });
//   });
// };








// function toggleButtonState (inputList, buttonElement, formSetting) {
//   if (hasInvalidInput(inputList)) {
//   // сделай кнопку неактивной
//   buttonElement.classList.add((formSetting.inactiveButtonClass));
//   buttonElement.disabled = true;
// } else {
//   // иначе сделай кнопку активной
//   buttonElement.classList.remove((formSetting.inactiveButtonClass));
//   buttonElement.disabled = false;
// }
// }

// function hasInvalidInput (inputList) {
//   return inputList.some((inputElement) => {
//   // Если поле не валидно, колбэк вернёт true
//   // Обход массива прекратится и вся функция
//   // hasInvalidInput вернёт true

//   return !inputElement.validity.valid;
// })
// }; 
const formSetting = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

class FormValidation {
  constructor(formSetting, formElement) {
    console.log(formElement);
    this._formSetting = formSetting;
    this._formElement = formElement
  
    this._inputList = Array.from(this._formElement.querySelectorAll(this._formSetting.inputSelector));
    this._submitButton = this._formElement.querySelector(this._formSetting.submitButtonSelector);
    // this._inputName = document.querySelector('#input-name');
    // this._inputInfo = document.querySelector('#input-info');
    // this._popupImageName = document.querySelector('.popup__input-name');
    // this._popupImageLink = document.querySelector('.popup__input-link');
  }
//
  _showInputError(inputElement, errorMessage) {
    console.log(inputElement);
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._formSetting.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._formSetting.errorClass);
  }
//
  _hideInputError(inputElement) {
    console.log(inputElement);
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
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
  _toggleButtonState() {
    console.log(this._hasInvalidInput());
    
    if (this._hasInvalidInput()) {
      console.log(this._submitButton);
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




export {FormValidation, formSetting}