import { goToBttn } from "../scripts/script.js";

document.getElementById("homeDrumBttn").addEventListener("click", (event) => {
    goToBttn("./../tambor/index.html");
});


document.getElementById("homePianoBttn").addEventListener("click", (event) => {
    goToBttn("./../piano/index.html");
});