import { Swiper, Navigation, EffectFade } from 'swiper';
import { isMobile } from './utilities';
Swiper.use([Navigation, EffectFade]);

export default function howToGetSteps() {
    if (!isMobile()) return;
    const elements = Array.from(document.querySelectorAll('.js-hot-to-get-steps'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 'auto',
            watchOverflow: true
        })
    })
}