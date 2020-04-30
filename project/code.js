var client;
const destination = "/topic/test";
const chat = document.getElementById("chat");
const connectBtn = document.getElementById("connectBtn");
const messageArea = document.getElementById("messageArea");
var subscription;



function connect(){
    var ws = new WebSocket('ws://localhost:15674/ws');
    client = Stomp.over(ws);
    client.connect('guest', 'guest', on_connect, on_error, '/');
}

function sendMessage(){

    axios({
        method: 'get',
        url: 'localhost:8080/room/1',
        responseType: 'json'
      })
        .then(function (response) {
          console.log(response.data);
        }
        );
   

    }
    // client.send(destination, {}, "Hello, STOMP!");

var on_connect = function() {
    subscription = client.subscribe(destination, callback);
    connectBtn.classList.add("hidden");
    chat.classList.remove("hidden");
};
var on_error =  function() {
    console.log('error');
};

var callback =  function(message) {

  var li = document.createElement("li");
  li.appendChild(document.createTextNode(message.body));
  messageArea.appendChild(li);

};

