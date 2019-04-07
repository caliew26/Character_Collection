//random number generated for the computer //don't need to declare it here
//will tally number of wins
var myWins = 0;
//will tally number of losses
var myLoss = 0;
//number total that is generated from clicking crystals //don't need to declare it here
//to be used later, undefined so far
var randomNumberValue;

//create variables for each button
var redValue = null;
var blueValue = null;
var greenValue = null;
var yellowValue = null;

//target html element
var wins = document.getElementById("wins");
var loss = document.getElementById("losses");
var totalScore = document.getElementById("totalScore");
var randomNumber = document.getElementById("randomCrystalNumber");

//function for random number generator
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//create a reset function for when the user wins/looses 
function reset() {
    totalScore.innerText = 0;
    randomNumber.innerText = getRandomInt(19,121);
    randomNumberValue = parseInt(randomNumber.innerText);
    redValue = getRandomInt(1, 13);
    console.log(redValue);
    blueValue = getRandomInt(1, 13);
    console.log(blueValue);
    greenValue = getRandomInt(1, 13);
    console.log(greenValue);
    yellowValue = getRandomInt(1, 13);
    console.log(yellowValue);
    computerChoice = getRandomInt(19, 121);
    console.log(computerChoice);
    if (redValue == yellowValue || redValue == blueValue || redValue == greenValue || blueValue == yellowValue || blueValue == greenValue || greenValue == yellowValue) {
        reset();
    }
}

function buttonClick(crystalcolor) {
    var totalValue = parseInt(totalScore.innerText);
    console.log(totalValue);
    console.log(randomNumberValue);

    if(crystalcolor == 'red'){
        totalValue += redValue;
    }
    else if(crystalcolor == 'blue'){
        totalValue += blueValue;
    }
    else if(crystalcolor == 'green'){
        totalValue += greenValue;
    }
    else if(crystalcolor == 'yellow'){
        totalValue += yellowValue;
    }

    //if totalValue == randomNumberValue increment wins by 1 and console.log wins
    if(totalValue == randomNumberValue){
        myWins++;
        console.log(myWins);
        wins.innerText = myWins;
        reset();
    } else if(totalValue > randomNumberValue){
        myLoss++;
        console.log(myLoss);
        loss.innerText = myLoss;
        reset();
    } else{
        totalScore.innerText = totalValue;
    }
}
    reset();