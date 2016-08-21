var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        function startTestPlugin() {
          cordova.plugins.TabocaEcho.coolMethod(
            'Plugin Ready!',
            function(msg) {
              document.body.innerHTML = msg;
            },
            function(err) {
              document.body.innerHTML = '<p class="event received">' + err + '</p>';
            });
        }
        document.getElementById("startTestPlugin").addEventListener("click", startTestPlugin);
    }
};

app.initialize();
