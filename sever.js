const http = require("http");
const fs = require("fs").promises;

http.createServer(async(req,res)=> {
  try {
    const data = await fs.readFile('./index.html');
    res.writeHead(200, {'content-Type':'text/html; charset=utf-8'});
    res.end(data);

  } catch(err) {
    console.error(err);
    res.writeHead(500, {'content-Type': 'text/plain; charset=utf-8'});
    res.end(err.message);
  }
})
.listen(2080, ()=>{
  console.log('2080번 포트에서 서버 대기 중')
})