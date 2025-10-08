let n, input;
do {
  input = prompt("Nhập một số nguyên:");
  n = parseInt(input);
  if (isNaN(n)) {
    alert("Bạn phải nhập một số nguyên");
  }
} while (isNaN(n));
if (n > 0) {
  console.log("Số dương");
} else if (n < 0) {
  console.log("Số âm");
} else {
  console.log("Số zero");
}
