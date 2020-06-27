const express = require('express')
const bodyParser = require('body-parser');
const {
    static
} = require('express');
const app = express()
const port = 3000

var itens = [];
let workItems = []

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static("public"))

app.set('view engine', 'ejs');

//criação rota de data de hoje
app.get('/', (req, res) => {
    var today = new Date();

    //formato de data
    var options = {
        weekday: "long",
        month: "long",
        day: "numeric"
    }

    var day = today.toDateString('en-US', options)

    //"list" vem do list.ejs, 
    res.render("list", {listTitle: day, newListItens: itens
    })

})


app.post("/", function (req, res) {


    //body.newItem vem do imput list.ejs
    let item = req.body.newItem;

    if (req.body.list === 'Work List') {
        workItems.push(item)
        res.redirect("/work")

    } else {

        items.push(item)

        res.redirect("/")

    }


      
  

    //itens(array topo da pagina)


})

app.get("/work", function (req, res) {
    res.render("list", {
        listTitle: "Work List",
        newListItens: workItems
    });
})

app.get("/about", function(req, res){
    res.render("about")
})

app.post("/work", function (req, res) {
    let item = req.body.newItem
    workItems.push(item)
    res.redirect("/work")
})




app.listen(port, () => console.log(`Example app listening on port port!`))