const axios = require('axios').default;

axios.post('http://localhost:8090/user', null, { params: { name: "Marshmellow" } })
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });




