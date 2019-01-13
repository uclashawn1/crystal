// Variables
$( document ).ready(function(){
    var random = Math.floor((Math.random() * 120) + 19);
    $ ('target1').text(random);
var red = Math.floor((Math.random()*12)+1);
var blue = 1 + Math.floor(Math.random() * 12 );
var yellow = 1 + Math.floor(Math.random() * 12 );
var green = 1 + Math.floor(Math.random() * 12 );    

var score = 0;
var wins = 0;
var losses = 0;

$('wins1').text(wins);
$('losses1').text(losses);

// reset
function reset () {
    random = Math.floor((Math.random() * 120) + 19);
    $ ('#target1').text(random);
    var red = Math.floor((Math.random()*12)+1);
    var blue = 1 + Math.floor(Math.random() * 12 );
    var yellow = 1 + Math.floor(Math.random() * 12 );
    var green = 1 + Math.floor(Math.random() * 12 ); 
    var score = 0;
    $('#Total').text(score);
}

// Add wins
function addScore(){
    alert("You Won");
    wins++;
    $('#numbWins').text(wins);
    reset();
}

// Add losses

function addLosses(){
    alert("You Lose");
    losses++;
    $('numbLoss').text(losses);
    reset();
}

// Clicks for jewels

$('#red1').on('click', function(){
    score = score + red;
    ('#newTotal').text(score);

    if (score === random){
        addScore();
    }
    else if (score > random){
        addLosses();
    }
})

$('#blue1').on('click', function(){
    score = score + blue;
    ('#newTotal').text(score);

    if (score === random){
        addScore();
    }
    else if (score > random){
        addLosses();
    }
})

$('#green1').on('click', function(){
    score = score + green;
    ('#newTotal').text(score);

    if (score === random){
        addScore();
    }
    else if (score > random){
        addLosses();
    }
})

$('#yellow1').on('click', function(){
    score = score + yellow;
    ('#newTotal').text(score);

    if (score === random){
        addScore();
    }
    else if (score > random){
        addLosses();
    }
});
});












// // Player's score and adding to score

// //  var yourScore = getElementById(red, blue, yellow, green.onclick(math.sum));  //


// var score = document.getElementById('score');
// score.innerHTML = addScore(); 
// //0

// function addScore (val) {
//     var numToAdd = parseInt(val);
//     var currentScore = parseInt();
//     Score.innerHTML = numToAdd + currentScore;
// }
// // end



// // Target Number variable and random number generator

// // var target = document.getElementById('target');
// // target.innerHTML = getRandomValue();

// // function getRandomValue (){
// //     return Math.floor((Math.random() * 19) + 120);
// // }
// $("#target").html(target);
// console.log(target);
// // end


// // jewel variables and event listeners
// var red = document.getElementById('red');
// red.addEventListener('click', function() {
//     document.addToScore(red);
//     checkPlayerScore();
// });

// //red.setAttribute("value", "5");
// // console.log(red.value);
// //this refers to red
  
// // end red

// var blue = document.getElementById('blue');
// blue.addEventListener('click', function() {
//     document.addToScore(this.value);
//     checkPlayerScore();
// });

// // end blue

// var yellow = document.getElementById('yellow');
// yellow.addEventListener('click', function() {
//     addToScore(this.value);
//     checkPlayerScore();
// });

// // end yellow

// var green = document.getElementById('green');
// green.addEventListener('click', function() {
//     addToScore(this.value);
//     checkPlayerScore();
// });

// // end green


// //var sum = parseInt(red.value) + parseInt(blue.value) + parseInt(yelow.value) + parseInt(green.value);

// // console.log (sum);

// // Comparing score with target number to determine win/loss

// function checkScore() {
//     var scoreInt = parseInt(score.innerHTML);
//     var targetInt = parseInt(target.innerHTML);

//     if (scoreInt === targetInt) {
//         alert('You win');
//     }
//     else if (scoreInt > targetInt) {
//         alert('You lose');
//     }
// }
// // end

// // function checkPlayerScore() {
// //   //yourScore, targetScore (parseFloat() is for decimals)
// //   var playerInt = parseInt(yourScore.innerHTML);
// //   var targetInt = parseInt(targetScore.innerHTML);
// //   if (playerInt === targetInt) {
// //       alert('You win!');
// //   } else if (playerInt > targetInt) {
// //     alert('You lose!');
// //   } 
// //