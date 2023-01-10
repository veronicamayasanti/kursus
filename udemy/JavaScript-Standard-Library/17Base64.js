// base64 merupakan binary to text encoding, representasi binary data dalam format string
// Base64 merupakan format text data yang aman untuk dikirimkan ke web
// Base64 merupakan encoding yang biasanya digunakan ketika perlu mengirim data dari client ke server
// karena encoding Base64 merupakan text, oleh karena itu sangat aman digunakan pada query parameter URL atau text body dalam form

// Base64 Function
// btos(value) untuk encode ke base64 dari value
// atob(encoded) untuk decode dari base64 ke value


const original = "veronica&maya=wijaya";
console.log(original);

const encoded = btoa(original);
console.log(encoded);

const decoded = atob(encoded);
console.log(decoded);


