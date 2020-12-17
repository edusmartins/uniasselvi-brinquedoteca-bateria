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

function showBumbo() {
	bumbo.classList.add('visible');
	audioBumbo.play();
	audioBumbo.currentTime = 0;
	instrucao.classList.remove('erro');
	instrucao.classList.add('acerto');
	instrucao.innerHTML = 'Muito bem! Vamos para a próxima parte';
}

function showTomUm() {
	if (suporteTons.classList.contains('visible')) {
		tomUm.classList.add('visible');
		audioTomUm.play();
		audioTomUm.currentTime = 0;
		instrucao.classList.remove('erro');
		instrucao.classList.add('acerto');
		instrucao.innerHTML = 'Muito bem! Vamos para a próxima parte';
	} else {
		instrucao.classList.remove('acerto');
		instrucao.classList.add('erro');
		instrucao.innerHTML = 'Coloque o suporte dos tons antes';
	}
}

function showTomDois() {
	if (suporteTons.classList.contains('visible')) {
		tomDois.classList.add('visible');
		audioTomDois.play();
		audioTomDois.currentTime = 0;
		instrucao.classList.remove('erro');
		instrucao.classList.add('acerto');
		instrucao.innerHTML = 'Muito bem! Vamos para a próxima parte';
	} else {
		instrucao.classList.remove('acerto');
		instrucao.classList.add('erro');
		instrucao.innerHTML = 'Coloque o suporte dos tons antes';
	}
}

function showSuporteTons() {
	if (bumbo.classList.contains('visible')) {
		suporteTons.classList.add('visible');
		instrucao.classList.remove('erro');
		instrucao.classList.add('acerto');
		instrucao.innerHTML = 'Muito bem! Vamos para a próxima parte';
	} else {
		instrucao.classList.remove('acerto');
		instrucao.classList.add('erro');
		instrucao.innerHTML = 'Coloque o bumbo antes do suporte';
	}
}

function showCaixa() {
	if (suporteCaixa.classList.contains('visible')) {
		caixa.classList.add('visible');
		audioCaixa.play();
		audioCaixa.currentTime = 0;
		instrucao.classList.remove('erro');
		instrucao.classList.add('acerto');
		instrucao.innerHTML = 'Muito bem! Vamos para a próxima parte';
	} else {
		instrucao.classList.remove('acerto');
		instrucao.classList.add('erro');
		instrucao.innerHTML = 'Coloque o suporte da caixa antes';
	}
}

function showSuporteCaixa() {
	suporteCaixa.classList.add('visible');
	instrucao.classList.remove('erro');
	instrucao.classList.add('acerto');
	instrucao.innerHTML = 'Muito bem! Vamos para a próxima parte';
}

function showSurdo() {
	if (suporteSurdo.classList.contains('visible')) {
		surdo.classList.add('visible');
		audioSurdo.play();
		audioSurdo.currentTime = 0;
		instrucao.classList.remove('erro');
		instrucao.classList.add('acerto');
		instrucao.innerHTML = 'Muito bem! Vamos para a próxima parte';
	} else {
		instrucao.classList.remove('acerto');
		instrucao.classList.add('erro');
		instrucao.innerHTML = 'Coloque o suporte do surdo antes';
	}
}

function showSuporteSurdo() {
	suporteSurdo.classList.add('visible');
	instrucao.classList.remove('erro');
	instrucao.classList.add('acerto');
	instrucao.innerHTML = 'Muito bem! Vamos para a próxima parte';
}

function showPrato() {
	if (suportePrato.classList.contains('visible')) {
		prato.classList.add('visible');
		audioPrato.play();
		audioPrato.currentTime = 0;
		instrucao.classList.remove('erro');
		instrucao.classList.add('acerto');
		instrucao.innerHTML = 'Muito bem! Vamos para a próxima parte';
	} else {
		instrucao.classList.remove('acerto');
		instrucao.classList.add('erro');
		instrucao.innerHTML = 'Coloque o pedestal do prato antes';
	}
}

function showSuportePrato() {
	suportePrato.classList.add('visible');
	instrucao.classList.remove('erro');
	instrucao.classList.add('acerto');
	instrucao.innerHTML = 'Muito bem! Vamos para a próxima parte';
}

function showChimbal() {
	if (suporteChimbal.classList.contains('visible')) {
		chimbal.classList.add('visible');
		audioChimbal.play();
		audioChimbal.currentTime = 0;
		instrucao.classList.remove('erro');
		instrucao.classList.add('acerto');
		instrucao.innerHTML = 'Muito bem! Vamos para a próxima parte';
	} else {
		instrucao.classList.remove('acerto');
		instrucao.classList.add('erro');
		instrucao.innerHTML = 'Coloque o pedestal do chimbal antes';
	}
}

