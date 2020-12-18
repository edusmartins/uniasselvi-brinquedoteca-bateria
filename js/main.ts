const bumbo = document.querySelector('.bumbo');
const audioBumbo: HTMLAudioElement = document.querySelector('#audio-bumbo');
const tomUm = document.querySelector('.tom-um');
const audioTomUm: HTMLAudioElement = document.querySelector('#audio-tom-1');
const tomDois = document.querySelector('.tom-dois');
const audioTomDois: HTMLAudioElement = document.querySelector('#audio-tom-2');
const suporteTons = document.querySelector('.suporte-tons');
const caixa = document.querySelector('.caixa');
const audioCaixa: HTMLAudioElement = document.querySelector('#audio-caixa');
const suporteCaixa = document.querySelector('.suporte-caixa');
const surdo = document.querySelector('.surdo');
const audioSurdo: HTMLAudioElement = document.querySelector('#audio-surdo');
const suporteSurdo = document.querySelector('.suporte-surdo');
const prato = document.querySelector('.prato');
const audioPrato: HTMLAudioElement = document.querySelector('#audio-prato');
const suportePrato = document.querySelector('.suporte-prato');
const chimbal = document.querySelector('.chimbal');
const audioChimbal: HTMLAudioElement = document.querySelector('#audio-chimbal');
const suporteChimbal = document.querySelector('.suporte-chimbal');
const instrucao = document.querySelector('.instrucao');

const audioBateriCompleta: HTMLAudioElement = document.querySelector(
	'#audio-bateria-completa'
);
const tocarBateriaButton = document.querySelector('#tocar-bateria-button');

// function showBumbo() {
// 	bumbo.classList.add('visible');
// 	audioBumbo.play();
// 	audioBumbo.currentTime = 0;
// 	instrucao.classList.remove('erro');
// 	instrucao.classList.add('acerto');
// 	instrucao.innerHTML = 'Muito bem! Vamos para a próxima parte';
// }

// function showTomUm() {
// 	if (suporteTons.classList.contains('visible')) {
// 		tomUm.classList.add('visible');
// 		audioTomUm.play();
// 		audioTomUm.currentTime = 0;
// 		instrucao.classList.remove('erro');
// 		instrucao.classList.add('acerto');
// 		instrucao.innerHTML = 'Muito bem! Vamos para a próxima parte';
// 	} else {
// 		instrucao.classList.remove('acerto');
// 		instrucao.classList.add('erro');
// 		instrucao.innerHTML = 'Coloque o suporte dos tons antes';
// 	}
// }

// function showTomDois() {
// 	if (suporteTons.classList.contains('visible')) {
// 		tomDois.classList.add('visible');
// 		audioTomDois.play();
// 		audioTomDois.currentTime = 0;
// 		instrucao.classList.remove('erro');
// 		instrucao.classList.add('acerto');
// 		instrucao.innerHTML = 'Muito bem! Vamos para a próxima parte';
// 	} else {
// 		instrucao.classList.remove('acerto');
// 		instrucao.classList.add('erro');
// 		instrucao.innerHTML = 'Coloque o suporte dos tons antes';
// 	}
// }

// function showSuporteTons() {
// 	if (bumbo.classList.contains('visible')) {
// 		suporteTons.classList.add('visible');
// 		instrucao.classList.remove('erro');
// 		instrucao.classList.add('acerto');
// 		instrucao.innerHTML = 'Muito bem! Vamos para a próxima parte';
// 	} else {
// 		instrucao.classList.remove('acerto');
// 		instrucao.classList.add('erro');
// 		instrucao.innerHTML = 'Coloque o bumbo antes do suporte';
// 	}
// }

// function showCaixa() {
// 	if (suporteCaixa.classList.contains('visible')) {
// 		caixa.classList.add('visible');
// 		audioCaixa.play();
// 		audioCaixa.currentTime = 0;
// 		instrucao.classList.remove('erro');
// 		instrucao.classList.add('acerto');
// 		instrucao.innerHTML = 'Muito bem! Vamos para a próxima parte';
// 	} else {
// 		instrucao.classList.remove('acerto');
// 		instrucao.classList.add('erro');
// 		instrucao.innerHTML = 'Coloque o suporte da caixa antes';
// 	}
// }

