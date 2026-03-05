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

async function getProgrammingJoke() {
    const jokeText = document.querySelector("#joke-text");
    const jokeContainer = document.querySelector("#joke-container");

    jokeText.textContent = "Sedang berpikir...";
    jokeText.classList.add("opacity-50");

    try {
        const response = await fetch("https://v2.jokeapi.dev/joke/Programming?safe-mode");
        
        if (!response.ok) throw new Error("Gagal mengambil data");

        const data = await response.json();

        if (data.type === "single") {
            jokeText.textContent = data.joke;
        } else {
            jokeText.innerHTML = `<strong>${data.setup}</strong> <br/> <span class="text-[#2563eb]">${data.delivery}</span>`;
        }

    } catch (error) {
        jokeText.textContent = "Yah, gagal ambil data, coba cek koneksi internetmu dah";
        console.error("Error Fetching:", error);
    } finally {
        jokeText.classList.remove("opacity-50");
    }
}

getProgrammingJoke();

const refreshBtn = document.querySelector("#refresh-joke");
refreshBtn.addEventListener("click", getProgrammingJoke);