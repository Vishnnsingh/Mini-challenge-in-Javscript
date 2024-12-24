let input = document.querySelector("#input");
let constainer = document.querySelector("#itemContainer");
let showItem = document.querySelector("#make")

input.addEventListener("keyup",(e)=>{
        let inputItem = e.target.value;
    
        showItem.innerHTML=inputItem;
        let item = document.createElement("div");
        item.innerHTML=`<p>${inputItem} <span style = "color:red" class="close">x</span></p>`

   
        if(e.code==="Enter"){
         constainer.appendChild(item);
         showItem.innerHTML="";
         input.value="";
        
        let closeButton = item.querySelector(".close");
        closeButton.addEventListener("click", () => {
            item.remove(); 
        });
    }

})
