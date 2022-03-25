let spade = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J", "A"]
let suit = ["♦", "♥", "♠", "♣"]
let deck = suit[Math.floor(Math.random() * suit.length)]
let arr= spade[Math.floor(Math.random() * spade.length)]

document.querySelector("#cards").innerHTML = arr
document.querySelector("#icon").innerHTML = deck
document.querySelector("#icon2").innerHTML = deck

if (deck === "♦" || deck === "♥"){
    document.querySelector("#icon").style.color = "red"
}
if (deck === "♦" || deck === "♥"){
    document.querySelector("#icon2").style.color = "red"
}