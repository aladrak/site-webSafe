// Получаем ссылку на контейнер для карточек
const cardContainer = document.getElementById('card-container');

// Массив с текстами для карточек
const cardTexts = [
    { title: 'Как происходит фишинг?', text: '1. Злоумышленник создает фишинговый сайт, имитирующий популярный интернет-ресурс.<br>2. Пользователь попадает на этот сайт через ссылку, полученную в социальных сетях или электронной почте.<br>3. После этого он вводит свои личные данные, которые становятся доступными мошенникам.<br>4. В дальнейшем эти данные могут использоваться в незаконных целях.' },
    { title: 'Как защитить себя от фишинга?', text: '1. Не общайтесь с незнакомцами, особенно если они просят данные или ссылки.<br>2. Используйте антивирус для защиты системы.<br>3. Не открывайте вложения в электронных письмах.<br>4. Регулярно обновляйте программное обеспечение.<br>5. Никогда не отправляйте пароли по электронной почте и не сохраняйте их на рабочем столе.' },
    { title: 'Что делать, если вы получили зловредное письмо?', text: '1. Проверьте адрес электронной почты отправителя.<br>2. Убедитесь, что ссылка начинается с <b>https://</b>, а не <b>http://</b>, перед тем как по ней перейти.<br>3. Не раскрывайте личную информацию и учетные данные третьим лицам.<br>4. Избегайте поспешных действий и паники. Мошенники используют эти эмоции для манипуляции' },
    { title: 'Что следует делать, если вы уже перешли по ссылке?', text: '1. Не впадайте в панику. Обновите свои учетные данные на всех веб-сайтах, где вы их использовали.<br>2. Смените пароли или немедленно свяжитесь с вашим банком, в зависимости от ситуации.' }
];

// Функция для создания карточки
function createCard(title, text) {
    const card = document.createElement('div');
    card.className = 'card'; // Применяем класс для стилизации

    const cardTitle = document.createElement('h3');
    cardTitle.textContent = title;
    card.appendChild(cardTitle);

    const cardText = document.createElement('p');
    cardText.innerHTML = text; // Используем innerHTML для вставки HTML-кода
    card.appendChild(cardText);

    cardContainer.appendChild(card); // Добавляем карточку в контейнер
}

// Создаём карточки при загрузке страницы
window.onload = function() {
    cardTexts.forEach(cardData => createCard(cardData.title, cardData.text)); // Создаём карточки из массива
};

// Создаем блок с историями
const storiesContainer = document.getElementById('story-container');

// Массив с историями
const stories = [
    { title: 'История 1', text: 'Это история 1.' },
    { title: 'История 2', text: 'Это история 2.' },
    { title: 'История 3', text: 'Это история 3.' },
    { title: 'История 4', text: 'Это история 4.' }
];

// Функция для создания истории
function createStory(title, text) {
    const story = document.createElement('div');
    story.className = 'story'; // Применяем класс для стилизации

    const storyTitle = document.createElement('h3');
    storyTitle.textContent = title;
    story.appendChild(storyTitle);

    const storyText = document.createElement('p');
    storyText.textContent = text;
    story.appendChild(storyText);

    storiesContainer.appendChild(story); // Добавляем историю в контейнер
}

// Создаем истории при загрузке страницы
stories.forEach(storyData => createStory(storyData.title, storyData.text));

// Добавляем контейнер с историями в DOM
document.body.appendChild(storiesContainer);

// Создаем кнопки для прокрутки
const scrollLeftButton = document.createElement('button');
scrollLeftButton.className = 'scroll-button left';
scrollLeftButton.innerHTML = '&lt;';
scrollLeftButton.onclick = () => storiesContainer.scrollBy({ left: -300, behavior: 'smooth' });

const scrollRightButton = document.createElement('button');
scrollRightButton.className = 'scroll-button right';
scrollRightButton.innerHTML = '&gt;';
scrollRightButton.onclick = () => storiesContainer.scrollBy({ left: 300, behavior: 'smooth' });

// Добавляем кнопки в DOM
storiesContainer.appendChild(scrollLeftButton);
storiesContainer.appendChild(scrollRightButton);