
/*
    Node.js 
*/


const http = require('http')
let data={
    Name:'Arjun thakur',
    Batch:'EA18',
    Status:'Active'
}

const server=http.createServer((req,res)=>{
    if(req.method === 'GET' && req.url==='/'){
        res.write(`<body style='text-align:center'><h1>Welcome to Our Server Home.</h1><h4>Node. js is a single-threaded, open-source, cross-platform runtime environment for building fast and scalable server-side and networking applications. It runs on the V8 JavaScript runtime engine, and it uses event-driven, non-blocking I/O architecture, which makes it efficient and suitable for real-time applications.</h4> <h1><a href='./about'>JSON Page</a></h1></body>`)
        res.end()
    }else if(req.method === 'GET' && req.url==='/about'){
        res.write(`<body style='text-align:center'><h1><a href='/contact'>Contact Page</a></h1></body>`)
        res.write(JSON.stringify(data))
        res.end()
    }else if(req.method === 'GET' && req.url==='/contact'){
        res.write(`<body style='text-align:center'><h1>Contact Server. <br/><a href='/'>Home</a></h1><body/>`)
        res.end()
    }else{
        res.writeHead(404)          // Assign Error or Status Code
        res.end('Error')
    }
});

server.listen(1000,()=>{
    console.log('http://localhost:1000/')
})