function showSuporteChimbal() {
	suporteChimbal.classList.add('visible');
	instrucao.classList.remove('erro');
	instrucao.classList.add('acerto');
	instrucao.innerHTML = 'Muito bem! Vamos para a próxima parte';
}

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
		// if (event.key == '1') {
		// 	// playBumbo();
		// 	audioBumbo.play();
		// 	audioBumbo.currentTime = 0;
		// 	document.querySelector('#tocar-parte-bumbo').classList.add('play');
		// 	setTimeout(() => {
		// 		document.querySelector('#tocar-parte-bumbo').classList.remove('play');
		// 	}, 200);
		// } else if (event.key == '2') {
		// 	// playCaixa();
		// 	audioCaixa.play();
		// 	audioCaixa.currentTime = 0;
		// 	document.querySelector('#tocar-parte-caixa').classList.add('play');
		// 	setTimeout(() => {
		// 		document.querySelector('#tocar-parte-caixa').classList.remove('play');
		// 	}, 200);
		// } else if (event.key == '3') {
		// 	// playChimbal();
		// 	audioChimbal.play();
		// 	audioChimbal.currentTime = 0;
		// 	document.querySelector('#tocar-parte-chimbal').classList.add('play');
		// 	setTimeout(() => {
		// 		document.querySelector('#tocar-parte-chimbal').classList.remove('play');
		// 	}, 200);
		// } else if (event.key == '4') {
		// 	// playPrato();
		// 	audioPrato.play();
		// 	audioPrato.currentTime = 0;
		// 	document.querySelector('#tocar-parte-prato').classList.add('play');
		// 	setTimeout(() => {
		// 		document.querySelector('#tocar-parte-prato').classList.remove('play');
		// 	}, 200);
		// } else if (event.key == '5') {
		// 	// playTomUm();
		// 	audioTomUm.play();
		// 	audioTomUm.currentTime = 0;
		// 	document.querySelector('#tocar-parte-tom-um').classList.add('play');
		// 	setTimeout(() => {
		// 		document.querySelector('#tocar-parte-tom-um').classList.remove('play');
		// 	}, 200);
		// } else if (event.key == '6') {
		// 	// playTomDois();
		// 	audioTomDois.play();
		// 	audioTomDois.currentTime = 0;
		// 	document.querySelector('#tocar-parte-tom-dois').classList.add('play');
		// 	setTimeout(() => {
		// 		document
		// 			.querySelector('#tocar-parte-tom-dois')
		// 			.classList.remove('play');
		// 	}, 200);
		// } else if (event.key == '7') {
		// 	// playSurdo();
		// 	audioSurdo.play();
		// 	audioSurdo.currentTime = 0;
		// 	document.querySelector('#tocar-parte-surdo').classList.add('play');
		// 	setTimeout(() => {
		// 		document.querySelector('#tocar-parte-surdo').classList.remove('play');
		// 	}, 200);
		// } else {
		// 	null;
		// }
	}
});

declare const Rive: any;

// function playBumbo() {
// 	// first, instantiate the Rive engine and load the WASM file(s)
// 	Rive({
// 		locateFile: (file) => 'https://unpkg.com/rive-canvas@0.6.7/' + file,
// 	}).then((rive) => {
// 		// Rive's ready to rock 'n roll
// 		// Let's load up a Rive animation file, typically ending in '.riv'
// 		const req = new Request('../img/rive/bateria.riv');
// 		fetch(req)
// 			.then((res) => {
// 				return res.arrayBuffer();
// 			})
// 			.then((buf) => {
// 				// we've got the raw bytes of the animation, let's load them into a Rive
// 				// file
// 				const file = rive.load(new Uint8Array(buf));
// 				// get the default artboard, where the animations we want to interact
// 				// with live in this file
// 				const artboard = file.defaultArtboard();
// 				// now we can access the animations; let's get one called 'vibration'
// 				const animation = artboard.animation('bumbo-play');
// 				const animationInstance = new rive.LinearAnimationInstance(animation);
// 				// let's grab our canvas
// 				const canvas = document.getElementById(
// 					'riveCanvas'
// 				) as HTMLCanvasElement;
// 				const ctx = canvas.getContext('2d');
// 				// nw we can create a Rive renderer and wire it up to our 2D context
// 				const renderer = new rive.CanvasRenderer(ctx);
// 				// advance the artboard to render a frame
// 				artboard.advance(0);
// 				// Let's make sure our frame fits into our canvas
// 				ctx.save();
// 				renderer.align(
// 					rive.Fit.contain,
// 					rive.Alignment.center,
// 					{
// 						minX: 0,
// 						minY: 0,
// 						maxX: canvas.width,
// 						maxY: canvas.height,
// 					},
// 					artboard.bounds
// 				);
// 				// and now we can draw our frame to our canvas
// 				artboard.draw(renderer);
// 				ctx.restore();

// 				// track the last time a frame was rendered
// 				let lastTime = 0;

// 				// okay, so we have an animation and a renderer; how do we play an
// 				// animation? First, let's set up our animation loop with
// 				// requestFrameAnimation
// 				function draw(time) {
// 					// work out how many seconds have passed since a previous frame was
// 					// drawn
// 					if (!lastTime) {
// 						lastTime = time;
// 					}
// 					const elapsedTime = (time - lastTime) / 1000;
// 					lastTime = time;

// 					// advance our animation by the elapsed time
// 					animationInstance.advance(elapsedTime);
// 					// apply the animation to the artboard
// 					animationInstance.apply(artboard, 1.0);
// 					// advance the artboard
// 					artboard.advance(elapsedTime);

// 					// render the animation frame
// 					// first, clear the canvas
// 					ctx.clearRect(0, 0, canvas.width, canvas.height);
// 					// let's resize it to fit the canvas
// 					ctx.save();
// 					renderer.align(
// 						rive.Fit.contain,
// 						rive.Alignment.center,
// 						{
// 							minX: 0,
// 							minY: 0,
// 							maxX: canvas.width,
// 							maxY: canvas.height,
// 						},
// 						artboard.bounds
// 					);
// 					// and now we can draw our frame to our canvas
// 					artboard.draw(renderer);
// 					ctx.restore();

