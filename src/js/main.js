(function() {
    const header = document.querySelector('header');
    if (header) {
        const logo = document.createElement('a');
        logo.className = 'logo flex';
        logo.innerHTML = '<img src="src/img/logo.svg"  alt="logo" width="45px" height="45px" viewBox="0 0 100 100"><p>WebSafe</p>';
        logo.onclick = () => window.location.href = 'index.html';

        const navButtons = [
            { text: 'Тест для самопроверки', href: 'test.html' },
            { text: '???', href: 'index.html' },
            { text: '!!!', href: 'index.html' }
        ];

        const navContainer = document.createElement('div');
        navContainer.className = 'nav-container';
        navContainer.appendChild(logo);

        const sep = document.createElement('div');
        sep.className = 'line';
        navContainer.appendChild(sep);

        navButtons.forEach(button => {
            const navButton = document.createElement('button');
            navButton.type = 'button';
            navButton.className = 'nav-button';
            navButton.innerHTML = `<h3>${button.text}</h3>`;
            navButton.onclick = () => window.location.href = button.href;
            navContainer.appendChild(navButton);
        });

        // header.appendChild(logo);
        header.appendChild(navContainer);
    }
})();