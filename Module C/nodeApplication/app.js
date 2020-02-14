const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const port = 3000

var todos = [];
// app.use('/home', (req, res)=>{res.send('end')})
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/todo', (req, res) => res.send(todos))
// app.get('/home', (req, res) => res.send('Hello Home!'))
app.post('/todo', (req, res) => {
    var data = req.body;
    data.id = Math.floor(Math.random() * 1000);
    todos.push(req.body);
    res.send(req.body)
});
app.put('/todo/:id', (req, res) => {
    var _id = req.params.id;
    var filterData = todos.filter(todo => _id == todo.id)[0];
    if (filterData) {
        filterData.text = req.body.text
        res.send("updated")
    } else {
        res.send("not found");
    }
});
app.delete('/todo/:id', (req, res) => {
    var localindex = -1;
    var _id = req.params.id;
    todos.forEach((value, index)=>{
        if(value.id == _id) {
            localindex = index;
        } 
    });
    todos.splice(localindex, 1);
    res.send("deleted...")
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
