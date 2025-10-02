let input, age;
 input = prompt("Nhập tuổi của bạn:");
 age = parseInt(input);
if (isNaN(age) || age < 0) {
  alert("Nhập số: ");
} else {
  if (age < 18) {
    alert("Trẻ em");
  } else if (age >= 18 && age <= 30) {
    alert("Thanh niên");
  } else if (age >= 31 && age <= 50) {
    alert("Trung niên");
  } else {
    alert("Cao niên");
  }
}
