const express = require("express");
const app = express();
app.use(express.urlencoded());
app.use(express.static("public"));

// Sets ejs as the template engine
// The view engine will default look into the
// views folder to look for any files we
// want to render
app.set("view engine", "ejs");


let items = ["Gym"];

app.get("/", function(req, res) {
    let date  = new Date();
    let options = {
        weekday : "long",
        month : "long",
        day : "numeric" 
    }
    let dateObj = date.toLocaleDateString("en-US", options);
    

    // Will render the view.ejs file in the views 
    // directory and replace any variables within 
    // the file with the values in the javascript
    // object
    res.render("view", {dateObj: dateObj, items: items});
});


app.post("/", function(req, res) {
    let item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
}); 