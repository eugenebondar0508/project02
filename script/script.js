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
        
        const slider  = document.querySelector('.portfolio-content');
        let dots = document.querySelector('.portfolio-dots');

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
       let dot  = document.querySelectorAll('.dot');

        dot.forEach(() => {
            dot[0].classList.add('dot-active');
        })

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


    // команда 


    const changePhoto = () =>{
        let photos = document.querySelector('.command');
        let photo;

        photos.addEventListener('mouseover', () =>{
            if(event.target.closest('.command__photo')){
                photo = event.target.src;
                event.target.src = event.target.dataset.img;
            }
        });

        photos.addEventListener('mouseout', () =>{
            if(event.target.closest('.command__photo')){
                event.target.src = photo ;

            }
        });
        
    };


    changePhoto();


    // инпуты 


    const validInput = () => {
        const inputsForCalc = document.querySelectorAll('.calc-item');
        function correctForm(str){
            return str.replace(/\s+/g, ' ').replace(/^\s*/,'').replace(/\s*$/,'');
        }

        function capitalize(str){
            return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()});
        };

        
           document.addEventListener('input', () =>{
                if(event.target.matches('.form-name') || event.target.matches('#form2-name')){
                    event.target.value = event.target.value.replace (/[^А-Яа-яЁё\ '']/g, '').toLowerCase();
                } else if(event.target.matches('.form-email')){
                    event.target.value = event.target.value.replace (/([^A-Za-z\- _ @ . ! ~ * '])/g,'');
                } else if(event.target.matches('.form-phone')){
                    event.target.value = event.target.value.replace (/[^0-9\+ ]/g, '');
                } else if(event.target.matches('.mess')){
                    event.target.value = event.target.value.replace  (/^[?!,.а-яА-ЯёЁ0-9\s]+$/g, '');
                }
            })
;

            document.addEventListener('blur', () =>{
                if(event.target.matches('.form-name') || event.target.matches('#form2-name')){
                    event.target.value = correctForm(event.target.value);
                    event.target.value = capitalize(event.target.value);
                } else if(event.target.matches('.form-email') || event.target.matches('.form-phone') || event.target.matches('.mess')){
                    event.target.value = correctForm( event.target.value);
                }
            }, true)
        ;

        inputsForCalc.forEach((elem) =>{
            if(elem.matches('.calc-day') ||elem.matches('.calc-square') ||elem.matches('.calc-count')){
                elem.addEventListener('input', () =>{
                    elem.value = elem.value.replace (/\D/g, '');
                   })
            }

        });


    }

    validInput();


    // калькулятор 


    const calculator = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            totalValue = document.getElementById('total'),
            calcCount = document.querySelector('.calc-count');

            const countSum = () =>{

            let total = 0;
            let countValue = 1;
            let dayValue = 1;

            let typeValue = calcType.options[calcType.selectedIndex].value;
            let squadeValue = +calcSquare.value;
            

            if(calcCount.value > 1){
                countValue += (calcCount.value -1) / 10;
            }

            if(calcDay.value && calcDay.value < 5){
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value > 5 && calcDay.value < 10){
                dayValue *= 1.5;
            }

            if(typeValue && squadeValue){
                    total = price * typeValue * squadeValue * countValue * dayValue;
            }

                totalValue.textContent = total;
            }

            calcBlock.addEventListener('change', (event) =>{
                const target = event.target;

                if(target.matches('.calc-type') || target.matches('.calc-square') || target.matches('.calc-day') || target.matches('.calc-count')){
                    countSum();
                }
            })


    };

    calculator(100);


    // sent-ajax-form

    const sendForm = () =>{
        const errorMessage = 'Что-то пошло не так... ',
              loadMessage = 'Загрузка...',
              successMessage = 'Спасибо! Мы скоро с вами свяжемся';

        const form = document.getElementById('form1');
        const footerForm = document.getElementById('form2');
        const popupForm = document.getElementById('form3');

        const statusMessage = document.createElement('div');
        
        statusMessage.style.cssText = 'font-size: 2rem';

        document.addEventListener('submit', (event) => {
            event.preventDefault();
            if(event.target.matches('form')){
                if(event.target.matches('#form1')){
                    form.appendChild(statusMessage);
                    statusMessage.textContent = loadMessage;
                } else if(event.target.matches('#form2')){
                    footerForm.appendChild(statusMessage);
                    statusMessage.textContent = loadMessage;
                } else if (event.target.matches('#form3')){
                    popupForm.appendChild(statusMessage);
                    statusMessage.textContent = loadMessage;
                    statusMessage.style.color = 'white';
                }
                
                statusMessage.textContent = loadMessage;
                const formData = new FormData(form);
                let body = {};
                formData.forEach((value, key) => {
                    body[key] = value;
                });
                postData(body, () => {
                    statusMessage.textContent = successMessage;
                }, (error) => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                });
    
            }
            

        });

        const postData = (body, outputData, errorData) => {
            const request = new XMLHttpRequest();
            request.addEventListener('readystatechange', () => {
                if(request.readyState !== 4){
                    return;
                } 

                if(request.status === 200){
                    outputData();
                    form.reset();
                    footerForm.reset();
                    popupForm.reset();
                    
                } else {
                    errorData(request.status);  
                    form.reset();
                    footerForm.reset();
                    popupForm.reset();                  
                }
            });

            request.open('POST', './server.php');
            request.setRequestHeader('Content-Type', 'application/json');

            request.send(JSON.stringify(body));
        }
       
    };


    sendForm();



});