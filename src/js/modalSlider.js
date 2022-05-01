import { Swiper, Navigation, EffectFade } from 'swiper';
Swiper.use([Navigation, EffectFade]);

export default function modalSlider() {
    const elements = Array.from(document.querySelectorAll('.js-modal-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 1,
            speed: 500,
            watchOverflow: true,
            navigation: {
                nextEl: element.querySelector('.modal__slider-arrow--next'),
                prevEl: element.querySelector('.modal__slider-arrow--prev')
            }
        });
    });
}
