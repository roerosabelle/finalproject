//variables 
const section = document.querySelector("section");
let inputField = document.querySelector("#todoField");

let todoArr = [];

document.querySelector('form').addEventListener("submit", function(event) {
    event.preventDefault();

    //add todos to array
    let todoObj = {
        text: inputField.value,
        complete: false
    }
    todoArr.push(todoObj);
    renderToDoList();
});

function renderToDoList () {
    const template = todoArr.map((list, index) => 
    `<li class="${list.complete ? 'line': ''}"> 
    ${list.text} 
    <button id="delete" value="${index}">x</button> 
    <button id="complete" value="${index}"]>complete</button>
    </li>`);

    section.innerHTML = template.join('');


    //delete button
    let deleteBtn = document.querySelectorAll("#delete");
    for (let i = 0; i< deleteBtn.length; i++) {
        deleteBtn[i].addEventListener("click", function (event) {
            todoArr.splice(event.target.value, 1);
            renderToDoList();
        });
    }

    //complete button
    let completedBtn = document.querySelectorAll("#complete");
    for(let i = 0; i < completedBtn.length; i++) {
        completedBtn[i].addEventListener("click", function(event) {
            todoArr[event.target.value].complete =! todoArr[event.target.value].complete;
            renderToDoList();
        });
    };
}
