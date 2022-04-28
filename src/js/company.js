import { Swiper, Navigation, EffectFade } from 'swiper';
Swiper.use([Navigation, EffectFade]);

export default function company() {
    const elements = Array.from(document.querySelectorAll('.js-company'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 'auto',
            watchOverflow: true,
            slideToClickedSlide: true,
            threshold: 10,
            navigation: {
                nextEl: element.querySelector('.slider-arrows__btn--next'),
                prevEl: element.querySelector('.slider-arrows__btn--prev')
            }
        });
    });
}
