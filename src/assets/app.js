// POPUP VIDEO
const btnElement = document.querySelector('.popup-button');
const trailerElement = document.querySelector('.trailer-container');
const closeButtonElement = document.querySelector('.close-icon');
const videoElement = document.querySelector('trailer-container video'); 

btnElement.addEventListener('click',()=>{
    trailerElement.classList.remove('active');
})

closeButtonElement.addEventListener('click',()=>{
    trailerElement.classList.add('active');
    videoElement.pause();
    videoElement.currentTime = 0;
})




// ANIMAÇÃO DE SCROLL
const elements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

elements.forEach(el => observer.observe(el));