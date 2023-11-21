const express = require("express");

const app = express();

app.set("view engine", "ejs");

const path = require("path");
const userRoutes = require("./routes/user");

app.use("/libs", express.static(path.join(__dirname, "node_modules")));
app.use("/static", express.static(path.join(__dirname, "public")));

app.use(userRoutes); 


app.use("*", (req, res) => {
    res.status(404).render("error/404", { title: "not found "});
});

app.listen(3000, function() {
    console.log("listening on port 3000");
});