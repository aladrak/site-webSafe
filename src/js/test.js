const quizData = [
    {
        question: "Что такое фишинг?",
        answers: [
            "Это кибератака, при которой злоумышленники пытаются обманом получить личные данные.",
            "Это способ ускорить работу компьютера.",
            "Это техника защиты данных.",
            "Это программа для автоматического ввода пароля."
        ],
        correct: 0,
        explanation: "Фишинг — это вид кибератаки, при котором мошенники выдают себя за доверенные организации или людей, чтобы украсть личные данные, такие как пароли или банковские реквизиты."
    },
    {
        question: "Какие признаки указывают на фишинговое письмо?",
        answers: [
            "Ошибки в тексте и странный адрес отправителя.",
            "Отправитель использует имя известной компании.",
            "Срочный запрос личных данных.",
            "Все перечисленное."
        ],
        correct: 3,
        explanation: "Фишинговые письма часто содержат ошибки в тексте, поддельные адреса отправителей, используют имена известных компаний и создают срочность для манипуляции пользователями."
    },
    {
        question: "Что делать, если вы получили подозрительное письмо с ссылкой?",
        answers: [
            "Перейти по ссылке, чтобы проверить её.",
            "Ответить на письмо, чтобы уточнить у отправителя.",
            "Игнорировать письмо и удалить его.",
            "Ввести данные, чтобы обезопасить себя."
        ],
        correct: 2,
        explanation: "Игнорирование и удаление подозрительного письма — самый безопасный вариант. Переход по ссылкам или ответ на письмо может быть опасным."
    },
    {
        question: "Какой метод НЕ поможет защититься от фишинга?",
        answers: [
            "Использование антивируса.",
            "Внимательное чтение электронных писем.",
            "Установка сложных паролей.",
            "Игнорирование обновлений браузера."
        ],
        correct: 3,
        explanation: "Игнорирование обновлений браузера делает вашу систему уязвимой, так как обновления часто содержат исправления безопасности, защищающие от новых угроз."
    },
    {
        question: "Какие данные чаще всего пытаются получить мошенники?",
        answers: [
            "Историю просмотров сайтов.",
            "Ваш возраст и место работы.",
            "Пароли, данные банковских карт и логины.",
            "Время вашей активности в интернете."
        ],
        correct: 2,
        explanation: "Мошенники чаще всего стремятся получить пароли, данные банковских карт и логины, так как эти данные напрямую позволяют получить доступ к финансовым ресурсам."
    },
    {
        question: "Что делать, если вы случайно ввели данные на фишинговом сайте?",
        answers: [
            "Ничего не делать.",
            "Быстро закрыть сайт.",
            "Сменить пароли и сообщить в банк.",
            "Пожаловаться на сайт в интернете."
        ],
        correct: 2,
        explanation: "Если вы ввели данные на фишинговом сайте, важно немедленно сменить пароли и связаться с банком, чтобы предотвратить несанкционированный доступ."
    },
    {
        question: "Как мошенники чаще всего маскируют фишинговые ссылки?",
        answers: [
            "Используют короткие ссылки (например, bit.ly).",
            "Создают похожие доменные имена (например, g00gle.com вместо google.com).",
            "Добавляют много текста в письмо, чтобы отвлечь внимание.",
            "Все перечисленное."
        ],
        correct: 3,
        explanation: "Мошенники используют все эти методы, чтобы скрыть подлинный адрес фишингового сайта и обмануть пользователей."
    }
];

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const progressBar = document.getElementById("progress-bar");
const feedbackEl = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");

let currentQuestion = 0;
let score = 0;

// Функция для загрузки вопроса
function loadQuestion() {
    const currentData = quizData[currentQuestion];
    questionEl.textContent = currentData.question;
    answersEl.innerHTML = "";
    feedbackEl.textContent = ""; // Очищаем обратную связь

    // Обновляем прогресс-бар
    updateProgressBar();

    currentData.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.addEventListener("click", () => checkAnswer(index, currentData.correct));
        answersEl.appendChild(button);
    });

    nextButton.style.display = "none"; // Скрываем кнопку "Далее"
}

// Функция для проверки ответа
function checkAnswer(selectedIndex, correctIndex) {
    const buttons = answersEl.querySelectorAll("button");
    buttons.forEach((button, index) => {
        if (index === correctIndex) {
            button.style.backgroundColor = "green"; // Правильный ответ
        } else if (index === selectedIndex && index !== correctIndex) {
            button.style.backgroundColor = "red"; // Неправильный ответ
        }
        button.disabled = true; // Отключаем кнопки после выбора
    });

    if (selectedIndex === correctIndex) {
        score++;
    }

    // Показываем правильный ответ и объяснение
    const currentData = quizData[currentQuestion];
    feedbackEl.innerHTML = `
        <strong>Правильный ответ:</strong> ${currentData.answers[correctIndex]}<br>
        <strong>Объяснение:</strong> ${currentData.explanation}
    `;

    currentQuestion++;
    nextButton.style.display = "block"; // Показываем кнопку "Далее"
}

// Функция для отображения результатов
function showResults() {
    let feedback = '';
    if (score >= 5) {
        feedback = 'Отличный результат! Вы хорошо разбираетесь в интернет-безопасности.';
    } else if (score >= 3) {
        feedback = 'Неплохо, но стоит повторить основные правила безопасности.';
    } else {
        feedback = 'Вам нужно больше узнать о фишинге и интернет-безопасности.';
    }

    questionEl.textContent = `Вы ответили правильно на ${score} из ${quizData.length} вопросов!`;
    feedbackEl.innerHTML = `<strong>${feedback}</strong>`;
    answersEl.innerHTML = "";
    progressBar.style.width = "100%"; // Заполняем прогресс-бар полностью
    nextButton.style.display = "none";
}

// Функция для обновления прогресс-бара
function updateProgressBar() {
    const progressPercentage = ((currentQuestion + 1) / quizData.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

// Обработчик кнопки "Далее"
nextButton.addEventListener("click", () => {
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

// Инициализация теста
loadQuestion();