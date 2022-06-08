/**
 * It takes an id as an argument, and then it uses the getUserMedia API to get the webcam stream, and
 * then it sets the video element's srcObject to the stream, and then it plays the video
 * @param id - The id of the video element.
 */
export default function webCam(id) {
    const $video = document.getElementById(id);
    //console.log(navigator.mediaDevices.getUserMedia)=>este metodo me permite poder usar la webcam mediante una promesa

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
            .getUserMedia({ video: true, audio: true })
            .then((stream) => {
                console.log(stream);
                $video.srcObject = stream;
                $video.play();
            })
            .catch((err) => {
                $video.insertAdjacentHTML(
                    'beforebegin',
                    `<p><mark>Sucedio Algo inesperado ${err}</mark></p>`
                );
                console.log(`Sucedio Algo inesperado ${err}`);
            });
    }
}