const d = document;
const w = window;

/**
 * The function takes a button selector as an argument and adds a class to the button when the page is
 * scrolled more than 600 pixels from the top, and removes the class when the page is scrolled less
 * than 600 pixels from the top. When the button is clicked, the page scrolls to the top.
 * @param btn - The button selector.
 */
export default function scrollTopBotton(btn) {
    const $scrollBtn = d.querySelector(btn);

    w.addEventListener('scroll', (e) => {
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

        if (scrollTop > 600) {
            $scrollBtn.classList.remove('hidden');
        } else {
            $scrollBtn.classList.add('hidden');
        }
    });

    d.addEventListener('click', (e) => {
        if (e.target.matches(btn)) {
            w.scroll({
                behavior: 'smooth',
                top: 0,
                //left:0
            });
        }
    });

    /* Just a console.log to see the scroll position in pixels. */
    console.log(
        Math.floor(w.pageYOffset),
        Math.floor(d.documentElement.scrollTop)
    );
}