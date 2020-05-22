const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    var today = new Date();
    var options = {weekday: "long", month: "long", day: "numeric"}
    var day = today.toDateString('en-US', options)

    res.render("list", {
        kindOfDay: day
    })

})

app.post("/", function(req, res) {

   var item = req.body.newItem

    console.log(item);
    

})





app.listen(port, () => console.log(`Example app listening on port port!`))