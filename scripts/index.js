const popup = document.querySelector('.popup'); 
const popupForm = document.querySelector('.popup__form'); 
const openPopupButton = document.querySelector('.profile__edit-button'); // Кнопки для показа окна
const buttonClosePopupButton = document.querySelector('.popup__close-popup');

const nameInfo = document.querySelector('.profile__name');// Воспользуйтесь инструментом .querySelector()
const jobInfo = document.querySelector('.profile__text');// Воспользуйтесь инструментом .querySelector()
const inputName = document.querySelector('#input-name');
const inputInfo = document.querySelector('#input-info');

//
const like = document.querySelector('.elements__vector');

// function likeAdd() {
//   like.classList.add('elements__vector_active');
// }
//




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

  buttonClosePopupButton.addEventListener('click',closePopup) ;

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




