const cardContainer = document.getElementById('card-container');

const cardTexts = [
    { img:'src/img/img1.png', title: 'Как происходит фишинг?', text: '1. Злоумышленник создает фишинговый сайт, имитирующий популярный интернет-ресурс.<br>2. Пользователь попадает на этот сайт через ссылку, полученную в социальных сетях или электронной почте.<br>3. После этого он вводит свои личные данные, которые становятся доступными мошенникам.<br>4. В дальнейшем эти данные могут использоваться в незаконных целях.' },
    { img:'src/img/img2.png', title: 'Как защитить себя от фишинга?', text: '1. Не общайтесь с незнакомцами, особенно если они просят данные или ссылки.<br>2. Используйте антивирус для защиты системы.<br>3. Не открывайте вложения в электронных письмах.<br>4. Регулярно обновляйте программное обеспечение.<br>5. Никогда не отправляйте пароли по электронной почте и не сохраняйте их на рабочем столе.' },
    { img:'src/img/img3.png', title: 'Что делать, если вы получили зловредное письмо?', text: '1. Проверьте адрес электронной почты отправителя.<br>2. Убедитесь, что ссылка начинается с <b>https://</b>, а не <b>http://</b>, перед тем как по ней перейти.<br>3. Не раскрывайте личную информацию и учетные данные третьим лицам.<br>4. Избегайте поспешных действий и паники. Мошенники используют эти эмоции для манипуляции' },
    { img:'src/img/img4.png', title: 'Что следует делать, если вы уже перешли по ссылке?', text: '1. Не впадайте в панику. Обновите свои учетные данные на всех веб-сайтах, где вы их использовали.<br>2. Смените пароли или немедленно свяжитесь с вашим банком, в зависимости от ситуации.' }
];

function createCard(img, title, text) {
    const card = document.createElement('div');
    card.className = 'card items-center';

    const imgCont = document.createElement('div');
    
    const cardImg = document.createElement('img');
    cardImg.src = img;
    cardImg.draggable = false;
    imgCont.appendChild(cardImg);
    card.appendChild(imgCont);

    const cardTitle = document.createElement('h3');
    cardTitle.textContent = title;
    card.appendChild(cardTitle);

    const cardText = document.createElement('p');
    cardText.innerHTML = text; 
    card.appendChild(cardText);

    cardContainer.appendChild(card);
}

window.onload = function() {
    cardTexts.forEach(cardData => createCard(cardData.img, cardData.title, cardData.text));
};