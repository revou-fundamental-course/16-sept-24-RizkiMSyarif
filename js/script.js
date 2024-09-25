function handleSubmit(event) {
    event.preventDefault();

    // Ambil nilai dari input form
    const name = document.getElementById("name").value.trim();
    const birthdayDate = document.getElementById("birthday-date").value;
    const genderMale = document.getElementById("male").checked;
    const genderFemale = document.getElementById("female").checked;
    const message = document.getElementById("message").value.trim();

    // Ambil elemen output untuk ditampilkan
    const outputName = document.getElementById("sender-full-name");
    const outputBirthdayDate = document.getElementById("sender-birthday-date");
    const outputGender = document.getElementById("sender-full-gender");
    const outputMessage = document.getElementById("sender-full-message");
    const currentTime = document.getElementById("current-time");

    // Set waktu sekarang
    const now = new Date();
    currentTime.textContent = now.toString();

    // Validasi input
    if (!name || !birthdayDate || (!genderMale && !genderFemale) || !message) {
        alert("Semua field harus diisi.");
        return;
    }

    // Set hasil output
    outputName.textContent = name;
    outputBirthdayDate.textContent = birthdayDate;
    outputGender.textContent = genderMale ? "Laki-laki" : "Perempuan";
    outputMessage.textContent = message;
}
