const startBtn = document.querySelector('#startbtn');

let rendomNumber = Math.floor(Math.random()*101);
let input = document.querySelector("#guessNumber");
let submit = document.querySelector('#submit');
let resute = document.querySelector('#result');
let ans  = document.querySelector('#ans')
submit.disabled=true;
startBtn.addEventListener('click', () => {
    submit.disabled=false;   
});
submit.addEventListener('click',()=>{
    startBtn.disabled=true;
    let guessNumber = input.value;
    let ansnumber = document.createElement('span');
    ansnumber.innerText = `${guessNumber} , `;
        ans.appendChild(ansnumber )
        if(guessNumber>rendomNumber){
            resute.innerHTML="Is to high";
        }else if(guessNumber<rendomNumber){
            resute.innerHTML="Is to low";
        }else if(guessNumber==rendomNumber){
            resute.innerHTML="congrat u win the game";
            setTimeout(()=>{
                location.reload();
            },5000)

        }else{
            resute.innerHTML="Enter valid number between 0 to 100";
        }

   
})