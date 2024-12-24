
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const allright = document.querySelector("#allright");
const allleft = document.querySelector("#allleft");
const left = document.querySelector("#left");
const right = document.querySelector("#right");

const transferItems = (source, target, condition = () => true) => {
    source.querySelectorAll("label").forEach(item => {
        if (condition(item.querySelector("input[type='checkbox']"))) target.appendChild(item);
    });
};

allright.addEventListener("click", () => transferItems(box1, box2));
allleft.addEventListener("click", () => transferItems(box2, box1));
right.addEventListener("click", () => transferItems(box1, box2, checkbox => checkbox.checked));
left.addEventListener("click", () => transferItems(box2, box1, checkbox => checkbox.checked));

const updateButtonStates = () => {
    allright.disabled = false;
    allleft.disabled = false;
    right.disabled = false;
    left.disabled = false;
};
updateButtonStates();

