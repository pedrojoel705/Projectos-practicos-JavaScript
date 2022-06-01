const d = document;

/**
 * It's a function that creates a digital clock that can be started and stopped by clicking on buttons.
 * @param clock - The element that will display the clock.
 * @param btnPlay - The button that starts the clock
 * @param btnStop - The button that will stop the clock.
 */
export function digitalClock(clock, btnPlay, btnStop) {
    let clockTempo;

    d.addEventListener('click', (e) => {
        if (e.target.matches(btnPlay)) {
            clockTempo = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
            }, 1000);

            e.target.disabled = true;
        }

        if (e.target.matches(btnStop)) {
            clearInterval(clockTempo);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(btnPlay).disabled = false;
        }
    });
}
/**
 * It creates an audio element, sets the source to the sound you pass in, and then adds an event
 * listener to the document that listens for clicks on the play and stop buttons. When the play button
 * is clicked, it sets a timeout that plays the audio after 2 seconds. When the stop button is clicked,
 * it clears the timeout and pauses the audio
 * @param sound - the path to the sound file
 * @param btnPlay - The button that will start the alarm.
 * @param btnStop - The button that stops the alarm.
 */
export function alarm(sound, btnPlay, btnStop) {
    let alarmTempo;
    const $alarm = d.createElement('audio');
    $alarm.src = sound;

    d.addEventListener('click', (e) => {
        if (e.target.matches(btnPlay)) {
            alarmTempo = setTimeout(() => {
                $alarm.play();
            }, 2000);

            e.target.disabled = true;
        }

        if (e.target.matches(btnStop)) {
            clearTimeout(alarmTempo);
            $alarm.pause(); //pausa la alarma
            $alarm.currentTime = 0; //reinicia la alarma con el atributo propio del aetiqueta audio

            d.querySelector(btnPlay).disabled = false;
        }
    });
}