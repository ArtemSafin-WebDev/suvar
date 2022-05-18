import { isMobile } from './utilities';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from './gsap/esm/DrawSVGPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, Navigation, EffectFade } from 'swiper';
Swiper.use([Navigation, EffectFade]);
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);



export default function aboutLife() {
    const elements = Array.from(document.querySelectorAll('.js-about-life'));

    elements.forEach(element => {
        if (!isMobile()) {
            const sliderWrapper = element.querySelector('.about-life__slider');
            const cards = Array.from(element.querySelectorAll('.about-life__slider-card'));

            sliderWrapper.innerHTML = `<div class="swiper-container">
                <div class="swiper-wrapper"> 
                </div>
            </div>`;

            const groupedCards = [];
            const cardsToSkip = [];

            const currentWrapper = sliderWrapper.querySelector('.swiper-wrapper');

            cards.forEach((card, cardIndex) => {
                if (cardIndex % 3 == 0) {
                    // console.log('Pushing card with index', cardIndex + 1);

                    groupedCards.push([card]);
                } else {
                    if (cardsToSkip.includes(card)) {
                        // console.log('Skipping card', cardIndex + 1)
                        return;
                    }
                    const nextCard = cards[cardIndex + 1];
                    if (nextCard) {
                        // console.log('Cards must be together', cardIndex + 1, cardIndex + 2);
                        groupedCards.push([card, nextCard]);
                        cardsToSkip.push(nextCard);
                    } else {
                        groupedCards.push([card]);
                    }
                }
            });

            console.log(groupedCards);

            groupedCards.forEach(group => {
                const slide = document.createElement('div');
                slide.className = 'swiper-slide';
                slide.append(...group);
                currentWrapper.appendChild(slide);
            });

            ScrollTrigger.refresh();
        }

        const container = element.querySelector('.swiper-container');
        const wrapper = element.querySelector('.swiper-wrapper');

        const nextArrow = element.querySelector('.slider-arrows__btn--next');
        const prevArrow = element.querySelector('.slider-arrows__btn--prev');

        new Swiper(container, {
            watchOverflow: true,
            slidesPerView: 'auto',
            speed: 700,
            loop: true,
            loopedSlides: 4,
            navigation: {
                nextEl: nextArrow,
                prevEl: prevArrow
            }
        });
    });
}
