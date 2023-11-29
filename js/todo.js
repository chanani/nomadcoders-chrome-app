const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const todoBox = document.querySelector(".todo-box");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function modifyTodo(event) {
  const li = event.target.parentElement;
  const span = li.querySelector("span");
  const originalText = span.textContent;

  span.contentEditable = true;
  span.focus();

  span.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      span.contentEditable = false;

      const modifiedText = span.textContent;
      const todoId = parseInt(li.id);

      const index = toDos.findIndex((toDo) => toDo.id === todoId);
      if (index !== -1) {
        toDos[index].text = modifiedText;
        saveToDos();
      }
    }
  });
}

function checkTodo(event) {
  const checkbox = event.target;
  const li = checkbox.parentElement;
  const span = li.querySelector("span");
  const todoId = parseInt(li.id);

  if (checkbox.checked) {
    span.style.textDecoration = "line-through";
  } else {
    span.style.textDecoration = "none";
  }

  const index = toDos.findIndex((toDo) => toDo.id === todoId);
  if (index !== -1) {
    toDos[index].checked = checkbox.checked;
    saveToDos();
  }
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.checked = newTodo.checked || false;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  
  // 체크된 항목에 대한 취소선 적용
  if (checkBox.checked) {
    span.style.textDecoration = "line-through";
  }

  const button = document.createElement("button");
  button.classList.add("bi");
  button.classList.add("bi-trash-fill");
  const modifyBtn = document.createElement("button");
  modifyBtn.classList.add("bi");
  modifyBtn.classList.add("bi-pencil-square");
  modifyBtn.addEventListener("click", modifyTodo);
  button.addEventListener("click", deleteTodo);
  checkBox.addEventListener("change", checkTodo);
  li.appendChild(checkBox);
  li.appendChild(span);
  li.appendChild(button);
  li.appendChild(modifyBtn);

  toDoList.appendChild(li);
}


function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
    checked: false, // 기본값으로 checked를 추가하고 false로 설정
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

const todoBtn = document.querySelector("#todo-btn");
todoBtn.addEventListener("click", function () {
  toDoForm.classList.toggle("hidden");
  toDoList.classList.toggle("hidden");
  todoBox.classList.toggle("hidden");
});
