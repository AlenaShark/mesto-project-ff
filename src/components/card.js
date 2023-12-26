export { createCard, deleteCard, likeCard };

const cardTemplate = document.querySelector("#card-template").content;

// Создание карточки из темплейта

function createCard(card, deleteCard, likeCard, imagePopupOpener) {
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);

  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");

  cardElement.querySelector(".card__title").textContent = card.name;
  cardElement.querySelector(".card__image").src = card.link;
  cardElement.querySelector(".card__image").alt = card.name;

  deleteButton.addEventListener("click", deleteCard);
  likeButton.addEventListener("click", likeCard);
  cardElement.querySelector(".card__image").addEventListener("click", imagePopupOpener);

  return cardElement;
}

// Удаление карточки

function deleteCard(evt) {
  const card = evt.target.closest(".places__item");
  card.remove();
}

// Лайк карточки

function likeCard(evt) {
  if (evt.target.classList.contains("card__like-button")) {
    evt.target.classList.toggle("card__like-button_is-active");
  }
}