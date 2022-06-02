import hamburguerMenu from './js/menu_hamburguesa.js';
import { digitalClock, alarm } from './js/reloj.js';
import { moveBall, shortcuts } from './js/teclado.js';
import countDown from './js/cuenta_regresiva.js';
import scrollTopBotton from './js/btn_scroll.js';
import darkTheme from './js/btn_themeDark.js';

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
});

d.addEventListener('keydown', (e) => {
    moveBall(e, '.ball', '.stage');
    shortcuts(e);
});

darkTheme('.dark-theme-btn', 'dark-mode');