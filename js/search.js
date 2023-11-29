const searchToggle = document.querySelector(".search-toggle");
const searchBox = document.querySelector(".search-box");
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");

searchToggle.addEventListener("click", function(){
  searchBox.classList.toggle("hidden");
});

searchBtn.addEventListener("click", function(event){
  event.preventDefault();
  const searchValue = searchInput.value;
  window.open(`https://www.google.com/search?q=${searchValue}`);
});