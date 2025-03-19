const express = require("express");
const cors = require("cors");

const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.send("Rodando!");
});

app.listen(port, (req, res) => {
    console.log(`Aplicação rodando no endereço http://localhost:${port}`);
});
