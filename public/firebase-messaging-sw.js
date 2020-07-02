importScripts("https://www.gstatic.com/firebasejs/7.9.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.9.0/firebase-messaging.js");

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  const promiseChain = clients
    .matchAll({
      type: "window",
      includeUncontrolled: true
    })
    .then(windowClients => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage(payload);
      }
    })
    .then(() => {
      return registration.showNotification("my notification title");
    });
  return promiseChain;
});

self.addEventListener("notificationclick", function(event) {
  // do what you want
  // ...
});
