let input = document.querySelector('#input');
let lower = document.querySelector('#lowercase');
let upper = document.querySelector('#uppercase');
let camel = document.querySelector('#camalcase');
let pacal = document.querySelector('#pascalcase');
let snake = document.querySelector('#snakecase');
let keba = document.querySelector('#kebabcase');
let trim = document.querySelector('#trimcase');

input.addEventListener("keyup",()=>{
   let srt = input.value;
   lower.style.textTransform="lowercase";
   lower.innerText=srt;
   upper.style.textTransform="uppercase";
   upper.innerText=srt;

   let snakestr = srt.split(' ').join('_');
   snake.innerText=snakestr;

   let kebastr = srt.split(' ').join('-');
   keba.innerText=kebastr;

   let trimstr = srt.split(' ').join('');
   trim.innerText=trimstr;

   // CamelCase
   let camelStr = srt.split(' ')
   .map((word, index) => index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
   .join('');
camel.innerText = camelStr;

// PascalCase
let pascalStr = srt.split(' ')
   .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
   .join('');
pacal.innerText = pascalStr;
   

  

})

