const client;
const destination = "/topic/test";

function connect(){
    var ws = new WebSocket('ws://localhost:15674/ws');
    client = Stomp.over(ws);
    client.connect('guest', 'guest', on_connect, on_error, '/');
}

function sendMessage(){

    var subscription = client.subscribe(destination, callback);
    client.send(destination, {}, "Hello, STOMP!");

}

var on_connect = function() {
    console.log('connected');
};
var on_error =  function() {
    console.log('error');
};

var callback =  function(message) {

    if (message.body) {
        alert("got message with body " + message.body)
      } else {
        alert("got empty message");
      }

};

