const hithat = document.getElementById('hithat');
const crash = document.getElementById('crash');
const hithat2 = document.getElementById('hithat2');
const redoblante = document.getElementById('redoblante');
const bigdrum = document.getElementById('bigdrum');
const tom1 = document.getElementById('tom1');
const tom2 = document.getElementById('tom2');
const tom3 = document.getElementById('tom3');

function reproducirSonido(id) {
    let audioSrc = '';

    switch (id) {
    case 'hithat':
        audioSrc = 'sounds/hit-hat.wav';
        break;
    case 'crash':
        audioSrc = 'sounds/crash.wav';
        break;
    case 'hithat2':
        audioSrc = 'sounds/hit-hat.wav';
        break;
    case 'redoblante':
        audioSrc = 'sounds/redoblante.wav';
        break;
    case 'bigdrum':
        audioSrc = 'sounds/BigDrum.wav';
        break;
    case 'tom1':
        audioSrc = 'sounds/tom1.wav';
        break;
    case 'tom2':
        audioSrc = 'sounds/tom2.wav';
        break;
    case 'tom3':
        audioSrc = 'sounds/tom3.wav';
        break;
    default:
        break;
    }

    if (audioSrc !== '') {
        const audio = new Audio(audioSrc);
        audio.play();
    }
}

hithat.addEventListener('click', function() {
    reproducirSonido('hithat');
});

crash.addEventListener('click', function() {
    reproducirSonido('crash');
});

hithat2.addEventListener('click', function() {
    reproducirSonido('hithat2');
});

redoblante.addEventListener('click', function() {
    reproducirSonido('redoblante');
});

bigdrum.addEventListener('click', function() {
    reproducirSonido('bigdrum');
});

tom1.addEventListener('click', function() {
    reproducirSonido('tom1');
});

tom2.addEventListener('click', function() {
    reproducirSonido('tom2');
});

tom3.addEventListener('click', function() {
    reproducirSonido('tom3');
});
