function checkBrowser() {
    const userAgent = navigator.userAgent.toLowerCase();
    
    if (userAgent.indexOf("firefox") > -1) {
        window.location.href = "https://addons.mozilla.org/en-US/firefox/addon/blue-screen/";
    }
    else if (userAgent.indexOf("chrome") > -1 || userAgent.indexOf("edge") > -1 || userAgent.indexOf("opera") > -1) {
        window.location.href = "https://chromewebstore.google.com/detail/bluescreen/nogankkoicghipdhohicocdeajcpndao";
    }
    else {
        window.location.href = "https://github.com/wiki-Bird/bluescreen";
    }
}