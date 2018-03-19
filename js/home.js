const today = () => {
const url = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c4d9a81218adf15a76b4861c56b81baf/19.390519,-99.4238339?auto";
fetch(url)
    .then( response => response.json()).then( json => drawWeather(json));
};
const drawWeather = json => {
const weatherContainer = document.getElementById('weather-container');
const weatherContainerAll = document.getElementById('weather-container-all');
let template = `
    <div><h4>Temperatura: <span class="blue-text text-lighten-4">${json.currently.temperature} °F</span></h4></div>
    <div><h4>Humedad: <span class="blue-text text-lighten-4">${json.currently.humidity} %</span></h4></div>
    <div><h4>Rayos Ultravioleta: <span class="blue-text text-lighten-4">${json.currently.uvIndex} UV</span></h4></div>
    <div><h4>Presión Atmosférica: <span class="blue-text text-lighten-4">${json.currently.pressure} mb</span></h4>
    <div><h4>Ozono: <span class="blue-text text-lighten-4">${json.currently.ozone} DU</span></h4>
    </div>
    `;
weatherContainer.innerHTML = template;
let daily = json.daily.data.forEach( day => {
    let dailyTemplate = `
		<div class="col m2 center-align">
		<h4 class="blue-text">${unDate(day.time)}</h4>
		 <div><h5>Temperatura</h5></div>
     <div>Max: <span class="blue-text text-lighten-4">${day.temperatureHigh} °F</span> Min: <span class="blue-text text-lighten-4">${day.temperatureMin} °F</span></>
		 </div>
		 `;
    weatherContainerAll.insertAdjacentHTML('beforeEnd', dailyTemplate);
});
};
const unDate = (uniNumber) => new Date(uniNumber * 1000).toLocaleString('es-MX', { weekday: 'long' });
today();
