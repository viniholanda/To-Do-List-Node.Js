const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

var itens = [];

app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    var today = new Date();

    var options = {
    weekday: "long",
    month: "long", 
    day: "numeric"}

    var day = today.toDateString('en-US', options)

    res.render("list", {kindOfDay: day, newListItens: itens})

    

})

app.post("/", function(req, res) {

 item = req.body.newItem

 itens.push(item)

    res.redirect("/")

   
    

})





app.listen(port, () => console.log(`Example app listening on port port!`))