const sendForm = () =>{
    const errorMessage = 'Что-то пошло не так... ',
          loadMessage = 'Загрузка...',
          successMessage = 'Спасибо! Мы скоро с вами свяжемся';

    const form = document.getElementById('form1');
    const footerForm = document.getElementById('form2');
    const popupForm = document.getElementById('form3');

    const formEmail = document.getElementById('form1-email');
    const footerEmail = document.getElementById('form2-email');
    const popupEmail = document.getElementById('form3-email');

    const formPhone = document.getElementById('form1-phone');
    const footerPhone = document.getElementById('form2-phone');
    const popupPhone = document.getElementById('form3-phone');

    const inputs = document.querySelectorAll('input');

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        })
    };

    const message = document.getElementById('form2-message');

    const statusMessage = document.createElement('div');
    
    statusMessage.style.cssText = 'font-size: 2rem';

    document.addEventListener('submit', (event) => {
        event.preventDefault();
        if(event.target.matches('form')){
            if(event.target.matches('#form1')){
                if(!formEmail.value){
                    formEmail.style.border = 'solid red';
                    return;
                } else if(!formEmail.value.match(/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i)){
                    formEmail.style.border = 'solid red';
                    return;
                } else if(!formPhone.value.match(/^\d[\d\(\)\ -]{4,14}\d$/)){
                    formPhone.style.border = 'solid red';
                    return;
                } else if(formEmail.value.match(/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i) && formPhone.value.match(/^\d[\d\(\)\ -]{4,14}\d$/)){
                    formEmail.style.border = 'none';
                    formPhone.style.border = 'none';
                }

                 else {
                    formEmail.style.border = 'none';
                    form.appendChild(statusMessage);
                    statusMessage.textContent = loadMessage;
                }

            } else if(event.target.matches('#form2')){
                if(!footerEmail.value){
                    footerEmail.style.border = 'solid red';
                    return;
                } else if (!footerEmail.value.match(/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i)){
                    footerEmail.style.border = 'solid red';
                    return;
                } else if(!footerPhone.value.match(/^\d[\d\(\)\ -]{4,14}\d$/)){
                    footerPhone.style.border = 'solid red';
                    return;
                } else if(footerEmail.value.match(/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i) && footerPhone.value.match(/^\d[\d\(\)\ -]{4,14}\d$/)){
                    footerEmail.style.border = 'none';
                    footerPhone.style.border = 'none';
                }
                else {
                    message.style.border = 'none';
                    footerEmail.style.border = 'none';
                    footerForm.appendChild(statusMessage);
                    statusMessage.textContent = loadMessage;}  
            } else if (event.target.matches('#form3')){
                if(!popupEmail.value){
                    popupEmail.style.border = 'solid red';
                    return;
                } else if(!popupEmail.value.match(/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i)){
                    popupEmail.style.border = 'solid red';
                    return;
                } else if(!popupPhone.value.match(/^\d[\d\(\)\ -]{4,14}\d$/)){
                    popupPhone.style.border = 'solid red';
                    return;
                } else if(popupEmail.value.match(/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i) && popupPhone.value.match(/^\d[\d\(\)\ -]{4,14}\d$/)){
                    popupEmail.style.border = 'none';
                    popupPhone.style.border = 'none';
                }
                 else {
                    popupForm.appendChild(statusMessage);
                    statusMessage.textContent = loadMessage;
                    popupEmail.style.border = 'none';
                    statusMessage.style.color = 'white';
                }
       
            }
            
            statusMessage.textContent = loadMessage;
            
            if(event.target.matches('form')){
                const formData = new FormData(event.target);
            
            
            let body = {};
            formData.forEach((value, key) => {
                body[key] = value;
            });
            
            postData(body)
            .then(() => {
                statusMessage.textContent = successMessage;
            })
            .catch((error) => {
                statusMessage.textContent = errorMessage;
                console.log(error)
            });
        }

        }
        

    });

    const postData = (body) => {
        return new Promise ((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.addEventListener('readystatechange', () => {
                if(request.readyState !== 4 ){
                    return;
                } 

                if(request.status === 200){
                    resolve();
                    clearInputs();
                    // form.reset();
                    // footerForm.reset();
                    // popupForm.reset();
                    
                } else {
                    reject(request.status);  
                    clearInputs();
                    // form.reset();
                    // footerForm.reset();
                    // popupForm.reset();                  
                }
            });

            request.open('POST', './server.php');
            request.setRequestHeader('Content-Type', 'application/json');

            request.send(JSON.stringify(body));
        })
    }

   
};


export default sendForm;