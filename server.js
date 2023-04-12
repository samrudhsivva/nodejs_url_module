var url=require("url");
var http=require("http");
var fs=require("fs");
http.createServer( function(req,res){
    
    var q=url.parse(req.url,true);
    var filename="."+q.pathname;

    console.log("file is"+filename);
    fs.readFile(filename,(err,data)=>
    {
        if (err) throw err;
        res.write(data);
    })
}).listen(3000);
