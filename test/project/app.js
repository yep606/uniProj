import Vue from 'vue'
import App from './components/App.vue'
import {connect} from './ws.js';

connect();

new Vue(
    {
        el: '#app',
        render: a => a(App)
    }
)