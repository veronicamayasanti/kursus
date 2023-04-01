import http from "http";

const server = http.createServer((request, Response) => {
    
    console.log(request.method);
    console.log(request.url);
    
    if(request.method === "POST"){
        request.addListener("data", (data) => {
            Response.setHeader("Content-type", "application/json");
            Response.write(data);
            Response.end();
        })
    }else{
        if(request.url === "/maya"){
        Response.write("Hello World");
        } else {
        Response.write("Hello HTTP Server");
        }
        Response.end();
    }

});

server.listen(3000);

