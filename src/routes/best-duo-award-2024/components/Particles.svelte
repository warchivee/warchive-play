<div id="container">
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
</div>

<style>
	.particle {
		position: absolute;
		border-radius: 50%;
		background-color: rgba(255, 255, 255, 0.5);
		filter: blur(3px);
		box-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
		animation-duration: 60s;
		animation-iteration-count: infinite;
	}

	.particle:nth-child(odd) {
		height: 9px;
		width: 9px;
	}

	.particle:nth-child(even) {
		height: 7px;
		width: 7px;
	}

	.particle:nth-child(1) {
		opacity: 0.46;
		animation-name: particle1;
		animation-delay: -0.2s;
		transform: translate3d(55vw, 79vh, 22px);
	}
	@keyframes particle1 {
		100% {
			transform: translate3d(80vw, 51vh, 9px);
		}
	}

	.particle:nth-child(2) {
		opacity: 0.08;
		animation-name: particle2;
		animation-delay: -0.4s;
		transform: translate3d(4vw, 21vh, 14px);
	}
	@keyframes particle2 {
		100% {
			transform: translate3d(31vw, 35vh, 87px);
		}
	}

	.particle:nth-child(3) {
		opacity: 0.41;
		animation-name: particle3;
		animation-delay: -0.6s;
		transform: translate3d(78vw, 63vh, 52px);
	}
	@keyframes particle3 {
		100% {
			transform: translate3d(42vw, 66vh, 40px);
		}
	}

	.particle:nth-child(4) {
		opacity: 0.33;
		animation-name: particle4;
		animation-delay: -0.8s;
		transform: translate3d(56vw, 32vh, 88px);
	}
	@keyframes particle4 {
		100% {
			transform: translate3d(78vw, 4vh, 55px);
		}
	}

	.particle:nth-child(5) {
		opacity: 0.4;
		animation-name: particle5;
		animation-delay: -1s;
		transform: translate3d(79vw, 74vh, 14px);
	}
	@keyframes particle5 {
		100% {
			transform: translate3d(2vw, 47vh, 68px);
		}
	}

	.particle:nth-child(6) {
		opacity: 0.41;
		animation-name: particle6;
		animation-delay: -1.2s;
		transform: translate3d(92vw, 27vh, 61px);
	}
	@keyframes particle6 {
		100% {
			transform: translate3d(80vw, 35vh, 11px);
		}
	}

	.particle:nth-child(7) {
		opacity: 0.74;
		animation-name: particle7;
		animation-delay: -1.4s;
		transform: translate3d(55vw, 60vh, 75px);
	}
	@keyframes particle7 {
		100% {
			transform: translate3d(63vw, 15vh, 59px);
		}
	}

	.particle:nth-child(8) {
		opacity: 0.09;
		animation-name: particle8;
		animation-delay: -1.6s;
		transform: translate3d(10vw, 10vh, 55px);
	}
	@keyframes particle8 {
		100% {
			transform: translate3d(30vw, 64vh, 91px);
		}
	}

	.particle:nth-child(9) {
		opacity: 0.89;
		animation-name: particle9;
		animation-delay: -1.8s;
		transform: translate3d(3vw, 53vh, 98px);
	}
	@keyframes particle9 {
		100% {
			transform: translate3d(60vw, 80vh, 97px);
		}
	}

	.particle:nth-child(10) {
		opacity: 0.23;
		animation-name: particle10;
		animation-delay: -2s;
		transform: translate3d(64vw, 77vh, 95px);
	}
	@keyframes particle10 {
		100% {
			transform: translate3d(18vw, 5vh, 7px);
		}
	}

	.particle:nth-child(11) {
		opacity: 0.96;
		animation-name: particle11;
		animation-delay: -2.2s;
		transform: translate3d(35vw, 6vh, 101px);
	}
	@keyframes particle11 {
		100% {
			transform: translate3d(88vw, 14vh, 71px);
		}
	}

	.particle:nth-child(12) {
		opacity: 0.52;
		animation-name: particle12;
		animation-delay: -2.4s;
		transform: translate3d(55vw, 12vh, 33px);
	}
	@keyframes particle12 {
		100% {
			transform: translate3d(46vw, 5vh, 3px);
		}
	}

	.particle:nth-child(13) {
		opacity: 0.95;
		animation-name: particle13;
		animation-delay: -2.6s;
		transform: translate3d(90vw, 27vh, 70px);
	}
	@keyframes particle13 {
		100% {
			transform: translate3d(51vw, 75vh, 18px);
		}
	}

	.particle:nth-child(14) {
		opacity: 0.98;
		animation-name: particle14;
		animation-delay: -2.8s;
		transform: translate3d(3vw, 73vh, 11px);
	}
	@keyframes particle14 {
		100% {
			transform: translate3d(45vw, 46vh, 28px);
		}
	}

	.particle:nth-child(15) {
		opacity: 0.69;
		animation-name: particle15;
		animation-delay: -3s;
		transform: translate3d(86vw, 82vh, 49px);
	}
	@keyframes particle15 {
		100% {
			transform: translate3d(16vw, 31vh, 36px);
		}
	}
</style>
