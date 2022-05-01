import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';

export default function menu() {
    const burger = document.querySelector('.page-header__burger');
    const menu = document.querySelector('.menu');

    window.menuOpen = false;

    if (!burger || !menu) return;

    const openMenu = () => {
        if (menuOpen) return;
        document.body.classList.add('mobile-menu-open');
        disableBodyScroll(menu, {
            reserveScrollBarGap: true
        });
        window.menuOpen = true;
    };
    const closeMenu = () => {
        if (!window.menuOpen) return;
        document.body.classList.remove('mobile-menu-open');
        clearAllBodyScrollLocks();
        window.menuOpen = false;
    };

    window.openMenu = openMenu;
    window.closeMenu = closeMenu;

    burger.addEventListener('click', event => {
        event.preventDefault();
        if (!window.menuOpen) {
            openMenu();
        } else {
            closeMenu();
        }
    });

    document.addEventListener('click', event => {
        if (event.target.matches('.menu') || event.target.closest('.menu')) return;
        if (event.target.matches('.page-header__burger') || event.target.closest('.page-header__burger')) return;

        closeMenu();
    });

    document.addEventListener('keydown', function(event) {
        if (event.which === 27) {
            closeMenu();
        }
    });
}
