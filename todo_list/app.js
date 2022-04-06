const express = require("express");

const bodyparser = require("body-parser");
const date = require(__dirname+"/date.js");

const app = express();

var items =["Do yoga","Meditate","Atomic habits"];
var workitems=[];

app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));




app.get("/", function(req, res) {

  let day = date.getdate();
  res.render('lists', {listtitle: day ,additems:items});
});

app.post("/",function(req,res){

  var item = req.body.newitem;
  if(req.body.list === "work"){
    workitems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }

});

app.get("/work",function(req,res){
  res.render("lists",{listtitle:"work",additems:workitems});


});









app.listen(3000, function() {
  console.log("server is running");
});
