//Random Number Generator
function genRandomNumInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

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

var totalScore = 0; 

//function to determin win or loss
function winLossFncn(totalScore, targetNumber){
    if(targetNumber === totalScore){
        $('h3#roundMsg').html(function(){ return '<h3>You Win!</h3>'});
    }
    if (totalScore > targetNumber){ 
        $('h3#roundMsg').html(function(){ return '<h3>You Lose!</h3>'}); 
    }
}

$('img#random_one').on('click', function(){
    //tally score
    totalScore = totalScore + randomNumber1;
    
    //update the UI
    $('h2#totalScore').html(function(){ return '<h2>Total Score: '+ totalScore +'</h2>'});

    //run function for win or loss
    winLossFncn(totalScore, targetNumber);
});

