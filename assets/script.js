// https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${weatherApiKey}
// https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${weatherApiKey}`;

//key: 9e624b9ceb9c5098e125b4e34b1328ec

// var cityInputEl = document.getElementById("city-input");
// var cityFormEl = document.getElementById("searchBtn");

var userFormEl = document.querySelector('#user-form');
var nameInputEl = document.querySelector('#userCity');
var humidityEl = document.getElementById("humidity");
var tempEl = document.getElementById("temp");
var windEl = document.getElementById("wind");
var cityNameEl = document.getElementById("cityName");
var previousSearch = document.getElementById("previous-search");
var containerEl = document.getElementById("cities-container");
// var citiesHistory = JSON.parse(localStorage.getItem("history"));

var formSubmitHandler = function (event) {
    event.preventDefault();
  
    var nameOfCity = nameInputEl.value.trim();
  
    if (nameOfCity) {
      getWeather(nameOfCity);
  
      nameInputEl.value = '';
    } else {
      alert('Please enter a valid city name');
    }
  };

var getWeather = function (cityName) {
    var apiUrl = "https://api.openweathermap.org/geo/1.0/direct?q=$" + cityName + "&limit=5&appid=e4c79656912e2022efd4f848cf4c49dc";
    var secondAPI = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=e4c79656912e2022efd4f848cf4c49dc";


    /// for today's weather
    fetch(secondAPI)
    .then(function (response) {
        if (response.ok) {
          console.log(response);
          response.json().then(function (data) {
            console.log(data);
            humidityEl.textContent = "Humidity: " + data.main.humidity + "%";
            tempEl.textContent = "Temp: " + data.main.temp + "°F";
            windEl.textContent = "Wind: " + data.wind.speed + "MPH";
            cityNameEl.textContent = data.name;
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect');
      });

}
userFormEl.addEventListener('submit', formSubmitHandler);


localStorage.setItem("history", nameInputEl.value);


// var displaySearches = function (localStorage, previousCity) {
//     if (localStorage.length === 0) {
//         containerEl.textContent = " ";
//         return;
//     }

//     previousSearch.textContent = previousCity;

//     localStorage.setItem("City", nameInputEl.value)

//     console.log(localStorage)

//     for (var i = 0; i < localStorage.length; i++) {
//         containerEl.textContent = localStorage.getItem(localStorage.city[i]);
//     }
// }

// use localStorage.setItem("Searchistory," JSON. stringify(searchHistory)

function renderSearchHistory(){
    containerEl.innerHTML = "";
    for (var i = 0; i < citiesHistory.length; i++){
        var searchList = document.createElement("button");
        searchList.setAttribute("id", "search-list");
        searchList.textContent = citiesHistory(i);
        containerEl.append(searchList);
    }
}



// var search hisotry list = json.parse get item