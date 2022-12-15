let popup = document.querySelector('.popup'); 
let popupContainer = document.querySelector('.popup__container'); 
let openPopupButton = document.querySelector('.open-popup'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup');

let nameInfo = document.querySelector('.profile__name');// Воспользуйтесь инструментом .querySelector()
let jobInfo = document.querySelector('.profile__text');// Воспользуйтесь инструментом .querySelector()
let inputName = document.querySelector('.popup__input_name');
let inputInfo = document.querySelector('.popup__input_info');

function closePopup() {
  popup.classList.remove('active');
}

openPopupButton.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      /*e.preventDefault();*/// Предотвращаем дефолтное поведение браузера
      inputName.value = nameInfo.textContent;
      inputInfo.value = jobInfo.textContent;
      popup.classList.add('active'); // Добавляем класс 'active' для фона
      popupContainer.classList.add('active'); // И для самого окна
  })

  closePopupButton.addEventListener('click',closePopup) ;

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
  if(e.target === popup) { // Если цель клика - фот, то:
    popup.classList.remove('active'); // Убираем активный класс с фона
    popupContainer.classList.remove('active'); // И с окна
  }
});


popupContainer.addEventListener('submit', handleFormSubmit); 


function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    nameInfo.textContent = inputName.value;
    jobInfo.textContent = inputInfo.value;
    closePopup();

}
