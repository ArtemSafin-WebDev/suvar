import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(ScrollTrigger, Flip);

export default function showAll() {
    const elements = Array.from(document.querySelectorAll('.js-show-all'));

    elements.forEach(element => {
        element.addEventListener('click', event => {
            event.preventDefault();
            const state = Flip.getState('.reviews__slider-card-text');
            element.parentElement.classList.toggle('all-shown');

            Flip.from(state, {
                ease: 'power1.inOut',
                duration: 0.8,
                onComplete: () => {
                    ScrollTrigger.refresh();
                }
            });
        });
    });
}
