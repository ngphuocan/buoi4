let temp = +prompt("Nhập nhiệt độ:");
let isRain = prompt("Có mưa không? (true/false)") === "true";
if (isRain) {
  alert("Ở nhà");
} else {
  if (temp > 25) {
    alert("Đi chơi");
  } else {
    alert("Ra ngoài nhưng mang áo khoác");
  }
}
