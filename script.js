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
	{
		// prettier-ignore
		quote: 'Success is not final, failure is not fatal: it is the courage to continue that counts.',
		author: 'Winston Churchill',
	},
	{
		quote: 'Do what you can, with what you have, where you are.',
		author: 'Theodore Roosevelt',
	},
	{
		quote: 'It does not matter how slowly you go as long as you do not stop.',
		author: 'Confucius',
	},
	{
		quote: 'Believe you can and you’re halfway there.',
		author: 'Theodore Roosevelt',
	},
	{
		quote: 'Happiness depends upon ourselves.',
		author: 'Aristotle',
	},
	{
		quote: 'Life is what happens when you’re busy making other plans.',
		author: 'John Lennon',
	},
	{
		quote: 'We do not see things as they are, we see them as we are.',
		author: 'Anaïs Nin',
	},
];

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
