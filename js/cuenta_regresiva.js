const d = document;

/**
 * It takes an id, a date, and a message, and then it counts down to the date and displays the message
 * when the date is reached.
 * @param id - The id of the element where you want to display the countdown.
 * @param limitDate - The date you want to count down to.
 * @param finalMessage - The message you want to display when the countdown is over.
 */
export default function countDown(id, limitDate, finalMessage) {
    const $countdown = d.getElementById(id);
    const countdownDate = new Date(limitDate).getTime();

    let countdownTempo = setInterval(() => {
        let now = new Date().getTime();
        let limitDate = countdownDate - now;
        let days = Math.floor(limitDate / (1000 * 60 * 60 * 24));
        let hours = (
            '0' + Math.floor((limitDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        ).slice(-2);
        let minutes = (
            '0' + Math.floor((limitDate % (1000 * 60 * 60)) / (1000 * 60))
        ).slice(-2);
        let seconds = ('0' + Math.floor((limitDate % (1000 * 60)) / 1000)).slice(-2);

        $countdown.innerHTML = `<h3> Faltan ${days} dias,  ${hours} Horas,  ${minutes} minutos  y  ${seconds}  segundos</h3>`;

        //console.log(countdownDate, now, limitDate);

        if (limitDate < 0) {
            clearInterval(countdownTempo);
            $countdown.innerHTML = `<h3>${finalMessage} </h3>`;
        }
    }, 1000);
}