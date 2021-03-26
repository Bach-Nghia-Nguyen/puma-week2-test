/** 
 Hint :  function nameOfFunction(input1,input2,input3........){
  step 1
  step 2
  step 3
===> to print to the console : console.log() 
===> to return any value     : return theValue
}
*/

/** 
 * Part1 (7)
   Given an array text = ["text 1", "text 2", "text 3","text 4", "text 5"]
      1- add "last text" to END the array 
      2- print to the console all the texts
      3- write a function to print to console random text of the array
      4- enhance the function so that it take an number input that less than length of array
      5- if the input is odd, print only ODD-position text
      6- if the input is even, print only even-position text
      7- if the input is zero, randomly assign new number and do step 5->6
 */

const text = ["text 1", "text 2", "text 3", "text 4", "text 5"];

function pushArray(input) {
  text.push(input);
  return text;
}
// console.log(pushArray("last text"));

function randomText(array) {
  let randomIndex = Math.ceil(Math.random() * (array.length - 1));
  let randomText = array[randomIndex];
  return randomText;
}
// console.log(randomText(text));

function oddOrEvenIndex(array, number) {
  if (typeof number !== "number" || array instanceof Array == false)
    return "Invalid input";

  if (number < 0 || (number * 10) % 10 != 0 || number >= array.length)
    return "Number must be postive integer that is less than array length";

  if (number % 2 == 0) {
    let randomEvenIndex;
    do {
      randomEvenIndex = Math.round(Math.random() * (array.length - 1));
    } while (randomEvenIndex % 2 != 0);
    let randomText = array[randomEvenIndex];
    return randomText;
  } else if (number % 2 !== 0) {
    let randomOddIndex;
    do {
      randomOddIndex = Math.round(Math.random() * (array.length - 1));
    } while (randomOddIndex % 2 == 0);
    let randomText = array[randomOddIndex];
    return randomText;
  } else if (number == 0) {
    let newNumber = Math.ceil(Math.random() * (array.length - 1));
    oddOrEvenIndex(array, newNumber);
  }
}
console.log(oddOrEvenIndex(text, 0));

/**
 * Part 2 (3)
  Instead of printing to the console, let now print the result to the website (HTML document)
  Make a button that when clicked :
  1 : `The length of the array is : ....`
  2 : `The number is : ..., it is : .... (odd/even)`
  3 :  Make a button to random a number 
        - then execute step 4 part 1
        - then changing value of step 1,2, show to website
*/

const body = document.getElementsByTagName("body")[0];

const displayButton = document.createElement("button");
displayButton.innerHTML = "Click to display result";
body.appendChild(displayButton);

const button2 = document.createElement("button");
button2.innerHTML = "Execute";
body.appendChild(button2);

const textAreaToDisplay = document.createElement("div");
body.appendChild(textAreaToDisplay);

const textArea2 = document.createElement("div");
body.appendChild(textArea2);

function oddAndEven(number) {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

function randomNumber() {
  return Math.round(Math.random() * (text.length - 1));
}

displayButton.addEventListener("click", () => {
  textAreaToDisplay.innerHTML = `The length of the array is: ${
    text.length
  } <br />
   The number is: ${text.length}, it is: ${oddAndEven(text.length)}  `;
});

button2.addEventListener("click", () => {
  // let number = randomNumber();
  // let text = oddOrEvenIndex(text, number);
  let showArray = pushArray("last text");

  textArea2.innerHTML = `${showArray}`;
});

/** Bounus:
 * Do not create more files. Change all text color into anycolor but black
 * Create another button that create another button that able to make another button
 */
