// let side = document.querySelector("#side");
// let side2 = document.querySelector("#side2");
// let info = document.querySelector("#info");
// let mass = document.querySelector("#mass");
// let duration = document.querySelector("#duration");
// let durOut = document.querySelector("#duration-output");
// let tosterDiv = document.querySelector(".toster-container");
// let submit = document.querySelector(".btn");

// submit.addEventListener("click", () => {
//     tosterDiv.className = `${side2.value}-${side.value}`;
//     let message = mass.value.trim();
//     if (!message) {
//         alert("Please enter a message!");
//         return;
//     }
//     let information = info.value;
//     tosterDiv.innerHTML = `<p>${message}</p> <span id="crose">x</span>`;
//     switch (information) {
//         case "normal":
//             tosterDiv.style.color = "black";
//             tosterDiv.style.display="flex";
//             tosterDiv.style.gap="10px";
//             tosterDiv.style.padding="10px";
//             tosterDiv.style.border = "1px solid black";
//             break;
//         case "error":
//             tosterDiv.style.display="flex";
//             tosterDiv.style.color = "red";
//             tosterDiv.style.gap="10px";
//             tosterDiv.style.padding="10px";
//             tosterDiv.style.border="1px solid red"
//             break;
//         case "success":
//             tosterDiv.style.display="flex";
//             tosterDiv.style.color = "green";
//             tosterDiv.style.gap="10px";
//             tosterDiv.style.padding="10px";
//             tosterDiv.style.border="1px solid green"
//             break;
//         case "warning":
//             tosterDiv.style.display="flex";
//             tosterDiv.style.color = "yellow";
//             tosterDiv.style.gap="10px";
//             tosterDiv.style.padding="10px";
//             tosterDiv.style.border="1px solid yellow"
//             break;
//         case "info":
//             tosterDiv.style.display="flex";
//             tosterDiv.style.color = "blue";
//             tosterDiv.style.gap="10px";
//             tosterDiv.style.padding="10px";
//             tosterDiv.style.border="1px solid blue"
//             break;
//     }

//     document.querySelector("#crose").addEventListener("click", () => {
//         tosterDiv.style.display="none";
//     });
//     let delay = duration.value * 1000;
//     setTimeout(() => {
//         tosterDiv.style.display="none";
//     }, delay);
// });

// duration.addEventListener("input", () => {
//     durOut.innerHTML = duration.value;
// });


let side = document.querySelector("#side");
let side2 = document.querySelector("#side2");
let info = document.querySelector("#info");
let mass = document.querySelector("#mass");
let duration = document.querySelector("#duration");
let durOut = document.querySelector("#duration-output");
let tosterDiv = document.querySelector(".toster-container");
let submit = document.querySelector(".btn");

submit.addEventListener("click", () => {
    if (!mass.value.trim()) return alert("Please enter a message!");

    tosterDiv.className = `${side2.value}-${side.value}`;
    tosterDiv.innerHTML = `<p>${mass.value.trim()}</p><span id="crose">x</span>`;
    tosterDiv.style.cssText = `display: flex; gap: 10px; padding: 10px; border: 1px solid ${info.value}; color: ${info.value};`;

    document.querySelector("#crose").addEventListener("click", () => tosterDiv.style.display = "none");

    setTimeout(() => tosterDiv.style.display = "none", duration.value * 1000);
});

duration.addEventListener("input", () => durOut.innerHTML = duration.value);
