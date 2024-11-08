// Получаем ссылку на контейнер для карточек
const cardContainer = document.getElementById('card-container');

// Массив с текстами для карточек
const cardTexts = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10'
];

// Функция для создания карточки
function createCard(text) {
    const card = document.createElement('div');
    card.className = 'card'; // Применяем класс для стилизации
    card.innerText = text; // Добавляем текст в карточку
    cardContainer.appendChild(card); // Добавляем карточку в контейнер
}

// Создаём карточки при загрузке страницы
window.onload = function() {
    cardTexts.forEach(text => createCard(text)); // Создаём карточки из массива
};