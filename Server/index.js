var express = require("express");
var app = express();
app.use(express.static("./public"));     // chay vao ./public tin file 
app.set("view engine","ejs");            // set ejs chay view
app.set("views","./views");

var server = require("http").Server(app);
var io = require("socket.io").listen(server);
server.listen(3000,function(){
	console.log("logtest");
	io.on("connection", function(socket){
		console.log("Co nguoi ket noi : "+ socket.id);
	});	
});


app.get("/",function(req,res) {
	res.render("trangchu")
})
