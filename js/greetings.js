const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutBtn = document.querySelector(".logout-btn");
const nameTitle = document.querySelector("#name-title");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username";

function onLoginSubmit(event){
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreeting();
}

function paintGreeting(){
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Welcome ${username} 🥰`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  nameTitle.classList.add("hidden");
}

const saveUsername = localStorage.getItem(USERNAME_KEY);


if(saveUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit); 
} else {
  paintGreeting();
}

logoutBtn.addEventListener("click", function(){
  localStorage.removeItem(USERNAME_KEY);
  localStorage.removeItem(TODOS_KEY);
  alert("로그아웃 되었습니다.");
  location.reload();
});