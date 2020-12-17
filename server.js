const express = require("express");
const app = express();
const hbs = require("hbs");

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + "/public"));

// Express hbs engine
hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

// Helpers
hbs.registerHelper("getAnio", () => {
    return new Date().getFullYear();
});

app.get("/", (req, res) => {
    res.render("home.hbs", {
        title: "Hola Mundo",
    });
});

app.get("/about", (req, res) => {
    res.render("about.hbs");
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});