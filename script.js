// Ambil nilai dari input
function hitung(choose) {
    var nilai1 = parseFloat(document.getElementById('nilai1').value);
    var nilai2 = parseFloat(document.getElementById('nilai2').value);
    if (!isNaN(nilai1) && !isNaN(nilai2)) {

        // Jumlahkan atau kurangkan nilai
        var hasil = choose === "tambah" ? nilai1 + nilai2 : nilai1 - nilai2;

        // Tampilkan hasil
        document.getElementById("hasil").innerHTML = "Hasil " + choose + " : " + hasil;
    } else {
        document.getElementById("hasil").innerHTML = "Masukkan angka yang valid";
    }
}

document.getElementById('tambah').addEventListener('click', function () {
    hitung('tambah');
});

document.getElementById('kurang').addEventListener('click', function () {
    hitung('kurang');
});
