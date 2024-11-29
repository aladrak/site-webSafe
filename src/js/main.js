document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    if (header) {
        // Создаем логотип
        const logo = document.createElement('button');
        logo.type = 'button';
        logo.className = 'logo';
        logo.innerHTML = '<img src="src/img/logo.png" style="width: 45px; height: 45px;">';
        logo.onclick = () => window.location.href = 'index.html';

        // Создаем кнопки навигации
        const navButtons = [
            { text: 'Тест для самопроверки', href: 'test.html' },
            { text: '???', href: 'index.html' },
            { text: '!!!', href: 'index.html' }
        ];

        const navContainer = document.createElement('div');
        navContainer.className = 'nav-container';

        navButtons.forEach(button => {
            const navButton = document.createElement('button');
            navButton.type = 'button';
            navButton.className = 'nav-button';
            navButton.innerHTML = `<h3>${button.text}</h3>`;
            navButton.onclick = () => window.location.href = button.href;
            navContainer.appendChild(navButton);
        });

        // Добавляем логотип и кнопки навигации в header
        header.appendChild(logo);
        header.appendChild(navContainer);
    }
});