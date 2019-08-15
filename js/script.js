/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Author: Abdul-Rahman Haddam
Created Date: 8/14/2019

Summary: Displays random famous quotes each time a button is clicked. 

******************************************/

// create quotes variable array to store quotes in objects. 

var quotes = [
  {quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.", 
    source: "Mahatma Gandhi",
    tag: "Inspirational"
  },
  {quote: "Do what you can, with what you have, where you are.", 
    source: "Theodore Roosevelt",
    tag: "Inspirational"
  },
  {quote: "Wise men speak because they have something to say; fools because they have to say something.", 
    source: "Plato",
    tag: "Inspirational"
  },
  {quote: "You don't win friends with salad", 
    source: "Homer Simpson", 
    tag: "Humor",
    citation: "Lisa the Vegetarian (Season 7, Episode 5)"
  },
  {quote: "My fellow Americans, ask not what your country can do for you, ask what you can do for your country.", 
    source: "John F. Kennedy", 
    tag: "Inspirational",
    year: "January 20, 1961" 
  }
]


// function returns a single random quote from our quotes array

function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}


// function prints quote from our getRandomQuote() function into the quote-box div

function printQuote() {
  var quote = getRandomQuote();
  var html = '';
  html += '<p class="quote">'+quote.quote+'</p>';
  html += '<p class="source">'+quote.source;
  if(quote.citation) {
    html += '<span class="citation">'+quote.citation+'</span>';
  }
  if(quote.year) {

    html += '<span class="year">'+quote.year+'</span>';
  }
  html += '<span class="tag">'+quote.tag+'</span></p>';
  document.getElementById("quote-box").innerHTML = html;
  setRandomColor();
}


// function creates 3 random numbers,, sets them to a variable, and updates background color of the body

function setRandomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + r + "," + g + "," + b + ")";

  document.body.style.background = bgColor;
}


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. 
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// invoke printQuote function every 20 seconds

setInterval(printQuote, 20000);
