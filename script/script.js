window.addEventListener('DOMContentLoaded', function(){
    'use strict';

// Timer

    function countTimer(deadline){
        let timerHours = document.querySelector('#timer-hours');
        let timerMinutes = document.querySelector('#timer-minutes');
        let timerSeconds = document.querySelector('#timer-seconds');
        const interval =  setInterval(function(){
            updateClock();
        }, 1000);

        function getTimeRemaning(){

            let dateStop = new Date(deadline).getTime();
            let dateNow = new Date().getTime();
            let timeRemaining = (dateStop - dateNow) / 1000;
            let seconds = Math.floor(timeRemaining % 60);
            let minutes = Math.floor((timeRemaining / 60) % 60);
            let hours = Math.floor(timeRemaining / 60 /60);
            if(timeRemaining <= 0){

                hours = '00';
                minutes = '00';
                seconds = '00'; 

            }
            return {
                timeRemaining,
                hours,
                minutes,
                seconds
            };

            
        }

        function updateClock(){
            let timer = getTimeRemaning();
            if(timer.hours < 10){
                timerHours.textContent = ( '0' + timer.hours).slice(-2);
            } else {
                timerHours.textContent =  timer.hours;
            };
            
            if(timer.minutes < 10){
                timerMinutes.textContent = ('0' + timer.minutes).slice(-2);
            } else {
                timerMinutes.textContent = timer.minutes;
            };
            
            
            if (timer.seconds < 10){
                timerSeconds.textContent =('0' + timer.seconds).slice(-2);
            } else {
                timerSeconds.textContent = timer.seconds;
            };
            
        }
        updateClock()
    }

    countTimer('01 july 2021');


    // Menu

    const toggleMenu = () =>{

        const btnMenu = document.querySelector('.menu');
        const menu = document.querySelector('menu');
        const body = document.querySelector('body');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };

        btnMenu.addEventListener('click', handlerMenu);
        
        menu.addEventListener('click', () => {
            if(event.target.tagName !== 'A'){
                return;
            }
            handlerMenu(event);
        });


        
    }

 toggleMenu();


    // popup


    const togglePopup = () =>{

        const popup = document.querySelector('.popup');
        const popupbtn = document.querySelectorAll('.popup-btn');
        const popupContent = document.querySelector('.popup-content');

        popupbtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
            })
        });

        popupbtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                let start = Date.now();
                let width = document.documentElement.clientWidth;

                if (width > 768 ){
                    let timer = setInterval(() =>{
                        let timePassed = Date.now() - start;
    
                        popupContent.style.top = timePassed / 5 + 'px';
    
                        if (timePassed > 1000) clearInterval(timer);
                    }, 20);
                }
                

            })
        })

        popup.addEventListener('click', (event) =>{
            let target = event.target;

            if(target.classList.contains('popup-close')){
                popup.style.display = 'none';
            } else{
                target = target.closest('.popup-content');
                if(!target){
    
                    popup.style.display = 'none';
                }
            }

        })


    };

    togglePopup();


    // anchors

    const serviceBlock = document.querySelector('a[href*="service-block"]');
    const portfolio = document.querySelector('a[href*="portfolio"]');
    const calc = document.querySelector('a[href*="calc"]');
    const command = document.querySelector('a[href*="command"]');
    const connect = document.querySelector('a[href*="connect"]');
    

    const anchors = [serviceBlock, portfolio, calc, command, connect];

    for (let anchor of anchors){
        anchor.addEventListener('click', (event) => {
            event.preventDefault();
            const blockID = anchor.getAttribute('href')
            document.querySelector('' + blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'

            })
        })
    }


    // Табы 


    const tabs = () =>{
        const tabHeader = document.querySelector('.service-header');
        const tab = tabHeader.querySelectorAll('.service-header-tab');
        const tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {
            for (let i = 0; i < tabContent.length; i++){
                if(index === i){
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
               
            }
        }

        tabHeader.addEventListener('click', (event) =>{

            let target = event.target;
            target = target.closest('.service-header-tab');

                if(target){
              tab.forEach((item, i) => {
                        if(item === target){
                            toggleTabContent(i);
                        }
                    });
                   
                }
                
        })

    };
    
    tabs()


    // слайдер 

    const slider = () =>{
        const slide = document.querySelectorAll('.portfolio-item');
        const btn  = document.querySelectorAll('.portfolio-btn');
        const dot  = document.querySelectorAll('.dot');
        const slider  = document.querySelector('.portfolio-content');
        const dots = document.querySelector('.portfolio-dots');

        let currentSlide = 0;
        let interval;

        let setDots = () =>{
            for(let i = 0; i < slide.length; i++){
                let li = document.createElement('li');
                li.classList.add('dot');
                dots.append(li);
            }

            
        }
        setDots();



        const prevSlide = (elem, index, strClass) =>{
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) =>{
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () =>{


            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if(currentSlide >= slide.length){
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
            
         };
          const startSlide = (time = 3000) =>{
             interval =  setInterval(autoPlaySlide, time);
             setInterval(setDots, time)

        };

            const stopSlide = () => {

                clearInterval(interval);
        
         };

         slider.addEventListener('click', (event) => {
             event.preventDefault();

             let target = event.target;
             if(!target.matches('.portfolio-btn, .dot')){
                 return;
             }

             prevSlide(slide, currentSlide, 'portfolio-item-active');
             prevSlide(dot, currentSlide, 'dot-active');

             if(target.matches('#arrow-right')){
                 currentSlide++;
             } else if (target.matches('#arrow-left')){
                currentSlide--;
             } else if (target.matches('.dot')){
                 dot.forEach((elem, index) =>{
                     if(elem === target){
                         currentSlide = index;
                     }
                 });
             }

             if(currentSlide >= slide.length){
                 currentSlide = 0;
             }

             if(currentSlide < 0){
                 currentSlide = slide.length - 1;
             }
             nextSlide(slide, currentSlide, 'portfolio-item-active');
             nextSlide(dot, currentSlide, 'dot-active');
         });


         slider.addEventListener('mouseover', (event) => {
             if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
                 stopSlide();
             }
         });

         slider.addEventListener('mouseout', (event) => {
            if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
                startSlide();
            }
        });

    startSlide(1500);
};

    slider();




});