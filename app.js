const express = require("express");
const app = express();
app.use(express.urlencoded());

// Sets ejs as the template engine
// The view engine will default look into the
// views folder to look for any files we
// want to render
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    var date  = new Date();
    var dayInt = date.getDay();
    var dayString = "";

    switch (dayInt) {
        case 0:
            dayString = "Sunday";
            break;
        case 1:
            dayString = "Monday";
            break;
        case 2:
            dayString = "Tuesday";
            break;
        case 3:
            dayString = "Wednesday";
            break;
        case 4:
            dayString = "Thursday";
            break;
        case 5:
            dayString = "Friday";
            break;
        case 6:
            dayString = "Saturday";
            break;
        default:
            console.log("What happenned here!!");


    }

    // Will render the view.ejs file in the views 
    // directory and replace any variables within 
    // the file with the values in the javascript
    // object
    res.render("view", {dayString: dayString});
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
}); 