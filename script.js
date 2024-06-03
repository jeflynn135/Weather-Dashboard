// const app = {
//     init: () => {
//         document
//             .getElementById('btnGet')
//             .addEventListener('click', app.fetchWeather);
//         document
//             .getElementById('btnCurrent')
//             .addEventListener('click', app.getLocation);
//     },
//     fetchWeather: (ev) => {
//         let lat = document.getElementById('latitude').value;
//         let lon = document.getElementById('longitude').value;
//         let key = '7885fcf52fe2ecff0fad92f32efa24';
//         let lang = 'en';
//         let units = 'metric';
//         let url = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=${units}&lang=${lang}`;
//         fetch(url)
//             .then(resp => {
//                 if (!resp.ok) throw new Error(resp.statusText);
//                 return resp.json();
//             })
//             .then(data => {
//                 app.showWeather(data)
//             })
//             .catch(console.err);

//     },
//     getLocation: (ev) => {
//         let opts = {
//             enableHighAccuracy: true,
//             timeout: 1000 * 10,
//             maximumAge: 1000 * 60 * 5,
//         };
//         navigator.geolocation.getCurrentPosition(app.ftw, app.wtf, opts);
//     },
//     ftw: (position) => {
//         document.getElementById('latitude').value =
//             position.coords.latitude.toFixed(2);
//         document.getElementById('longitude').value =
//             position.coords.longitude.toFixed(2);
//     },
//     wtf: (err) => {
//         console.error(err);
//     },
//     showWeather: (resp) => {
//         console.log(resp);
//         let row = document.querySelector('.weather.row');
//         // clear old weather and add new
//         row.innerHTML = resp.daily
//             .map((day, idx) => {
//                 if (idx < 2) {
//                     let dt = new Date(day.dt * 1000);
//                     let sr = new Date(day.sunrise * 1000).toTimeString();
//                     let ss = new Date(day.sunset * 1000).toTimeString();
//                     return `${ dt.toDateString() }
//                     ${day.weather[0].icon} @4x.png
//                     ${ day.weather[0].description }
//                    ${ day.weather[0].main }
//                         ${ day.temp.max }& deg;C ${ day.temp.min }& deg; C
//                        ${ day.feels_like.day }& deg; C
//                         ${ day.pressure } mb
//                        ${ day.humidity }%
//                         ${ day.uvi };
//                        ${ day.pop * 100 }%
//                         ${ day.dew_point }
//                         ${ day.wind_speed } m / s, ${ day.wind_deg }& deg;
//                         ${ sr }
//                         ${ ss }`
//                 }
//             })
//             .join('');
//     },
// }


const APIKey = "7885fcf52fe2ecff0fad92f262efa184"


