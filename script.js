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
  if (produk.length == 0) {
    console.log("Slot masih Kosong.");
    return produk;
  } else {
    for (let i = 0; i < produk.length; i++) {
      if (produk[i] == namaProduk) {
        produk[i] = undefined;
        return produk;
      } else if (i == produk.length - 1) {
        console.log(namaProduk + " tidak ada di dalam Slot Produk.");
        return produk;
      }
    }
  }
};
