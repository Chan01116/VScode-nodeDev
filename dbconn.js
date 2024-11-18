const mysql = require('mysql');  // mysql모듈 로드
const conn_info = {
    host : '127.0.0.1', //내자신 컴퓨터에서 랜카드로 가는 주소 = localhost
    port : '3306',  //mysql은 기본적으로 3306을 씀
    user : 'root',
    password : '1234',
    database : 'aws0822'

};

module.exports={
    init : function(){
        return mysql.createConnection(conn_info);

    },
    connect : function(conn){
        conn.connect(function(err){
            if(err){
                console.error("오류: "+err);
            }else{
                console.log("success!");
            }
        });
    }
} //트라이 캐치와 비슷
