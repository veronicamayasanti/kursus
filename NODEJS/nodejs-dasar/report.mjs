// report merupakan fitur yang terdapat di NodeJS untuk membuat laporan secara otomatis dalam file ketika sesuatu terjadi pada aplikasi NodeJS

import process from "process";

process.report.reportOnFatalError =true;
process.report.reportOnSignal =true;
process.report.reportOnUncaughtException =true;
process.report.filename ="report.json";

function sampleError(){
    throw new Error("ups")
}

sampleError()