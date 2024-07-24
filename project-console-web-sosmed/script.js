function Post(postType, totalShare = 0, likedBy = [], comments = []) {
  this.postType = postType;
  this.likedBy = likedBy;
  this.comments = comments;
  this.totalShare = totalShare;
}
// netizen like
Post.prototype.netizenLike = function (viewerUserName) {
  if (this.likedBy.includes(viewerUserName)) {
    this.likedBy.pop(viewerUserName);
    return "Post Kamu berkurang Like";
  }
  this.likedBy.push(viewerUserName);
  return "Post Kamu mendapatkan Like dari " + viewerUserName;
};
// netizen berkomentar
Post.prototype.netizenComment = function (viewerUserName, comment) {
  // jika belum ada user yg berkomentar
  if (this.comments.length == 0) {
    this.comments.push({ userName: viewerUserName, comments: [comment] });
    return "Sudah Menambahkan User Pertama yang Berkomentar";
  }
  // Apakah User sudah berkomentar sebelumnya
  for (const iterator of this.comments) {
    if (iterator.userName.includes(viewerUserName)) {
      iterator.comments.push(comment);
      return iterator.userName + " telah Menambahkan Komentar";
    }
  }
  this.comments.push({ userName: viewerUserName, comments: [comment] });
  return "Sudah Menambahkan User Terbaru yang Berkomentar";
};
let politic = new Post("Politic");
