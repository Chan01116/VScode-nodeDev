const express = require('express'); //express를 임포트? 한다
const app = express();
const port = 3003;
const ejs = require("ejs"); //embeded javascript 템플릿 사용


//DB접속
var dbconn = require(__dirname+"/dbconn.js");
var conn = dbconn.init();
dbconn.connect(conn); //에러가 나는지 안나는지 체크

//body 객체안에 데이터를 추출한다
var bodyParser = require("body-parser"); //데이터 추출 파서 사용
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));  //글씨가 깨지지 않도록

//화면 엔진으로 ejs를 사용하겠다 
app.set("views engine","ejs");
//ejs가 모여있는 폴더위치를 지정할수 있다
app.set("views",__dirname+"/views");


app.use("/style",express.static(__dirname+"/style")); //메인에 행당하는 경로 (디렉토리네임)     가상경로와 폴더매칭  스프링에서 리소시스를 사용했을때 처럼



app.get("/",   
    (req,res)=>{   // 겟방식으로 가상경로띄우기
        res.sendFile(__dirname+"/");
    }
);

app.get("/boardWriteTemplate",   
    (req,res)=>{   
        res.render("boardWrite.ejs");
    }
); // send파일이 아니라 렌더링을 하는 


app.post("/boardWriteAction",function(req,res){

    var body = req.body;
    console .log("body 객체값은?");
    console .log(body);

    var sql = "INSERT INTO board(originbidx,depth,level_,SUBJECT,contents,writer,password,midx) value(null,0,0,?,?,?,?,1001)";

    var sql2 = "update board set originbidx = (SELECT A.maxbidx from (select max(bidx) as maxbidx from board)A)where bidx= (SELECT A.maxbidx from (select max(bidx) as maxbidx from board)A)";
    
    var params = [body.subject,body.writer,body.contents,body.password]
    console.log(sql);

    
    conn.query(sql,params,function(err,results,fields){
        if(err){
            console.log(err);
        }
        console.log(results);
    });
    
    conn.query(sql2,params,function(err,results,fields){
        if(err){
            console.log(err);
        }
        console.log(results);
    });
    res.redirect("/");


});





// app.get("/",(req.res)=>){res.sendFile(__dirname+"/index.html");
// };

// function 함수이름(req,res){
// res.sendRedfirect(경로);
// return;
// }  위에와 같음




app.listen(port,()=>{
    console.log("server running~~~~");

});





