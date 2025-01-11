/**
 * Array berisi nilai-nilai yang digunakan untuk membentuk kode warna heksadesimal.
 * @type {(number|string)[]}
 */
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

/**
 * Tombol yang akan digunakan untuk memicu perubahan warna latar belakang.
 * @type {HTMLElement}
 */
const btn = document.getElementById("btn");

/**
 * Elemen teks yang akan menampilkan kode warna heksadesimal yang dipilih.
 * @type {HTMLElement}
 */
const color = document.querySelector(".color");

/**
 * Menambahkan event listener ke tombol "btn" untuk mengubah warna latar belakang
 * dan menampilkan kode warna heksadesimal pada elemen teks.
 */
btn.addEventListener("click", function () {
  let hexColor = "#"; // Inisialisasi kode warna heksadesimal
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()]; // Menambahkan karakter acak dari array hex
  }
  // console.log(hexColor);

  color.textContent = hexColor; // Menampilkan kode warna pada elemen teks
  document.body.style.backgroundColor = hexColor; // Mengubah warna latar belakang
});

/**
 * Menghasilkan angka acak antara 0 hingga panjang array `hex` - 1.
 * @returns {number} Nomor acak yang dihasilkan.
 */
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
