const quizData = [
{
    question: "Что такое фишинг?",
    answers: [
        "Это кибератака, при которой злоумышленники пытаются обманом получить личные данные.", 
        "Это способ ускорить работу компьютера.", 
        "Это техника защиты данных.", 
        "Это программа для автоматического ввода пароля."
    ],
    correct: 0
},
{
    question: "Какие признаки указывают на фишинговое письмо?",
    answers: [
        "Ошибки в тексте и странный адрес отправителя.", 
        "Отправитель использует имя известной компании.", 
        "Срочный запрос личных данных.", 
        "Все перечисленное."
    ],
    correct: 3
},
{
    question: "Что делать, если вы получили подозрительное письмо с ссылкой?",
    answers: [
        "Перейти по ссылке, чтобы проверить её.",
        "Ответить на письмо, чтобы уточнить у отправителя.", 
        "Игнорировать письмо и удалить его.", 
        "Ввести данные, чтобы обезопасить себя."
    ],
    correct: 2
},
{
    question: "Какой метод НЕ поможет защититься от фишинга?",
    answers: [
        "Использование антивируса.",
        "Внимательное чтение электронных писем.", 
        "Установка сложных паролей.", 
        "Игнорирование обновлений браузера."
    ],
    correct: 3
},
{
    question: "Какие данные чаще всего пытаются получить мошенники?",
    answers: [
        "Историю просмотров сайтов.",
        "Ваш возраст и место работы.", 
        "Пароли, данные банковских карт и логины.", 
        "Время вашей активности в интернете."
    ],
    correct: 2
},
{
    question: "Что делать, если вы случайно ввели данные на фишинговом сайте?",
    answers: [
        "Ничего не делать.",
        "Быстро закрыть сайт.", 
        "Сменить пароли и сообщить в банк.", 
        "Пожаловаться на сайт в интернете."
    ],
    correct: 2
}
];

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextButton = document.getElementById("next-button");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
const currentData = quizData[currentQuestion];
questionEl.textContent = currentData.question;
answersEl.innerHTML = "";

currentData.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.addEventListener("click", () => checkAnswer(index));
    answersEl.appendChild(button);
});
}

function checkAnswer(selectedIndex) {
const correctIndex = quizData[currentQuestion].correct;
if (selectedIndex === correctIndex) {
    score++;
}
currentQuestion++;
if (currentQuestion < quizData.length) {
    loadQuestion();
} else {
    showResults();
}
}

function showResults() {
questionEl.textContent = `Вы ответили правильно на ${score} из ${quizData.length} вопросов!`;
answersEl.innerHTML = "";
nextButton.style.display = "none";
}

nextButton.addEventListener("click", () => {
nextButton.style.display = "none";
loadQuestion();
});

// Запуск теста
loadQuestion();
