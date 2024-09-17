window.GA_TRACKING_ID = `${process.env.VITE_GOOGLE_ANALYTICS_ID}`;

(function() {
    var gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${window.GA_TRACKING_ID}`;
    document.head.appendChild(gaScript);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', window.GA_TRACKING_ID);
})();
