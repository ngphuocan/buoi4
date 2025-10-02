let score = +prompt("Nhập điểm (0-100):");
switch (true) {
  case score < 0 || score > 100 || isNaN(score):
    alert("Điểm sai");
    break;
  case score >= 90:
    alert("Giỏi");
    break;
  case score >= 70:
    alert("Khá");
    break;
  case score >= 50:
    alert("Trung bình");
    break;
  default:
    alert("Yếu");
}
