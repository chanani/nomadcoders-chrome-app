// API Site : https://openweathermap.org/api

const API_KEY = "112f83a1610f2e81f1aaed42a5dba2a7";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}도`;
  });
};

function onGeoError(){
  alert("날씨를 읽어오는데 실패했습니다.")
};


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

