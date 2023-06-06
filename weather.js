var city = document.querySelector('#city');
var button = document.querySelector('#button');
var date = new Date();
console.log(city)

let od_key = "d1b29b851b95cf1730fde1939c50f331";

button.addEventListener('click',function (){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=d1b29b851b95cf1730fde1939c50f331')
    .then(res => res.json())
    .then(data => document.getElementById('me').innerHTML=(date+'<br>City is: '+data['name'] + 
    '<br> Maximum Temparature: ' +data['main']['temp_max']+' F' + '<br> Minimum Temparature: '
     +data['main']['temp_min']+' F' + '<br>Wind Speed: ' +data['wind']['speed']+'mph' 
))
});




//ctrl v 'https:/api.openweathermap.org/data/2.5/weather?q=Mumbai'+'&appid='+od_key

//fetch('https:/api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+od_key)
