const btn = document.querySelectorAll('.btn');

btn.forEach(button=>{
 button.addEventListener('click',()=>{
    const ofset = button.dataset.crBtn==="next" ? 1 : -1;
    const slides = document.querySelector('[data-slide]');

    const activeslide = slides.querySelector('[data-active]');

    let newIndex = [...slides.children].indexOf(activeslide) + ofset;
    console.log(newIndex);

    if(newIndex<0) newIndex = slides.children.length - 1;
    if(newIndex>=slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeslide.dataset.active;


 })
 

})