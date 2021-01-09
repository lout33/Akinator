const express = require('express')
const cors = require('cors');

const app = express()

app.use(cors())

app.use(express.json())

const bitree = require('./tree03.json');
const port = 443



let ClassNODE = require('./class.js')

  let bst =  new ClassNODE.BST()
  bst.root = bitree.root



app.post('/play/', (req, res) => {
  // console.log(req.body);
  let pattern = req.body.pattern
  console.log(pattern);

    // let pattern = []
  let findedNode =  bst.find(pattern)
  // let lastNode =  { animal:  fatherCurrent.animal,questoin: fatherCurrent.question}
  if(findedNode.animal){
    res.json({question:findedNode.question,animal:findedNode.animal})
  }
  console.log(findedNode.question);
  // let question = tree.KeepQuestioning(pattern);
  res.json({question:findedNode.question})
})



app.listen(port, () => {
  console.log(`listening on *:${port}`);
});

