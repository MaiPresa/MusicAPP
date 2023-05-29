
const $allKeys = document.querySelectorAll(".key")
$allKeys.forEach(key => 
  key.addEventListener("click", (event) => {
    const notePressed = event.target.dataset.musicNote
    const audio = new Audio(`./piano-keys/${notePressed}.wav`)
    audio.play()
  })
)


const keyboardNotes = {
  "a": "C1",
  "s": "D1",
  "d": "E1",
  "g": "F1",
  "h": "G1",
  "j": "A1",
  "k": "B1",
                /* Teclas Adicionales */
  //"z": "C2",
  //"x": "D2",
  //"c": "E2",
  //"v": "F2",
  //"b": "G2",
  //"n": "A2",
  //"m": "B2",

  "w": "C1s",
  "e": "D1s",
  "y": "F1s",
  "u": "G1s",
  "i": "A1s",
                /* Teclas Adicionales */
  //"s": "C2s",
  //"d": "D2s",
  //"g": "F2s",
  //"h": "G2s",
  //"j": "A2s",
}
document.addEventListener("keydown", (event) => {
  if (event.repeat) return  

  const notePressed = keyboardNotes[event.key.toLowerCase()]

  if (notePressed) {
    // Mudar cor background
    const $noteElement = document.querySelector(`[data-music-note="${notePressed}"]`)
    $noteElement.classList.add("clicked")

    // Tocar audio
    const audio = new Audio(`./piano-keys/${notePressed}.wav`)
    audio.play()
  }
});

document.addEventListener("keyup", (event) => {
  const notePressed = keyboardNotes[event.key.toLowerCase()]
  if (notePressed) {
    const $noteElement = document.querySelector(`[data-music-note="${notePressed}"]`)
    $noteElement.classList.remove("clicked")
  }
})
