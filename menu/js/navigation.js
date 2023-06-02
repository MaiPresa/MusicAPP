import { goToBttn } from "../../scripts/script.js";
let header = document.querySelector('header');

navigation = {
    build: function(){
        //creo el link y logo, y lo inserto
        let logo = document.createElement('img');
        logo.src = '../../menu/img/logo.svg';
        logo.setAttribute("id", "logo");
        header.appendChild(logo);

        //creo primer div decorativo e inserto
        let firstDecorativeNavBox = document.createElement('div');
        header.appendChild(firstDecorativeNavBox);

        //creo el nav y lo inserto
        let nav = document.createElement('nav');
        nav.setAttribute('id','navigation');
        header.appendChild(nav);

        //creo la lista y la inserto en el nav
        let navList = document.createElement('ul');
        nav.appendChild(navList);

        
        //bucle para crear 3 elementos en la lista
        for(let i=0;i<3;i++){
            let navListItem = document.createElement('li');
            navList.appendChild(navListItem);
            switch(i){
                case 0 : navListItem.innerHTML += '<button id="navButtonPiano"></button><label>Piano</label>';break;
                case 1 : navListItem.innerHTML += '<button id="navButtonDrums"></button><label>Batería</label>';break;
                case 2 : navListItem.innerHTML += '<button id="navButtonUser"></button><label>Usuario</label><section id="dropdownContent"><a href="../../login/index.html">Iniciar Sesión</a><a href="https://factoriaf5.org/">Download</a></section>';break;
            }
        }

        //creo div decorativo e inserto
        let secondDecorativeNavBox = document.createElement('div');
        header.appendChild(secondDecorativeNavBox);

        //creo otro div decorativo e inserto
        let thirdDecorativeNavBox = document.createElement('div');
        header.appendChild(thirdDecorativeNavBox);

    },
    active:function(){
        
    },
    hover: function(){
        pianoButton
    },
};

//creamos la estructura de la página
navigation.build();
navigation.active();


//elementos con llamada a la acción
let pianoButton = document.getElementById("navButtonPiano");
let drumsButton = document.getElementById("navButtonDrums");
// let userButton = document.getElementById("navButtonUser");



drumsButton.addEventListener("click", (event) => {
    goToBttn("./../tambor/drum.html");
});
pianoButton.addEventListener("click", (event) => {
    goToBttn("./../piano/index.html");
});
