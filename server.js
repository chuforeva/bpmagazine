const express = require('express');
const fs = require('fs');

const app = express();
const port = 8080;

app.listen(port, () => {
    console.log(`Application started and Listening on port ${port}`)
});

app.get('/', (req, res) => {
    res.sendFile("./index.html", { root: __dirname })
});

app.get('/data.json', (req, res) => {
    fs.readFile("./data.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        // console.log(jsonString);
        res.send(jsonString);
    });
});