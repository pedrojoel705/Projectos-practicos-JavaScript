const d = document;
let x = 0;
let y = 0;



/**
 * It moves the ball in the direction of the arrow key pressed, but only if the ball is not touching
 * the edge of the stage.
 * @param e - the event object
 * @param ball - The ball you want to move
 * @param stage - The stage is the container that the ball is in.
 */
export function moveBall(e, ball, stage) {
    const $ball = d.querySelector(ball);
    const $stage = d.querySelector(stage);
    const $limistBall = $ball.getBoundingClientRect();
    const $limitstage = $stage.getBoundingClientRect();

    //console.log($limistBall, $limitstage);

    switch (e.keyCode) {
        case 37:
            if ($limistBall.left > $limitstage.left) {
                x--;
                e.preventDefault();
            }
            break;
        case 38:
            if ($limistBall.top > $limitstage.top) {
                y--;
                e.preventDefault();
            }
            break;
        case 39:
            if ($limistBall.right < $limitstage.right) {
                x++;
                e.preventDefault();
            }
            break;
        case 40:
            if ($limistBall.bottom < $limitstage.bottom) {
                y++;
                e.preventDefault();
            }
            break;

        default:
            break;
    }
    $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`
}

/**
 * It's a function that takes an event object as an argument and then checks if the key property of the
 * event object is equal to 'a' and if the altKey property of the event object is true. If both of
 * those conditions are true, then it will display an alert.
 * </code>
 * 
 * 
 * A:
 * 
 * You can use the <code>keydown</code> event to detect when the user presses a key.
 * <code>document.addEventListener('keydown', function(event) {
 *   if (event.key === 'a' &amp;&amp; event.altKey) {
 *     alert('Haz lanzado una alerta con el teclado  ');
 *   }
 * });
 * </code>
 * @param e - The event object.
 */
export function shortcuts(e) {
    // console.log(e.type);
    // console.log(e.key);
    //console.log(e.keyCode);
    // console.log(` Alt ${e.altKey}`);
    // console.log(` Shift ${e.shiftKey}`);
    // console.log(` Ctrl ${e.ctrlKey}`);
    // console.log(e);

    //esto me sirve para crear atajos en el teclado
    if (e.key === 'a' && e.altKey) {
        alert('Haz lanzado una alerta con el teclado  ');
    }

    if (e.key === 'p' && e.altKey) {
        prompt('Haz lanzado un aviso con el teclado ');
    }

    if (e.key === 'c' && e.altKey) {
        confirm('Haz lanzado una confirmacion con el teclado ');
    }
}
