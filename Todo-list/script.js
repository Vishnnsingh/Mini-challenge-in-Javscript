let todoItem = document.querySelector("#listItem"), edit = document.querySelectorAll(".edit"), maincontainer = document.querySelector(".container");

todoItem.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let list = document.createElement("p");
    list.innerHTML = `${e.target.value}<span class="edit"> edit</span> <span class="delete">x</span>`;
    maincontainer.appendChild(list), e.target.value = "";
  }
});

maincontainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) e.target.parentElement.remove();
  if (e.target.classList.contains("edit")) {
    let parent = e.target.parentElement, input = document.createElement("input");
    input.type = "text", parent.innerHTML = "", parent.appendChild(input);
    let saveButton = document.createElement("span");
    saveButton.textContent = "save", saveButton.classList.add("save"), parent.appendChild(saveButton);
  }
  if (e.target.classList.contains("save")) {
    let parent = e.target.parentElement, input = parent.querySelector("input");
    parent.innerHTML = `${input.value} <span class="edit">edit</span> <span class="delete">x</span>`;
  }
});





// let todoItem = document.querySelector("#listItem");
// let edit = document.querySelectorAll(".edit");

// let maincontainer = document.querySelector(".container")

// todoItem.addEventListener("keydown",(e)=>{
//     if(e.key==="Enter"){
//         let list = document.createElement("p");
//         list.innerHTML = `${e.target.value}<span class="edit"> edit</span> <span class="delete">x</span>`;
//         maincontainer.appendChild(list);
//         e.target.value = "";
//     }
// })
// maincontainer.addEventListener("click",(e)=>{
//     if(e.target.classList.contains("delete")){
//         e.target.parentElement.remove();
//     }
// })
// maincontainer.addEventListener("click",(e)=>{
//     if(e.target.classList.contains("edit")){
//   let parent = e.target.parentElement;
//   let currentText = parent.firstChild.textContent.trim();
//   let input = document.createElement("input");
//   input.type="text";
//   parent.innerHTML="";
//   parent.appendChild(input)
//   let saveButton = document.createElement("span")
//   saveButton.textContent="save"
//   saveButton.classList.add("save")
//   parent.appendChild(saveButton)

//     }
// })
// maincontainer.addEventListener("click", (e) => {
//     if (e.target.classList.contains("save")) {
//         let parent = e.target.parentElement;
//         let input = parent.querySelector("input");
//         let updatedText = input.value;
//         parent.innerHTML = `${updatedText} <span class="edit">edit</span> <span class="delete">x</span>`;
//     }
// });