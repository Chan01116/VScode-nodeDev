//console.log("react Hello World");
const http = require('http');  //http 모듈생성
http.createServer(  // http 모듈에서 서버생성
(req,res) =>{ //리퀘스트 리스폰스
res.statusCode=200; //성공이 잘됬다는것  연결 성공코드
res.setHeader('Content-Type','text/html;charset=utf8'); //컨텐츠타입
res.end('Chan Hi 한글은 잘써지나요');

}
).listen(3000); 