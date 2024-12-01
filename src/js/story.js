const storiesContainer = document.getElementById('story-container');

const stories = [
    { title: 'История 1', text: 'Это история 1.' },
    { title: 'История 2', text: 'Это история 2.' },
    { title: 'История 3', text: 'Это история 3.' },
    { title: 'История 4', text: 'Это история 4.' },
    { title: 'История 4', text: 'Это история 4.' },
    { title: 'История 4', text: 'Это история 4.' }
];

// Функция для создания истории
function createStory(title, text) {
    const story = document.createElement('div');
    story.className = 'story'

    const storyTitle = document.createElement('h3');
    storyTitle.textContent = title;
    story.appendChild(storyTitle);

    const storyText = document.createElement('p');
    storyText.textContent = text;
    story.appendChild(storyText);

    storiesContainer.appendChild(story);
}

// Истории при загрузке страницы
stories.forEach(storyData => createStory(storyData.title, storyData.text));


// Кнопки для прокрутки
const scrollLeftButton = document.createElement('button');
scrollLeftButton.className = 'scroll-button left';
scrollLeftButton.innerHTML = '&lt;';
scrollLeftButton.onclick = () => {
    const firstStory = storiesContainer.firstElementChild;
    storiesContainer.appendChild(firstStory);
    storiesContainer.scrollBy({ left: -firstStory.offsetWidth, behavior: 'smooth' });
};

const scrollRightButton = document.createElement('button');
scrollRightButton.className = 'scroll-button right';
scrollRightButton.innerHTML = '&gt;';
scrollRightButton.onclick = () => {
    const lastStory = storiesContainer.lastElementChild;
    storiesContainer.insertBefore(lastStory, storiesContainer.firstElementChild);
    storiesContainer.scrollBy({ left: lastStory.offsetWidth, behavior: 'smooth' });
};

// Добавляем кнопки в DOM
document.body.appendChild(scrollLeftButton);
document.body.appendChild(scrollRightButton);