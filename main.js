let player1 = 
    {
        name : "Scorpion",
        hp : 100,
        img : "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
        weapon : ["kunai","fireBall","getOverHere"],
        attack() {
            console.log(this.name+" Fight");
            return null
        }
    }
;
let player2 = 
    {
        name : "Subzero",
        hp : 95,
        img : "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
        weapon : ["sword","iceWall","slip"],
        attack() {
            console.log(this.name+" Fight");
            return null
        }
    }
;

function createPlayer (player) {
    const $player = document.createElement("div");
    $player.classList.add("player");

    const $arenas = document.querySelector(".arenas");
    $arenas.appendChild($player);

    const $progressbar = document.createElement("div");
    $progressbar.classList.add("progressbar");
    $player.appendChild($progressbar);

    const $character = document.createElement("div");
    $character.classList.add("character");
    $player.appendChild($character);

    const $live = document.createElement("div");
    $live.classList.add("live");
    $live.style.width = "100%";
    $live.innerText = player.hp;
    $progressbar.appendChild($live);

    const $name = document.createElement("div");
    $name.classList.add("name");
    $name.innerText = player.name;
    $progressbar.appendChild($name);

    const img = document.createElement("img");
    img.src = player.img;
    $character.appendChild(img);
}

createPlayer(player1);
createPlayer(player2);
