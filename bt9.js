let age, admin;
age = parseInt(prompt("Nhập tuổi:"));
role = prompt("Nhập vai trò (admin/user/guest):").toLowerCase();
if (role === "admin" || (role === "user" && age >= 18)) {
  console.log("Được truy cập");
} else {
  console.log("Không được truy cập");
}
