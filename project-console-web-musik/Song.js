function Song(title, singer, totalListened = 0) {
  this.title = title;
  this.singer = singer;
  this.totalListened = totalListened;
}
Song.prototype.addTotalListened = function (listenedCount) {
  this.totalListened += listenedCount;
  return `Lagu ${this.title} telah didengar sebanyak ${this.totalListened} kali!`;
};
let niscaya = new Song("Niscaya", "Bilal Indrajaya");
