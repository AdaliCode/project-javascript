function Album(name, singer, songs = [], songDurationTotalInSec = 0) {
  this.name = name;
  this.singer = singer;
  this.songs = songs;
  this.songDurationTotalInSec = songDurationTotalInSec;
}
Album.prototype.songAdd = function (songTitle, songDuration) {
  if (this.songs.includes(songTitle)) {
    return "Tolong masukkan Judul Lagu yang berbeda";
  }
  this.songs.push(songTitle);

  // ubah songDuration jadi detik
  const parts = songDuration.split(":").map((part) => parseFloat(part));
  songDurationInSec = parts[0] * 60 + parts[1];
  this.songDurationTotalInSec += songDurationInSec;

  return `telah menambahkan Lagu yang berjudul ${songTitle} dengan Durasi ${songDuration}.`;
};
Album.prototype.viewDurationTotal = function () {
  // ubah formatnya jadi jam menit detik
  const jam = Math.floor(this.songDurationTotalInSec / 3600);
  this.songDurationTotalInSec = this.songDurationTotalInSec - jam * 3600;
  const menit = Math.floor(this.songDurationTotalInSec / 60);
  return `Total Durasi Lagu pada Album ${this.name} adalah ${jam} Jam dan ${menit} Menit.`;
};
let v = new Album("V", "Maroon 5");
