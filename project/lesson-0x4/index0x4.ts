// interface đầu tiên

interface obj { 
    name: string,
    age: number,
    gender: boolean,
} // đây là interface với các properties đã đc gán data type sẵn

let user: obj; // user copy các properties của obj copy về data type properties

user = {
    name: "ho van tien",
    age: 20,
    gender: true,
}

console.log(">>> check user:", user);

// interface giúp vc tạo các object đơn giản hơn


// Optional Properties
// với 1 số properties ko cần dùng đến có thể thêm "?" để ko cần nó.

interface obj_2 { 
    name: string,
    age: number,
    gender?: boolean, // gender là Optional Properties
} 

let user_2: obj_2;

user_2 = {
    name: "ho van tien",
    age: 20,
    // ko bắt buộc phải có property gender
}

console.log(">>> check user2:", user_2);

// Readonly properties
// có 1 số properties ko sửa đc trong suốt dòng chạy của code

interface Point {
    readonly x: number;
    readonly y: number;
}

let a: Point = { x: 10, y: 20 }; // và các biến x, y chỉ đc đọc và ko thể thay thế
// a.x = 20 // Sẽ có lỗi

let array: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = array; // ReadonlyArray chuyển đổi mảng array thành array readonly
// các phẩn từ trong array sẽ ko còn đc thay thế.
// ReadonlyArray<T> nhận vào kiểu dữ liệu của mảng cần chuyển đổi

// ro[0] = 1 // sẽ phát sinh lỗi

array = ro as number[];// chuyển đổi lại

// Function Types
interface SearchFunc {
    (source: string, subString: string): boolean;
}
  
let mySearch: SearchFunc;
 
mySearch = function (source: string, subString: string): boolean { // ko cần đùng chính xác các params
  let result = source.search(subString);
  return result > -1;
};