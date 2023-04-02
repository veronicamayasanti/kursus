// dengan library bernama cluster bisa menjalankan beberapa process NodeJS secara sekaligus

import cluster from "cluster";
import os from "os";
import process from "process";
import http, { request } from "http"

if(cluster.isPrimary){
    // jalankan worker
    console.log(`primary : ${process.pid}`);
    for(let i=0; i< os.cpus().length; i++) {
        cluster.fork();
    }
    cluster.addListener("exit", (Worker) => {
        console.log(`worker - $(worker.id) is exit`);
        cluster.fork();
        
    })
}


if(cluster.isWorker){
    console.log(`worker : ${process.pid}`);

    const server = http.createServer((request, Response) => {
        Response.write(`response from process ${process.pid}`);
        Response.end();
        process.exit();
    })
    server.listen(3000);
}

