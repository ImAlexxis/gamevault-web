async function loadGames(){

const response = await fetch("../data/games.json")
const games = await response.json()

const container = document.getElementById("games")

games.forEach(game => {

const div = document.createElement("div")
div.classList.add("game")

div.innerHTML = `
<h3>${game.name}</h3>
<p>Precio: ${game.price}</p>
<button onclick="buyGame('${game.name}')">Comprar</button>
`

container.appendChild(div)

})

}

function buyGame(name){
alert("Compraste " + name)
}

loadGames()
