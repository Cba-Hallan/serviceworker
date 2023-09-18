const APP = {
    SW: null,
    init() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js', {
                scope: '/'
            }).then(registration => {
                APP.SW = registration.installing ||
                    registration.waiting ||
                    registration.active;
                console.log("ServiceWorker register");
            })
        } else {
            console.log('ServiceWorker are not supported.');
        }
    }
}

document.addEventListener('DOMContentLoaded',APP.init);