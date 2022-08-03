

function getPoem() {
    fetch('https://salty-caverns-72878.herokuapp.com/http://poetrydb.org/title/Ozymandias/lines.json')
        .then(res => res.json())
        .then(data => {
            let poem = data[0].lines;
            let box = document.getElementById('poem');
            for (let i = 0; i < poem.length; i++) {
                let p = document.createElement('p');
                p.innerHTML = poem[i];
                box.appendChild(p);
            }
    })
}

getPoem()

// https://salty-caverns-72878.herokuapp.com/

