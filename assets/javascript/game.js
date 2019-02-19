let numberGuess = 0;
let playersNumber = 0;
let crystalValues = [0,0,0,0];
let winCounter = 0;
let lossCounter = 0;

const numberGuessText = $("#numberGuess");
const playersNumberText = $("#playersNumber");
let firstClick = true;

//generates a random value for each crystal
function crystalNumberGen(){
	return Math.floor((Math.random()*12) + 1 );
};

//generates a random target number
function numberGenerator(){
	return Math.floor(Math.random()*(120-19+1)+19);
};

//assigns values to each of the crystals
function updateCrystals(){
	for(let i = 0; i < crystalValues.length; i++){
		crystalValues[i]=crystalNumberGen();
	}
	/*console.log(crystalValues);*/
	$("#crystalA").val(crystalValues[0]);
	$("#crystalB").val(crystalValues[1]);
	$("#crystalC").val(crystalValues[2]);
	$("#crystalD").val(crystalValues[3]);
	console.log($("#crystalA").val());
	console.log($("#crystalB").val());
	console.log($("#crystalC").val());
	console.log($("#crystalD").val());
}

// starts the game
function start(){
	firstClick = true;
	playersNumber = 0;
	playersNumberText.empty();
	numberGuess = 0;
	numberGuessText.empty();
};

//handles clicks for each crystal
$(".crystal").on("click", function(){
	if(firstClick == true){
		updateCrystals();
		numberGuess = numberGenerator();
		$(numberGuessText).text(numberGuess);
		playersNumber += parseInt($(this).val());
		playersNumberText.text(playersNumber);
		firstClick = false;
	}else{
		playersNumber += parseInt($(this).val());
	  playersNumberText.text(playersNumber);
	}
	winCondition();
});

//checks for win conditions
function winCondition(){
	if(parseInt(playersNumber) === parseInt(numberGuess)){
		console.log("winner");
		winCounter++;
		$(win).text(winCounter);
		start();
	}else if(parseInt(playersNumber)>parseInt(numberGuess)){
		console.log("loss");
		lossCounter++;
		$(loss).text(lossCounter);
		start();
	};
};





// // Variables
// $( document ).ready(function(){
//     var random = Math.floor((Math.random() * 120) + 19);
//     $ ('target1').text(random);
// var red = Math.floor((Math.random()*12)+1);
// var blue = 1 + Math.floor(Math.random() * 12 );
// var yellow = 1 + Math.floor(Math.random() * 12 );
// var green = 1 + Math.floor(Math.random() * 12 );    

// var score = 0;
// var wins = 0;
// var losses = 0;

// $('wins1').text(wins);
// $('losses1').text(losses);

// // reset
// function reset () {
//     random = Math.floor((Math.random() * 120) + 19);
//     $ ('#target1').text(random);
//     var red1 = Math.floor((Math.random()*12)+1);
//     var blue1 = 1 + Math.floor(Math.random() * 12 );
//     var yellow1 = 1 + Math.floor(Math.random() * 12 );
//     var green1 = 1 + Math.floor(Math.random() * 12 ); 
//     var score = 0;
//     $('#Total').text(score);
// }

// // Add wins
// function addScore(){
//     alert("You Won");
//     wins++;
//     $('#numbWins').text(wins);
//     reset();
// }

// // Add losses

// function addLosses(){
//     alert("You Lose");
//     losses++;
//     $('numbLoss').text(losses);
//     reset();
// }

// // Clicks for jewels

// $('#red1').on('click', function(){
//     score = score + red1;
//     ('#newTotal').text(score);

//     if (score === random){
//         addScore();
//     }
//     else if (score > random){
//         addLosses();
//     }
// })

// $('#blue1').on('click', function(){
//     score = score + blue;
//     ('#newTotal').text(score);

//     if (score === random){
//         addScore();
//     }
//     else if (score > random){
//         addLosses();
//     }
// })

// $('#green1').on('click', function(){
//     score = score + green;
//     ('#newTotal').text(score);

//     if (score === random){
//         addScore();
//     }
//     else if (score > random){
//         addLosses();
//     }
// })

// $('#yellow1').on('click', function(){
//     score = score + yellow;
//     ('#newTotal').text(score);

//     if (score === random){
//         addScore();
//     }
//     else if (score > random){
//         addLosses();
//     }
// });
// });


// // // Player's score and adding to score

// var yourScore = getElementById(red1, blue1, yellow1, green1.onclick(math.sum));


// var score = document.getElementById('score1');
// score.innerHTML = addScore(); 
// // //0

// function addScore (val) {
//     var numToAdd = parseInt(val);
//     var currentScore = parseInt();
//     Score.innerHTML = numToAdd + currentScore;
// }
// // end



// // Target Number variable and random number generator

// var target = document.getElementById('target1');
// target.innerHTML = getRandomValue();

// function getRandomValue (){
//     return Math.floor((Math.random() * 19) + 120);
// }
// $("#target1").html(target);
// console.log(target);
// // // end


// //jewel variables and event listeners
// var red = document.getElementById('red1');
// red.addEventListener('click', function() {
//     document.addToScore(red);
//     checkPlayerScore();
// });

// red.setAttribute("value", "5");
// console.log(red.value);
// // //this refers to red
  
// // // end red

// var blue = document.getElementById('blue1');
// blue.addEventListener('click', function() {
//     document.addToScore(this.value);
//     checkPlayerScore();
// });

// // // end blue

// var yellow = document.getElementById('yellow1');
// yellow.addEventListener('click', function() {
//     addToScore(this.value);
//     checkPlayerScore();
// });

// // // end yellow

// var green = document.getElementById('green1');
// green.addEventListener('click', function() {
//     addToScore(this.value);
//     checkPlayerScore();
// });

// // // end green


// var sum = parseInt('red1'.value) + parseInt('blue1'.value) + parseInt('yellow1'.value) + parseInt(green1.value);

// console.log (sum);

// // // Comparing score with target number to determine win/loss

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
// // // end

// function checkPlayerScore() {
// //yourScore, targetScore (parseFloat() is for decimals)
//   var playerInt = parseInt(yourScore.innerHTML);
//   var targetInt = parseInt(targetScore.innerHTML);
//   if (playerInt === targetInt) {
//       alert('You win!');
//   } else if (playerInt > targetInt) {
//     alert('You lose!');
//   } 
// }
