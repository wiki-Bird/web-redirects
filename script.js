function checkBrowser() {
    const userAgent = navigator.userAgent.toLowerCase();
    
    if (userAgent.indexOf("firefox") > -1) {
        window.location.href = "#firefox";
    }
    else if (userAgent.indexOf("chrome") > -1 || userAgent.indexOf("edge") > -1 || userAgent.indexOf("opera") > -1) {
        window.location.href = "#chrome";
    }
    else {
        window.location.href = "#default";
    }
}