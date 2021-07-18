exports.getDate = function() {
    const date  = new Date();
    const options = {
        weekday : "long",
        month : "long",
        day : "numeric" 
    }
    return dateObj = date.toLocaleDateString("en-US", options);
}

exports.getDay = function() {
    const date = new Date();
    const options = {  
        weekday : "long"
    }
    return day = date.toLocaleDateString("en-US", options);
}