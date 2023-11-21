const express = require("express");
const router = express.Router();

const data = {
    title: "Serkan Tanyıldızı"
}

router.get("/iletisim", function(req, res) {
    res.render("users/contact", data);
});

router.get("/hakkinda", function(req, res) {
    res.render("users/about", data);
});

router.get("/", function(req, res) {
    res.render("users/index", data);
});



module.exports = router;