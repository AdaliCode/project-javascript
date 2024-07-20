var produk = ["Kue Lumpur", undefined, "Kue Sus"];
var tambahProduk = function (namaProduk, produk) {
  if (produk.length == 0) {
    produk.push(namaProduk);
    return produk;
  } else {
    for (let i = 0; i < produk.length; i++) {
      if (produk[i] == undefined) {
        produk[i] = namaProduk;
        return produk;
      } else if (produk[i] == namaProduk) {
        console.log(namaProduk + " sudah ada di dalam slot");
        return produk;
      } else if (i == produk.length - 1) {
        produk.push(namaProduk);
        return produk;
      }
    }
  }
};

var jualProduk = function (namaProduk, produk) {
  // jika slot kosong
  //   tampilkan pesan bahwa slot kosong, dan
  //   tidak mungkin ada jual produk
  //   kembalikan isi array & keluar dari function
  // else
  //   telusuri seluruh slot dari awal
  //    jika produk sesuai
  //        hapus produk dengan mengubah namanya menjadi undefined
  //        kembalikan isi array & keluar dari function
  //    jika tidak ada nama yang sesuai
  //        tampilkan pesan kesalahannya
  //        kembalikan isi array & keluar dari function
};
