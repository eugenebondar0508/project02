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


export default changePhoto;