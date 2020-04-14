var ws = new WebSocket('ws://localhost:15674/ws');
var client = Stomp.over(ws);
var on_connect = function() {
    console.log('connected');
};
var on_error =  function() {
    console.log('error');
};
client.connect('guest', 'guest', on_connect, on_error, '/');
