
var imagesArray = [
'images/dice1.png',
'images/dice2.png',
'images/dice3.png',
'images/dice4.png',
'images/dice5.png',
'images/dice6.png'
];

function dicee () {
    var randomNumber1 = Math.floor(Math.random() * imagesArray.length);
    document.querySelector(".img1").setAttribute("src", imagesArray[randomNumber1]);
    
    var randomNumber2 = Math.floor(Math.random() * imagesArray.length);
    document.querySelector(".img2").setAttribute("src", imagesArray[randomNumber2]);

    var heading = document.querySelector('h1');
    if (randomNumber1 > randomNumber2) {
        heading.innerText = "Player 1 Wins";
    } else if (randomNumber1 < randomNumber2) {
        heading.innerText = "Player 2 Wins";
    } else {
        heading.innerText = "Draw";
    }
};        

dicee();




 
 