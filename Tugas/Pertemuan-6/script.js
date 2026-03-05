const profile = {
    name: "Daibi",
    hardSkills: ["ReactJS", "TailwindCSS", "TypeScript"],
    softSkills: ["Critical Thinking", "Communication", "Leadership"],
};
const heroName = document.querySelector("#heroName");
heroName.textContent = profile.name;

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

const contactForm = document.querySelector('#contactForm');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const input_nama = document.querySelector('#nama').value;
    alert(`Terima kasih ${input_nama} sudah menghubungi saya!`);
})

/* ==========================================================================
TUGAS PERTEMUAN 6: FETCH API
==========================================================================
Tujuan: Mengambil data dari API dan menampilkannya ke halaman web.
*/

// TODO 1
// Ambil elemen:
// - #joke-text
// - #refresh-joke
// Kalian bisa sesuaiin sama id dari section di htmlnya yaa! 


// TODO 2
// Buat function bernama getJoke()
// Function ini harus:
// - Menggunakan fetch()
// - Mengambil data dari API:
//   https://v2.jokeapi.dev/joke/Programming
// - Mengubah response menjadi JSON


// TODO 3
// Setelah mendapatkan data dari API:
// Jika tipe joke adalah "single"
// tampilkan data.joke

// Jika tipe joke adalah "twopart"
// tampilkan:
// data.setup + data.delivery


// TODO 4
// Tampilkan hasil joke ke dalam elemen #joke-text


// TODO 5
// Tambahkan event click pada tombol #refresh-joke
// agar function getJoke() dipanggil lagi


// TODO 6
// Panggil function getJoke() saat halaman pertama kali dibuka