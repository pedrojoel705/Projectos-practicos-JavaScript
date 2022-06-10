/**
 * It gets the current position of the user and displays it on the screen
 * @param id - The ID of the element you want to display the results in.
 */
export default function getGeolocation(id) {
    const $id = document.getElementById(id);
    const option = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };

    const success = (position) => {
        $id.innerHTML = `
        <p>Tu Posicion Actual es:</p>
        <ul>
        <li>Longitud: <b>${position.coords.longitude}</b></li>
        <li>Latitud: <b>${position.coords.latitude}</b></li>
        <li>Precision: <b>${position.coords.accuracy} Metros</b></li>
        </ul>
        <a href="https://www.google.com.ar/maps/@${position.coords.latitude},${position.coords.longitude},20z" target="_blank" rel="noopener">Acede a tu Ubicacion</a>
        `;

        console.log(position);
    };

    const error = (err) => {
        $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`;
        console.log(err);
    };

    navigator.geolocation.getCurrentPosition(success, error, option);
}