// 					// and kick off the next frame
// 					requestAnimationFrame(draw);
// 				}
// 				// now kick off the animation
// 				requestAnimationFrame(draw);
// 			});
// 	});
// }

// function playCaixa() {
// 	// first, instantiate the Rive engine and load the WASM file(s)
// 	Rive({
// 		locateFile: (file) => 'https://unpkg.com/rive-canvas@0.6.7/' + file,
// 	}).then((rive) => {
// 		// Rive's ready to rock 'n roll
// 		// Let's load up a Rive animation file, typically ending in '.riv'
// 		const req = new Request('../img/rive/bateria.riv');
// 		fetch(req)
// 			.then((res) => {
// 				return res.arrayBuffer();
// 			})
// 			.then((buf) => {
// 				// we've got the raw bytes of the animation, let's load them into a Rive
// 				// file
// 				const file = rive.load(new Uint8Array(buf));
// 				// get the default artboard, where the animations we want to interact
// 				// with live in this file
// 				const artboard = file.defaultArtboard();
// 				// now we can access the animations; let's get one called 'vibration'
// 				const animation = artboard.animation('caixa-play');
// 				const animationInstance = new rive.LinearAnimationInstance(animation);
// 				// let's grab our canvas
// 				const canvas = document.getElementById(
// 					'riveCanvas'
// 				) as HTMLCanvasElement;
// 				const ctx = canvas.getContext('2d');
// 				// nw we can create a Rive renderer and wire it up to our 2D context
// 				const renderer = new rive.CanvasRenderer(ctx);
// 				// advance the artboard to render a frame
// 				artboard.advance(0);
// 				// Let's make sure our frame fits into our canvas
// 				ctx.save();
// 				renderer.align(
// 					rive.Fit.contain,
// 					rive.Alignment.center,
// 					{
// 						minX: 0,
// 						minY: 0,
// 						maxX: canvas.width,
// 						maxY: canvas.height,
// 					},
// 					artboard.bounds
// 				);
// 				// and now we can draw our frame to our canvas
// 				artboard.draw(renderer);
// 				ctx.restore();

// 				// track the last time a frame was rendered
// 				let lastTime = 0;

// 				// okay, so we have an animation and a renderer; how do we play an
// 				// animation? First, let's set up our animation loop with
// 				// requestFrameAnimation
// 				function draw(time) {
// 					// work out how many seconds have passed since a previous frame was
// 					// drawn
// 					if (!lastTime) {
// 						lastTime = time;
// 					}
// 					const elapsedTime = (time - lastTime) / 1000;
// 					lastTime = time;

// 					// advance our animation by the elapsed time
// 					animationInstance.advance(elapsedTime);
// 					// apply the animation to the artboard
// 					animationInstance.apply(artboard, 1.0);
// 					// advance the artboard
// 					artboard.advance(elapsedTime);

// 					// render the animation frame
// 					// first, clear the canvas
// 					ctx.clearRect(0, 0, canvas.width, canvas.height);
// 					// let's resize it to fit the canvas
// 					ctx.save();
// 					renderer.align(
// 						rive.Fit.contain,
// 						rive.Alignment.center,
// 						{
// 							minX: 0,
// 							minY: 0,
// 							maxX: canvas.width,
// 							maxY: canvas.height,
// 						},
// 						artboard.bounds
// 					);
// 					// and now we can draw our frame to our canvas
// 					artboard.draw(renderer);
// 					ctx.restore();

// 					// and kick off the next frame
// 					requestAnimationFrame(draw);
// 				}
// 				// now kick off the animation
// 				requestAnimationFrame(draw);
// 			});
// 	});
// }

// function playChimbal() {
// 	// first, instantiate the Rive engine and load the WASM file(s)
// 	Rive({
// 		locateFile: (file) => 'https://unpkg.com/rive-canvas@0.6.7/' + file,
// 	}).then((rive) => {
// 		// Rive's ready to rock 'n roll
// 		// Let's load up a Rive animation file, typically ending in '.riv'
// 		const req = new Request('../img/rive/bateria.riv');
// 		fetch(req)
// 			.then((res) => {
// 				return res.arrayBuffer();
// 			})
// 			.then((buf) => {
// 				// we've got the raw bytes of the animation, let's load them into a Rive
// 				// file
// 				const file = rive.load(new Uint8Array(buf));
// 				// get the default artboard, where the animations we want to interact
// 				// with live in this file
// 				const artboard = file.defaultArtboard();
// 				// now we can access the animations; let's get one called 'vibration'
// 				const animation = artboard.animation('chimbal-play');
// 				const animationInstance = new rive.LinearAnimationInstance(animation);
// 				// let's grab our canvas
// 				const canvas = document.getElementById(
// 					'riveCanvas'
// 				) as HTMLCanvasElement;
// 				const ctx = canvas.getContext('2d');
// 				// nw we can create a Rive renderer and wire it up to our 2D context
// 				const renderer = new rive.CanvasRenderer(ctx);
// 				// advance the artboard to render a frame
// 				artboard.advance(0);
// 				// Let's make sure our frame fits into our canvas
// 				ctx.save();
// 				renderer.align(
// 					rive.Fit.contain,
// 					rive.Alignment.center,
// 					{
// 						minX: 0,
// 						minY: 0,
// 						maxX: canvas.width,
// 						maxY: canvas.height,
// 					},
// 					artboard.bounds
// 				);
// 				// and now we can draw our frame to our canvas
// 				artboard.draw(renderer);
// 				ctx.restore();

