function checkBrowser() {
    const userAgent = navigator.userAgent.toLowerCase();
    
    if (userAgent.indexOf("firefox") > -1) {
        window.location.href = "firefox.html";
    }
    else if (userAgent.indexOf("chrome") > -1 || userAgent.indexOf("edge") > -1 || userAgent.indexOf("opera") > -1) {
        window.location.href = "chrome.html";
    }
    else {
        window.location.href = "default.html";
    }
}