const validInput = () => {
    const inputsForCalc = document.querySelectorAll('.calc-item');
    function correctForm(str){
        return str.replace(/\s+/g, ' ').replace(/^\s*/,'').replace(/\s*$/,'');
    }

    function capitalize(str){
        return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()});
    };

    const phone = document.querySelector('#form1-phone');
    
       document.addEventListener('input', () =>{
            if(event.target.matches('.form-name') || event.target.matches('#form2-name')){
                event.target.value = event.target.value.replace (/[^А-Яа-яЁё\ '']/g, '').toLowerCase();
            } else if(event.target.matches('.form-email')){
                event.target.value = event.target.value.replace (/([^A-Za-z0-9\- _ @ . ! ~ * '])/g,'');
            } else if(event.target.matches('.form-phone')){
                if(!phone.value.match('/^[\d]{1}\ \([\d]{2,3}\)\ [\d]{2,3}-[\d]{2,3}-[\d]{2,3}$/')){
                    return;
                }
                event.target.value = event.target.value.replace (/[^0-9\+ ]/g, '');
            } else if(event.target.matches('.mess')){
                event.target.value = event.target.value.replace  (/[^?!,.а-яА-ЯёЁ0-9\s]+$/g, '');
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


};


export default validInput;