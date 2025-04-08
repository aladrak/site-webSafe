(function() {
    const header = document.querySelector('header');
    if (header) {
        const navContainer = document.createElement('div');
        navContainer.className = 'nav-container';
        // Создаем бургер-меню
        const burgerMenu = document.createElement('button');
        burgerMenu.className = 'burger-menu';
        burgerMenu.innerHTML = '&#9776;'; // Иконка "≡"

        // Создаем логотип
        const logo = document.createElement('a');
        logo.className = 'logo flex';
        logo.innerHTML = '<img src="src/img/logo.svg" alt="logo" width="45px" height="45px"><p>WebSafe</p>';
        logo.onclick = () => window.location.href = 'index.html';

        // Добавляем разделительную линию
        const sep = document.createElement('div');
        sep.className = 'line';

        // Добавляем кнопки навигации
        const navButtons = [
            { text: 'Памятка', href: 'index.html' },
            { text: 'Тест для самопроверки', href: 'test.html' },
            { text: 'Памятка для пенсионеров', href: 'page.html' }
        ];
        const btnContainer = document.createElement('div');
        btnContainer.className = 'btn-container';

        navButtons.forEach(button => {
            const navButton = document.createElement('button');
            navButton.type = 'button';
            navButton.className = 'nav-button';
            navButton.innerHTML = `<h3>${button.text}</h3>`;
            navButton.onclick = () => window.location.href = button.href;
            btnContainer.appendChild(navButton);
        });

        burgerMenu.onclick = () => btnContainer.classList.toggle('active');
        navContainer.appendChild(burgerMenu);
        navContainer.appendChild(logo);
        navContainer.appendChild(sep);
        navContainer.appendChild(btnContainer);
        header.appendChild(navContainer);
    }
})();