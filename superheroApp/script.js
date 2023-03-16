//https://superheroapi.com/api.php/5651598851540313/245

const heroImg = document.getElementById("heroImg")
const code = 5651598851540313
const base_url = `https://superheroapi.com/api.php/${code}`
const button = document.getElementById('newHeroButton')
const searchButton = document.getElementById('searchButton');
const inputHero = document.getElementById('inputHero');

const getHero = (id,name) => {
    fetch(`${base_url}/${id}`)
        .then(res => res.json())
        .then(json => {
            // console.log(json.name)
            const name = `<h1>${json.name}</h1>`
            const state = getStatsHTML(json)
            heroImg.innerHTML = `${name}<img src="${json.image.url} " height=200 width=200 />${state}`
        })
}

const getSeachHero = (name) => {
    fetch(`${base_url}/search/${name}`)
    .then(res => res.json())
        .then(json => {
            const hero = json.results[0]
            const name = `<h1>${hero.name}</h1>`
            // const inte = `<p>${hero.powerstats.intelligence}</p>`
            const state = getStatsHTML(json.results[0])
            heroImg.innerHTML = `${name}<img src="${hero.image.url} " height=200 width=200 />${state}`
        })
}

const getRandomHero = () =>{
    const totolHeros = 731
    return Math.ceil(Math.random() * totolHeros)
}

button.onclick = () => getHero(getRandomHero())

searchButton.onclick = () => getSeachHero(inputHero.value)


//states
const getStatsHTML = (character) => {
    const state = Object.keys(character.powerstats).map(stat => {
        return `<p>${stat}: ${character.powerstats[stat]}</p>`
    })
    return state.join("")
}