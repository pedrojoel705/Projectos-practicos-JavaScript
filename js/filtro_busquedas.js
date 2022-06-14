/**
 * When the user types in the input, if the text in the selector matches the input, remove the filter
 * class, otherwise add the filter class.
 * @param input - The input field that will be used to filter the list.
 * @param selector - The selector of the elements you want to filter.
 */
const d = document;

export default function searchFilters(input, selector) {
    document.addEventListener('keyup', (e) => {
        if (e.target.matches(input)) {
            if (e.key === 'Escape') e.target.value = '';

            d.querySelectorAll(selector).forEach((el) =>
                el.textContent.toLowerCase().includes(e.target.value) ?
                el.classList.remove('filter') :
                el.classList.add('filter')
            );
        }
    });
}