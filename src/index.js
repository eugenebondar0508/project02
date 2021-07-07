'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import goAnchors from './modules/goAnchors';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changePhoto from './modules/changePhoto';
import validInput from './modules/validInput';
import calculator from './modules/calculator';
import sendForm from './modules/sendForm';

// Timer
    countTimer('21 july 2021');
    // Menu
 toggleMenu();
    // popup
    togglePopup();
    // anchors
    goAnchors();
    // Табы 
    tabs()
    // слайдер 
    slider();
    // команда 
    changePhoto();
    // инпуты 
    validInput();
    // калькулятор 
    calculator(100);
    // sent-ajax-form
    sendForm();