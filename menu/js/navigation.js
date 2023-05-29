navigation = {
    build: function(){
        //cojo el elemento header
        let header = document.querySelector('header');

        //creo el link y logo, y lo inserto
        let logo = document.createElement('img');
        logo.src = 'img/logo.svg';
        logo.setAttribute("id", "logo");
        header.appendChild(logo);

        //creo primer div decorativo e insert
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
                case 0 : navListItem.innerHTML += '<button id="navButtonPiano"><img src="img/navIconPiano.svg" alt="Botón Piano"></button><label>Piano</label>';break;
                case 1 : navListItem.innerHTML += '<button id="navButtonDrums"><img src="img/navIconDrums.svg" alt="Botón Batería"></button><label>Batería</label>';break;
                case 2 : navListItem.innerHTML += '<button id="navButtonUser"><img src="img/navIconUser.svg" alt="Botón Usuario"></button><label>Usuario</label>';break;
            }
        }

        //creo div decorativo e inserto
        let secondDecorativeNavBox = document.createElement('div');
        header.appendChild(secondDecorativeNavBox);

        //creo otro div decorativo e inserto
        let thirdDecorativeNavBox = document.createElement('div');
        header.appendChild(thirdDecorativeNavBox);

    },
    shrink: function(){
        let header = document.querySelector('header');
        let logo = document.getElementById('logo');
        let div = document.querySelectorAll('header > div');
        let nav = document.querySelector('nav > ul');

        header.classList.add('shrink');
        logo.classList.add('shrink');
        div[0].classList.add('shrink');
        div[2].classList.add('shrink');
        div[1].classList.add('shrink');
        nav.classList.add('shrink');
    },
};
//creamos la estructura de la página
navigation.build();

//elementos con llamada a la acción
let pianoButton = document.getElementById("navButtonPiano");
let drumsButton = document.getElementById("navButtonDrums");
let userButton = document.getElementById("navButtonUser");

pianoButton.addEventListener('click',navigation.shrink);
drumsButton.addEventListener('click',navigation.shrink);

