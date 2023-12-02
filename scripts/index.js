
// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки
function createCard(card, handleDelete) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    cardElement.querySelector('.card__image').src = card.link;
    cardElement.querySelector('.card__image').alt = card.name;
    cardElement.querySelector('.card__title').textContent = card.name;

    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', handleDelete);
    
    return cardElement;
}

// @todo: Функция удаления карточки

function handleDelete(event) {
    const card = event.target.closest('.card');

    card.remove();
}

// @todo: Вывести карточки на страницу
const list = document.querySelector('.places__list');
for (const card of initialCards) {
    const cardElement = createCard(card, handleDelete);
    list.append(cardElement);
}