
const todoInputEl = document.querySelector(".todo__input");
const todoListEl = document.querySelector(".todo__list");
const todoItemEls = document.querySelectorAll(".todo__item");
const buttonItemEls = document.querySelector(".button");
const todoBodyEl = document.querySelector(".todo__body");
const listUl = todoBodyEl.querySelector('ul');
const lis = listUl.children;


function attachButtons(li) {
  let removeButton = document.createElement('button');
  removeButton.className = 'button';
  removeButton.textContent = 'Delete';
  li.appendChild(removeButton);
}

for (let i = 0; i < lis.length; i++ ) {
  attachButtons(lis[i]);
}

todoListEl.addEventListener('click', (event) => {
  if(event.target.tagName == 'BUTTON') {
    let li = event.target.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li);
  }

});

function addListItem() {
  todoInputEl.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
      let newListItem = createListItem(todoInputEl.value);
      todoListEl.insertBefore(newListItem, todoListEl.childNodes[0]);
      attachButtons(newListItem);
      todoInputEl.value = "";
    }
  })
}

function toggleDone() {
  todoListEl.addEventListener("click", function(event) {
    if (event.target.classList.contains("todo__item")) {
      event.target.classList.toggle("done");
    }
  })
}

function createListItem(text) {
  const newListElement = document.createElement("li");
  newListElement.textContent = text;
  newListElement.setAttribute("class", "todo__item");
  return newListElement;
}


todoBodyEl.addEventListener("click", (event) => {
  if (event.target.tagName == "BUTTON") {
    let li = event.target.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li);

  }
});




toggleDone();
addListItem();


