"serviceWorker" in navigator && window.addEventListener("load", function() {
    navigator.serviceWorker.register("sw.js").then(function(a) {
        alert("ServiceWorker registration successful with scope: ", a.scope)
    }, function(a) {
        alert("ServiceWorker registration failed: ", a)
    })
});
