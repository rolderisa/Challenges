document.addEventListener("DOMContentLoaded",function(){
    const galleryAnimals=document.querySelectorAll('.gallery-Animal');
    galleryAnimals.forEach(animal =>{
        animal.addEventListener('mouseover',()=>{
            animal.style.filter = 'brightness(0%)';
        });
        animal.addEventListener('mouseout', () => {
            animal.style.filter = 'brightness(100%)';
        });
    });
});