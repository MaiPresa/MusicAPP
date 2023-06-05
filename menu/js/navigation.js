import { goToBttn } from "../../scripts/script.js";
let header = document.querySelector('header');

navigation = {
    build: function(){

        let logo = document.createElement('img');
        logo.src = '../../menu/img/logo.svg';
        logo.setAttribute("id", "logo");
        header.appendChild(logo);


        let firstDecorativeNavBox = document.createElement('div');
        header.appendChild(firstDecorativeNavBox);


        let nav = document.createElement('nav');
        nav.setAttribute('id','navigation');
        header.appendChild(nav);


        let navList = document.createElement('ul');
        nav.appendChild(navList);


        for(let i=0;i<3;i++){
            let navListItem = document.createElement('li');
            navList.appendChild(navListItem);
            switch(i){
                case 0 : navListItem.innerHTML += '<button id="navButtonPiano"></button><label>Piano</label>';break;
                case 1 : navListItem.innerHTML += '<button id="navButtonDrums"></button><label>Batería</label>';break;
                case 2 : navListItem.innerHTML += '<button id="navButtonUser"></button><label>Usuario</label><section id="dropdownContent"><a href="../index.html">Iniciar Sesión</a><a href="https://factoriaf5.org/">Download</a></section>';break;
            }
        }


        let secondDecorativeNavBox = document.createElement('div');
        header.appendChild(secondDecorativeNavBox);


        let thirdDecorativeNavBox = document.createElement('div');
        header.appendChild(thirdDecorativeNavBox);

    },
};


navigation.build();


let pianoButton = document.getElementById("navButtonPiano");
let drumsButton = document.getElementById("navButtonDrums");


drumsButton.addEventListener("click", (event) => {
    goToBttn("./../tambor/drum.html");
});
pianoButton.addEventListener("click", (event) => {
    goToBttn("./../piano/index.html");
});
