const WebSocket = require("ws");

const wss = new WebSocket.Server({port: 8082});

wss.on("connection",ws =>{
    console.log("New client connected to HiCoders server");

    ws.on("message",data=>{
        console.log(`client has sent us message: ${data}`);

        ws.send(data.toUpperCase());

    });
    
    ws.on("close",()=>{
        console.log("Client has disconnected from HiCoders Server");
    });
});