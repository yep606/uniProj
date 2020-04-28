
// import restful, { requestBackend } from 'node_modules/restful.js';

import RestApi from 'restful-js';

const api = restful('http://localhost:8080', requestBackend(request));

const articleMember = api.one('room', 1);  
articleMember.get().then((response) => {
    const articleEntity = response.body();
    console.log(articleEntity);
    const article = articleEntity.data();
    console.log(article.title); // hello, world!
});