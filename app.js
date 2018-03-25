var express = require("express"),
    app     = express();

var port = 3000;
// var port = process.env.PORT;

// Render ejs files by default
app.set("view engine", "ejs");

// Include stylesheets
app.use(express.static(__dirname + "/public"));

// For any path, render index page
app.get("*", function(req, res) {
    res.render("index");
});

// Listen to router
app.listen(port, function() {
    console.log("Portfolio is listening at port " + port);
});    