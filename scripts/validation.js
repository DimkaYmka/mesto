const formSetting = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

// const profileForm = document.querySelector('.popup__form');
// const inputName = document.querySelector('#input-name');
// const inputInfo = document.querySelector('#input-info');
// const popupImageName = document.querySelector('.popup__input-name');
// const popupImageLink = document.querySelector('.popup__input-link');

const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(formSetting.inputErrorClass);
  errorElement.textContent = errorMessage; //inputElement.validationMessenge;
  errorElement.classList.add(formSetting.errorClass);
};

const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = '';
  inputElement.classList.remove(formSetting.inputErrorClass);
  errorElement.classList.remove(formSetting.errorClass);
};


const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
  } else {
    hideInputError(formElement, inputElement, inputErrorClass, errorClass);
  }
};




const setEventListeners = (formElement, formSetting) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__button');

  // чтобы проверить состояние кнопки в самом начале
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, formSetting);
      toggleButtonState(inputList, buttonElement, formSetting);
    });
  });
};

function disabledButton (formElement, formSetting) {
  const buttonElement = formElement.querySelector(formSetting.submitButtonSelector);
  buttonElement.classList.add(formSetting.inactiveButtonClass);
  buttonElement.setAttribute('disabled', 'disabled');
}

const enableValidation = (formSetting) => {
  const formList = Array.from(document.querySelectorAll(formSetting.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      disabledButton (formElement, formSetting)
    });

    setEventListeners(formElement, formSetting);
    const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));
    fieldsetList.forEach((fieldSet) => {
      setEventListeners(fieldSet);
    });
  });
};








function toggleButtonState (inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
  // сделай кнопку неактивной
  buttonElement.classList.add('popup__save-btn_inactive');
  buttonElement.disabled = true;
} else {
  // иначе сделай кнопку активной
  buttonElement.classList.remove('popup__save-btn_inactive');
  buttonElement.disabled = false;
}
}

function hasInvalidInput (inputList) {
  return inputList.some((inputElement) => {
  // Если поле не валидно, колбэк вернёт true
  // Обход массива прекратится и вся функция
  // hasInvalidInput вернёт true

  return !inputElement.validity.valid;
})
}; 


