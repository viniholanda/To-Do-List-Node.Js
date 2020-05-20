const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    var today = new Date();
    var options = {weekday: "long", month: "long", day: "numeric"}
    var day = today.toDateString('en-US', options)

    res.render("list", {
        kindOfDay: day
    })

})





app.listen(port, () => console.log(`Example app listening on port port!`))