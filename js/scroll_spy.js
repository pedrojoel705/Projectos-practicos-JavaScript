/**
 * It takes all the sections with the attribute data-scroll-spy and adds an IntersectionObserver to
 * each one.
 *
 * The IntersectionObserver is a new API that allows you to run a callback function whenever an element
 * intersects with the viewport.
 *
 * The callback function is passed an array of entries. Each entry is an object that contains
 * information about the element that intersected with the viewport.
 *
 * The callback function loops through each entry and adds the class active to the corresponding link.
 *
 * The IntersectionObserver also takes an options object. In this case, I'm setting the threshold to
 * 0.5 and 0.75. This means that the callback function will run when the element is 50% and 75% in the
 * viewport.
 *
 * I'm also setting the rootMargin to -250px. This means that the callback function will run when the
 * element is 250px above the viewport.
 */
export default function scrollSpy() {
    const $sections = document.querySelectorAll('section[data-scroll-spy]');

    const cb = (entries) => {
        //console.log('entries', entries);
        entries.forEach((entry) => {
            //console.log('entry', entry);
            const id = entry.target.getAttribute('id');
            console.log(id);
            if (entry.isIntersecting) {
                document
                    .querySelector(`a[data-scroll-spy][href="#${id}"]`)
                    .classList.add('active');
            } else {
                document
                    .querySelector(`a[data-scroll-spy][href="#${id}"]`)
                    .classList.remove('active');
            }
        });
    };

    const observe = new IntersectionObserver(cb, {
        //root
        //rootMargin: '-250px',
        threshold: [0.5, 0.75],
    });

    $sections.forEach((el) => observe.observe(el));
}