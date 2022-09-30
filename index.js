document.querySelector(".btn").addEventListener("click", function () {
    location.reload();
    return false    
});

var player1 = document.querySelector(".p1 i");
var player2 = document.querySelector(".p2 i");
var result = document.querySelector("h1");

var randomnumber1 = Math.floor(Math.random()*6 + 1);
var randomnumber2 = Math.floor(Math.random()*6 + 1);

if (randomnumber1 === 1)
    one(player1);
else if (randomnumber1 === 2)
    two(player1);
else if (randomnumber1 === 3)
    three(player1);
else if (randomnumber1 === 4)
    four(player1);
else if (randomnumber1 === 5)
    five(player1);
else if (randomnumber1 === 6)
    six(player1);

if (randomnumber2 === 1)
    one(player2);
else if (randomnumber2 === 2)
    two(player2);
else if (randomnumber2 === 3)
    three(player2);
else if (randomnumber2 === 4)
    four(player2);
else if (randomnumber2 === 5)
    five(player2);
else if (randomnumber2 === 6)
    six(player2);

if (randomnumber1 > randomnumber2) {
    result.innerHTML = "Player 1 won.";
}
else if (randomnumber1 < randomnumber2) {
    result.innerHTML = "Player 2 won.";
}
else
    result.innerHTML = "Draw.";
    

function one (player) {
    player.setAttribute("class", "fa-solid fa-dice-one");
}

function two (player) {
    player.setAttribute("class", "fa-solid fa-dice-two");
}

function three (player) {
    player.setAttribute("class", "fa-solid fa-dice-three");
}

function four (player) {
    player.setAttribute("class", "fa-solid fa-dice-four");
}

function five (player) {
    player.setAttribute("class", "fa-solid fa-dice-five");
}

function six (player) {
    player.setAttribute("class", "fa-solid fa-dice-six");
}

