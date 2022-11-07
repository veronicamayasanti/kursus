// 1. HTML frogments
/*const mhs = {
    nama: ' veronica wijaya',
    umur: 33,
    nrp: '321654',
    email: 'ver@gmail.com'
};


const el = `<div class="mhs"'>
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nrp}</span>
    </div>`; */



// 2. Looping (mengulang data yang di dapatkan)
/*const mhs = [
    {
        nama: 'maya santi',
        email: 'mayas@gmail.com'
    },
    {
        nama: 'samantha',
        email: 'thata@gmail.com'
    },

    {
        nama: 'geonathan',
        email: 'geot@gmail.com'
    }
];


const el = `<div class="mhs"> 
    ${mhs.map(m => `<ul>
    <li>${m.nama}</li>
    <li>${m.email}</li>
    </ul>`).join('')}
</div>`; */



// 3. conditional
//ternary
/*const lagu = {
    judul: ' kau adalah',
    penyanyai: 'rossa',
    feat: 'afgan'
}

const el = `<div class="lagu">
        <ul>
        <li>${lagu.penyanyai}</li>
        <li>${lagu.judul} ${lagu.feat ? `(feat.${lagu.feat})` : ''}</li>
        </ul>
</div>`; */


//4. nested
//html frogments bersarang

const mhs = { //berupa object
    nama: 'veronica',
    semester: 5,
    mataKuliah: [ //properti mataKuliah bertype Array
        'rekayasa web',
        'makatuliah ke2',
        'makatuliah ke3',
        'makatuliah ke4'
    ]
};

function cetakMatakuliah(mataKuliah) {
    return `
    <ol>
    ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
    `;
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">${mhs.semester}<span>
    <h4>Mata Kuliah : </h4>
    ${cetakMatakuliah(mhs.mataKuliah)}
    </div>`;


document.body.innerHTML = el;