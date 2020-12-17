var bumbo = document.querySelector('.bumbo');
var audioBumbo = document.querySelector('#audio-bumbo');
var tomUm = document.querySelector('.tom-um');
var audioTomUm = document.querySelector('#audio-tom-1');
var tomDois = document.querySelector('.tom-dois');
var audioTomDois = document.querySelector('#audio-tom-2');
var suporteTons = document.querySelector('.suporte-tons');
var caixa = document.querySelector('.caixa');
var audioCaixa = document.querySelector('#audio-caixa');
var suporteCaixa = document.querySelector('.suporte-caixa');
var surdo = document.querySelector('.surdo');
var audioSurdo = document.querySelector('#audio-surdo');
var suporteSurdo = document.querySelector('.suporte-surdo');
var prato = document.querySelector('.prato');
var audioPrato = document.querySelector('#audio-prato');
var suportePrato = document.querySelector('.suporte-prato');
var chimbal = document.querySelector('.chimbal');
var audioChimbal = document.querySelector('#audio-chimbal');
var suporteChimbal = document.querySelector('.suporte-chimbal');
var instrucao = document.querySelector('.instrucao');
var audioBateriCompleta = document.querySelector('#audio-bateria-completa');
var tocarBateriaButton = document.querySelector('#tocar-bateria-button');
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
    }
    else {
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
    }
    else {
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
    }
    else {
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
    }
    else {
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
    }
    else {
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
    }
    else {
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
    }
    else {
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
    if (bumbo.classList.contains('visible') &&
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
        suportePrato.classList.contains('visible')) {
        instrucao.classList.add('hidden');
        document.querySelector('.resultado').classList.add('visible');
    }
    else {
        null;
    }
}
var count = 0;
document.addEventListener('keydown', function (event) {
    if (document.querySelector('.resultado').classList.contains('visible')) {
        if (event.key == '1') {
            playBumbo();
            audioBumbo.play();
            audioBumbo.currentTime = 0;
            document.querySelector('#tocar-parte-bumbo').classList.add('play');
            setTimeout(function () {
                document.querySelector('#tocar-parte-bumbo').classList.remove('play');
            }, 200);
        }
        else if (event.key == '2') {
            playCaixa();
            audioCaixa.play();
            audioCaixa.currentTime = 0;
            document.querySelector('#tocar-parte-caixa').classList.add('play');
            setTimeout(function () {
                document.querySelector('#tocar-parte-caixa').classList.remove('play');
            }, 200);
        }
        else if (event.key == '3') {
            playChimbal();
            audioChimbal.play();
            audioChimbal.currentTime = 0;
            document.querySelector('#tocar-parte-chimbal').classList.add('play');
            setTimeout(function () {
                document.querySelector('#tocar-parte-chimbal').classList.remove('play');
            }, 200);
        }
        else if (event.key == '4') {
            playPrato();
            audioPrato.play();
            audioPrato.currentTime = 0;
            document.querySelector('#tocar-parte-prato').classList.add('play');
            setTimeout(function () {
                document.querySelector('#tocar-parte-prato').classList.remove('play');
            }, 200);
        }
        else if (event.key == '5') {
            playTomUm();
            audioTomUm.play();
            audioTomUm.currentTime = 0;
            document.querySelector('#tocar-parte-tom-um').classList.add('play');
            setTimeout(function () {
                document.querySelector('#tocar-parte-tom-um').classList.remove('play');
            }, 200);
        }
        else if (event.key == '6') {
            playTomDois();
            audioTomDois.play();
            audioTomDois.currentTime = 0;
            document.querySelector('#tocar-parte-tom-dois').classList.add('play');
            setTimeout(function () {
                document
                    .querySelector('#tocar-parte-tom-dois')
                    .classList.remove('play');
            }, 200);
        }
        else if (event.key == '7') {
            playSurdo();
            audioSurdo.play();
            audioSurdo.currentTime = 0;
            document.querySelector('#tocar-parte-surdo').classList.add('play');
            setTimeout(function () {
                document.querySelector('#tocar-parte-surdo').classList.remove('play');
            }, 200);
        }
        else {
            null;
        }
    }
});
function tocarBateria() {
    if (count == 0) {
        count = 1;
        audioBateriCompleta.play();
        tocarBateriaButton.innerHTML = '&#9611 Parar de tocar';
    }
    else {
        count = 0;
        audioBateriCompleta.pause();
        tocarBateriaButton.innerHTML = '&#9658 Ouça uma bateria';
    }
}
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
function playBumbo() {
    // first, instantiate the Rive engine and load the WASM file(s)
    Rive({
        locateFile: function (file) { return 'https://unpkg.com/rive-canvas@0.6.7/' + file; }
    }).then(function (rive) {
        // Rive's ready to rock 'n roll
        // Let's load up a Rive animation file, typically ending in '.riv'
        var req = new Request('../img/rive/bateria.riv');
        fetch(req)
            .then(function (res) {
            return res.arrayBuffer();
        })
            .then(function (buf) {
            // we've got the raw bytes of the animation, let's load them into a Rive
            // file
            var file = rive.load(new Uint8Array(buf));
            // get the default artboard, where the animations we want to interact
            // with live in this file
            var artboard = file.defaultArtboard();
            // now we can access the animations; let's get one called 'vibration'
            var animation = artboard.animation('bumbo-play');
            var animationInstance = new rive.LinearAnimationInstance(animation);
            // let's grab our canvas
            var canvas = document.getElementById('riveCanvas');
            var ctx = canvas.getContext('2d');
            // nw we can create a Rive renderer and wire it up to our 2D context
            var renderer = new rive.CanvasRenderer(ctx);
            // advance the artboard to render a frame
            artboard.advance(0);
            // Let's make sure our frame fits into our canvas
            ctx.save();
            renderer.align(rive.Fit.contain, rive.Alignment.center, {
                minX: 0,
                minY: 0,
                maxX: canvas.width,
                maxY: canvas.height
            }, artboard.bounds);
            // and now we can draw our frame to our canvas
            artboard.draw(renderer);
            ctx.restore();
            // track the last time a frame was rendered
            var lastTime = 0;
            // okay, so we have an animation and a renderer; how do we play an
            // animation? First, let's set up our animation loop with
            // requestFrameAnimation
            function draw(time) {
                // work out how many seconds have passed since a previous frame was
                // drawn
                if (!lastTime) {
                    lastTime = time;
                }
                var elapsedTime = (time - lastTime) / 1000;
                lastTime = time;
                // advance our animation by the elapsed time
                animationInstance.advance(elapsedTime);
                // apply the animation to the artboard
                animationInstance.apply(artboard, 1.0);
                // advance the artboard
                artboard.advance(elapsedTime);
                // render the animation frame
                // first, clear the canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                // let's resize it to fit the canvas
                ctx.save();
                renderer.align(rive.Fit.contain, rive.Alignment.center, {
                    minX: 0,
                    minY: 0,
                    maxX: canvas.width,
                    maxY: canvas.height
                }, artboard.bounds);
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
function playCaixa() {
    // first, instantiate the Rive engine and load the WASM file(s)
    Rive({
        locateFile: function (file) { return 'https://unpkg.com/rive-canvas@0.6.7/' + file; }
    }).then(function (rive) {
        // Rive's ready to rock 'n roll
        // Let's load up a Rive animation file, typically ending in '.riv'
        var req = new Request('../img/rive/bateria.riv');
        fetch(req)
            .then(function (res) {
            return res.arrayBuffer();
        })
            .then(function (buf) {
            // we've got the raw bytes of the animation, let's load them into a Rive
            // file
            var file = rive.load(new Uint8Array(buf));
            // get the default artboard, where the animations we want to interact
            // with live in this file
            var artboard = file.defaultArtboard();
            // now we can access the animations; let's get one called 'vibration'
            var animation = artboard.animation('caixa-play');
            var animationInstance = new rive.LinearAnimationInstance(animation);
            // let's grab our canvas
            var canvas = document.getElementById('riveCanvas');
            var ctx = canvas.getContext('2d');
            // nw we can create a Rive renderer and wire it up to our 2D context
            var renderer = new rive.CanvasRenderer(ctx);
            // advance the artboard to render a frame
            artboard.advance(0);
            // Let's make sure our frame fits into our canvas
            ctx.save();
            renderer.align(rive.Fit.contain, rive.Alignment.center, {
                minX: 0,
                minY: 0,
                maxX: canvas.width,
                maxY: canvas.height
            }, artboard.bounds);
            // and now we can draw our frame to our canvas
            artboard.draw(renderer);
            ctx.restore();
            // track the last time a frame was rendered
            var lastTime = 0;
            // okay, so we have an animation and a renderer; how do we play an
            // animation? First, let's set up our animation loop with
            // requestFrameAnimation
            function draw(time) {
                // work out how many seconds have passed since a previous frame was
                // drawn
                if (!lastTime) {
                    lastTime = time;
                }
                var elapsedTime = (time - lastTime) / 1000;
                lastTime = time;
                // advance our animation by the elapsed time
                animationInstance.advance(elapsedTime);
                // apply the animation to the artboard
                animationInstance.apply(artboard, 1.0);
                // advance the artboard
                artboard.advance(elapsedTime);
                // render the animation frame
                // first, clear the canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                // let's resize it to fit the canvas
                ctx.save();
                renderer.align(rive.Fit.contain, rive.Alignment.center, {
                    minX: 0,
                    minY: 0,
                    maxX: canvas.width,
                    maxY: canvas.height
                }, artboard.bounds);
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
function playChimbal() {
    // first, instantiate the Rive engine and load the WASM file(s)
    Rive({
        locateFile: function (file) { return 'https://unpkg.com/rive-canvas@0.6.7/' + file; }
    }).then(function (rive) {
        // Rive's ready to rock 'n roll
        // Let's load up a Rive animation file, typically ending in '.riv'
        var req = new Request('../img/rive/bateria.riv');
        fetch(req)
            .then(function (res) {
            return res.arrayBuffer();
        })
            .then(function (buf) {
            // we've got the raw bytes of the animation, let's load them into a Rive
            // file
            var file = rive.load(new Uint8Array(buf));
            // get the default artboard, where the animations we want to interact
            // with live in this file
            var artboard = file.defaultArtboard();
            // now we can access the animations; let's get one called 'vibration'
            var animation = artboard.animation('chimbal-play');
            var animationInstance = new rive.LinearAnimationInstance(animation);
            // let's grab our canvas
            var canvas = document.getElementById('riveCanvas');
            var ctx = canvas.getContext('2d');
            // nw we can create a Rive renderer and wire it up to our 2D context
            var renderer = new rive.CanvasRenderer(ctx);
            // advance the artboard to render a frame
            artboard.advance(0);
            // Let's make sure our frame fits into our canvas
            ctx.save();
            renderer.align(rive.Fit.contain, rive.Alignment.center, {
                minX: 0,
                minY: 0,
                maxX: canvas.width,
                maxY: canvas.height
            }, artboard.bounds);
            // and now we can draw our frame to our canvas
            artboard.draw(renderer);
            ctx.restore();
            // track the last time a frame was rendered
            var lastTime = 0;
            // okay, so we have an animation and a renderer; how do we play an
            // animation? First, let's set up our animation loop with
            // requestFrameAnimation
            function draw(time) {
                // work out how many seconds have passed since a previous frame was
                // drawn
                if (!lastTime) {
                    lastTime = time;
                }
                var elapsedTime = (time - lastTime) / 1000;
                lastTime = time;
                // advance our animation by the elapsed time
                animationInstance.advance(elapsedTime);
                // apply the animation to the artboard
                animationInstance.apply(artboard, 1.0);
                // advance the artboard
                artboard.advance(elapsedTime);
                // render the animation frame
                // first, clear the canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                // let's resize it to fit the canvas
                ctx.save();
                renderer.align(rive.Fit.contain, rive.Alignment.center, {
                    minX: 0,
                    minY: 0,
                    maxX: canvas.width,
                    maxY: canvas.height
                }, artboard.bounds);
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
function playPrato() {
    // first, instantiate the Rive engine and load the WASM file(s)
    Rive({
        locateFile: function (file) { return 'https://unpkg.com/rive-canvas@0.6.7/' + file; }
    }).then(function (rive) {
        // Rive's ready to rock 'n roll
        // Let's load up a Rive animation file, typically ending in '.riv'
        var req = new Request('../img/rive/bateria.riv');
        fetch(req)
            .then(function (res) {
            return res.arrayBuffer();
        })
            .then(function (buf) {
            // we've got the raw bytes of the animation, let's load them into a Rive
            // file
            var file = rive.load(new Uint8Array(buf));
            // get the default artboard, where the animations we want to interact
            // with live in this file
            var artboard = file.defaultArtboard();
            // now we can access the animations; let's get one called 'vibration'
            var animation = artboard.animation('prato-play');
            var animationInstance = new rive.LinearAnimationInstance(animation);
            // let's grab our canvas
            var canvas = document.getElementById('riveCanvas');
            var ctx = canvas.getContext('2d');
            // nw we can create a Rive renderer and wire it up to our 2D context
            var renderer = new rive.CanvasRenderer(ctx);
            // advance the artboard to render a frame
            artboard.advance(0);
            // Let's make sure our frame fits into our canvas
            ctx.save();
            renderer.align(rive.Fit.contain, rive.Alignment.center, {
                minX: 0,
                minY: 0,
                maxX: canvas.width,
                maxY: canvas.height
            }, artboard.bounds);
            // and now we can draw our frame to our canvas
            artboard.draw(renderer);
            ctx.restore();
            // track the last time a frame was rendered
            var lastTime = 0;
            // okay, so we have an animation and a renderer; how do we play an
            // animation? First, let's set up our animation loop with
            // requestFrameAnimation
            function draw(time) {
                // work out how many seconds have passed since a previous frame was
                // drawn
                if (!lastTime) {
                    lastTime = time;
                }
                var elapsedTime = (time - lastTime) / 1000;
                lastTime = time;
                // advance our animation by the elapsed time
                animationInstance.advance(elapsedTime);
                // apply the animation to the artboard
                animationInstance.apply(artboard, 1.0);
                // advance the artboard
                artboard.advance(elapsedTime);
                // render the animation frame
                // first, clear the canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                // let's resize it to fit the canvas
                ctx.save();
                renderer.align(rive.Fit.contain, rive.Alignment.center, {
                    minX: 0,
                    minY: 0,
                    maxX: canvas.width,
                    maxY: canvas.height
                }, artboard.bounds);
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
function playTomUm() {
    // first, instantiate the Rive engine and load the WASM file(s)
    Rive({
        locateFile: function (file) { return 'https://unpkg.com/rive-canvas@0.6.7/' + file; }
    }).then(function (rive) {
        // Rive's ready to rock 'n roll
        // Let's load up a Rive animation file, typically ending in '.riv'
        var req = new Request('../img/rive/bateria.riv');
        fetch(req)
            .then(function (res) {
            return res.arrayBuffer();
        })
            .then(function (buf) {
            // we've got the raw bytes of the animation, let's load them into a Rive
            // file
            var file = rive.load(new Uint8Array(buf));
            // get the default artboard, where the animations we want to interact
            // with live in this file
            var artboard = file.defaultArtboard();
            // now we can access the animations; let's get one called 'vibration'
            var animation = artboard.animation('tom-1-play');
            var animationInstance = new rive.LinearAnimationInstance(animation);
            // let's grab our canvas
            var canvas = document.getElementById('riveCanvas');
            var ctx = canvas.getContext('2d');
            // nw we can create a Rive renderer and wire it up to our 2D context
            var renderer = new rive.CanvasRenderer(ctx);
            // advance the artboard to render a frame
            artboard.advance(0);
            // Let's make sure our frame fits into our canvas
            ctx.save();
            renderer.align(rive.Fit.contain, rive.Alignment.center, {
                minX: 0,
                minY: 0,
                maxX: canvas.width,
                maxY: canvas.height
            }, artboard.bounds);
            // and now we can draw our frame to our canvas
            artboard.draw(renderer);
            ctx.restore();
            // track the last time a frame was rendered
            var lastTime = 0;
            // okay, so we have an animation and a renderer; how do we play an
            // animation? First, let's set up our animation loop with
            // requestFrameAnimation
            function draw(time) {
                // work out how many seconds have passed since a previous frame was
                // drawn
                if (!lastTime) {
                    lastTime = time;
                }
                var elapsedTime = (time - lastTime) / 1000;
                lastTime = time;
                // advance our animation by the elapsed time
                animationInstance.advance(elapsedTime);
                // apply the animation to the artboard
                animationInstance.apply(artboard, 1.0);
                // advance the artboard
                artboard.advance(elapsedTime);
                // render the animation frame
                // first, clear the canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                // let's resize it to fit the canvas
                ctx.save();
                renderer.align(rive.Fit.contain, rive.Alignment.center, {
                    minX: 0,
                    minY: 0,
                    maxX: canvas.width,
                    maxY: canvas.height
                }, artboard.bounds);
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
function playTomDois() {
    // first, instantiate the Rive engine and load the WASM file(s)
    Rive({
        locateFile: function (file) { return 'https://unpkg.com/rive-canvas@0.6.7/' + file; }
    }).then(function (rive) {
        // Rive's ready to rock 'n roll
        // Let's load up a Rive animation file, typically ending in '.riv'
        var req = new Request('../img/rive/bateria.riv');
        fetch(req)
            .then(function (res) {
            return res.arrayBuffer();
        })
            .then(function (buf) {
            // we've got the raw bytes of the animation, let's load them into a Rive
            // file
            var file = rive.load(new Uint8Array(buf));
            // get the default artboard, where the animations we want to interact
            // with live in this file
            var artboard = file.defaultArtboard();
            // now we can access the animations; let's get one called 'vibration'
            var animation = artboard.animation('tom-2-play');
            var animationInstance = new rive.LinearAnimationInstance(animation);
            // let's grab our canvas
            var canvas = document.getElementById('riveCanvas');
            var ctx = canvas.getContext('2d');
            // nw we can create a Rive renderer and wire it up to our 2D context
            var renderer = new rive.CanvasRenderer(ctx);
            // advance the artboard to render a frame
            artboard.advance(0);
            // Let's make sure our frame fits into our canvas
            ctx.save();
            renderer.align(rive.Fit.contain, rive.Alignment.center, {
                minX: 0,
                minY: 0,
                maxX: canvas.width,
                maxY: canvas.height
            }, artboard.bounds);
            // and now we can draw our frame to our canvas
            artboard.draw(renderer);
            ctx.restore();
            // track the last time a frame was rendered
            var lastTime = 0;
            // okay, so we have an animation and a renderer; how do we play an
            // animation? First, let's set up our animation loop with
            // requestFrameAnimation
            function draw(time) {
                // work out how many seconds have passed since a previous frame was
                // drawn
                if (!lastTime) {
                    lastTime = time;
                }
                var elapsedTime = (time - lastTime) / 1000;
                lastTime = time;
                // advance our animation by the elapsed time
                animationInstance.advance(elapsedTime);
                // apply the animation to the artboard
                animationInstance.apply(artboard, 1.0);
                // advance the artboard
                artboard.advance(elapsedTime);
                // render the animation frame
                // first, clear the canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                // let's resize it to fit the canvas
                ctx.save();
                renderer.align(rive.Fit.contain, rive.Alignment.center, {
                    minX: 0,
                    minY: 0,
                    maxX: canvas.width,
                    maxY: canvas.height
                }, artboard.bounds);
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
function playSurdo() {
    // first, instantiate the Rive engine and load the WASM file(s)
    Rive({
        locateFile: function (file) { return 'https://unpkg.com/rive-canvas@0.6.7/' + file; }
    }).then(function (rive) {
        // Rive's ready to rock 'n roll
        // Let's load up a Rive animation file, typically ending in '.riv'
        var req = new Request('../img/rive/bateria.riv');
        fetch(req)
            .then(function (res) {
            return res.arrayBuffer();
        })
            .then(function (buf) {
            // we've got the raw bytes of the animation, let's load them into a Rive
            // file
            var file = rive.load(new Uint8Array(buf));
            // get the default artboard, where the animations we want to interact
            // with live in this file
            var artboard = file.defaultArtboard();
            // now we can access the animations; let's get one called 'vibration'
            var animation = artboard.animation('surdo-play');
            var animationInstance = new rive.LinearAnimationInstance(animation);
            // let's grab our canvas
            var canvas = document.getElementById('riveCanvas');
            var ctx = canvas.getContext('2d');
            // nw we can create a Rive renderer and wire it up to our 2D context
            var renderer = new rive.CanvasRenderer(ctx);
            // advance the artboard to render a frame
            artboard.advance(0);
            // Let's make sure our frame fits into our canvas
            ctx.save();
            renderer.align(rive.Fit.contain, rive.Alignment.center, {
                minX: 0,
                minY: 0,
                maxX: canvas.width,
                maxY: canvas.height
            }, artboard.bounds);
            // and now we can draw our frame to our canvas
            artboard.draw(renderer);
            ctx.restore();
            // track the last time a frame was rendered
            var lastTime = 0;
            // okay, so we have an animation and a renderer; how do we play an
            // animation? First, let's set up our animation loop with
            // requestFrameAnimation
            function draw(time) {
                // work out how many seconds have passed since a previous frame was
                // drawn
                if (!lastTime) {
                    lastTime = time;
                }
                var elapsedTime = (time - lastTime) / 1000;
                lastTime = time;
                // advance our animation by the elapsed time
                animationInstance.advance(elapsedTime);
                // apply the animation to the artboard
                animationInstance.apply(artboard, 1.0);
                // advance the artboard
                artboard.advance(elapsedTime);
                // render the animation frame
                // first, clear the canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                // let's resize it to fit the canvas
                ctx.save();
                renderer.align(rive.Fit.contain, rive.Alignment.center, {
                    minX: 0,
                    minY: 0,
                    maxX: canvas.width,
                    maxY: canvas.height
                }, artboard.bounds);
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
playBumbo();
