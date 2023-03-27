import dns from "dns";

function callback(error, ip) {
    console.log(ip);
}

dns.lookup("www.programmerzamannow.com", callback);
