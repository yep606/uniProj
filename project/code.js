Vue.component('todo-items', {
    props: ['list'],
    template: '<div> {{list.name}}</div>'
})

var app = new Vue({
    el: '#app',
    data: {
        items: [

            {name: 'James', id: 1},
            {name: 'Alex', id: 2},
            {name: 'Ilay', id: 3},

        ]
    }
  })


