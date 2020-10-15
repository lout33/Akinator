const express = require('express')
const app = express()
// let io = require('socket.io')(app);
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.json())

const bitree = require('./tree.json');
const tree = require('./tree.js');


const port = 3000

io.on('connection', onConnect);

let userInfo = { idSocket: null, answer: [], rpta: null, lastAnswer: null }

function onConnect(socket) {
  console.log('a user connected');

  console.log(socket.id);
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });


  socket.on('start', (msg) => {
    // console.log('hi ' + msg);
    // tree.KeepQuestioning(bitree.root, socket);
    // let answer = null
    userInfo.answer = []
    let question1 = tree.KeepQuestioning(bitree.root, socket.id, userInfo)
    // console.log(userInfo,"question1");

    userInfo.idSocket = socket.id
    socket.emit('question', question1);


  });


  socket.on('answer', (rpta) => {
    console.log('message: ' + rpta);
    userInfo.answer.push(rpta)

    console.log("answers ", userInfo.answer);
    let question = tree.KeepQuestioning(bitree.root, socket.id, userInfo)
    console.log(question, "question one time");
    socket.emit('question', question);
    question = null
  });



  socket.on('last-info', (lastinfo) => {
    console.log(lastinfo,"lastinfo");
    userInfo.answer.push("n")
    userInfo.lastAnswer = true; // "n"
    let question = tree.KeepQuestioning(bitree.root, socket.id, userInfo,lastinfo)
    // socket.emit('question', question);
  });
}

// last-info
// io.on('connection', (socket) => {
//   console.log('a user connected');
//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });
// });

// app.get('/', (req, res) => {
//   tree.KeepQuestioning(bitree.root);
//   // get first question
//   let question = tree.sharetQuestion()
//   res.json({ question})
// })

// app.post('/', (req, res) => {
//   let answer = req.body
//   let nextQuestion = tree.getNextQuestion(answer)
//   res.json({ nextQuestion})
// })


http.listen(4000, () => {
  console.log('listening on *:4000');
});