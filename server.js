const express = require("express");
const path = require("path")

const app = express();
const port = process.env.PORT || 3000;

const directoryPath = path.join(__dirname, "/pages");
app.use(express.static(directoryPath));


app.get("/", (req, res) => {
    res.sendFile(path.join(directoryPath, "welcome.html"));
})

app.get("/home", (req, res) => {
    res.sendFile(path.join(directoryPath, "home.html"))
})

app.get("/knowledge", (req, res) => {
    res.sendFile(path.join(directoryPath, "knowledge.html"))
})


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})