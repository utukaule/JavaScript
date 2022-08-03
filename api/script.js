//API study

const dogImg = document.getElementById("dogs");
const dogButton = document.getElementById('dogButton');

const getNewDog = () =>{   
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(json => {
        dogImg.innerHTML = `<img src='${json.message}' width=200 height=200 />`
    })
}

dogButton.onclick = () => getNewDog()