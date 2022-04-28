import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function tabs2() {
    const elements = Array.from(document.querySelectorAll('.js-tabs-2'));

    elements.forEach(element => {
        const btns = Array.from(element.querySelectorAll('.js-tabs-btn-2'));
        const items = Array.from(element.querySelectorAll('.js-tabs-item-2'));

        const setActiveTab = index => {
            btns.forEach(btn => btn.classList.remove('active'));
            items.forEach(item => item.classList.remove('active'));

            btns[index].classList.add('active');
            items[index].classList.add('active');

            ScrollTrigger.refresh();
        };

        if (items.length) {
            setActiveTab(0);
        }

        btns.forEach((btn, btnIndex) => {
            btn.addEventListener('click', event => {
                event.preventDefault();
                setActiveTab(btnIndex);
            });
        });
    });
}
