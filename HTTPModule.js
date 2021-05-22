
// 🔗https://nodejs.org/api/http.html/

// HTTP Module is use to create networking applications

import http from "http";

// Creating Server 
// This server is a event emitter acquiring all its capablity 
const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.write('Server Created Successfully ');
        res.end();
    }
});

server.listen(3000);
console.log("listening on port 3000.....");