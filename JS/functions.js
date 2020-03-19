// Random number generator inclusive at max and min source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor( Math.random() * (max - min + 1) + min );
}

// Code to randomly select a quote from the quotes array and return it in HTML.
function getRandomQuote() {
  selection = randomNumber(1, 12);
  let message = `<p class = "quote">${quotes[selection].quote}</p> 
  <p class = "source">-${quotes[selection].source},</p> <p class = "citation-year">${quotes[selection].citation}, ${quotes[selection].year}</p>`;
  return message;
}

// Code to print to the page
function printQuote(p) {
  document.getElementById('quote-box').innerHTML = p
}