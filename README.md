# Random Generators
You are tasked with implementing both a six-sided dice rolling app and a magic 8 ball app. Lucky for you, you're in TAC300 and have figured out that these two apps share some functionality, so you might only need to implement one object to fulfill both requests!

## Requirements:
* (5 pts) When you click the 'Roll Dice' button in diceRoller.html, the page should display a number between 1 and 6.
* (5 pts) When you click the 'Get Answer' button in magicEightBall.html, the page should display a random answer to any yes/no question about the future (You can make up your own answers or look at https://en.wikipedia.org/wiki/Magic_8-Ball if you have no idea what I'm talking about)
* (3 pts) Try to use constructor notation (see pg.108 of J&J) to use the same object constructor for both generators. If you can't figure out how to do this, you can use literal notation for partial credit.2
* (5 pts) Your object should have methods for adding or removing possible answers from the Generator. For instance, if I wanted to make it a 10-sided dice, I should be able to call diceRollGenerator.addResult(7), diceRollGenerator.addResult(8), etcetera from the console. I should also be able to call diceRollGenerator.removeResult(7), etcetera to remove possible results. You should not allow duplicate results to be added (for instance, if 1 is already a possible result for the dice roller, calling diceRollGenerator.addResult(1) shouldn't do anything)
* (2 pts) Style both diceRoller and magicEightBall so that they look nicer (right now they are plain HTML). Feel free to dig into either the HTML or the CSS, create a separate css file for each page, or even dig into the code in randomGenerators.js that populates the page with the result to get things looking exactly how you want them.
* (2 pts) Extra Credit: Create a third generator of your own design that uses the same object constructor and implement an HTML page for it, following the same pattern as diceRoller.html and magicEightBall.html.

## Tips:
* Math.random() returns a float between 0 and 1 and Math.round(n) rounds n to the nearest integer. Using these methods and some basic arithmetic, you should be able to generate integers within a specified range.
* Check out https://www.w3schools.com/js/js_array_methods.asp for array manipulation methods (like push).
