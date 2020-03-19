// Random number generator inclusive at max and min source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor( Math.random() * (max - min + 1) + min );
}

// Code to randomly select a quote from the quotes array and return it in HTML.
function getRandomQuote() {
  selection = randomNumber(0, quotes.length - 1);
  let message = `<p class = "quote">${quotes[selection].quote}</p>`;
  if (quotes[selection].source) {
    message += `<p class = "source">-${quotes[selection].source}</p>`;
  } 
  if (quotes[selection].citation) {
    message += `<p class = "citation">${quotes[selection].citation}</p>`;
  }
  if (quotes[selection].series) {
    message += `<p class = "series">${quotes[selection].series}</p>`
  }
  if (quotes[selection].year) {
    message += `<p class = "year">${quotes[selection].year}</p>`;
  }
  
  return message;
}

// Code to print argument to the quote box
function printQuote(p) {
  document.getElementById('quote-box').innerHTML = p
}

// Code to select a random background color from the colors.js array. "document.body.style.background" source:https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
function randomBackground() {
document.body.style.background = colors[randomNumber(1, colors.length - 1)];
}