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

});