// 				// track the last time a frame was rendered
// 				let lastTime = 0;

// 				// okay, so we have an animation and a renderer; how do we play an
// 				// animation? First, let's set up our animation loop with
// 				// requestFrameAnimation
// 				function draw(time) {
// 					// work out how many seconds have passed since a previous frame was
// 					// drawn
// 					if (!lastTime) {
// 						lastTime = time;
// 					}
// 					const elapsedTime = (time - lastTime) / 1000;
// 					lastTime = time;

// 					// advance our animation by the elapsed time
// 					animationInstance.advance(elapsedTime);
// 					// apply the animation to the artboard
// 					animationInstance.apply(artboard, 1.0);
// 					// advance the artboard
// 					artboard.advance(elapsedTime);

// 					// render the animation frame
// 					// first, clear the canvas
// 					ctx.clearRect(0, 0, canvas.width, canvas.height);
// 					// let's resize it to fit the canvas
// 					ctx.save();
// 					renderer.align(
// 						rive.Fit.contain,
// 						rive.Alignment.center,
// 						{
// 							minX: 0,
// 							minY: 0,
// 							maxX: canvas.width,
// 							maxY: canvas.height,
// 						},
// 						artboard.bounds
// 					);
// 					// and now we can draw our frame to our canvas
// 					artboard.draw(renderer);
// 					ctx.restore();

// 					// and kick off the next frame
// 					requestAnimationFrame(draw);
// 				}
// 				// now kick off the animation
// 				requestAnimationFrame(draw);
// 			});
// 	});
// }

// function playPrato() {
// 	// first, instantiate the Rive engine and load the WASM file(s)
// 	Rive({
// 		locateFile: (file) => 'https://unpkg.com/rive-canvas@0.6.7/' + file,
// 	}).then((rive) => {
// 		// Rive's ready to rock 'n roll
// 		// Let's load up a Rive animation file, typically ending in '.riv'
// 		const req = new Request('../img/rive/bateria.riv');
// 		fetch(req)
// 			.then((res) => {
// 				return res.arrayBuffer();
// 			})
// 			.then((buf) => {
// 				// we've got the raw bytes of the animation, let's load them into a Rive
// 				// file
// 				const file = rive.load(new Uint8Array(buf));
// 				// get the default artboard, where the animations we want to interact
// 				// with live in this file
// 				const artboard = file.defaultArtboard();
// 				// now we can access the animations; let's get one called 'vibration'
// 				const animation = artboard.animation('prato-play');
// 				const animationInstance = new rive.LinearAnimationInstance(animation);
// 				// let's grab our canvas
// 				const canvas = document.getElementById(
// 					'riveCanvas'
// 				) as HTMLCanvasElement;
// 				const ctx = canvas.getContext('2d');
// 				// nw we can create a Rive renderer and wire it up to our 2D context
// 				const renderer = new rive.CanvasRenderer(ctx);
// 				// advance the artboard to render a frame
// 				artboard.advance(0);
// 				// Let's make sure our frame fits into our canvas
// 				ctx.save();
// 				renderer.align(
// 					rive.Fit.contain,
// 					rive.Alignment.center,
// 					{
// 						minX: 0,
// 						minY: 0,
// 						maxX: canvas.width,
// 						maxY: canvas.height,
// 					},
// 					artboard.bounds
// 				);
// 				// and now we can draw our frame to our canvas
// 				artboard.draw(renderer);
// 				ctx.restore();

// 				// track the last time a frame was rendered
// 				let lastTime = 0;

// 				// okay, so we have an animation and a renderer; how do we play an
// 				// animation? First, let's set up our animation loop with
// 				// requestFrameAnimation
// 				function draw(time) {
// 					// work out how many seconds have passed since a previous frame was
// 					// drawn
// 					if (!lastTime) {
// 						lastTime = time;
// 					}
// 					const elapsedTime = (time - lastTime) / 1000;
// 					lastTime = time;

// 					// advance our animation by the elapsed time
// 					animationInstance.advance(elapsedTime);
// 					// apply the animation to the artboard
// 					animationInstance.apply(artboard, 1.0);
// 					// advance the artboard
// 					artboard.advance(elapsedTime);

// 					// render the animation frame
// 					// first, clear the canvas
// 					ctx.clearRect(0, 0, canvas.width, canvas.height);
// 					// let's resize it to fit the canvas
// 					ctx.save();
// 					renderer.align(
// 						rive.Fit.contain,
// 						rive.Alignment.center,
// 						{
// 							minX: 0,
// 							minY: 0,
// 							maxX: canvas.width,
// 							maxY: canvas.height,
// 						},
// 						artboard.bounds
// 					);
// 					// and now we can draw our frame to our canvas
// 					artboard.draw(renderer);
// 					ctx.restore();

// 					// and kick off the next frame
// 					requestAnimationFrame(draw);
// 				}
// 				// now kick off the animation
// 				requestAnimationFrame(draw);
// 			});
// 	});
// }

