const searchToggle = document.querySelector(".search-toggle");
const searchBox = document.querySelector(".search-box");
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");

searchToggle.addEventListener("click", function(){
  searchBox.classList.toggle("hidden");

  // 슬라이딩 애니메이션을 트리거하기 위해 추가된 코드
  if (!searchBox.classList.contains("hidden")) {
    searchBox.style.transform = "translateX(0%)";
  } else {
    searchBox.style.transform = "translateX(-100%)";
  }

  
});

searchBtn.addEventListener("click", function(event){
  event.preventDefault();
  const searchValue = searchInput.value;
  window.open(`https://www.google.com/search?q=${searchValue}`);
});