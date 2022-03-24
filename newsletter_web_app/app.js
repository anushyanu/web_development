const express =require("express");
const bodyparser=require("body-parser");
const request=require("request");
const https = require("https");

const app =express();

app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html")
});

app.post("/",function(req,res){

  const firstname = req.body.fName;
  const lastname = req.body.lName;
  const email = req.body.email;

  const data = {
    members : [
      {
        email_address : email,
        status : "subscribed",
        merge_fields :{
          FNAME : firstname,
          LNAME : lastname,
        }

      }
    ]
  };


  const jsondata = JSON.stringify(data);
  const url = "https://us14.api.mailchimp.com/3.0/68ff664b30";
  //const url= "https://us14.api.mailchimp.com/3.0/lists/68ff664b30
  //'https://us14.api.mailchimp.com/3.0/';


  const options={
    method:"POST",
    Auth:"anushya:39570bc2553872e9032f3926f6ddc930-us14"
  }


  const request = https.request(url, options, function(response){
    response.on("data",function(data){
      console.log(JSON.parse(data));
    })
  })
  request.write(jsondata);
  request.end();
});
//api key
//98de958228484ca9dfdd8ed1d18e40a1-us14

// IDEA: 98a73a49b7.
app.listen(3000,function(){
  console.log("server is running");
});
