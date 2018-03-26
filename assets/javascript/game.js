//Random Number Generator
function genRandomNumInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

//target number
var targetNumber = 0;

//load document and begin by displaying the random number to match
$(document).ready(function(){
    targetNumber = genRandomNumInterval(19,127);
    $('h2#randomNumber').html(function(){ return '<h2>Random Number: '+ targetNumber +'</h2>'});
});

//four jewels with random vars from 1 to 12
var randomNumber1 = genRandomNumInterval(1,12);
var randomNumber2 = genRandomNumInterval(1,12);
var randomNumber3 = genRandomNumInterval(1,12);
var randomNumber4 = genRandomNumInterval(1,12);

//initial variables
var totalScore = 0;
var win = 0; 
var loss = 0;  

//reset is false
var resetGame = false;

//if resetGame is true then we reset the variables
if (resetGame){
    //reset target number
    targetNumber = genRandomNumInterval(19,127);
    //update ui with new target number
    $('h2#randomNumber').html(function(){ return '<h2>Random Number: '+ targetNumber +'</h2>'});

    //update all random variables for pictures
    randomNumber1 = genRandomNumInterval(1,12);
    randomNumber2 = genRandomNumInterval(1,12);
    randomNumber3 = genRandomNumInterval(1,12);
    randomNumber4 = genRandomNumInterval(1,12);

    //update total score to 0
    totalScore = 0;
}

//function to determin win or loss
function winLossFncn(totalScore, targetNumber){
    if(targetNumber === totalScore){
        //Display the Win Message if the player successfully reaches the target number
        $('h3#roundMsg').html(function(){ return '<h3>You Win!</h3>'});
        //Counter for wins
        win++;
        //Display the number of wins
        $('h3#numWins').html(function(){ return '<h3>Wins: '+win+'</h3>'});
        //Reset the game
        resetGame = true;
    }

    if (totalScore > targetNumber){ 
        //Display the Loss Message if the player successfully reaches the target number
        $('h3#roundMsg').html(function(){ return '<h3>You Lose!</h3>'}); 
        //Counter for losses
        loss++;
        //Display the number of losses
        $('h3#numLosses').html(function(){ return '<h3>Losses: '+loss+'</h3>'});
        //Reset the game
        resetGame = true;
    }
}



//Function for updating the total score
function updateTotalScore(totalScore){
    $('h2#totalScore').html(function(){ return '<h2>Total Score: '+ totalScore +'</h2>'});
}

//On Click: Image One Function
$('img#random_one').on('click', function(){
    //tally score
    totalScore = totalScore + randomNumber1;
    //update the UI
    updateTotalScore(totalScore);
    //run function for win or loss
    winLossFncn(totalScore, targetNumber);
});

// //On Click: Image Two Function
$('img#random_two').on('click', function(){
    //tally score
    totalScore = totalScore + randomNumber2;
    //update the UI
    updateTotalScore(totalScore);
    //run function for win or loss
    winLossFncn(totalScore, targetNumber);
});

//On Click: Image Three Function
$('img#random_three').on('click', function(){
    //tally score
    totalScore = totalScore + randomNumber3;
    //update the UI
    updateTotalScore(totalScore);
    //run function for win or loss
    winLossFncn(totalScore, targetNumber);
});

//On Click: Image Four Function
$('img#random_four').on('click', function(){
    //tally score
    totalScore = totalScore + randomNumber4;
    //update the UI
    updateTotalScore(totalScore);
    //run function for win or loss
    winLossFncn(totalScore, targetNumber);
});