// function playTomUm() {
// 	// first, instantiate the Rive engine and load the WASM file(s)
// 	Rive({
// 		locateFile: (file) => 'https://unpkg.com/rive-canvas@0.6.7/' + file,
// 	}).then((rive) => {
// 		// Rive's ready to rock 'n roll
// 		// Let's load up a Rive animation file, typically ending in '.riv'
// 		const req = new Request('../img/rive/bateria.riv');
// 		fetch(req)
// 			.then((res) => {
// 				return res.arrayBuffer();
// 			})
// 			.then((buf) => {
// 				// we've got the raw bytes of the animation, let's load them into a Rive
// 				// file
// 				const file = rive.load(new Uint8Array(buf));
// 				// get the default artboard, where the animations we want to interact
// 				// with live in this file
// 				const artboard = file.defaultArtboard();
// 				// now we can access the animations; let's get one called 'vibration'
// 				const animation = artboard.animation('tom-1-play');
// 				const animationInstance = new rive.LinearAnimationInstance(animation);
// 				// let's grab our canvas
// 				const canvas = document.getElementById(
// 					'riveCanvas'
// 				) as HTMLCanvasElement;
// 				const ctx = canvas.getContext('2d');
// 				// nw we can create a Rive renderer and wire it up to our 2D context
// 				const renderer = new rive.CanvasRenderer(ctx);
// 				// advance the artboard to render a frame
// 				artboard.advance(0);
// 				// Let's make sure our frame fits into our canvas
// 				ctx.save();
// 				renderer.align(
// 					rive.Fit.contain,
// 					rive.Alignment.center,
// 					{
// 						minX: 0,
// 						minY: 0,
// 						maxX: canvas.width,
// 						maxY: canvas.height,
// 					},
// 					artboard.bounds
// 				);
// 				// and now we can draw our frame to our canvas
// 				artboard.draw(renderer);
// 				ctx.restore();

// 				// track the last time a frame was rendered
// 				let lastTime = 0;

// 				// okay, so we have an animation and a renderer; how do we play an
// 				// animation? First, let's set up our animation loop with
// 				// requestFrameAnimation
// 				function draw(time) {
// 					// work out how many seconds have passed since a previous frame was
// 					// drawn
// 					if (!lastTime) {
// 						lastTime = time;
// 					}
// 					const elapsedTime = (time - lastTime) / 1000;
// 					lastTime = time;

// 					// advance our animation by the elapsed time
// 					animationInstance.advance(elapsedTime);
// 					// apply the animation to the artboard
// 					animationInstance.apply(artboard, 1.0);
// 					// advance the artboard
// 					artboard.advance(elapsedTime);

// 					// render the animation frame
// 					// first, clear the canvas
// 					ctx.clearRect(0, 0, canvas.width, canvas.height);
// 					// let's resize it to fit the canvas
// 					ctx.save();
// 					renderer.align(
// 						rive.Fit.contain,
// 						rive.Alignment.center,
// 						{
// 							minX: 0,
// 							minY: 0,
// 							maxX: canvas.width,
// 							maxY: canvas.height,
// 						},
// 						artboard.bounds
// 					);
// 					// and now we can draw our frame to our canvas
// 					artboard.draw(renderer);
// 					ctx.restore();

// 					// and kick off the next frame
// 					requestAnimationFrame(draw);
// 				}
// 				// now kick off the animation
// 				requestAnimationFrame(draw);
// 			});
// 	});
// }

// function playTomDois() {
// 	// first, instantiate the Rive engine and load the WASM file(s)
// 	Rive({
// 		locateFile: (file) => 'https://unpkg.com/rive-canvas@0.6.7/' + file,
// 	}).then((rive) => {
// 		// Rive's ready to rock 'n roll
// 		// Let's load up a Rive animation file, typically ending in '.riv'
// 		const req = new Request('../img/rive/bateria.riv');
// 		fetch(req)
// 			.then((res) => {
// 				return res.arrayBuffer();
// 			})
// 			.then((buf) => {
// 				// we've got the raw bytes of the animation, let's load them into a Rive
// 				// file
// 				const file = rive.load(new Uint8Array(buf));
// 				// get the default artboard, where the animations we want to interact
// 				// with live in this file
// 				const artboard = file.defaultArtboard();
// 				// now we can access the animations; let's get one called 'vibration'
// 				const animation = artboard.animation('tom-2-play');
// 				const animationInstance = new rive.LinearAnimationInstance(animation);
// 				// let's grab our canvas
// 				const canvas = document.getElementById(
// 					'riveCanvas'
// 				) as HTMLCanvasElement;
// 				const ctx = canvas.getContext('2d');
// 				// nw we can create a Rive renderer and wire it up to our 2D context
// 				const renderer = new rive.CanvasRenderer(ctx);
// 				// advance the artboard to render a frame
// 				artboard.advance(0);
// 				// Let's make sure our frame fits into our canvas
// 				ctx.save();
// 				renderer.align(
// 					rive.Fit.contain,
// 					rive.Alignment.center,
// 					{
// 						minX: 0,
// 						minY: 0,
// 						maxX: canvas.width,
// 						maxY: canvas.height,
// 					},
// 					artboard.bounds
// 				);
// 				// and now we can draw our frame to our canvas
// 				artboard.draw(renderer);
// 				ctx.restore();

// 				// track the last time a frame was rendered
// 				let lastTime = 0;

// 				// okay, so we have an animation and a renderer; how do we play an
// 				// animation? First, let's set up our animation loop with
// 				// requestFrameAnimation
// 				function draw(time) {
// 					// work out how many seconds have passed since a previous frame was
// 					// drawn
// 					if (!lastTime) {
// 						lastTime = time;
// 					}
// 					const elapsedTime = (time - lastTime) / 1000;
// 					lastTime = time;

