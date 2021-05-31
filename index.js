// Tutorial by http://youtube.com/CodeExplained
// api key : 82005d27a116c2880c8f0fcb866998a0

// SELECT ELEMENTS
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

// App data
const weather = {
    temperature:{
        value:18,
        unit:"celsius"
        },
        description:"SUNNY",
        iconId:"01d",
        city:"Nairobi",
        country:"KE"
};




// CHECK IF BROWSER SUPPORTS GEOLOCATION
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}

// SET USER'S POSITION
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(latitude,longitude);
    //pass the longi and latitude of the user as arguments
    getWeather(latitude, longitude);
}

// SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`;
    console.log(error);
    if (error.code  == 2) {
        notificationElement.innerHTML = `<p>OOPS Network Error!! CHECK YOUR NETWORK</p>`;
    }
    else{
        notificationElement.innerHTML = `<p> ${error.message} </p>`;
    }
}

let kelvin = 273;
let apiKEY  = "2fc47b4a302bec3015cb806c97f40ed4";
// GET WEATHER FROM API PROVIDER
function getWeather(latitude, longitude){
    let api = 
`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKEY}`;
    
    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            console.log(data);
            weather.temperature.value = Math.floor(data.main.temp - kelvin);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function(){
            displayWeather();
        });
}

// DISPLAY WEATHER TO UI
function displayWeather(){
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    console.log(weather.temperature.value);
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}
// displayWeather();
// C to F conversion
function celsiusToFahrenheit(temperature){
    return (temperature * 9/5) + 32;
}

// WHEN THE USER CLICKS ON THE TEMPERATURE ELEMENET
tempElement.addEventListener("click", function(){
    if(weather.temperature.value === undefined) return;
    
    if(weather.temperature.unit == "celsius"){
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        fahrenheit = Math.floor(fahrenheit);
        
        tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
        weather.temperature.unit = "fahrenheit";
    }else{
        tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
        weather.temperature.unit = "celsius"
    }
});

let char = [10,20,30,40,50];
// char.pop();
// 
for (let index = 0; index < char.length; index++) {
//    let num = char.shift();
    // console.log("i am val",char[index],"index",index);
    // char.pop();
    console.log("i am val",char[index],"index",index);
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
arr.pop(); 
for( var i = 0; i < arr.length; i++){ 
// console.log(arr[i],"original");
//     if ( arr[i] === arr.length) { 
// arr.pop(); 
//     }
// arr.pop();
    console.log(arr[i],"new values");
}
var ar = ['zero', 'one', 'two', 'three'];
    
ar.shift(); // returns "zero"

console.log( ar ); // ["one", "two", "three"]
let std =  ["sam","john","chris"];
std.pop(1);
console.log(std);