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


    
};

export default toggleMenu;