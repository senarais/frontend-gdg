/* ==========================================================================
TUGAS PERTEMUAN 5: JS LANJUTAN & DOM MANIPULATION
==========================================================================
Tujuan: Menghubungkan data ke HTML dan menangani aksi user (Event).
Output: Perubahan langsung pada tampilan website.
*/

// TODO 4: Object & Array 
// Wajib ada:
// - 1 object 'profile' yang berisi key: name (String) dan skills (Array of Strings)
// - Gunakan document.querySelector() untuk mengambil id="heroName"
// - Ubah teksnya (textContent) menjadi nilai dari 'profile.name'


// TODO 5: Loop & Create Element 
// Wajib ada:
// - Ambil elemen kontainer untuk daftar skill (misal: <ul> atau <div>)
// - Gunakan forEach() untuk melooping array 'profile.skills'
// - Di dalam loop:
//   * Buat elemen <li> baru dengan document.createElement('li')
//   * Isi teks <li> dengan nama skill
//   * Masukkan elemen tersebut ke kontainer menggunakan appendChild()


// TODO 6: Event Handling 
// Wajib ada:
// - Tambahkan addEventListener("submit", ...) pada id="contactForm"
// - Gunakan event.preventDefault() agar form tidak melakukan reload
// - Ambil nilai dari input nama, lalu tampilkan alert: "Terima kasih [nama] sudah menghubungi saya!"