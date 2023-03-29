import net, { createConnection } from "net";

const client = net.createConnection( {
    port: 3000,
    host: "localhost"
});

client.addListener("data", (data) => {
    console.log(`receive data from server: ${data.toString()}`);
});

setInterval( () => {
    client.write( "veronica\r\n");
}, 2000)