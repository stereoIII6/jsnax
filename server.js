const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('https://api.jsonbin.io/b/5decb55bbc5ffd040095cb92');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);