// 					// advance our animation by the elapsed time
// 					animationInstance.advance(elapsedTime);
// 					// apply the animation to the artboard
// 					animationInstance.apply(artboard, 1.0);
// 					// advance the artboard
// 					artboard.advance(elapsedTime);

// 					// render the animation frame
// 					// first, clear the canvas
// 					ctx.clearRect(0, 0, canvas.width, canvas.height);
// 					// let's resize it to fit the canvas
// 					ctx.save();
// 					renderer.align(
// 						rive.Fit.contain,
// 						rive.Alignment.center,
// 						{
// 							minX: 0,
// 							minY: 0,
// 							maxX: canvas.width,
// 							maxY: canvas.height,
// 						},
// 						artboard.bounds
// 					);
// 					// and now we can draw our frame to our canvas
// 					artboard.draw(renderer);
// 					ctx.restore();

// 					// and kick off the next frame
// 					requestAnimationFrame(draw);
// 				}
// 				// now kick off the animation
// 				requestAnimationFrame(draw);
// 			});
// 	});
// }

// function playSurdo() {
// 	// first, instantiate the Rive engine and load the WASM file(s)
// 	Rive({
// 		locateFile: (file) => 'https://unpkg.com/rive-canvas@0.6.7/' + file,
// 	}).then((rive) => {
// 		// Rive's ready to rock 'n roll
// 		// Let's load up a Rive animation file, typically ending in '.riv'
// 		const req = new Request('../img/rive/bateria.riv');
// 		fetch(req)
// 			.then((res) => {
// 				return res.arrayBuffer();
// 			})
// 			.then((buf) => {
// 				// we've got the raw bytes of the animation, let's load them into a Rive
// 				// file
// 				const file = rive.load(new Uint8Array(buf));
// 				// get the default artboard, where the animations we want to interact
// 				// with live in this file
// 				const artboard = file.defaultArtboard();
// 				// now we can access the animations; let's get one called 'vibration'
// 				const animation = artboard.animation('surdo-play');
// 				const animationInstance = new rive.LinearAnimationInstance(animation);
// 				// let's grab our canvas
// 				const canvas = document.getElementById(
// 					'riveCanvas'
// 				) as HTMLCanvasElement;
// 				const ctx = canvas.getContext('2d');
// 				// nw we can create a Rive renderer and wire it up to our 2D context
// 				const renderer = new rive.CanvasRenderer(ctx);
// 				// advance the artboard to render a frame
// 				artboard.advance(0);
// 				// Let's make sure our frame fits into our canvas
// 				ctx.save();
// 				renderer.align(
// 					rive.Fit.contain,
// 					rive.Alignment.center,
// 					{
// 						minX: 0,
// 						minY: 0,
// 						maxX: canvas.width,
// 						maxY: canvas.height,
// 					},
// 					artboard.bounds
// 				);
// 				// and now we can draw our frame to our canvas
// 				artboard.draw(renderer);
// 				ctx.restore();

// 				// track the last time a frame was rendered
// 				let lastTime = 0;

// 				// okay, so we have an animation and a renderer; how do we play an
// 				// animation? First, let's set up our animation loop with
// 				// requestFrameAnimation
// 				function draw(time) {
// 					// work out how many seconds have passed since a previous frame was
// 					// drawn
// 					if (!lastTime) {
// 						lastTime = time;
// 					}
// 					const elapsedTime = (time - lastTime) / 1000;
// 					lastTime = time;

// 					// advance our animation by the elapsed time
// 					animationInstance.advance(elapsedTime);
// 					// apply the animation to the artboard
// 					animationInstance.apply(artboard, 1.0);
// 					// advance the artboard
// 					artboard.advance(elapsedTime);

// 					// render the animation frame
// 					// first, clear the canvas
// 					ctx.clearRect(0, 0, canvas.width, canvas.height);
// 					// let's resize it to fit the canvas
// 					ctx.save();
// 					renderer.align(
// 						rive.Fit.contain,
// 						rive.Alignment.center,
// 						{
// 							minX: 0,
// 							minY: 0,
// 							maxX: canvas.width,
// 							maxY: canvas.height,
// 						},
// 						artboard.bounds
// 					);
// 					// and now we can draw our frame to our canvas
// 					artboard.draw(renderer);
// 					ctx.restore();

// 					// and kick off the next frame
// 					requestAnimationFrame(draw);
// 				}
// 				// now kick off the animation
// 				requestAnimationFrame(draw);
// 			});
// 	});
// }

// playBumbo();

// function playAnimation() {
// 	// first, instantiate the Rive engine and load the WASM file(s)
// 	Rive({
// 		locateFile: (file) => 'https://unpkg.com/rive-canvas@0.6.7/' + file,
// 	}).then((rive) => {
// 		// Rive's ready to rock 'n roll
// 		// Let's load up a Rive animation file, typically ending in '.riv'
// 		const req = new Request('../img/rive/bateria.riv');
// 		fetch(req)
// 			.then((res) => {
// 				return res.arrayBuffer();
// 			})
// 			.then((buf) => {
// 				// we've got the raw bytes of the animation, let's load them into a Rive
// 				// file
// 				const file = rive.load(new Uint8Array(buf));
// 				// get the default artboard, where the animations we want to interact
// 				// with live in this file
// 				const artboard = file.defaultArtboard();
// 				// now we can access the animations; let's get one called 'vibration'

