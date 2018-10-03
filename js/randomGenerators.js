
// TODO: Use constructor notation to create an object
// with properties and methods that can be shared by both
// diceRollGenerator and eightBallGenerator.

function Generator(choices) {
    //console.log(choices);
    //console.log(this.value);
    this.getValue = function() {
      var value = Math.floor((Math.random() * choices.length));
      var answer = choices[value];
      return(answer);
    }
// method .changeDie used to select number of sides of die.  When given a number: targetSides,
// method calculates difference between current sides and target, and adjusts accordingly using one of 2 while loops.
    this.changeDie = function(targetSides) {
      var diff = targetSides - (choices.length + 1);

        while(diff > 0) {
          choices.push(choices.length + 2);
          diff--;

          console.log([choices]);

        }

        while(diff < -1) {
          choices.pop();
          diff++;

        console.log([choices]);

        }

        // if (diff > 0) {
        //
        //   for (i = diff; i > 0  )
        //
        // } else if (diff < 0 ) {
        //
        //
        // }


    }

    //console.log(this.value);
    //console.log(answer);

}

// TODO: Initialise diceRollGenerator and eightBallGenerator
// using the constructor notation and the Generator object
// you just created
var diceRollGenerator = new Generator([1, 2, 3, 4, 5, 6]);
var eightBallGenerator = new Generator(["Reply hazy, try again", "Outlook not so good.", "Without a doubt.", "Signs point to yes.", "Better not tell you now.", "My sources say no.", "As I see it, yes", "Cannot predict now", "Very doubtful"]);


//console.log (diceRollGenerator);
//console.log (eightBallGenerator);

function handleDiceRoll() {

//console.log(diceRollGenerator.answer);
  const resultElement = document.getElementById('diceResult');

  // TODO: call a method on diceRollGenerator to populate result with a random value
  const result = diceRollGenerator.getValue();
  resultElement.innerHTML = result;
}

function handleEightBallShake() {
  const resultElement = document.getElementById('eightBallResult');

  // TODO: call a method on eightBallGenerator to populate result with a random value
  const result = eightBallGenerator.getValue();
  resultElement.innerHTML = result;
}

document.addEventListener("DOMContentLoaded", function() {
  // this code block runs when the page finishes loading
  // and attaches listeners for button clicks
  // e.g. when the diceButton is clicked, it will run the handleDiceRoll function
  const diceButton = document.getElementById('diceButton');
  if (diceButton) {
    diceButton.addEventListener('click', handleDiceRoll);
  }

  const eightBallButton = document.getElementById('eightBallButton');
  if (eightBallButton) {
    eightBallButton.addEventListener('click', handleEightBallShake);
  }
});
