const express = require("express");

const https = require("https");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
  const query = req.body.cityname;
  const apikey = "9f6ae6d82dde5c97083852e4a7adb6f9";
  const unit = "metrics";
  const url= "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid=" +apikey +"&units="+ unit ;

  https.get(url,function(response){
    console.log(response.statusCode);

    response.on("data",function(data){
      const weatherdata = JSON.parse(data);
      const temp = weatherdata.main.temp;
      const icon = weatherdata.weather[0].icon;
      const image = " http://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write("<p>Todays Weather </p>");
      res.write("<h1>The temperature in " + query + " is " + temp +  " degrees Celcius</h1>");
      res.write("<img src =" + image + ">");
      res.send()
    });
  });

})









//9f6ae6d82dde5c97083852e4a7adb6f9



app.listen(3000,function(){
  console.log("server is running");
})
