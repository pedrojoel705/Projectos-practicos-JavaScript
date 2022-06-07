const d = document;
const w = window;

/**
 * It takes an id, a media query, and two strings of content, and then it replaces the content of the
 * element with the id with the content that matches the media query.
 * @param id - The id of the element you want to change the content of.
 * @param mq - The media query you want to use.
 * @param mobilContent - The content that will be displayed on mobile devices.
 * @param desktopContent - The content that will be displayed on desktop.
 */
export default function responsiveMedia(id, mq, mobilContent, desktopContent) {
    let breakpoint = w.matchMedia(mq);

    const responsive = (e) => {
        if (e.matches) {
            d.getElementById(id).innerHTML = desktopContent;
        } else {
            d.getElementById(id).innerHTML = mobilContent;
        }

        //console.log('mq', breakPoint, e.matches);
    };

    breakpoint.addListener(responsive);
    responsive(breakpoint);
}