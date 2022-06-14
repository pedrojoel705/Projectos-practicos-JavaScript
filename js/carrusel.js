/**
 * When the user clicks on the next or previous button, the current slide is removed and the next or
 * previous slide is added.
 */
export default function slider() {
    const $nextBtn = document.querySelector('.slider-btns .next');
    const $prevBtn = document.querySelector('.slider-btns .prev');
    const $slide = document.querySelectorAll('.slider-slide');
    let i = 0;

    document.addEventListener('click', (e) => {
        if (e.target === $prevBtn) {
            e.preventDefault();
            $slide[i].classList.remove('active');
            i--;

            if (i < 0) {
                i = $slide.length - 1;
            }

            $slide[i].classList.add('active');
        } else {
            if (e.target === $nextBtn) {
                e.preventDefault();
                $slide[i].classList.remove('active');
                i++;

                if (i >= $slide.length) {
                    i = 0;
                }

                $slide[i].classList.add('active');
            }
        }
    });
}