import { Swiper, Navigation, EffectFade } from 'swiper';
import { convertRemToPixels, isMobile } from './utilities';
Swiper.use([Navigation, EffectFade]);

export default function appCards() {
    if (!isMobile()) return;
    const elements = Array.from(document.querySelectorAll('.js-app-cards'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 2,
            slidesPerColumn: 2,
            slidesPerColumnFill: 'row',
            spaceBetween: convertRemToPixels(0.5),
            watchOverflow: true
        });
    });
}
