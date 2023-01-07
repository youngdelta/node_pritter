import { results, mbtis } from './data.js';

const mbti = new URLSearchParams(location.search).get('mbti');

const result = results[mbtis[mbti]];
console.log('🚀 ~ file: results.js:6 ~ result', result);

const titleEl = document.querySelector('.page-title');
const subTitleEl = document.querySelector('.page-subtitle');
const charactersEl = document.querySelector('.character');
const boxEls = document.querySelectorAll('.box');
const jobEls = document.querySelectorAll('.job');
const lectureEl = document.querySelector('.lecture');
const lectureImgEl = document.querySelector('.lecture img');

titleEl.innerHTML = result.title;
charactersEl.src = `.${result.character}`;
lectureImgEl.src = `.${result.lectureImg}`;
lectureEl.href = `${result.lectureUrl}`;
jobEls.forEach((j, idx) => {
	j.innerHTML = result.jobs[idx];
});
boxEls.forEach((b, idx) => {
	b.innerHTML = result.results[idx];
});
subTitleEl.append(` ${mbti?.toUpperCase() || ''}`);
