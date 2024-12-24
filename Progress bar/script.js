let progressBar = document.getElementById("progress-bar")
let start = document.getElementById("start")
let stop = document.getElementById("stop")
let reset = document.getElementById("reset");

let interval;
let width = 0;
start.addEventListener("click",()=>{
    interval=setInterval(()=>{
        if(width>=100){
            clearInterval(interval);
        }else{
            width++
            progressBar.style.width=width+"%";
        }
    },100)
})
stop.addEventListener("click",()=>{
    clearInterval(interval);
    interval=null
})
reset.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
    width = 0;
    progressBar.style.width = width + "%";
  });