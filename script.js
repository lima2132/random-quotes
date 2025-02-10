'use strict';

import quotes from './quotes.js';

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const generateBtn = document.getElementById('generate-btn');

function generateRandomQuote() {
	const randomIndex = Math.floor(Math.random() * quotes.length);
	const randomQuote = quotes[randomIndex];
	const { quote, author } = randomQuote;
	quoteElement.textContent = quote;
	authorElement.textContent = author;
}

generateBtn.addEventListener('click', generateRandomQuote);