// function showSuporteCaixa() {
// 	suporteCaixa.classList.add('visible');
// 	instrucao.classList.remove('erro');
// 	instrucao.classList.add('acerto');
// 	instrucao.innerHTML = 'Muito bem! Vamos para a próxima parte';
// }

// function showSurdo() {
// 	if (suporteSurdo.classList.contains('visible')) {
// 		surdo.classList.add('visible');
// 		audioSurdo.play();
// 		audioSurdo.currentTime = 0;
// 		instrucao.classList.remove('erro');
// 		instrucao.classList.add('acerto');
// 		instrucao.innerHTML = 'Muito bem! Vamos para a próxima parte';
// 	} else {
// 		instrucao.classList.remove('acerto');
// 		instrucao.classList.add('erro');
// 		instrucao.innerHTML = 'Coloque o suporte do surdo antes';
// 	}
// }

// function showSuporteSurdo() {
// 	suporteSurdo.classList.add('visible');
// 	instrucao.classList.remove('erro');
// 	instrucao.classList.add('acerto');
// 	instrucao.innerHTML = 'Muito bem! Vamos para a próxima parte';
// }

// function showPrato() {
// 	if (suportePrato.classList.contains('visible')) {
// 		prato.classList.add('visible');
// 		audioPrato.play();
// 		audioPrato.currentTime = 0;
// 		instrucao.classList.remove('erro');
// 		instrucao.classList.add('acerto');
// 		instrucao.innerHTML = 'Muito bem! Vamos para a próxima parte';
// 	} else {
// 		instrucao.classList.remove('acerto');
// 		instrucao.classList.add('erro');
// 		instrucao.innerHTML = 'Coloque o pedestal do prato antes';
// 	}
// }

// function showSuportePrato() {
// 	suportePrato.classList.add('visible');
// 	instrucao.classList.remove('erro');
// 	instrucao.classList.add('acerto');
// 	instrucao.innerHTML = 'Muito bem! Vamos para a próxima parte';
// }

// function showChimbal() {
// 	if (suporteChimbal.classList.contains('visible')) {
// 		chimbal.classList.add('visible');
// 		audioChimbal.play();
// 		audioChimbal.currentTime = 0;
// 		instrucao.classList.remove('erro');
// 		instrucao.classList.add('acerto');
// 		instrucao.innerHTML = 'Muito bem! Vamos para a próxima parte';
// 	} else {
// 		instrucao.classList.remove('acerto');
// 		instrucao.classList.add('erro');
// 		instrucao.innerHTML = 'Coloque o pedestal do chimbal antes';
// 	}
// }

// function showSuporteChimbal() {
// 	suporteChimbal.classList.add('visible');
// 	instrucao.classList.remove('erro');
// 	instrucao.classList.add('acerto');
// 	instrucao.innerHTML = 'Muito bem! Vamos para a próxima parte';
// }

document.addEventListener('click', showResultado);

function showResultado() {
	if (
		bumbo.classList.contains('visible') &&
		caixa.classList.contains('visible') &&
		tomUm.classList.contains('visible') &&
		tomDois.classList.contains('visible') &&
		surdo.classList.contains('visible') &&
		chimbal.classList.contains('visible') &&
		prato.classList.contains('visible') &&
		suporteCaixa.classList.contains('visible') &&
		suporteSurdo.classList.contains('visible') &&
		suporteTons.classList.contains('visible') &&
		suporteChimbal.classList.contains('visible') &&
		suportePrato.classList.contains('visible')
	) {
		document.querySelector('.partes-da-bateria').classList.remove('visible');
		instrucao.classList.add('hidden');
		document.querySelector('.resultado').classList.add('visible');
	} else {
		null;
	}
}

let count = 0;

function tocarBateria() {
	if (count == 0) {
		count = 1;
		audioBateriCompleta.play();
		tocarBateriaButton.innerHTML = '&#9611 Parar de tocar';
	} else {
		count = 0;
		audioBateriCompleta.pause();
		tocarBateriaButton.innerHTML = '&#9658 Ouça uma bateria';
	}
}

