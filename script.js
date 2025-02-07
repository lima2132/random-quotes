'use strict';

const quotes = [
	{
		quote: 'The only way to do great work is to love what you do',
		author: 'Steve Jobs',
	},
	{
		quote: 'Innovation distinguishes a leader and a follower',
		author: 'Steve Jobs',
	},
	{
		// prettier-ignore
		quote: "Your time is limited, so don't waste it living someone else's life.",
		author: 'Steve Jobs',
	},
];

const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');

function generateRandomQuote() {
	const randomIndex = Math.floor(Math.random() * quotes.length);
	const randomQuote = quotes[randomIndex];
	quoteElement.textContent = randomQuote;
}

generateBtn.addEventListener('click', generateRandomQuote);
