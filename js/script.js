function replaceNama() {
    let nama = prompt("Siapakah nama anda?", "");
    document.getElementById("nama").innerHTML = nama
}

document.getElementById('tombol').addEventListener("click", function() {
    replaceNama();
})