document.addEventListener('keydown', function (event) {
	if (document.querySelector('.resultado').classList.contains('visible')) {
		switch (event.key) {
			case '1':
				audioBumbo.play();
				audioBumbo.currentTime = 0;
				document.querySelector('#tocar-parte-bumbo').classList.add('play');
				setTimeout(() => {
					document.querySelector('#tocar-parte-bumbo').classList.remove('play');
				}, 200);
				break;
			case '2':
				audioCaixa.play();
				audioCaixa.currentTime = 0;
				document.querySelector('#tocar-parte-caixa').classList.add('play');
				setTimeout(() => {
					document.querySelector('#tocar-parte-caixa').classList.remove('play');
				}, 200);
				break;
			case '3':
				audioChimbal.play();
				audioChimbal.currentTime = 0;
				document.querySelector('#tocar-parte-chimbal').classList.add('play');
				setTimeout(() => {
					document
						.querySelector('#tocar-parte-chimbal')
						.classList.remove('play');
				}, 200);
				break;
			case '4':
				audioPrato.play();
				audioPrato.currentTime = 0;
				document.querySelector('#tocar-parte-prato').classList.add('play');
				setTimeout(() => {
					document.querySelector('#tocar-parte-prato').classList.remove('play');
				}, 200);
				break;
			case '5':
				audioTomUm.play();
				audioTomUm.currentTime = 0;
				document.querySelector('#tocar-parte-tom-um').classList.add('play');
				setTimeout(() => {
					document
						.querySelector('#tocar-parte-tom-um')
						.classList.remove('play');
				}, 200);
				break;
			case '6':
				audioTomDois.play();
				audioTomDois.currentTime = 0;
				document.querySelector('#tocar-parte-tom-dois').classList.add('play');
				setTimeout(() => {
					document
						.querySelector('#tocar-parte-tom-dois')
						.classList.remove('play');
				}, 200);
				break;
			case '7':
				audioSurdo.play();
				audioSurdo.currentTime = 0;
				document.querySelector('#tocar-parte-surdo').classList.add('play');
				setTimeout(() => {
					document.querySelector('#tocar-parte-surdo').classList.remove('play');
				}, 200);
				break;
		}
	}
});

declare const Rive: any;

