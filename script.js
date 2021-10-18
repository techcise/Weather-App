
let text = document.querySelector('#temperature');
let locationText = document.querySelector('#location');
let myBtn = document.querySelector('.myBtn');
let weather = document.querySelector('#weather');
let input = document.querySelector('.city');
let body = document.body;
let weatherC = document.querySelector('.weatherContainer');
let weatherIcon = document.querySelector('.weatherIcon');

myBtn.addEventListener('click', async function(e){
    let city = document.querySelector('.city').value;
    if(city == ''){
        e.preventDefault();
        locationText.innerText = 'City is Required!';
    }
    else {
        e.preventDefault();
        let getData = await fetch(`http://api.weatherapi.com/v1/current.json?key=fa4d5077ca114c948c492922211710&q=${city}&aqi=yes`);
        if(getData.status != 200){
            locationText.innerText = 'Can,t find City';
        }
        else {
            let getJson = await getData.json();
            text.innerText = getJson.current.temp_c + ' C';
            locationText.innerText = getJson.location.name;
            weatherIcon.src = getJson.current.condition.icon;
            weather.innerText = getJson.current.condition.text;
            console.log(getJson);
        }
    }
    console.log(input.value);
});
