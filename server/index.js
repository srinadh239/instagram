const path = require('path');
const jsonServer = require('json-server');
const express = require('express')
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3001;

server.use(middlewares);

server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdOn = Date.now()
  }

  next()
})

server.use(router);

server.listen(port, () => {
  console.log('JSON Server is running');
});
