/**
 * It creates a div element, adds a class to it, inserts it into the DOM, and removes it after 2
 * seconds
 */
export default function networkStatus() {
    const isOnLine = () => {
        const $div = document.createElement('div');

        if (navigator.onLine) {
            $div.textContent = 'Conexion Restblecida';
            $div.classList.add('online');
            $div.classList.remove('offline');
        } else {
            $div.textContent = 'Conexion Perdida';
            $div.classList.remove('online');
            $div.classList.add('offline');
        }

        document.body.insertAdjacentElement('afterbegin', $div);
        setTimeout(() => {
            document.body.removeChild($div);
        }, 2000);
    };

    window.addEventListener('online', (e) => isOnLine());
    window.addEventListener('offline', (e) => isOnLine());
}