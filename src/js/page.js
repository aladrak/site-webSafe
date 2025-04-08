const cardContainer = document.getElementById('card-container');

const cardTexts = [
    { img:'src/img/img1.jpg', title: 'Будьте осторожны с сообщениями и звонками', text: 'Если вам пишут или звонят от имени банка, полиции, налоговой или других организаций – не спешите доверять.<br>Не сообщайте пароли, коды из SMS и данные карты, даже если звонящий представляется сотрудником банка.<br>Перезвоните в организацию по официальному номеру (он указан на сайте или карте).' },
    { img:'src/img/img2.jpg', title: 'Проверяйте информацию', text: 'Если вам пишут родственники или друзья и просят денег – перезвоните им лично.<br>Не верьте сообщениям о выигрышах и акциях, если вы в них не участвовали.<br>Любое письмо с просьбой перевести деньги – это повод насторожиться.' },
    { img:'src/img/img3.jpg', title: 'Безопасно пользуйтесь интернетом', text: 'Никогда не переходите по подозрительным ссылкам из SMS, писем или соцсетей. Используйте сложные пароли и не храните их в блокнотах или на компьютере.<br>Регулярно обновляйте антивирус и проверяйте систему на вирусы.' },
    { img:'src/img/img4.jpg', title: 'Осторожно с покупками в интернете', text: 'Покупайте только на проверенных сайтах (адрес сайта должен начинаться с "https://").<br>Никогда не оплачивайте товар заранее, если не уверены в продавце.<br>Проверяйте отзывы перед покупкой.' },
    { img:'src/img/img4.jpg', title: 'Не ведитесь на "чудо-лекарства" и инвестиции', text: 'Если вам обещают высокую прибыль без рисков – это обман.<br>Не вкладывайте деньги в проекты, которые вам навязывают незнакомцы.<br>Будьте осторожны с сайтами, рекламирующими "секретные методы лечения".' },
    { img:'src/img/img4.jpg', title: 'Если вас пытаются обмануть', text: 'Не бойтесь сказать "Нет".<br>Если сомневаетесь – посоветуйтесь с родственниками или позвоните на горячую линию вашей банковской организации.<br>Если потеряли деньги – срочно обратитесь в полицию и банк.<br>Запомните: осторожность – лучшая защита от мошенников!' }
];

function createCard(img, title, text) {
    const card = document.createElement('div');
    card.className = 'card items-center';

    const cardImg = document.createElement('img');
    cardImg.src = img;
    card.appendChild(cardImg);

    const cardTitle = document.createElement('h3');
    cardTitle.textContent = title;
    card.appendChild(cardTitle);

    const line = document.createElement('div');
    line.className = 'line';
    card.appendChild(line);

    const cardText = document.createElement('p');
    cardText.innerHTML = text; 
    card.appendChild(cardText);

    cardContainer.appendChild(card);
}

window.onload = function() {
    cardTexts.forEach(cardData => createCard(cardData.img, cardData.title, cardData.text));
};