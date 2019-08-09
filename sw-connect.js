
"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("sw.js").then(function(a){console.log("ServiceWorker registration successful with scope: ",a.scope)},function(a){console.error("ServiceWorker registration failed: ",a)})});
