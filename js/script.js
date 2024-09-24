//ini java
let nameInput = document.getElementById('name-input')

document.getElementById('kirim').addEventListener("click", function() {
    const nami = nameInput.value

    if (nama == "") {
        document.getElementById("error-name").innerHTML = "Nama tidak boleh kosong"
    } else {
        document.getElementById('nama').innerHTML = nami
    }

})