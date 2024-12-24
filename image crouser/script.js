const btn = document.querySelectorAll('.btn');

btn.forEach(button =>{
     button.addEventListener('click', () => {
        const offset = button.dataset.crBtn === "next"? 1 : -1; 
        const slides = document.querySelector("[data-slide]")

        const activeSlide = slides.querySelector("[data-active]")

        let newIndex = [...slides.children].indexOf(activeSlide) + offset;

        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        
        delete activeSlide.dataset.active;


     })

})