import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';
import validation from './validation';
import customSelects from './customSelects';
import masks from './masks';
import anchorLinks from './anchorLinks';
import accordions from './accordions';
import modals from './modals';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutLife from './aboutLife';
import tabs from './tabs';
import company from './company';
import howToGetSteps from './howToGetSteps';
import appCards from './appCards';
import tabs2 from './tabs-2';
import showAll from './contactsShowAll';
import maps from './maps';
import ticker from './ticker';
import reviewsSlider from './reviewsSlider';
import menu from './menu';
import modalSlider from './modalSlider';
import clientHeight from './clientHeight';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
    detectTouch();
    setScrollbarWidth();
    clientHeight();
    validation();
    customSelects();
    masks();
    anchorLinks();
    accordions();
    modals();
    aboutLife();
    tabs();
    tabs2();
    company();
    howToGetSteps();
    appCards();
    showAll();
    maps();
    ticker();
    reviewsSlider();
    menu();
    modalSlider();
   

});

document.addEventListener('lazyloaded', () => {
    ScrollTrigger.refresh();
});

window.addEventListener('load', function () {
    document.body.classList.add('loaded');
    ScrollTrigger.refresh();
    setTimeout(() => document.body.classList.add('animatable'), 300);
});
