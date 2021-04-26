import {SlideNav} from './slide.js';

const slide = new SlideNav('.slide1', '.slide-wrapper1');
slide.init();
slide.addArrow('.prev1', '.next1');
slide.addControl('.custom-controls1');

const slide2 = new SlideNav('.slide2', '.slide-wrapper2');
slide2.init();
slide2.addArrow('.prev2', '.next2');
slide2.addControl('.custom-controls2');