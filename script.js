var menu = ["Kue Lumpur", undefined, "Kue Sus"];
var tambahProduk = function (namaProduk) {
  if (menu.length == 0) {
    menu.push(namaProduk);
    return menu;
  } else {
    for (let i = 0; i < menu.length; i++) {
      if (menu[i] == undefined) {
        menu[i] = namaProduk;
        return menu;
      } else if (menu[i] == namaProduk) {
        console.log(namaProduk + " sudah ada di dalam slot");
        return menu;
      } else if (i == menu.length - 1) {
        menu.push(namaProduk);
        return menu;
      }
    }
  }
};
var hapusProduk = function (namaProduk) {
  if (menu.length == 0) {
    console.log("Menu masih Kosong.");
    return menu;
  } else {
    for (let i = 0; i < menu.length; i++) {
      if (menu[i] == namaProduk) {
        menu[i] = undefined;
        return menu;
      } else if (i == menu.length - 1) {
        console.log(namaProduk + " tidak ada di Menu.");
        return menu;
      }
    }
  }
};
