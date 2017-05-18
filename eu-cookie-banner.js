(function insertBanner() {
    var t = "We use cookies to ensure that we can give you the best possible experience on our website. If you continue we'll assume that you are okay with that.";
    if (typeof euCookieBannerText !== 'undefined') t = euCookieBannerText;
    var bt = "OK";
    if (typeof euCookieBannerButtonText !== 'undefined') bt = euCookieBannerButtonText;

    var userAcceptedPreviously = localStorage.getItem("eu-cookies");
    if (userAcceptedPreviously !== "yes"){
        var targetDiv = document.createElement('div');
        targetDiv.className = "eu-cookie-banner";

        var text = document.createElement('div');
        text.innerHTML = t;
        text.className = "eu-cookie-banner-text";

        var closeButton = document.createElement('button');
        closeButton.innerHTML = bt;
        closeButton.className = "eu-cookie-banner-button";
        closeButton.onclick = function () {
            localStorage.setItem("eu-cookies", "yes");
            targetDiv.remove();
        };

        targetDiv.appendChild(text);
        targetDiv.appendChild(closeButton);

        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML =
            ".eu-cookie-banner {\n" +
            "    width: 100%;\n" +
            "    height: 50px;\n" +
            "    user-select: none;\n" +
            "    background: rgba(42, 42, 42, 0.65);\n" +
            "    bottom: 0;\n" +
            "    z-index: 1;\n" +
            "    position: absolute;\n" +
            "}\n" +
            ".eu-cookie-banner-text {\n" +
            "    width: 90%;\n" +
            "    position: relative;\n" +
            "    top: 50%;\n" +
            "    transform: translateY(-50%);\n" +
            "    text-align: center;\n" +
            "}\n" +
            ".eu-cookie-banner-button {\n" +
            "    width: 8%;\n" +
            "    height: 32px;\n" +
            "    background-color: #4CAF50;\n" +
            "    margin: auto;\n" +
            "    position: absolute;\n" +
            "    color: white;\n" +
            "    border: none;\n" +
            "    text-decoration: none;\n" +
            "    border-radius: 2px;\n" +
            "    font-size: 16px;\n" +
            "    right: 1%;\n" +
            "    top: 9px;\n"+
            "}";
        document.body.appendChild(targetDiv);
        document.head.appendChild(style);
    }
})();