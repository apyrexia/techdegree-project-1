/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote: `To be whole is to be part; true voyage is return.`,
    source: `Shevek`,
    citation: `The Dispossessed by Ursula K. Le Guin`,
    year: `1974`
  },
  {
    quote: `If you can see a thing whole, it seems that it’s always beautiful. Planets, lives.... But close up, a world’s all dirt and rocks. And day to day, life’s a hard job, you get tired, you lose the pattern. You need distance, interval. The way to see how beautiful the earth is, is to see it as the moon. The way to see how beautiful life is, is from the vantage point of death.`,
    source: `Shevek`,
    citation: `The Dispossessed by Ursula K. Le Guin`,
    year: `1974`
  },
  {
    quote: `Wonder is the feeling of a philosopher, and philosophy begins in wonder.`,
    source: `Socrates as quoted by Plato`,
    citation: `Theaetetus`,
    year: `circa 369 BC`
  },
  {
    quote: `It is a strange fate that we should suffer so much fear and doubt over so small a thing… such a little thing.`,
    source: `Boromir`,
    citation: `The Fellowship of the Ring by J.R.R. Tolkien`,
    series: `Book One of The Lord of the Rings`,
    year: `1954`
  },
  {
    quote: `The world is indeed full of peril, and in it there are many dark places; but still there is much that is fair, and though in all lands love is now mingled with grief, it grows perhaps the greater.`,
    source: `Haraldir`,
    citation: `The Fellowship of the Ring by J.R.R. Tolkien`,
    series: `Book One of The Lord of the Rings`,
    year: `1954`
  },
  {
    quote: `Time does not tarry ever, but change and growth is not in all things and places alike. For the Elves the world moves, and it moves both very swift and very slow. Swift, because they themselves change little, and all else fleets by: it is a grief to them. Slow, because they do not count the running years, not for themselves. Yet beneath the Sun all things must wear to an end at last.`,
    source: `Legolas`,
    citation: `The Fellowship of the Ring by J.R.R. Tolkien`,
    series: `Book One of The Lord of the Rings`,
    year: `1954`
  },
  {
    quote: `Every lie we tell incurs a debt to the truth, sooner or later that debt is paid.`,
    source: `Valery Legasov`,
    citation: `From the HBO Serial "Chernobyl"`
  },
  {
    quote: `You must do the thing you think you cannot do.`,
    source: `Eleanor Roosevelt`,
    year: `1960`
  },
  {
    quote: `To do what you are afraid to do is to guide your life by fear. How much better not to be afraid to do what you believe in doing!`,
    source: `Jane Addams`,
    year: `circa 1881`
  },
  {
    quote: `There is certainly no absolute standard of beauty. That is precisely what makes its pursuit so interesting.`,
    source: `John Kenneth Galbraith`,
    citation: `quoted in New York Times Magazine`,
    year: `1960`
  }
];

/***
 * `colors` array
***/ 

let colors = [
  'rgb(176,224,230)',
  'rgb(19, 155, 137)',
  'rgb(143,188,143)',
  'rgb(205,92,92)',
];

/***
 * `randomNumber` function
 * Random number generator inclusive at max and min source: 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
***/ 

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor( Math.random() * (max - min + 1) + min );
}

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  selection = randomNumber(0, quotes.length - 1);
  let randomQuote = quotes[selection];
  return randomQuote;
}

/***
 * `printQuote` function
***/
function printQuote() {
  let quote = getRandomQuote();
  message = `<p class="quote">${quote.quote}</p>
  <p class="source">${quote.source}`
  if (quote.citation) {
    message += `, ${quote.citation}`
  }
  if (quote.series) {
    message += `<br>${quote.series}`
  }
  if (quote.year) {
    message += `, ${quote.year}`
  }
  message += `</p>`

  document.getElementById('quote-box').innerHTML = message;
}

printQuote();

/***
 * `randomBackgroundColor` function
 * "document.body.style.background" 
 * source:https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
***/
function randomBackgroundColor() {
  document.body.style.background = colors[randomNumber(1, colors.length - 1)];
}

randomBackgroundColor();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


/***
 * code to change the background color and quote at 25 second intervals
***/
setInterval('printQuote()', 25000);
setInterval('randomBackgroundColor()', 25000);