let addToButton = document.getElementById("AddToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");
addToButton.addEventListener('click', function() {
    let paragragh = document.createElement("p");
    paragragh.classList.add("paragragh-styling");
    paragragh.innerText = inputField.value;
    toDoContainer.appendChild(paragragh);
    inputField.value = "";
})