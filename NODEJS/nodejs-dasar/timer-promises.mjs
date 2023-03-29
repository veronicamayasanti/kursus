import timers from "timers/promises";

    // console.log(new Date());
    // const name = await timers.setTimeout(5000, "maya");
    // console.log(new Date());
    // console.log(name);

    for await (const starTime of timers.setInterval(1000, "ignored")){
        console.log(`star time at ${new Date()}`);
    }