// 				const bumboEnter = artboard.animation('bumbo-enter');
// 				const bumboEnterInstance = new rive.LinearAnimationInstance(bumboEnter);

// 				const suporteCaixaEnter = artboard.animation('caixa-suporte-enter');
// 				const suporteCaixaEnterInstance = new rive.LinearAnimationInstance(
// 					suporteCaixaEnter
// 				);

// 				const caixaEnter = artboard.animation('caixa-enter');
// 				const caixaEnterInstance = new rive.LinearAnimationInstance(caixaEnter);

// 				const suporteChimbalEnter = artboard.animation('chimbal-suporte-enter');
// 				const suporteChimbalEnterInstance = new rive.LinearAnimationInstance(
// 					suporteChimbalEnter
// 				);

// 				const chimbalEnter = artboard.animation('chimbal-enter');
// 				const chimbalEnterInstance = new rive.LinearAnimationInstance(
// 					chimbalEnter
// 				);

// 				const suportePratoEnter = artboard.animation('prato-suporte-enter');
// 				const suportePratoEnterInstance = new rive.LinearAnimationInstance(
// 					suportePratoEnter
// 				);

// 				const pratoEnter = artboard.animation('prato-enter');
// 				const pratoEnterInstance = new rive.LinearAnimationInstance(pratoEnter);

// 				const suporteTomEnter = artboard.animation('tom-suporte-enter');
// 				const suporteTomEnterInstance = new rive.LinearAnimationInstance(
// 					suporteTomEnter
// 				);

// 				const tomUmEnter = artboard.animation('tom-1-enter');
// 				const tomUmEnterInstance = new rive.LinearAnimationInstance(tomUmEnter);

// 				const tomDoisEnter = artboard.animation('tom-2-enter');
// 				const tomDoisEnterInstance = new rive.LinearAnimationInstance(
// 					tomDoisEnter
// 				);

// 				const suporteSurdoEnter = artboard.animation('surdo-suporte-enter');
// 				const suporteSurdoEnterInstance = new rive.LinearAnimationInstance(
// 					suporteSurdoEnter
// 				);

// 				const surdoEnter = artboard.animation('surdo-enter');
// 				const surdoEnterInstance = new rive.LinearAnimationInstance(surdoEnter);

// 				const bumboPlay = artboard.animation('bumbo-play');
// 				const bumboPlayInstance = new rive.LinearAnimationInstance(bumboPlay);

// 				const caixaPlay = artboard.animation('caixa-play');
// 				const caixaPlayInstance = new rive.LinearAnimationInstance(caixaPlay);

// 				const chimbalPlay = artboard.animation('chimbal-play');
// 				const chimbalPlayInstance = new rive.LinearAnimationInstance(
// 					chimbalPlay
// 				);

// 				const pratoPlay = artboard.animation('prato-play');
// 				const pratoPlayInstance = new rive.LinearAnimationInstance(pratoPlay);

// 				const tomUmPlay = artboard.animation('tom-1-play');
// 				const tomUmPlayInstance = new rive.LinearAnimationInstance(tomUmPlay);

// 				const tomDoisPlay = artboard.animation('tom-2-play');
// 				const tomDoisPlayInstance = new rive.LinearAnimationInstance(
// 					tomDoisPlay
// 				);

// 				const surdoPlay = artboard.animation('surdo-play');
// 				const surdoPlayInstance = new rive.LinearAnimationInstance(surdoPlay);

// 				// let's grab our canvas
// 				const canvas = document.getElementById(
// 					'riveCanvas'
// 				) as HTMLCanvasElement;
// 				const ctx = canvas.getContext('2d');
// 				// nw we can create a Rive renderer and wire it up to our 2D context
// 				const renderer = new rive.CanvasRenderer(ctx);
// 				// advance the artboard to render a frame
// 				artboard.advance(0);
// 				// Let's make sure our frame fits into our canvas
// 				ctx.save();
// 				renderer.align(
// 					rive.Fit.contain,
// 					rive.Alignment.center,
// 					{
// 						minX: 0,
// 						minY: 0,
// 						maxX: canvas.width,
// 						maxY: canvas.height,
// 					},
// 					artboard.bounds
// 				);
// 				// and now we can draw our frame to our canvas
// 				artboard.draw(renderer);
// 				ctx.restore();

// 				// track the last time a frame was rendered
// 				let lastTime = 0;

// 				// okay, so we have an animation and a renderer; how do we play an
// 				// animation? First, let's set up our animation loop with
// 				// requestFrameAnimation
// 				function draw(time) {
// 					// work out how many seconds have passed since a previous frame was
// 					// drawn
// 					if (!lastTime) {
// 						lastTime = time;
// 					}
// 					const elapsedTime = (time - lastTime) / 1000;
// 					lastTime = time;

// 					document
// 						.querySelector('#bumbo-button')
// 						.addEventListener('click', () => {
// 							// advance our animation by the elapsed time
// 							bumboEnterInstance.advance(elapsedTime);
// 							// apply the animation to the artboard
// 							bumboEnterInstance.apply(artboard, 1.0);
// 						});

// 					document
// 						.querySelector('#caixa-button')
// 						.addEventListener('click', () => {
// 							// advance our animation by the elapsed time
// 							caixaEnterInstance.advance(elapsedTime);
// 							// apply the animation to the artboard
// 							caixaEnterInstance.apply(artboard, 1.0);
// 						});

