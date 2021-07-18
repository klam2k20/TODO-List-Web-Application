const express = require("express");
const date = require(__dirname + "/date.js");
const app = express();
app.use(express.urlencoded());
app.use(express.static("public"));

// Sets ejs as the template engine
// The view engine will default look into the
// views folder to look for any files we
// want to render
app.set("view engine", "ejs");

// const arrays can still have
// items pushed to it 
// Can't assign the array a whole
// new value though
const items = ["Gym"];

app.get("/", function(req, res) {
    const dateObj = date.getDate();
    

    // Will render the view.ejs file in the views 
    // directory and replace any variables within 
    // the file with the values in the javascript
    // object
    res.render("view", {dateObj: dateObj, items: items});
});

app.post("/", function(req, res) {
    const item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
}); 