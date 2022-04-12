const express = require("express");
const https = require("https");
const bodyParser = require("body-parser")
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req,res){
    const query = req.body.cityName;
    const apiKey = "1229ecd881552e7cf30f159068ddd85f";
    const unit = "metric"

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query +"&appid=" + apiKey +"&units=" + unit;
    https.get(url, function(response) {
        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            res.sendFile(__dirname + "/result.html");
        })
    })
})


app.listen(3000, function() {
    console.log("server is running on port 3000.")
})




