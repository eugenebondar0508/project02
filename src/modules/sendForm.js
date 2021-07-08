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
                } else {
                    formEmail.style.border = 'none';
                    form.appendChild(statusMessage);
                    statusMessage.textContent = loadMessage;
                }

            } else if(event.target.matches('#form2')){
                if(!footerEmail.value){
                    footerEmail.style.border = 'solid red';
                    return;
                }else if(!message.value){
                    message.style.border = 'solid red';
                    return;
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
                } else {
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