const express = require('express')
const app = express()
const port = 3001
const ejs = require('ejs')
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.set('view engine','ejs'); 
app.use(express.urlencoded({extended: false}));
app.get('/', (req, res) => {
  res.render('index.ejs')
})
app.post('/try',(req,res)=>{
    console.log(req.body.NAME)
    console.log(req.body.Age)
})
app.listen(port, () => {
  console.log(`try app listening on port ${port}`)
})