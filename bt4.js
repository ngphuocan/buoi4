let op, a, b, kq;
a = Number(prompt("Nhập số thứ nhất:"));
b = Number(prompt("Nhập số thứ hai:"));
op = prompt("Nhập toán tử (+, -, *, /):");
switch (op) {
  case "+":
    kq = a + b;
    break;
  case "-":
    kq = a - b;
    break;
  case "*":
    kq = a * b;
    break;
  case "/":
    kq = b !== 0 ? a / b : "Không thể chia cho 0";
    break;
  default:
    kq = "không hợp lệ";
}
alert("Kết quả= "+kq);
