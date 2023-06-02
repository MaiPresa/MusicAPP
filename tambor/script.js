const $allKeys = document.querySelectorAll(".key")
$allKeys.forEach(key => 
  key.addEventListener("click", (event) => {
    const notePressed = event.target.dataset.musicNote
    const audio = new Audio(`./sounds/${notePressed}.wav`)
    audio.play()
  })
)


const keyboardNotes = {
  "a": "C1",
  "s": "D1",
  "c": "E1",
  "z": "F1",
  "x": "BigDrum",
  "q": "crash",
  "w": "B1",
  "e": "D1s",
}
document.addEventListener("keydown", (event) => {
  if (event.repeat) return  

  const notePressed = keyboardNotes[event.key.toLowerCase()]

  if (notePressed) {
    // Mudar cor background
    const $noteElement = document.querySelector(`[data-music-note="${notePressed}"]`)
    $noteElement.classList.add("clicked")

    // Tocar audio
    const audio = new Audio(`./sounds/${notePressed}.wav`)
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