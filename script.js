const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8624c1b28fmshcbac58ae95c7cfbp1aded4jsn3fab92a3b9dd',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather=(city)=>
{
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city,options)
    .then(response => response.json())
    .then(response => {
		console.log(response)
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
	})
    .catch(err => console.error(err));
}
submit.addEventListener('click',(e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Islamabad")
const getWeatherIslamabad=()=>
{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Islamabad',options)
    .then(response => response.json())
    .then(response => {
		console.log(response)
        temp3.innerHTML = response.temp
        feels_like3.innerHTML = response.feels_like
        min_temp3.innerHTML = response.min_temp
        max_temp3.innerHTML = response.max_temp
        humidity3.innerHTML = response.humidity
		cloud_pct3.innerHTML = response.cloud_pct
        wind_speed3.innerHTML = response.wind_speed
        wind_degrees3.innerHTML = response.wind_degrees
        sunrise3.innerHTML = response.sunrise
        sunset3.innerHTML = response.sunset
	})
    .catch(err => console.error(err));
}
getWeatherIslamabad()
const getWeatherLahore=()=>
{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lahore',options)
    .then(response => response.json())
    .then(response => {
		console.log(response)
        temp4.innerHTML = response.temp
        feels_like4.innerHTML = response.feels_like
        min_temp4.innerHTML = response.min_temp
        max_temp4.innerHTML = response.max_temp
        humidity4.innerHTML = response.humidity
		cloud_pct4.innerHTML = response.cloud_pct
        wind_speed4.innerHTML = response.wind_speed
        wind_degrees4.innerHTML = response.wind_degrees
        sunrise4.innerHTML = response.sunrise
        sunset4.innerHTML = response.sunset
	})
    .catch(err => console.error(err));
}
getWeatherLahore()
const getWeatherKarachi=()=>
{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Karachi',options)
    .then(response => response.json())
    .then(response => {
		console.log(response)
        temp5.innerHTML = response.temp
        feels_like5.innerHTML = response.feels_like
        min_temp5.innerHTML = response.min_temp
        max_temp5.innerHTML = response.max_temp
        humidity5.innerHTML = response.humidity
		cloud_pct5.innerHTML = response.cloud_pct
        wind_speed5.innerHTML = response.wind_speed
        wind_degrees5.innerHTML = response.wind_degrees
        sunrise5.innerHTML = response.sunrise
        sunset5.innerHTML = response.sunset
	})
    .catch(err => console.error(err));
}
getWeatherKarachi()
const getWeatherMultan=()=>
{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Multan',options)
    .then(response => response.json())
    .then(response => {
		console.log(response)
        temp6.innerHTML = response.temp
        feels_like6.innerHTML = response.feels_like
        min_temp6.innerHTML = response.min_temp
        max_temp6.innerHTML = response.max_temp
        humidity6.innerHTML = response.humidity
		cloud_pct6.innerHTML = response.cloud_pct
        wind_speed6.innerHTML = response.wind_speed
        wind_degrees6.innerHTML = response.wind_degrees
        sunrise6.innerHTML = response.sunrise
        sunset6.innerHTML = response.sunset
	})
    .catch(err => console.error(err));
}
getWeatherMultan()
const getWeatherPeshawar=()=>
{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Peshawar',options)
    .then(response => response.json())
    .then(response => {
		console.log(response)
        temp7.innerHTML = response.temp
        feels_like7.innerHTML = response.feels_like
        min_temp7.innerHTML = response.min_temp
        max_temp7.innerHTML = response.max_temp
        humidity7.innerHTML = response.humidity
		cloud_pct7.innerHTML = response.cloud_pct
        wind_speed7.innerHTML = response.wind_speed
        wind_degrees7.innerHTML = response.wind_degrees
        sunrise7.innerHTML = response.sunrise
        sunset7.innerHTML = response.sunset
	})
    .catch(err => console.error(err));
}
getWeatherPeshawar()
const getWeatherRawalpindi=()=>
{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Rawalpindi',options)
    .then(response => response.json())
    .then(response => {
		console.log(response)
        temp8.innerHTML = response.temp
        feels_like8.innerHTML = response.feels_like
        min_temp8.innerHTML = response.min_temp
        max_temp8.innerHTML = response.max_temp
        humidity8.innerHTML = response.humidity
		cloud_pct8.innerHTML = response.cloud_pct
        wind_speed8.innerHTML = response.wind_speed
        wind_degrees8.innerHTML = response.wind_degrees
        sunrise8.innerHTML = response.sunrise
        sunset8.innerHTML = response.sunset
	})
    .catch(err => console.error(err));
}

getWeatherRawalpindi()