// const botao = document.querySelector(".btn");
// const botaoFechar = document.querySelector(".close-icon");
// const trailerContainer = document.querySelector(".trailer-container");
// const videoEl = document.querySelector("video");

// botao.addEventListener("click", ()=>{
//     trailerContainer.classList.remove("active");
// });

// botaoFechar.addEventListener("click", ()=>{
//     trailerContainer.classList.add("active");
//     videoEl.pause();
//     videoEl.currentTime = 0;
// });


const elements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

elements.forEach(el => observer.observe(el));