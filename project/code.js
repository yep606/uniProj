Vue.component('message-list', {
    props: ['messages'],
    template: '<div>' + 
    '<input> </input>' + '<button v-on:click="add">Add</button>' + 
    '<div v-for="message in messages">'
        + '{{message.name}} ' +
        '</div>' +
        '</div>',
    methods: {
        add : function(){
            this.messages.push({name: 'New one', id: 1});
        }
    },
})

var app = new Vue({
    el: '#app',
    template: '<message-list v-bind:messages="messages"></message-list>',
    data: {
        messages: [

            { name: 'James', id: 1 },
            { name: 'Alex', id: 2 },
            { name: 'Ilay', id: 3 },

        ]
    }
})


