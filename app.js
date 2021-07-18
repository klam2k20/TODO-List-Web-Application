const express = require("express");
const app = express();
app.use(express.urlencoded());

// Sets ejs as the template engine
// The view engine will default look into the
// views folder to look for any files we
// want to render
app.set("view engine", "ejs");


var items = ["Gym: Back Day", "Grab hashbrowns",  "Cook Dinner"];

app.get("/", function(req, res) {
    var date  = new Date();
    var options = {
        weekday : "long",
        month : "long",
        day : "numeric" 
    }
    var dateObj = date.toLocaleDateString("en-US", options);
    

    // Will render the view.ejs file in the views 
    // directory and replace any variables within 
    // the file with the values in the javascript
    // object
    res.render("view", {dateObj: dateObj, items: items});
});

app.post("/", function(req, res) {
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
}); 