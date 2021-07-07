const goAnchors = () => {
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
};

export default goAnchors;