function playAnimation() {
	// first, instantiate the Rive engine and load the WASM file(s)
	Rive({
		locateFile: (file) => 'https://unpkg.com/rive-canvas@0.6.7/' + file,
	}).then((rive) => {
		// Rive's ready to rock 'n roll
		// Let's load up a Rive animation file, typically ending in '.riv'
		const req = new Request('../img/rive/bateria.riv');
		fetch(req)
			.then((res) => {
				return res.arrayBuffer();
			})
			.then((buf) => {
				// we've got the raw bytes of the animation, let's load them into a Rive
				// file
				const file = rive.load(new Uint8Array(buf));
				// get the default artboard, where the animations we want to interact
				// with live in this file
				const artboard = file.defaultArtboard();
				// now we can access the animations; let's get one called 'vibration'

				const bumboEnter = artboard.animation('bumbo-enter');
				const suporteCaixaEnter = artboard.animation('caixa-suporte-enter');
				const caixaEnter = artboard.animation('caixa-enter');
				const suporteChimbalEnter = artboard.animation('chimbal-suporte-enter');
				const chimbalEnter = artboard.animation('chimbal-enter');
				const suportePratoEnter = artboard.animation('prato-suporte-enter');
				const pratoEnter = artboard.animation('prato-enter');
				const suporteTomEnter = artboard.animation('tom-suporte-enter');
				const tomUmEnter = artboard.animation('tom-1-enter');
				const tomDoisEnter = artboard.animation('tom-2-enter');
				const suporteSurdoEnter = artboard.animation('surdo-suporte-enter');
				const surdoEnter = artboard.animation('surdo-enter');
				const bumboPlay = artboard.animation('bumbo-play');
				const caixaPlay = artboard.animation('caixa-play');
				const chimbalPlay = artboard.animation('chimbal-play');
				const pratoPlay = artboard.animation('prato-play');
				const tomUmPlay = artboard.animation('tom-1-play');
				const tomDoisPlay = artboard.animation('tom-2-play');
				const surdoPlay = artboard.animation('surdo-play');
				const restartAnimation = artboard.animation('restart');

				let animationInstance;

				function erro(msg) {
					instrucao.classList.remove('acerto');
					instrucao.classList.add('erro');
					instrucao.innerHTML = `${msg}`;
				}

				function acerto(elm, audio, animation) {
					elm.classList.contains('visible')
						? null
						: (animationInstance = new rive.LinearAnimationInstance(animation));
					elm.classList.add('visible');
					if (audio != null || audio != undefined) {
						audio.play();
						audio.currentTime = 0;
					}
					instrucao.classList.remove('erro');
					instrucao.classList.add('acerto');
					instrucao.innerHTML = 'Muito bem! Vamos para a próxima parte';
				}

				document
					.querySelector('#bumbo-button')
					.addEventListener('click', (e) => {
						acerto(bumbo, audioBumbo, bumboEnter);
					});

				document
					.querySelector('#caixa-button')
					.addEventListener('click', () => {
						if (suporteCaixa.classList.contains('visible')) {
							acerto(caixa, audioCaixa, caixaEnter);
						} else {
							erro('Coloque o suporte da caixa antes');
						}
					});

				document
					.querySelector('#chimbal-button')
					.addEventListener('click', () => {
						if (suporteChimbal.classList.contains('visible')) {
							acerto(chimbal, audioChimbal, chimbalEnter);
						} else {
							erro('Coloque o pedestal do chimbal antes');
						}
					});

				document
					.querySelector('#tom-1-button')
					.addEventListener('click', () => {
						if (suporteTons.classList.contains('visible')) {
							acerto(tomUm, audioTomUm, tomUmEnter);
						} else {
							erro('Coloque o suporte dos tons antes');
						}
					});

				document
					.querySelector('#tom-2-button')
					.addEventListener('click', () => {
						if (suporteTons.classList.contains('visible')) {
							acerto(tomDois, audioTomDois, tomDoisEnter);
						} else {
							erro('Coloque o suporte dos tons antes');
						}
					});

				document
					.querySelector('#surdo-button')
					.addEventListener('click', () => {
						if (suporteSurdo.classList.contains('visible')) {
							acerto(surdo, audioSurdo, surdoEnter);
						} else {
							erro('Coloque o suporte do surdo antes');
						}
					});

				document
					.querySelector('#prato-button')
					.addEventListener('click', () => {
						if (suportePrato.classList.contains('visible')) {
							acerto(prato, audioPrato, pratoEnter);
						} else {
							erro('Coloque o pedestal do prato antes');
						}
					});

				document
					.querySelector('#suporte-caixa-button')
					.addEventListener('click', () => {
						acerto(suporteCaixa, null, suporteCaixaEnter);
					});

				document
					.querySelector('#suporte-tom-button')
					.addEventListener('click', () => {
						if (bumbo.classList.contains('visible')) {
							acerto(suporteTons, null, suporteTomEnter);
						} else {
							erro('Coloque o bumbo antes do suporte');
						}
					});

				document
					.querySelector('#suporte-surdo-button')
					.addEventListener('click', () => {
						acerto(suporteSurdo, null, suporteSurdoEnter);
					});

				document
					.querySelector('#suporte-prato-button')
					.addEventListener('click', () => {
						acerto(suportePrato, null, suportePratoEnter);
					});

				document
					.querySelector('#suporte-chimbal-button')
					.addEventListener('click', () => {
						acerto(suporteChimbal, null, suporteChimbalEnter);
					});

				document
					.querySelector('#restart-button')
					.addEventListener('click', () => {
						animationInstance = new rive.LinearAnimationInstance(
							restartAnimation
						);
					});

				document.addEventListener('keydown', function (event) {
					if (
						document.querySelector('.resultado').classList.contains('visible')
					) {
						switch (event.key) {
							case '1':
								console.log('apertei 1');
								animationInstance = new rive.LinearAnimationInstance(bumboPlay);
								break;
							case '2':
								console.log('apertei 2');
								animationInstance = new rive.LinearAnimationInstance(caixaPlay);
								break;
							case '3':
								console.log('apertei 3');
								animationInstance = new rive.LinearAnimationInstance(
									chimbalPlay
								);
								break;
							case '4':
								console.log('apertei 4');
								animationInstance = new rive.LinearAnimationInstance(pratoPlay);
								break;
							case '5':
								console.log('apertei 5');
								animationInstance = new rive.LinearAnimationInstance(tomUmPlay);
								break;
							case '6':
								console.log('apertei 6');
								animationInstance = new rive.LinearAnimationInstance(
									tomDoisPlay
								);
								break;
							case '7':
								console.log('apertei 7');
								animationInstance = new rive.LinearAnimationInstance(surdoPlay);
								break;
						}
					}
				});

				// let's grab our canvas
				const canvas = document.getElementById(
					'riveCanvas'
				) as HTMLCanvasElement;
				const ctx = canvas.getContext('2d');
				// nw we can create a Rive renderer and wire it up to our 2D context
				const renderer = new rive.CanvasRenderer(ctx);
				// advance the artboard to render a frame
				artboard.advance(0);
				// Let's make sure our frame fits into our canvas
				ctx.save();
				renderer.align(
					rive.Fit.contain,
					rive.Alignment.center,
					{
						minX: 0,
						minY: 0,
						maxX: canvas.width,
						maxY: canvas.height,
					},
					artboard.bounds
				);
				// and now we can draw our frame to our canvas
				artboard.draw(renderer);
				ctx.restore();

				// track the last time a frame was rendered
				let lastTime = 0;

				// okay, so we have an animation and a renderer; how do we play an
				// animation? First, let's set up our animation loop with
				// requestFrameAnimation
				function draw(time) {
					//essa função é chamada em loop aguardando uma instancia de animação ser setada para tocar a animação.
					//então o ideal é setar as instancias fora dessa função, chamá-las e aqui apenas fazer a verificação se ela existe, e executá-la

					// work out how many seconds have passed since a previous frame was
					// drawn
					if (!lastTime) {
						lastTime = time;
					}
					const elapsedTime = (time - lastTime) / 1000;
					lastTime = time;

					if (animationInstance != null || animationInstance != undefined) {
						// advance our animation by the elapsed time
						animationInstance.advance(elapsedTime);
						// apply the animation to the artboard
						animationInstance.apply(artboard, 1.0);
					}

					// advance the artboard
					artboard.advance(elapsedTime);

					// render the animation frame
					// first, clear the canvas
					ctx.clearRect(0, 0, canvas.width, canvas.height);
					// let's resize it to fit the canvas
					ctx.save();
					renderer.align(
						rive.Fit.contain,
						rive.Alignment.center,
						{
							minX: 0,
							minY: 0,
							maxX: canvas.width,
							maxY: canvas.height,
						},
						artboard.bounds
					);
					// and now we can draw our frame to our canvas
					artboard.draw(renderer);
					ctx.restore();

					// and kick off the next frame
					requestAnimationFrame(draw);
				}
				// now kick off the animation
				requestAnimationFrame(draw);
			});
	});
}

playAnimation();

function restart() {
	bumbo.classList.remove('visible');
	caixa.classList.remove('visible');
	tomUm.classList.remove('visible');
	tomDois.classList.remove('visible');
	surdo.classList.remove('visible');
	chimbal.classList.remove('visible');
	prato.classList.remove('visible');
	suporteCaixa.classList.remove('visible');
	suporteSurdo.classList.remove('visible');
	suporteTons.classList.remove('visible');
	suporteChimbal.classList.remove('visible');
	suportePrato.classList.remove('visible');
	instrucao.classList.remove('hidden');
	instrucao.classList.remove('acerto');
	instrucao.classList.remove('erro');
	audioBateriCompleta.pause();
	audioBateriCompleta.currentTime = 0;
	instrucao.innerHTML = 'Clique nas partes da bateria na ordem correta';
	document.querySelector('.resultado').classList.remove('visible');
	document.querySelector('.partes-da-bateria').classList.add('visible');
}
