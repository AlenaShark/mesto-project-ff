export { escapeCloseModal, openModal, closeModal, closePopupByClick}

const popupList = Array.from(document.querySelectorAll('.popup'));

popupList.forEach((popup) => {
  popup.addEventListener('click', closePopupByClick); 
  popup.addEventListener('mouseup', (event) => {
    const targetClassList = event.target.classList; 
    if (targetClassList.contains('popup') || targetClassList.contains('popup__close')) {
      closeModal(popup); 
    }
  })
}) 

// Закрытие по клику на escape


function escapeCloseModal(evt) {
  if (evt.code === "Escape") {
    const popup = document.querySelector('.popup_is-opened')
    popup.classList.remove("popup_is-opened");
  }
}

// Открытие попапов

function openModal(popup) {
  
  popup.classList.add("popup_is-opened");

  document.addEventListener('keydown', escapeCloseModal);
}

// Закрытие  со снятием обработчиков

function closeModal(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener('keydown', escapeCloseModal);
}

const closePopupByClick = event=> {
  if (event.target.classList.contains('popup') || event.target.classList.contains('popup__close')) { 
         closeModal(event.currentTarget); 
     } 
}
  