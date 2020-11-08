import SockJS from 'sockjs-client'
import {Stomp} from '@stomp/stompjs'

let stompClient = null;

export function connect() {
    const socket = new SockJS('http://localhost:8080/ws');
    stompClient = Stomp.over(socket);
    stompClient.debug = () => {
    };
    stompClient.connect({}, frame => {
        stompClient.subscribe('/topic/tasks', onMessageReceived)
    })
}

function onMessageReceived(message) {
    console.log("Got new message!");
    console.log(message)
}