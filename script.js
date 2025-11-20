// 1. Definisikan Data Kamus
// Kita menggunakan 'object' JavaScript sebagai database sederhana.
// 'key' (sebelah kiri) adalah bahasa Indonesia.
// 'value' (sebelah kanan) adalah bahasa Inggris.
const kamusData = {
    // Angka
    "satu": "one",
    "dua": "two",
    "tiga": "three",
    "empat": "four",
    "lima": "five",
    "enam": "six",
    "tujuh": "seven",
    "delapan": "eight",
    "sembilan": "nine",
    "sepuluh": "ten",
    "sebelas": "eleven",
    "dua belas": "twelve",
    "seratus": "hundred",
    "seribu": "thousand",

    // Warna
    "merah": "red",
    "biru": "blue",
    "kuning": "yellow",
    "hijau": "green",
    "hitam": "black",
    "putih": "white",
    "coklat": "brown",
    "abu-abu": "gray",
    "ungu": "purple",
    "oranye": "orange",
    "emas": "gold",
    "perak": "silver",

    // Waktu
    "pagi": "morning",
    "siang": "afternoon",
    "sore": "evening",
    "malam": "night",
    "hari": "day",
    "minggu": "week",
    "bulan": "month",
    "tahun": "year",
    "kemarin": "yesterday",
    "hari ini": "today",
    "besok": "tomorrow",

    // Keluarga
    "ayah": "father",
    "ibu": "mother",
    "anak": "child",
    "saudara": "sibling",
    "kakak": "older sibling",
    "adik": "younger sibling",
    "kakek": "grandfather",
    "nenek": "grandmother",
    "paman": "uncle",
    "bibi": "aunt",
    "sepupu": "cousin",

    // Pekerjaan
    "guru": "teacher",
    "murid": "student",
    "dokter": "doctor",
    "perawat": "nurse",
    "petani": "farmer",
    "nelayan": "fisherman",
    "polisi": "police",
    "tentara": "soldier",
    "pilot": "pilot",
    "pedagang": "merchant",
    "pekerja": "worker",
    "arsitek": "architect",
    "pengacara": "lawyer",
    "penulis": "writer",
    "aktor": "actor",
    "penyanyi": "singer",

    // Aktivitas
    "makan": "eat",
    "minum": "drink",
    "tidur": "sleep",
    "belajar": "study",
    "bermain": "play",
    "berlari": "run",
    "berjalan": "walk",
    "menulis": "write",
    "membaca": "read",
    "mendengar": "listen",
    "melihat": "see",
    "bekerja": "work",
    "memasak": "cook",
    "menyanyi": "sing",
    "menari": "dance",
    "berenang": "swim",
    "berbicara": "talk",
    "membeli": "buy",
    "menjual": "sell",
    "membuka": "open",
    "menutup": "close",
    "membawa": "bring",
    "memberi": "give",
    "menerima": "receive",

    // Sifat
    "besar": "big",
    "kecil": "small",
    "panjang": "long",
    "pendek": "short",
    "cantik": "beautiful",
    "jelek": "ugly",
    "baik": "good",
    "buruk": "bad",
    "cepat": "fast",
    "lambat": "slow",
    "dingin": "cold",
    "panas": "hot",
    "baru": "new",
    "lama": "old",
    "mudah": "easy",

    // Frasa umum
    "halo": "hello",
    "selamat pagi": "good morning",
    "selamat siang": "good afternoon",
    "selamat malam": "good evening",
    "apa kabar": "how are you",
    "terima kasih": "thank you",
    "sama-sama": "you are welcome",
    "maaf": "sorry",
    "tolong": "please",
    "ya": "yes",
    "tidak": "no",
    "selamat tinggal": "goodbye",
    "sampai jumpa": "see you"
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
