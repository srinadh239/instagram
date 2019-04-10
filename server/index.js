// const express = require('express');
const path = require('path');
// const jsonServer = require('json-server');

// const port = process.env.PORT || 3001;

// const app = express();

// // app.get('/api', (req, res) => res.send({ message: 'Node Server Running' }));

// app.use('/api', jsonServer.router(path.join(__dirname, '..', 'server', 'db.json')));

// // app.get('/api/posts', (req, res) => {
// //   res.send({ posts: [
// //     { "id": 1, "image": "", "profileId": "1", "likes": 10 },
// //     { "id": 2, "image": "", "profileId": "1", "likes": 30 },
// //     { "id": 3, "image": "", "profileId": "1", "likes": 100 },
// //     { "id": 4, "image": "", "profileId": "2", "likes": 200 },
// //     { "id": 5, "image": "", "profileId": "1", "likes": 55 },
// //     { "id": 6, "image": "", "profileId": "3", "likes": 32 },
// //     { "id": 7, "image": "", "profileId": "1", "likes": 43 },
// //     { "id": 8, "image": "", "profileId": "1", "likes": 67 },
// //     { "id": 9, "image": "", "profileId": "4", "likes": 90 },
// //   ]});
// // })

// // app.get('/api/comments', (req, res) => {
// //   res.send({ posts: [
// //     { "id": 1, "body": "some comment", "postId": 1, "profileId": 2 },
// //     { "id": 2, "body": "some comment", "postId": 1, "profileId": 2 },
// //     { "id": 3, "body": "some comment", "postId": 1, "profileId": 3 }
// //   ]});
// // })

// app.listen(port, () => console.log(`Node server running on port ${port}`));


const jsonServer = require('json-server');
const express = require('express')
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults();
// console.log(path.join(__dirname+'/../dist'));
// server.use(express.static(path.join(__dirname+'/../dist')));

// server.get('*', (req, res) => {
//   console.log('insided');
// })

const port = process.env.PORT || 3001;

server.use(middlewares);

server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdOn = Date.now()
  }
  // Continue to JSON Server router
  next()
})

server.use(router);

server.listen(port, () => {
  console.log('JSON Server is running');
});
