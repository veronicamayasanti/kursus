// Tagged Template
/*const nama = 'veronica';
const umur = 30;

function coba(strings, ...values) {
    /*let result = '';
    strings.forEach((str, i) => {
        result += `${str}${values[i] || ''}`;
    });
    return result;  */

    //me
   /* return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}
    `, '');

}

const str = coba`hallo, nama saya ${nama}, saya ${umur} tahun.`; // tag tamplate 
console.log(str); */


// Highlight

const nama = 'maya wijaya';
const umur = 30;
const email = 'mayawijaya@gmail.com';

function highlight (strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">
    ${values[i] || ''}</span>`,'');
}

const str = highlight `hallo, nama saya ${nama}, saya ${umur} tahun, dan email saya adalah : ${email}.`;
document.body.innerHTML = str;