

randomBackground()
printQuote(getRandomQuote());

setInterval('printQuote(getRandomQuote())', 25000);
setInterval('randomBackground()', 25000);

// found help with this here: https://www.encodedna.com/javascript/auto-refresh-page-every-10-second-using-javascript-setInterval-method.htm
// code to refresh the page

// Major takeaway here was that the function needs to be a string inside the setInterval to work which no other documention showed

// setInterval('refresh()', 25000); 

//     function refresh() {
//         location.reload();
//     }

 

// below space for bugfixing and testing

// for (let i = 0; i < quotes.length; i++) {
//   for (let prop in quotes[i]) {
//     console.log(`${prop}: ${quotes[i][prop]}`)
//   }
// }

// console.log(randomNumber(0, quotes.length))