const d = document;

/**
 * It adds a class to the elements that have the data-dark attribute, and it removes it when the button
 * is clicked again
 * @param btn - The button that will change the theme.
 * @param classDark - The class that will be added to the elements that have the data-dark attribute.
 */
export default function darkTheme(btn, classDark) {
    const $themeBtn = d.querySelector(btn);
    const $selectors = d.querySelectorAll('[data-dark]');

    let moon = '🌙';
    let sun = '☀️';

    const lightMode = () => {
        $selectors.forEach((el) => el.classList.remove(classDark));
        $themeBtn.textContent = moon;
        localStorage.setItem('theme', 'ligth');
    };

    const darkMode = () => {
        $selectors.forEach((el) => el.classList.add(classDark));
        $themeBtn.textContent = sun;
        localStorage.setItem('theme', 'dark');
    };

    d.addEventListener('click', (e) => {
        if (e.target.matches(btn)) {
            if ($themeBtn.textContent === moon) {
                darkMode();
            } else {
                lightMode();
            }
        }
    });

    /* Checking if the local storage is null, if it is, it sets it to light. If it is light, it sets
              the light mode. If it is dark, it sets the dark mode. 
              *setItem agrega Keys ==> Value
              *getItem evalua si el valos Keys es null para luego asignarles valores con el setItem de localStorage
              */
    d.addEventListener('DOMContentLoaded', (e) => {
        if (localStorage.getItem('theme') === null)
            localStorage.setItem('theme', 'ligth');
        if (localStorage.getItem('theme') === 'ligth') lightMode();
        if (localStorage.getItem('theme') === 'dark') darkMode();
    });
}