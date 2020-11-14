import Vue from 'vue'
import vuetify from './util/vuetify.js'
import App from './components/App.vue'
import {connect} from './ws.js';

// connect();

new Vue(
    {
        el: '#app',
        vuetify,
        render: a => a(App)
    }
)