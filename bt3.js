let input ,year;
 input = prompt("Nhập một năm:");
 year = parseInt(input);
if (isNaN(year) || year <= 0) {
  alert("Vui lòng nhập số:");
} else {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    alert("Năm nhuận");
  } else {
    alert("Không phải năm nhuận");
  }
}
