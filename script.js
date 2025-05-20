    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');

    btn.addEventListener('click', () => {
        const isOpen = menu.classList.contains('max-h-0');
        if (isOpen) {
            menu.classList.remove('max-h-0', 'opacity-0');
            menu.classList.add('max-h-96', 'opacity-100');
        } else {
            menu.classList.remove('max-h-96', 'opacity-100');
            menu.classList.add('max-h-0', 'opacity-0');
        }
    });

