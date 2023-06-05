
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
 
  "w": "C1s",
  "e": "D1s",
  "y": "F1s",
  "u": "G1s",
  "i": "A1s",
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