function getCity(lat, lon){
    const queryURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}&units=imperial`;
    
    fetch(queryURL)
    .then(function(response){
        // console.log(response)
        return response.json()
    }) .then(function(data){
        console.log(data)

        document.querySelector(".city-name-1").textContent=data.name
        document.querySelector(".temp-current-1").textContent=`Current Temp: ${data.main.temp}°F`
        document.querySelector(".temp-max-1").textContent=`High Temp: ${data.main.temp_max}°F`
        document.querySelector(".temp-min-1").textContent=`Low Temp: ${data.main.temp_min}°F`
        document.querySelector(".humidity-1").textContent=`Humidity: ${data.main.humidity}`
        document.querySelector(".wind-speed-1").textContent=`Wind Speed: ${data.wind.speed}`
        // adds current date to first weather card
        const date = new Date();
        document.querySelector(".card-title-1").textContent=date
// changes weather icon
    var weatherIcon = document.querySelector(".card-img-1");
    var iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconUrl);
    })
}
function getForcast(lat, lon){
    const queryURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}&units=imperial`;
    
    fetch(queryURL)
    .then(function(response){
        // console.log(response)
        return response.json()
    }) .then(function(weatherdata){
const data = weatherdata.list.filter((day) => day.dt_txt.includes("12:00:00"))
        console.log(data)

        // day 2 forecast
        document.querySelector(".card-title-2").textContent=data[0].dt_txt.split(" ")[0]
        document.querySelector(".city-name-2").textContent=weatherdata.city.name
        document.querySelector(".temp-current-2").textContent=`Current Temp: ${data[0].main.temp}°F`
        document.querySelector(".temp-max-2").textContent=`High Temp: ${data[0].main.temp_max}°F`
        document.querySelector(".temp-min-2").textContent=`Low Temp: ${data[0].main.temp_min}°F`
        document.querySelector(".humidity-2").textContent=`Humidity: ${data[0].main.humidity}`
        document.querySelector(".wind-speed-2").textContent=`Wind Speed: ${data[0].wind.speed}`
// changes weather icon
    var weatherIcon = document.querySelector(".card-img-2");
    var iconUrl = `https://openweathermap.org/img/w/${data[0].weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconUrl);

    // day 3 forecast
        document.querySelector(".card-title-3").textContent=data[1].dt_txt.split(" ")[0]
        document.querySelector(".city-name-3").textContent=weatherdata.city.name
        document.querySelector(".temp-current-3").textContent=`Current Temp: ${data[1].main.temp}°F`
        document.querySelector(".temp-max-3").textContent=`High Temp: ${data[1].main.temp_max}°F`
        document.querySelector(".temp-min-3").textContent=`Low Temp: ${data[1].main.temp_min}°F`
        document.querySelector(".humidity-3").textContent=`Humidity: ${data[1].main.humidity}`
        document.querySelector(".wind-speed-3").textContent=`Wind Speed: ${data[1].wind.speed}`
// changes weather icon
    var weatherIcon = document.querySelector(".card-img-3");
    var iconUrl = `https://openweathermap.org/img/w/${data[1].weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconUrl);

    // day 4 forecast
        document.querySelector(".card-title-4").textContent=data[2].dt_txt.split(" ")[0]
        document.querySelector(".city-name-4").textContent=weatherdata.city.name
        document.querySelector(".temp-current-4").textContent=`Current Temp: ${data[2].main.temp}°F`
        document.querySelector(".temp-max-4").textContent=`High Temp: ${data[2].main.temp_max}°F`
        document.querySelector(".temp-min-4").textContent=`Low Temp: ${data[2].main.temp_min}°F`
        document.querySelector(".humidity-4").textContent=`Humidity: ${data[2].main.humidity}`
        document.querySelector(".wind-speed-4").textContent=`Wind Speed: ${data[2].wind.speed}`
// changes weather icon
    var weatherIcon = document.querySelector(".card-img-4");
    var iconUrl = `https://openweathermap.org/img/w/${data[2].weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconUrl);

    // day 5 forecast
        document.querySelector(".card-title-5").textContent=data[3].dt_txt.split(" ")[0]
        document.querySelector(".city-name-5").textContent=weatherdata.city.name
        document.querySelector(".temp-current-5").textContent=`Current Temp: ${data[3].main.temp}°F`
        document.querySelector(".temp-max-5").textContent=`High Temp: ${data[3].main.temp_max}°F`
        document.querySelector(".temp-min-5").textContent=`Low Temp: ${data[3].main.temp_min}°F`
        document.querySelector(".humidity-5").textContent=`Humidity: ${data[3].main.humidity}`
        document.querySelector(".wind-speed-5").textContent=`Wind Speed: ${data[3].wind.speed}`
// changes weather icon
    var weatherIcon = document.querySelector(".card-img-5");
    var iconUrl = `https://openweathermap.org/img/w/${data[3].weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconUrl);

    // day 6 forecast
        document.querySelector(".card-title-6").textContent=data[4].dt_txt.split(" ")[0]
        document.querySelector(".city-name-6").textContent=weatherdata.city.name
        document.querySelector(".temp-current-6").textContent=`Current Temp: ${data[4].main.temp}°F`
        document.querySelector(".temp-max-6").textContent=`High Temp: ${data[4].main.temp_max}°F`
        document.querySelector(".temp-min-6").textContent=`Low Temp: ${data[4].main.temp_min}°F`
        document.querySelector(".humidity-6").textContent=`Humidity: ${data[4].main.humidity}`
        document.querySelector(".wind-speed-6").textContent=`Wind Speed: ${data[4].wind.speed}`
// changes weather icon
    var weatherIcon = document.querySelector(".card-img-6");
    var iconUrl = `https://openweathermap.org/img/w/${data[4].weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconUrl);

    })
}

function getGeocode(city, state){
    const queryURL = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${state}&limit=5&appid=${APIKey}`;
    
    fetch(queryURL)
    .then(function(response){
        // console.log(response)
        return response.json()
    }) .then(function(data){
        console.log(data)
        let search = JSON.parse(localStorage.getItem("Previous-Searches")) || []
    if (!search.includes(`${data[0].name}, ${data[0].state}`)) {
        search.push(`${data[0].name}, ${data[0].state}`)
        localStorage.setItem("Previous-Searches", JSON.stringify(search))
    }
        const lat = data[0].lat
        const lon = data[0].lon
        getCity(lat, lon)
        getForcast(lat,lon)
    })
}
// Function to update history in local storage then updates displayed history.
function appendToHistory(search) {
  // If there is no search term return the function
  if (searchHistory.indexOf(search) !== -1) {
    return;
  }
  searchHistory.push(search);

  localStorage.setItem('search-history', JSON.stringify(searchHistory));
  renderSearchHistory();
}
function storageButton(){
    let search = JSON.parse(localStorage.getItem("Previous-Searches")) || []
    for(let i = 0; i < search.length; i++){
let btn = document.createElement("button")
btn.textContent = search[i]
// add on click to btn
btn.onclick = appendToHistory(search)
}
document.querySelector(".search-history").append(btn)
    }

$("#btnGet").on("click", function(){
    let city = $("#city").val()
    let state = $("#state").val()
    getGeocode(city, state)
})