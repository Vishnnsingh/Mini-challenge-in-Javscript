let breakTime = document.querySelector(".breaktime");
let addOne = document.querySelector(".addone");
let minusone = document.querySelector(".minusone");
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');
let btime = 5;

addOne.addEventListener('click', () => {
    if (btime < 30) {
        btime++;
        breakTime.innerHTML = btime > 9 ? btime : `0${btime}`
    }
})
minusone.addEventListener('click', () => {
    if (btime > 2) {
        btime--;
        breakTime.innerHTML = btime > 9 ? btime : `0${btime}`
    }
})


let sessiontime = document.querySelector(".sessiontime");
let addoneSection = document.querySelector(".addone-section");
let minusoneSection = document.querySelector(".minusone-section");
let stime = 25;

addoneSection.addEventListener('click', () => {

    stime++;
    sessiontime.innerHTML = stime > 9 ? stime : `0${stime}`
    min.innerHTML = sessiontime.innerHTML;

})
minusoneSection.addEventListener('click', () => {
    if (stime > 5) {
        stime--;
        sessiontime.innerHTML = stime > 9 ? stime : `0${stime}`
    }
    min.innerHTML = sessiontime.innerHTML;

})

const play = document.querySelector('#play')

const restart = document.querySelector('#restart')
let timerInterval;
let isRunning = false;

play.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        play.innerText = "Pause";
        timerInterval = setInterval(() => {
            let minutes = parseInt(min.innerText);
            let seconds = parseInt(sec.innerText);

            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(timerInterval);
                    play.innerText = "Play";
                    isRunning = false;
                    alert("Time's up")
                    return
                }
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }
            min.innerText = minutes > 9 ? minutes : `0${minutes}`;
            sec.innerText = seconds > 9 ? seconds : `0${seconds}`;

        }, 1000)
    } else {
        isRunning = false;
        play.innerText = "Play";
        clearInterval(timerInterval);
    }
})

restart.addEventListener('click', () => {
    clearInterval(timerInterval);
    isRunning = false;
    play.innerText = "Play";
    min.innerText = sessiontime.innerHTML;
    sec.innerText = "00";
})




