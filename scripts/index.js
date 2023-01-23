let popup = document.querySelector('.popup'); 
let popupForm = document.querySelector('.popup__form'); 
let openPopupButton = document.querySelector('.profile__edit-button'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.popup__close-popup');

let nameInfo = document.querySelector('.profile__name');// Воспользуйтесь инструментом .querySelector()
let jobInfo = document.querySelector('.profile__text');// Воспользуйтесь инструментом .querySelector()
let inputName = document.querySelector('#input-name');
let inputInfo = document.querySelector('#input-info');

function closePopup() {
  popup.classList.remove('popup_opened');
}

openPopupButton.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      /*e.preventDefault();*/// Предотвращаем дефолтное поведение браузера
      inputName.value = nameInfo.textContent;
      inputInfo.value = jobInfo.textContent;
      popup.classList.add('popup_opened'); // Добавляем класс 'active' для фона
     // popupContainer.classList.add('popup_opened'); // И для самого окна
  })

  closePopupButton.addEventListener('click',closePopup) ;

//document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
 // if(e.target === popup) { // Если цель клика - фот, то:
 //   popup.classList.remove('popup_opened'); // Убираем активный класс с фона
  //  popupContainer.classList.remove('popup_opened'); // И с окна
//   }
//   });


popupForm.addEventListener('submit', handleFormSubmit); 


function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    nameInfo.textContent = inputName.value;
    jobInfo.textContent = inputInfo.value;
    closePopup();

}
