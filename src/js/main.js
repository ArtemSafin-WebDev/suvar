import polyfills from './polyfills';
import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';
import validation from './validation';
import customSelects from './customSelects';
import masks from './masks';
import fileUpload from './fileUpload';
import anchorLinks from './anchorLinks';
import mediaPlayer from './mediaPlayer';
import datepicker from './datepicker';
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

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
    polyfills();
    detectTouch();
    setScrollbarWidth();
    validation();
    customSelects();
    masks();
    fileUpload();
    anchorLinks();
    accordions();
    mediaPlayer();
    modals();
    datepicker();
    aboutLife();
    tabs();
    tabs2();
    company();
    howToGetSteps();
    appCards();
    showAll();
    maps();

});

document.addEventListener('lazyloaded', () => {
    ScrollTrigger.refresh();
});

window.addEventListener('load', function () {
    document.body.classList.add('loaded');
    ScrollTrigger.refresh();
    setTimeout(() => document.body.classList.add('animatable'), 300);
});
