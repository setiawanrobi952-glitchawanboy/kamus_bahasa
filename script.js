// 1. Definisikan Data Kamus
// Kita menggunakan 'object' JavaScript sebagai database sederhana.
// 'key' (sebelah kiri) adalah bahasa Indonesia.
// 'value' (sebelah kanan) adalah bahasa Inggris.
const kamusData = {
    "kucing": "Cat",
    "anjing": "Dog",
    "rumah": "House",
    "buku": "Book",
    "meja": "Table",
    "kursi": "Chair",
    "makan": "Eat",
    "minum": "Drink",
    "selamat pagi": "Good morning",
    "terima kasih": "Thank you",
    "maaf": "Sorry",
    "merah": "Red",
    "biru": "Blue",
    "hijau": "Green"
    // Anda bisa tambahkan ribuan kata lagi di sini
};

// 2. Ambil Elemen HTML
// Kita 'tangkap' elemen-elemen dari HTML agar bisa dimanipulasi
const inputKata = document.getElementById("inputKata");
const tombolCari = document.getElementById("tombolCari");
const areaHasil = document.getElementById("areaHasil");

// 3. Buat Fungsi untuk Menerjemahkan
function terjemahkan() {
    // Ambil teks dari kotak input, ubah ke huruf kecil, dan hapus spasi di awal/akhir
    const kata = inputKata.value.toLowerCase().trim();

    // Periksa apakah input kosong
    if (kata === "") {
        areaHasil.innerHTML = `<p class="error">Silakan masukkan sebuah kata.</p>`;
        return; // Hentikan fungsi
    }

    // 4. Logika Pencarian
    if (kamusData[kata]) {
        // Jika kata DITEMUKAN di dalam objek kamusData
        // Tampilkan terjemahannya di areaHasil
        areaHasil.innerHTML = `<p class="sukses">${kamusData[kata]}</p>`;
    } else {
        // Jika kata TIDAK DITEMUKAN
        // Tampilkan pesan error
        areaHasil.innerHTML = `<p class="error">Kata tidak ditemukan dalam kamus.</p>`;
    }
}

// 5. Tambahkan 'Event Listener' (Pendengar Aksi)
// Jalankan fungsi 'terjemahkan' ketika tombolCari di-klik
tombolCari.addEventListener("click", terjemahkan);

// Bonus: Jalankan fungsi 'terjemahkan' jika pengguna menekan tombol "Enter"
inputKata.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        terjemahkan();
    }
});
