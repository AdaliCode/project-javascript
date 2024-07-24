function Menu(namaProduk, jumlahProduk, hargaJual, hasilJual) {
  this.namaProduk = namaProduk;
  this.jumlahProduk = jumlahProduk;
  this.hargaJual = hargaJual;
  this.hasilJual = hasilJual;
}
// kalau pelanggan beli
Menu.prototype.pelangganBeli = function (jumlahBeli) {
  if (jumlahBeli > this.jumlahProduk) {
    return "Jumlah Produk Kurang!";
  }
  this.hasilJual += this.hargaJual * jumlahBeli;
  this.jumlahProduk -= jumlahBeli;
  return "Selesai memproses produk";
};
// produknya expired
Menu.prototype.expired = function (jumlahProduk) {
  if (jumlahProduk > this.jumlahProduk) {
    return "Produknya tidak sebanyak itu!";
  }
  this.jumlahProduk -= jumlahProduk;
  return "Selesai memproses produk";
};
// tambah menu
// jalankan/run di console sesuai nama let nya
// contoh: kueLumpur;
// contoh: kueLumpur.hargaJual;
let kueLumpur = new Menu("Kue Lumpur", 10, 2500, 0);
