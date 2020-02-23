const express = require("express");
const router = express.Router();
var todos = [];

router.get('/',  (req, res) => res.send(todos))
router.get('/:id', (req, res, next) => {
    console.log("hit")
    next();
}, (req, res) => {
    res.send(req.selectedTodo);
})
router.post('/', (req, res) => {
    var data = req.body;
    data.id = Math.floor(Math.random() * 1000);
    data.user = req.user.username;
    todos.push(data);
    res.send(data)
});
router.put('/:id', (req, res) => {
    if (req.selectedTodo) {
        req.selectedTodo.text = req.body.text
        res.send("updated")
    } else {
        res.send("not found");
    }
});
router.delete('/:id', (req, res) => {
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
router.param("id", (req, res, next) => {
    var _id = req.params.id;
    var filterData = todos.filter(todo => _id == todo.id)[0];
    req.selectedTodo = filterData;
    next();

    // db().then(()=>{
    //     next()
    // })
})
module.exports = router;