
let text = document.querySelector('#text');
let locationText = document.querySelector('#location');
let myBtn = document.querySelector('.myBtn');
let container = document.querySelector('.container');

myBtn.addEventListener('click', async function(e){
    let city = document.querySelector('.city').value;
    if(city == ''){
        e.preventDefault();
        locationText.innerText = 'City is Required!';
    }
    else {
        e.preventDefault();
        let getData = await fetch(`http://api.weatherapi.com/v1/current.json?key=fa4d5077ca114c948c492922211710&q=${city}&aqi=yes`);
        let weatherIcon = document.querySelector('.weatherIcon');
        if(getData.status != 200){
            locationText.innerText = 'Can,t find City';
        }
        else {
            let getJson = await getData.json();
            text.innerText = getJson.current.temp_c;
            locationText.innerText = getJson.location.name;
            weatherIcon.src = getJson.current.condition.icon;
            container.append(weatherIcon);
            console.log(getJson);
        }
    }
});
