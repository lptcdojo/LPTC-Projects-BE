const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.json({message: "Welcome to LPTCDojo's Projects API"})
})

require('./app/routes/projects.routes.js')(app);

app.listen(process.env.PORT || 3001, (req, res) => {
    console.log("Server started")
})
