const title = document.getElementById('title');
title.innerText = 'Bienvenidos a mi sitio web con AJAX';

const paginaActual = 'index';

switch(paginaActual) {
    case 'index': 
        title.innerText = 'index';
    break;
    case 'contacto':
        title.innerText = 'contacto';
    break;
    case 'comunidad':
        title.innerText = 'comunidad';
    break;
}