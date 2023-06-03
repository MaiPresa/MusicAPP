const drumKit = {
    'a': 'hithat',
    's': 'crash',
    'd': 'hithat2',
    'f': 'redoblante',
    'h': 'bigdrum',
    'j': 'tom1',
    'k': 'tom2',
    'l': 'tom3'
};
const $drums = document.querySelectorAll('.sound');

$drums.forEach(drum =>
    drum.addEventListener('click', event => {
        const drumElement = event.target.closest('.sound');
        const drumId = drumElement.id;
        console.log(drumElement)
        const audio = new Audio(`./sounds/${drumId}.wav`);
        audio.play();
    })
);

document.addEventListener('keydown', event => {
    if (event.repeat) return;
    const drumId = drumKit[event.key.toLowerCase()];
    if (drumId) {
        // const $drumElement = document.querySelector(`#${drumId}`);
        // $drumElement.classList.add('playing');
        const audio = new Audio(`./sounds/${drumId}.wav`);
        audio.play();
    }
});


// document.addEventListener('keyup', event => {
//     const drumId = drumKit[event.key.toLowerCase()];
//     if (drumId) {
//         const $drumElement = document.querySelector(`#${drumId}`);
//         // $drumElement.classList.remove('playing');
//     }
// });
