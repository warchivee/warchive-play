<span class="loader"></span>
<div>
	<i class="fa-solid fa-feather"></i>
	<p>당신과 비슷한 여성서사 캐릭터를 작성하는 중<span class="ellipsis">...</span></p>
</div>

<style>
	div {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
		top: 10%;
	}

	div > * {
		color: white;
	}

	/* https://codepen.io/thetallweeks/pen/yybGra */

	.ellipsis {
		color: white;
		overflow: hidden;
		display: inline-block;
		vertical-align: bottom;
		-webkit-animation: ellipsis steps(4, end) 2s infinite;
		animation: ellipsis steps(4, end) 2s infinite;
		content: '\2026'; /* ascii code for the ellipsis character */
		width: 0px;
	}

	@keyframes ellipsis {
		to {
			width: 1.25em;
		}
	}

	/* https://cssloaders.github.io/ */
	.loader {
		font-size: 10px;
		width: 1em;
		height: 1em;
		border-radius: 50%;
		position: relative;
		text-indent: -9999em;
		animation: mulShdSpin 1.1s infinite ease;
		transform: translateZ(0);
	}

	@keyframes mulShdSpin {
		0%,
		100% {
			box-shadow:
				0em -2.6em 0em 0em #ffffff,
				1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
				2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
				1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
				0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
				-1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
				-2.6em 0em 0 0em rgba(255, 255, 255, 0.5),
				-1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);
		}
		12.5% {
			box-shadow:
				0em -2.6em 0em 0em rgba(255, 255, 255, 0.7),
				1.8em -1.8em 0 0em #ffffff,
				2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
				1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
				0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
				-1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
				-2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
				-1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);
		}
		25% {
			box-shadow:
				0em -2.6em 0em 0em rgba(255, 255, 255, 0.5),
				1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7),
				2.5em 0em 0 0em #ffffff,
				1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
				0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
				-1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
				-2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
				-1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
		}
		37.5% {
			box-shadow:
				0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
				1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5),
				2.5em 0em 0 0em rgba(255, 255, 255, 0.7),
				1.75em 1.75em 0 0em #ffffff,
				0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
				-1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
				-2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
				-1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
		}
		50% {
			box-shadow:
				0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
				1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
				2.5em 0em 0 0em rgba(255, 255, 255, 0.5),
				1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7),
				0em 2.5em 0 0em #ffffff,
				-1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
				-2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
				-1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
		}
		62.5% {
			box-shadow:
				0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
				1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
				2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
				1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5),
				0em 2.5em 0 0em rgba(255, 255, 255, 0.7),
				-1.8em 1.8em 0 0em #ffffff,
				-2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
				-1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
		}
		75% {
			box-shadow:
				0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
				1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
				2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
				1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
				0em 2.5em 0 0em rgba(255, 255, 255, 0.5),
				-1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7),
				-2.6em 0em 0 0em #ffffff,
				-1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
		}
		87.5% {
			box-shadow:
				0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
				1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
				2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
				1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
				0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
				-1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5),
				-2.6em 0em 0 0em rgba(255, 255, 255, 0.7),
				-1.8em -1.8em 0 0em #ffffff;
		}
	}
</style>
