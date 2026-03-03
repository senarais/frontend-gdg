/* ==========================================================================
TUGAS PERTEMUAN 5: JS LANJUTAN & DOM MANIPULATION
==========================================================================
Tujuan: Menghubungkan data ke HTML dan menangani aksi user (Event).
Output: Perubahan langsung pada tampilan website.
*/

// TODO 1: Object & Array
// Wajib ada:
// - 1 object 'profile' yang berisi key: name (String), hardSkills (Array of Strings), dan softSkills (Array of Strings)
// - Gunakan document.querySelector() untuk mengambil id="heroName"
// - Ubah teksnya (textContent) menjadi nilai dari 'profile.name'
const profile = {
    name: "Daibi",
    hardSkills: ["ReactJS", "TailwindCSS", "TypeScript"],
    softSkills: ["Critical Thinking", "Communication", "Leadership"],
};
const heroName = document.querySelector("#heroName");
heroName.textContent = profile.name;

// TODO 2: Loop & Create Element
// Wajib ada:
// - Ambil elemen kontainer untuk daftar hard skill dan soft skill
// - Gunakan forEach() untuk melooping array 'profile.hardSkill'
// - Di dalam loop:
//   * Buat elemen <li> baru
//   * Isi teks <li> dengan nama skill
//   * Masukkan elemen tersebut ke kontainer
// - Lakukan hal yang sama untuk kontainer daftar soft skill
const hardSkillContainer = document.querySelector("#hard-skill-container");
const softSkillContainer = document.querySelector("#soft-skill-container");

profile.hardSkills.forEach((skill) => {
    const li = document.createElement("li");
    li.textContent = skill;
    hardSkillContainer.appendChild(li);
});

profile.softSkills.forEach((skill) => {
    const li = document.createElement("li");
    li.textContent = skill;
    softSkillContainer.appendChild(li);
});

// TODO 3: Event Handling
// Wajib ada:
// - Tambahkan addEventListener("submit", ...) pada id="contactForm"
// - Gunakan event.preventDefault() agar form tidak melakukan reload
// - Ambil nilai dari input nama, lalu tampilkan alert: "Terima kasih [nama] sudah menghubungi saya!"
const contactForm = document.querySelector('#contactForm');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const input_nama = document.querySelector('#nama').value;
    alert(`Terima kasih ${input_nama} sudah menghubungi saya!`);
})