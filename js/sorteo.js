/**
 * It takes a button selector and a list selector as arguments, and when the button is clicked, it
 * returns a random item from the list.
 * </code>
 * @param btn - The button that will trigger the event.
 * @param selector - The selector of the elements you want to choose from.
 */
export default function draw(btn, selector) {
    const getWinner = (selector) => {
        const $players = document.querySelectorAll(selector);
        const $id = document.querySelector('.winner');
        const random = Math.floor(Math.random() * $players.length);
        const winner = $players[random];

        //console.log($players, random, winner);
        return ($id.innerHTML = `El Ganador es: ${winner.textContent}
       `);
    };

    document.addEventListener('click', (e) => {
        if (e.target.matches(btn)) {
            let result = getWinner(selector);
            alert(result);
            console.log(result);
        }
    });
}