// 					document
// 						.querySelector('#tom-1-button')
// 						.addEventListener('click', () => {
// 							// advance our animation by the elapsed time
// 							tomUmEnterInstance.advance(elapsedTime);
// 							// apply the animation to the artboard
// 							tomUmEnterInstance.apply(artboard, 1.0);
// 						});

// 					document
// 						.querySelector('#tom-2-button')
// 						.addEventListener('click', () => {
// 							// advance our animation by the elapsed time
// 							tomDoisEnterInstance.advance(elapsedTime);
// 							// apply the animation to the artboard
// 							tomDoisEnterInstance.apply(artboard, 1.0);
// 						});

// 					document
// 						.querySelector('#surdo-button')
// 						.addEventListener('click', () => {
// 							// advance our animation by the elapsed time
// 							surdoEnterInstance.advance(elapsedTime);
// 							// apply the animation to the artboard
// 							surdoEnterInstance.apply(artboard, 1.0);
// 						});

// 					document
// 						.querySelector('#prato-button')
// 						.addEventListener('click', () => {
// 							// advance our animation by the elapsed time
// 							pratoEnterInstance.advance(elapsedTime);
// 							// apply the animation to the artboard
// 							pratoEnterInstance.apply(artboard, 1.0);
// 						});

// 					document
// 						.querySelector('#suporte-caixa-button')
// 						.addEventListener('click', () => {
// 							// advance our animation by the elapsed time
// 							suporteCaixaEnterInstance.advance(elapsedTime);
// 							// apply the animation to the artboard
// 							suporteCaixaEnterInstance.apply(artboard, 1.0);
// 						});

// 					document
// 						.querySelector('#suporte-tom-button')
// 						.addEventListener('click', () => {
// 							// advance our animation by the elapsed time
// 							suporteTomEnterInstance.advance(elapsedTime);
// 							// apply the animation to the artboard
// 							suporteTomEnterInstance.apply(artboard, 1.0);
// 						});

// 					document
// 						.querySelector('#suporte-surdo-button')
// 						.addEventListener('click', () => {
// 							// advance our animation by the elapsed time
// 							suporteSurdoEnterInstance.advance(elapsedTime);
// 							// apply the animation to the artboard
// 							suporteSurdoEnterInstance.apply(artboard, 1.0);
// 						});

// 					document
// 						.querySelector('#suporte-prato-button')
// 						.addEventListener('click', () => {
// 							// advance our animation by the elapsed time
// 							suportePratoEnterInstance.advance(elapsedTime);
// 							// apply the animation to the artboard
// 							suportePratoEnterInstance.apply(artboard, 1.0);
// 						});

// 					document.addEventListener('keydown', function (event) {
// 						if (
// 							document.querySelector('.resultado').classList.contains('visible')
// 						) {
// 							switch (event.key) {
// 								case '1':
// 									console.log('apertei 1');
// 									bumboPlayInstance.advance(elapsedTime);
// 									bumboPlayInstance.apply(artboard, 1.0);
// 									break;
// 								case '2':
// 									console.log('apertei 2');
// 									caixaPlayInstance.advance(elapsedTime);
// 									caixaPlayInstance.apply(artboard, 1.0);
// 									break;
// 								case '3':
// 									console.log('apertei 3');
// 									chimbalPlayInstance.advance(elapsedTime);
// 									chimbalPlayInstance.apply(artboard, 1.0);
// 									break;
// 								case '4':
// 									console.log('apertei 4');
// 									pratoPlayInstance.advance(elapsedTime);
// 									pratoPlayInstance.apply(artboard, 1.0);
// 									break;
// 								case '5':
// 									console.log('apertei 5');
// 									tomUmPlayInstance.advance(elapsedTime);
// 									tomUmPlayInstance.apply(artboard, 1.0);
// 									break;
// 								case '6':
// 									console.log('apertei 6');
// 									tomDoisPlayInstance.advance(elapsedTime);
// 									tomDoisPlayInstance.apply(artboard, 1.0);
// 									break;
// 								case '7':
// 									console.log('apertei 7');
// 									surdoPlayInstance.advance(elapsedTime);
// 									surdoPlayInstance.apply(artboard, 1.0);
// 									break;
// 							}
// 							// if (event.key == '1') {
// 							// } else if (event.key == '2') {
// 							// } else if (event.key == '3') {
// 							// } else if (event.key == '4') {
// 							// } else if (event.key == '5') {
// 							// } else if (event.key == '6') {
// 							// } else if (event.key == '7') {
// 							// } else {
// 							// 	null;
// 							// }
// 						}
// 					});

// 					// advance the artboard
// 					artboard.advance(elapsedTime);

// 					// render the animation frame
// 					// first, clear the canvas
// 					ctx.clearRect(0, 0, canvas.width, canvas.height);
// 					// let's resize it to fit the canvas
// 					ctx.save();
// 					renderer.align(
// 						rive.Fit.contain,
// 						rive.Alignment.center,
// 						{
// 							minX: 0,
// 							minY: 0,
// 							maxX: canvas.width,
// 							maxY: canvas.height,
// 						},
// 						artboard.bounds
// 					);
// 					// and now we can draw our frame to our canvas
// 					artboard.draw(renderer);
// 					ctx.restore();

// 					// and kick off the next frame
// 					requestAnimationFrame(draw);
// 				}
// 				// now kick off the animation
// 				requestAnimationFrame(draw);
// 			});
// 	});
// }

// playAnimation();

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
}
