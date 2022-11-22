// Kadang kita hanya butuh menggunakan kondisi sederhana di if statement, seperti hanya menggunakan perbandingan ==
// Switch adalah statement percabangan yang sama dengan if, namun  lebih sederhana cara pembuatannya
// Kondisi di switch statement hanya untuk perbandingan ==

const nilai = "A";
switch (nilai){
    case "A":
        document.writeln(`<p>wow anda lulus dengan </p>`);
        break;
    case "B":
    case "C":
        document.writeln(`<br>Anda lulus`);
        break;
        case "D":
         document.writeln(`<br>Anda tidak lulus`);
         break;
    default:    
        document.writeln(`<br>Anda salah jurusan`);
}