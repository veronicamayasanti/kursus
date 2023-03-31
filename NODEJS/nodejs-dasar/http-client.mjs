import https from "https";

const url = "https://webhook.site/6adebd79-4f84-4fc6-8e91-1b0534b5248e";
const request = https.request(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}, function (response){
    response.addListener("data", function(data) {
        console.log(`receive : ${data.toString()}`);
    })
});


const body = JSON.stringify({
    firstName: "maya",
    lastName: "wijaya",
})

request.write(body);
request.end();