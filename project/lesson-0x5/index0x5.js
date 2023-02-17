// interface đầu tiên
var user; // user copy các properties của obj copy về data type properties
user = {
    name: "ho van tien",
    age: 20,
    gender: true
};
console.log(">>> check user:", user);
var user_2;
user_2 = {
    name: "ho van tien",
    age: 20
};
console.log(">>> check user2:", user_2);
var a = { x: 10, y: 20 }; // và các biến x, y chỉ đc đọc và ko thể thay thế
// a.x = 20 // Sẽ có lỗi
var array = [1, 2, 3, 4];
var ro = array; // ReadonlyArray chuyển đổi mảng array thành array readonly
// các phẩn từ trong array sẽ ko còn đc thay thế.
// ReadonlyArray<T> nhận vào kiểu dữ liệu của mảng cần chuyển đổi
// ro[0] = 1 // sẽ phát sinh lỗi
array = ro; // chuyển đổi lại
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
