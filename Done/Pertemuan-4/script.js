/* ==========================================================================
TUGAS PERTEMUAN 4: DASAR-DASAR JAVASCRIPT
==========================================================================
Tujuan: Mengolah data profil menggunakan variabel, operator, dan function.
Output: Muncul di Console (Klik Kanan -> Inspect -> Console).
*/

// TODO I: Hubungkan file script.js ke HTML

// TODO 1: Variabel & Tipe Data 
// Wajib ada:
// - 1 variabel const untuk 'nama' (String)
// - 1 variabel let untuk 'tahunLahir' (Number)
// - 1 variabel let untuk 'isStudent' (Boolean)
const nama = "Daibi";
let tahunLahir = 1000;
const isStudent = true;

// TODO 2: Operator & Template Literals 
// Wajib ada:
// - Variabel const untuk 'tahunSekarang'
// - Variabel 'usia' yang menghitung: 'tahunSekarang' dikurangi 'tahunLahir'
// - Gunakan console.log() dan Template Literals untuk menampilkan pesan:
//   "Halo, saya [nama]. Usia saya saat ini adalah [usia] tahun."
const tahunSekarang = new Date().getFullYear();
const usia = tahunSekarang - tahunLahir;

console.log(`Halo, saya ${nama}. Usia saya saat ini adalah ${usia} tahun.`);

// TODO 3: Function & Conditional 
// Wajib ada:
// - 1 function bernama 'cekStatus' yang menerima parameter 'usia'
// - Di dalam function, gunakan Conditional
//   * Jika usia >= 30, return "Sudah Dewasa"
//   * Jika usia diantara 18 dan 30, return "Masih Muda"
//   * Jika usia < 18, return "Aku Remaja"
// - Panggil function tersebut dan tampilkan hasilnya di console
const cekStatus = (usia) => {
    if (usia >= 30) {
        return "Sudah Dewasa";
    } else if (usia >= 18 && usia < 30) {
        return "Masih Muda";
    } else {
        return "Aku Remaja"
    }
}

const result = cekStatus(30);
console.log(result);