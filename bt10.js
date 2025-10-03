let value,unit,celsius,fahrenheit;
 value = parseFloat(prompt("Nhập giá trị nhiệt độ:"));
 unit = prompt("Nhập đơn vị (celsius/fahrenheit):").toLowerCase();

switch (unit) {
  case "celsius":
    if (value > -273) {
       fahrenheit = (value * 9/5) + 32;
      console.log(`${fahrenheit.toFixed(2)} Fahrenheit`);
    } else {
      console.log("Giá trị Celsius không hợp lệ. Phải lớn hơn -273.");
    }
    break;

  case "fahrenheit":
     celsius = (value - 32) * 5/9;
    console.log(`${celsius.toFixed(2)} Celsius`);
    break;

  default:
    console.log("Đơn vị không hợp lệ. Vui lòng nhập 'celsius' hoặc 'fahrenheit'.");
}
