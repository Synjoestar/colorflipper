/**
 * Array berisi daftar warna yang akan digunakan untuk mengubah warna latar belakang.
 * @type {string[]}
 */
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

/**
 * Tombol yang akan digunakan untuk memicu perubahan warna latar belakang.
 * @type {HTMLElement}
 */
const btn = document.getElementById("btn");

/**
 * Elemen teks yang akan menampilkan warna latar belakang yang dipilih.
 * @type {HTMLElement}
 */
const color = document.querySelector(".color");

/**
 * Menambahkan event listener ke tombol "btn" untuk mengubah warna latar belakang
 * dan menampilkan warna yang dipilih pada elemen teks.
 */
btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber(); // Mendapatkan nomor acak
  document.body.style.backgroundColor = colors[randomNumber]; // Mengubah warna latar belakang
  color.textContent = colors[randomNumber]; // Menampilkan warna yang dipilih
});

/**
 * Menghasilkan angka acak antara 0 hingga panjang array `colors` - 1.
 * @returns {number} Nomor acak yang dihasilkan.
 */
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
