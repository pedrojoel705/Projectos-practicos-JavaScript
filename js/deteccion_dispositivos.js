const d = document;
const n = navigator;
const ua = n.userAgent;

/**
 * It's a function that returns a string with the user's device information.
 * @param id - The id of the element where the information will be displayed.
 * @returns the string "true" or "false"
 */
export default function userDeviceInfo(id) {
    const $idDevice = d.getElementById(id);

    const isMobile = {
        android: () => ua.match(/android/i),
        ios: () => ua.match(/ipad|ipod|iphone/i),
        windows: () => ua.match(/windows phone/i),
        any: function() {
            return this.android() || this.ios() || this.windows();
        },
    };
    const isDesktop = {
        linux: () => ua.match(/linux/i),
        mac: () => ua.match(/mac os/i),
        windows: () => ua.match(/windows nt/i),
        any: function() {
            return this.linux() || this.mac() || this.windows();
        },
    };
    const isBrowser = {
        chrome: () => ua.match(/chrome/i),
        safari: () => ua.match(/safari/i),
        firefox: () => ua.match(/firefox/i),
        opera: () => ua.match(/opera|opera mini/i),
        ie: () => ua.match(/msie|iemobile/i),
        edge: () => ua.match(/edge/i),
        any: function() {
            return (
                this.chrome() ||
                this.safari() ||
                this.firefox() ||
                this.opera() ||
                this.ie() ||
                this.edge()
            );
        },
    };

    // console.log(ua);
    // console.log(isMobile.android());
    // console.log(isMobile.ios());
    // console.log(isDesktop.any());
    // console.log(isBrowser.any());

    $idDevice.innerHTML = `<ul>
    <li>User Agent: <b>${ua}</b></li>
    <li>Plataforma: <b>${
      isMobile.any() ? isMobile.any() : isDesktop.any()
    }</b></li> 
    <li>Navegador: <b>${isBrowser.any()}</b></li>  
    </ul>`;
}