
//document.getElementById('parent').style.backgroundImage = "url(https://source.unsplash.com/1600x900/?forest,landscape)"
//document.body.style.backgroundImage='https://source.unsplash.com/1600x900/?forest,landscape'

function getPoem() {
    fetch('https://salty-caverns-72878.herokuapp.com/https://jqgbekpmw8.execute-api.us-west-1.amazonaws.com/MegaDashAggregator')
        .then(res => res.json())
        .then(data => {
            const poem = data.shakespeare;
            let box = document.getElementById('poem');
            for (let i = 0; i < poem.length; i++) {
                let p = document.createElement('p');
                p.innerHTML = poem[i];
                box.appendChild(p);
            } 
        })
}

function getWeather() {
    fetch('https://salty-caverns-72878.herokuapp.com/https://jqgbekpmw8.execute-api.us-west-1.amazonaws.com/MegaDashAggregator')
        .then(res => res.json())
        .then(data => {
            const weather = data.weather;
            let box = document.getElementById('weather');
            let p = document.createElement('p');
            p.innerHTML = `Temperature: ${weather[0]}°C`;
            box.appendChild(p);
        })
} 

function fetchSun() {
    fetch('https://salty-caverns-72878.herokuapp.com/https://jqgbekpmw8.execute-api.us-west-1.amazonaws.com/MegaDashAggregator')
        .then(res => res.json())
        .then(data => {
            console.log(data.sun)
            let box = document.getElementById('sun');
            let p = document.createElement('p');
            p.innerHTML = `Sunrise: ${data.sun[0]} AM<br>Sunset: ${data.sun[1]} PM`;
            box.appendChild(p);
        })
}

function getRad() {
    fetch('https://salty-caverns-72878.herokuapp.com/https://jqgbekpmw8.execute-api.us-west-1.amazonaws.com/MegaDashAggregator')
        .then(res => res.json())
        .then(data => {
            const rad = data.radiation;
            let box = document.getElementById('rad');
            let p = document.createElement('p');
            p.innerHTML = `${rad.arvo} ${rad.arvoyks}`;
            box.appendChild(p);
        })
}

function getDate() {
    let date = new Date()
    let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let weekday = weekdays[date.getDay()];
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    let time = date.getHours() + ':' + date.getMinutes()
    let box = document.getElementById('date');
    let p = document.createElement('p');
    p.innerHTML = `${weekday} ${day}/${month}/${year} ${time}`;
    box.appendChild(p);
}

getDate()
getPoem()
getWeather()
fetchSun()
getRad()




// https://salty-caverns-72878.herokuapp.com/

//https://vsjycb3uvprtnb5uz56af3n4sa0ljayo.lambda-url.us-west-1.on.aws/

//https://salty-caverns-72878.herokuapp.com/http://poetrydb.org/title/Ozymandias/lines.json