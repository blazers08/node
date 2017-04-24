var express=require("express");
var app=express(); //產生 Express Application 物件

app.get("/", function(req, res){
	res.send("Hello <b>World</b>");
});

app.listen(3000, function(){
	console.log("Server success at http://127.0.0.1:3000/");
});

app.get("/mypath", function(req, res){
	res.send("this is my path");
});