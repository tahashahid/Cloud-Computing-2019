const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const todos = require("./todos");
const port = 3001
var jwt = require('jsonwebtoken');



app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// app.use('/home', (req, res)=>{res.send('end')})
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use((req, res, next) => {
    console.log(req.headers);
    next();
    // next("sss");
})

// app.use((err, req, res, next) => {
//     res.send(err)
// })


var users = [];
var sessions = [];

var secretKey = 'secretkey';

// app.post('/login',)
app.post('/signup', (req, res) => {

    if (req.body.username && req.body.password) {
        users.push(req.body);
        res.send({ message: 'Succesfully signup' });

    } else {
        res.send({ message: 'Missing username or password' });
    }

});

app.post('/login', (req, res) => {

    if (req.body.username && req.body.password) {

        const loggedInUser = users.find((user) => {
            if (user.username === req.body.username && user.password === req.body.password) {
                return true;
            }
            return false;
        });

        if (!loggedInUser) {
            return res.send({ message: 'User not found' });
        }

        var token = jwt.sign({ username: loggedInUser.username }, secretKey);

        sessions.push({ token: token, username: loggedInUser.username });

        res.send({ message: 'Succesfully login', token: token });

    } else {
        res.send({ message: 'Missing username or password' });
    }

});

app.use((req, res, next) => {
    console.log(req.headers.auth)
    var decoded = jwt.verify(req.headers.auth, secretKey);
    console.log(decoded) // bar
    const currentSession = sessions.find((session) => {
        if(session.token === req.headers.auth) {
            return true;
        } else {
            return false;
        }
    });
    if(!currentSession) {
        res.status(401).send({message: 'Session has expired'});
    } else {
        req.user = currentSession;
        next();
    }
});
app.use("/todo", todos);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
