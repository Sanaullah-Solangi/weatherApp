let searchIcon = document.querySelector(".searchIcon");
let conditionImg = document.querySelectorAll(".conditionImg");
let conditionName = document.querySelector(".conditionName");
let temprature = document.querySelector(".temprature");
let cityName = document.querySelector(".cityName");
let humidityLevel = document.querySelector(".humidityLevel");
let windLevel = document.querySelector(".windLevel");
let weatherConditions = document.querySelector(".weatherConditions");
let storeSearchBarValue;
let urlToUse;
let weatherId = 800;
function getSearchBarValue() {
  let searchBar = document.querySelector("#searchBar");
  storeSearchBarValue = searchBar.value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${storeSearchBarValue}&appid=1818bdc7b4b77ef30d448a7e2ea8b141`;
  urlToUse = url;
  fetchWeatherData((data) => {
    cityName.innerHTML = data.name;
    conditionName.innerHTML = data.weather[0].description;
    temprature.innerHTML = Math.floor(data.main.temp) + "°C";
    humidityLevel.innerHTML = data.main.humidity + "%";
    windLevel.innerHTML = data.wind.speed + "km/h";
    weatherId = data.weather[0].id;
    slideWeatherImg();
  });

  searchBar.value = "";
}

function fetchWeatherData(cb) {
  console.log(urlToUse);
  fetch(urlToUse)
    .then((response) => response.json())
    .then((data) => cb(data))
    .catch((error) => console.error("Error:", error));
}
function triggerSearchOnEnter(event) {
  if (event.key == "Enter") {
    getSearchBarValue();
  }
}
counter = 0;
function slideWeatherImg() {
  conditionImg.forEach((condition) => {
    condition.classList.add("opacity0");
  });
  //!====== IMG 1 ======
  if (weatherId == "800") {
    counter = 0;
    console.log("men chala");
    let imgs = document.querySelectorAll(".conditionImg > img");
    imgs.forEach((img) => {
      if (img.src.includes("clear.webp")) {
        let imgWrapper = img.closest(".conditionImg");
        imgWrapper.classList.remove("opacity0");
      }
    });
    weatherConditions.style.transform = `translateX( ${counter * -100}%)`;
  }
  //!====== IMG 2 ======
  else if (weatherId == "803" || weatherId == "804") {
    counter = 1;
    let imgs = document.querySelectorAll(".conditionImg > img");
    imgs.forEach((img) => {
      if (img.src.includes("Cloudy.webp")) {
        let imgWrapper = img.closest(".conditionImg");
        console.log(imgWrapper);
        imgWrapper.classList.remove("opacity0");
      }
      weatherConditions.style.transform = `translateX( ${counter * -100}%)`;
    });
  }
  //!====== IMG 3 ======
  else if (weatherId == "300") {
    counter = 2;
    let imgs = document.querySelectorAll(".conditionImg > img");
    imgs.forEach((img) => {
      if (img.src.includes("Drizzle.webp")) {
        let imgWrapper = img.closest(".conditionImg");
        console.log(imgWrapper);
        imgWrapper.classList.remove("opacity0");
      }
      weatherConditions.style.transform = `translateX( ${counter * -100}%)`;
    });
  }
  //!====== IMG 4 ======
  else if (weatherId == "721") {
    counter = 3;
    let imgs = document.querySelectorAll(".conditionImg > img");
    imgs.forEach((img) => {
      if (img.src.includes("Dust.webp")) {
        let imgWrapper = img.closest(".conditionImg");
        console.log(imgWrapper);
        imgWrapper.classList.remove("opacity0");
      }
      weatherConditions.style.transform = `translateX( ${counter * -100}%)`;
    });
  }
  //!====== IMG 5 ======
  else if (weatherId == "741") {
    counter = 4;
    let imgs = document.querySelectorAll(".conditionImg > img");
    imgs.forEach((img) => {
      if (img.src.includes("Fog.webp")) {
        let imgWrapper = img.closest(".conditionImg");
        console.log(imgWrapper);
        imgWrapper.classList.remove("opacity0");
      }
      weatherConditions.style.transform = `translateX( ${counter * -100}%)`;
    });
  }
  //!====== IMG 6 ======
  else if (weatherId == "511") {
    counter = 5;
    let imgs = document.querySelectorAll(".conditionImg > img");
    imgs.forEach((img) => {
      if (img.src.includes("FreezingRain.webp")) {
        let imgWrapper = img.closest(".conditionImg");
        console.log(imgWrapper);
        imgWrapper.classList.remove("opacity0");
      }
      weatherConditions.style.transform = `translateX( ${counter * -100}%)`;
    });
  }
  //!====== IMG 7 ======
  else if (weatherId == "721") {
    counter = 6;
    let imgs = document.querySelectorAll(".conditionImg > img");
    imgs.forEach((img) => {
      if (img.src.includes("Haze.png")) {
        let imgWrapper = img.closest(".conditionImg");
        console.log(imgWrapper);
        imgWrapper.classList.remove("opacity0");
      }
      weatherConditions.style.transform = `translateX( ${counter * -100}%)`;
    });
  }
  //!====== IMG 8 ======
  else if (weatherId == "502") {
    counter = 7;
    let imgs = document.querySelectorAll(".conditionImg > img");
    imgs.forEach((img) => {
      if (img.src.includes("Heavy Rain.png")) {
        let imgWrapper = img.closest(".conditionImg");
        console.log(imgWrapper);
        imgWrapper.classList.remove("opacity0");
      }
      weatherConditions.style.transform = `translateX( ${counter * -100}%)`;
    });
  }
  //!====== IMG 9 ======
  else if (weatherId == "602") {
    counter = 8;
    let imgs = document.querySelectorAll(".conditionImg > img");
    imgs.forEach((img) => {
      if (img.src.includes("Heavy Snow.png")) {
        let imgWrapper = img.closest(".conditionImg");
        console.log(imgWrapper);
        imgWrapper.classList.remove("opacity0");
      }
      weatherConditions.style.transform = `translateX( ${counter * -100}%)`;
    });
  }
  //!====== IMG 10 ======
  else if (weatherId == "500") {
    counter = 9;
    let imgs = document.querySelectorAll(".conditionImg > img");
    imgs.forEach((img) => {
      if (img.src.includes("Light Rain.png")) {
        let imgWrapper = img.closest(".conditionImg");
        console.log(imgWrapper);
        imgWrapper.classList.remove("opacity0");
      }
      weatherConditions.style.transform = `translateX( ${counter * -100}%)`;
    });
  }
  //!====== IMG 11 ======
  else if (weatherId == "600") {
    counter = 10;
    let imgs = document.querySelectorAll(".conditionImg > img");
    imgs.forEach((img) => {
      if (img.src.includes("Light Snow.png")) {
        let imgWrapper = img.closest(".conditionImg");
        console.log(imgWrapper);
        imgWrapper.classList.remove("opacity0");
      }
      weatherConditions.style.transform = `translateX( ${counter * -100}%)`;
    });
  }
  //!====== IMG 12 ======
  else if (weatherId == "701") {
    counter = 11;
    let imgs = document.querySelectorAll(".conditionImg > img");
    imgs.forEach((img) => {
      if (img.src.includes("Mist.webp")) {
        let imgWrapper = img.closest(".conditionImg");
        console.log(imgWrapper);
        imgWrapper.classList.remove("opacity0");
      }
      weatherConditions.style.transform = `translateX( ${counter * -100}%)`;
    });
  }
  //!====== IMG 13 ======
  else if (weatherId == "802") {
    counter = 12;
    let imgs = document.querySelectorAll(".conditionImg > img");
    imgs.forEach((img) => {
      if (img.src.includes("Partly Cloudy.webp")) {
        let imgWrapper = img.closest(".conditionImg");
        console.log(imgWrapper);
        imgWrapper.classList.remove("opacity0");
      }
      weatherConditions.style.transform = `translateX( ${counter * -100}%)`;
    });
  }
  //!====== IMG 14 ======
  else if (weatherId == "611") {
    counter = 13;
    let imgs = document.querySelectorAll(".conditionImg > img");
    imgs.forEach((img) => {
      if (img.src.includes("Sleet.png")) {
        let imgWrapper = img.closest(".conditionImg");
        console.log(imgWrapper);
        imgWrapper.classList.remove("opacity0");
      }
      weatherConditions.style.transform = `translateX( ${counter * -100}%)`;
    });
  }
  //!====== IMG 15 ======
  else if (weatherId == "711") {
    counter = 14;
    let imgs = document.querySelectorAll(".conditionImg > img");
    imgs.forEach((img) => {
      if (img.src.includes("Smoke.webp")) {
        let imgWrapper = img.closest(".conditionImg");
        console.log(imgWrapper);
        imgWrapper.classList.remove("opacity0");
      }
      weatherConditions.style.transform = `translateX( ${counter * -100}%)`;
    });
  }
  //!====== IMG 16 ======
  else if (weatherId == "600") {
    counter = 15;
    let imgs = document.querySelectorAll(".conditionImg > img");
    imgs.forEach((img) => {
      if (img.src.includes("Snow.png")) {
        let imgWrapper = img.closest(".conditionImg");
        console.log(imgWrapper);
        imgWrapper.classList.remove("opacity0");
      }
      weatherConditions.style.transform = `translateX( ${counter * -100}%)`;
    });
  }
  //!====== IMG 17 ======
  else if (weatherId == "200") {
    counter = 16;
    let imgs = document.querySelectorAll(".conditionImg > img");
    imgs.forEach((img) => {
      if (img.src.includes("Thunderstorm.png")) {
        let imgWrapper = img.closest(".conditionImg");
        console.log(imgWrapper);
        imgWrapper.classList.remove("opacity0");
      }
      weatherConditions.style.transform = `translateX( ${counter * -100}%)`;
    });
  }
  //!====== IMG 18 ======
  else if (weatherId == "781") {
    counter = 17;
    let imgs = document.querySelectorAll(".conditionImg > img");
    imgs.forEach((img) => {
      if (img.src.includes("Tornado.webp")) {
        let imgWrapper = img.closest(".conditionImg");
        console.log(imgWrapper);
        imgWrapper.classList.remove("opacity0");
      }
      weatherConditions.style.transform = `translateX( ${counter * -100}%)`;
    });
  }
}
slideWeatherImg();
