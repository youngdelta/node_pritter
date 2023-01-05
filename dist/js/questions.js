import { questions } from './data.js';

const progressValueEl = document.querySelector('.progress .value');
const numberEl = document.querySelector('.number');
const questionEl = document.querySelector('.question');
const choiceEl = document.querySelectorAll('.choice');
const choice1El = document.querySelector('.choice1');
const choice2El = document.querySelector('.choice2');

// const progress = document.querySelector('.progress');
// const progressValue = document.querySelector('.progress.value');
// const number = document.querySelector('.number');

let currentNumber = 0;
let mbti = '';

/**
 *
 */
function renderQuestion() {
	const question = questions?.[currentNumber] || {};
	numberEl.innerHTML = question?.number || 0;
	questionEl.innerHTML = question?.question || '';
	choice1El.innerHTML = question?.choices?.[0]?.text || '';
	choice2El.innerHTML = question?.choices?.[1]?.text || '';

	progressValueEl.style.width = `${(currentNumber + 1) * 10}%`;
}

renderQuestion();

// [].forEach.call(choiceEl, c => {
// 	c.addEventListener('click', () => {
// 		currentNumber++;
// 		renderQuestion();
// 	});
// });

function showResultPage() {
	window.location.href = `./result.html?mbti=${mbti}`;
}

const eventListener = (c, idx) => {
	c.addEventListener('click', e => {
		console.log('🚀 ~ file: questions.js:45 ~ c.addEventListener ~ e', e, e.target, e.target.value, e.target.classList);
		// const choiceNum = e.target.classList.contains('choice1') ? 0 : 1;
		mbti += questions?.[currentNumber]?.choices?.[idx]?.value || '';
		console.log('🚀 ~ file: questions.js:44 ~ eventListener ~ mbti', mbti);
		if (currentNumber === questions.length - 1) {
			showResultPage();
			return;
		}
		currentNumber++;
		renderQuestion();
	});
};

choiceEl.forEach(eventListener);
