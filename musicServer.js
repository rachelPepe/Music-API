const express = require("express");
const app = express();

// Middleware that parses HTTP requests with JSON body
app.use(express.json());

app.use("/api/songs", require("./api/songs"));

const path = require('path');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));


app.listen(3000);
