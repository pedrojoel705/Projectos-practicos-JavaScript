import hamburguerMenu from './js/menu_hamburguesa.js';
import { digitalClock, alarm } from './js/reloj.js';
import { moveBall, shortcuts } from './js/teclado.js';
import countDown from './js/cuenta_regresiva.js';
import scrollTopBotton from './js/btn_scroll.js';
import darkTheme from './js/btn_themeDark.js';
import responsiveMedia from './js/objeto_responsive.js';
import responsiveTester from './js/prueba_responsive.js';
import userDeviceInfo from './js/deteccion_dispositivos.js';
import networkStatus from './js/deteccion_red.js';
import webCam from './js/deteccion_webcam.js';
import getGeolocation from './js/geolocalizacion.js';
import searchFilters from './js/filtro_busquedas.js';
import draw from './js/sorteo.js';
import slider from './js/carrusel.js';
import scrollSpy from './js/scroll_spy.js';

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
    hamburguerMenu('.panel-btn', '.panel', '.menu a');
    digitalClock('#reloj', '#activar-reloj', '#desactivar-reloj');
    alarm('assets/alarma.mp3', '#activar-alarma', '#desactivar-alarma');
    countDown(
        'countdown',
        'May 31, 2023 20:15:55',
        'Feliz Cumpleaños Esposa Querida 🤓 🤓'
    );
    scrollTopBotton('.scroll-top-btn');
    responsiveMedia(
        'youtube',
        '(min-width:1024px)',
        `<a href="https://www.youtube.com/watch?v=p_ckDyFhTGQ" target="_blank" rel="noopener">Ver Video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/p_ckDyFhTGQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );
    responsiveMedia(
        'gmaps',
        '(min-width:1024px)',
        `<a href="https://www.google.com.ar/maps/place/F%C3%A1brica+De+Muebles+Victoria/@-34.4438058,-58.5812165,17z/data=!3m1!4b1!4m5!3m4!1s0x95bca50d65fd9b35:0xe537bead71cd6d8c!8m2!3d-34.4438102!4d-58.5790278" target="_blank" rel="noopener">Ver Ubicacion</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.3285950708014!2d-58.581216485447804!3d-34.44380575656008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca50d65fd9b35%3A0xe537bead71cd6d8c!2sF%C3%A1brica%20De%20Muebles%20Victoria!5e0!3m2!1ses-419!2sar!4v1654466314793!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    );
    responsiveTester('resposive-tester');
    userDeviceInfo('user-device');
    webCam('webcam');
    getGeolocation('geolocation');
    searchFilters('.card-filter', '.card');
    draw('#winner-btn', '.player');
    slider();
    scrollSpy();
});

d.addEventListener('keydown', (e) => {
    moveBall(e, '.ball', '.stage');
    shortcuts(e);
});

darkTheme('.dark-theme-btn', 'dark-mode');
networkStatus();