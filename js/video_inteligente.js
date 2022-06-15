/**
 * When the video is half in the viewport, play it, otherwise pause it.
 */
export default function smartVideo() {
    const $video = document.querySelectorAll('video[data-smart-video]');

    const cb = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.play();
            } else {
                entry.target.pause();
            }

            window.addEventListener('visibilitychange', (e) =>
                document.visibilityState === 'visible' ?
                entry.target.play() :
                entry.target.pause()
            );
        });
    };

    const observer = new IntersectionObserver(cb, { threshold: 0.5 });

    $video.forEach((el) => observer.observe(el));
}