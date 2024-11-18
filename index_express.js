const express = require('express'); //express를 임포트? 한다
const app = express();
const port = 3002;

app.use("/main",express.static(__dirname+"/public")); //메인에 행당하는 경로 (디렉토리네임)     가상경로와 폴더매칭  스프링에서 리소시스를 사용했을때 처럼



app.get("/",   
    (req,res)=>{   // 겟방식으로 가상경로띄우기
        res.sendFile(__dirname+"/index.html");
    }
);
// app.get("/",(req.res)=>){res.sendFile(__dirname+"/index.html");
// };

// function 함수이름(req,res){
// res.sendRedfirect(경로);
// return;
// }  위에와 같음




app.listen(port,()=>{
    console.log("Listen : ${port}");

});





