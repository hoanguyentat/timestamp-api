var express = require("express");
var app = express();

app.get('/', function(req, res){
    res.end("This is home page!");
});

app.get('/:data', function(req, res){
    var x = req.params.data;
    // console.log(typeof(x));
    var y = new Date(x * 1000);
    console.log(y);
    if (y == "Invalid Date") {
        var tmp = new Date(x);
        
        y = (tmp.getTime())/1000;
        var response = {
            unix: y,
            natural: x
        }
    } else{
        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        console.log("unix");
        var response = {
            unix: x,
            natural: monthNames[y.getMonth()] + " " + y.getDate() + ', ' + y.getFullYear()
        }
    }
    res.send(JSON.stringify(response));
})
app.listen(8080, function(){
    console.log("Server is actived");
});