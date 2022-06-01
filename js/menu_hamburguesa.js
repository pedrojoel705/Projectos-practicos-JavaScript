/**
 * If the user clicks on the hamburger menu button, toggle the class 'is-active' on the hamburger menu
 * button and the panel. If the user clicks on a link in the panel, remove the class 'is-active' from
 * the hamburger menu button and the panel.
 * @param panelBtn - The button that opens the menu.
 * @param panel - The panel that will be toggled.
 * @param linkMenu - The links that are inside the menu.
 */
export default function hamburguerMenu(panelBtn, panel, linkMenu) {
    const d = document;

    d.addEventListener("click", (e) => {
        if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(panelBtn).classList.toggle("is-active");
        };

        if (e.target.matches(linkMenu)) {
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
        }

    });

};
//.toggle me permite cambiar una clase por otro por medio de un evento para luegor regresar a su estado original
// se crea un 3 parametro para poder ejecutar el remove
//.remove permite que cierre el menu hamburgesa cuando hace click en un enlace