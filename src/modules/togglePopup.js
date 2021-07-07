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

export default togglePopup;