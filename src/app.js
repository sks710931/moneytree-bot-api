const express = require("express");
const dotEnv = require('dotenv');
const bodyParser = require("body-parser");

dotEnv.config();
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.post('/telegram', (req, res) => {
    console.log(JSON.stringify(req.body));
    res.status(200).send();
});

app.use('/', (_req, res) => {
    res.status(200).json({ uptime: process.uptime()});
});

app.listen(843, () => {
    console.log("Running at port: 843");
})