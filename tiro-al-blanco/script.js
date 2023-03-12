const target = document.querySelector('.target');
const dart = document.querySelector('.dart');
const scoreDisplay = document.querySelector('.score span');
const shootBtn = document.querySelector('.shoot-btn');

let score = 0;

shootBtn.addEventListener('click', () => {
	dart.style.display = 'block';
	dart.animate([
		{ transform: 'translateY(0)' },
		{ transform: 'translateY(-400px)' }
	], {
		duration: 1000,
		easing: 'ease-in-out',
		fill: 'forwards'
	}).onfinish = () => {
		dart.style.display = 'none';
		checkCollision();
		scoreDisplay.innerText = score;
	}
});

function checkCollision() {
	const dartPos = dart.getBoundingClientRect();
	const targetPos = target.getBoundingClientRect();

	if (dartPos.top <= targetPos.bottom &&
		dartPos.right >= targetPos.left &&
		dartPos.bottom >= targetPos.top &&
		dartPos.left <= targetPos.right) {
		score++;
		target.style.top = Math.floor(Math.random() * 350) + 'px';
		target.style.left = Math.floor(Math.random() * 350) + 'px';
	}
}
