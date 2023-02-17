// type numbers

let num_1: number = 10;
let str_1: string = "hello, world"; // String

// - Ts nó có thể tự dự đoán đc kiểu dữ liệu thông qua giá trị.

let num_2 = 15; // ts tự tiên đoán num_2 là number
console.log(">>> Check num:", num_2 + num_1);

// kiểu Array type và tuple type
// Khai báo array

let array: string[] = ["Van", "Tien"] // khai báo mảng chỉ với giá trị string
// vì mảng chỉ chứa kiểu string nên ko thể push thêm kiểu gt khác ngoài string
// array.push(20) // lệnh này sẽ lỗi

let array_new: (string | number)[] = ["Van tien", 20]; // khai báo mảng vs kiểu string và number. Mix 2 kiểu data
array_new.push(40) // Ko báo lỗi

console.log(">>> Check array_new:",array_new);

// tuple type
// tuple nó rõ ràng về kiểu dữ liệu/số lượng/order
let tuple: [string, number] = ["hello", 2] // biến tuple nó gồm 2 value nên chỉ đc gán đc duy nhất 2 giá trị.

let tuple_2: [string] = ["test"] // biến tuple_2 chỉ chứa đc duy nhất 1 giá trị là string.

// tính order
// let tuple_3: [number, string, number] = ["string", "string", 20]; // phát sinh lỗi
// vì order đầu tiên là number nhưng giá trị đc gán là string

// Object
// cách khai báo.
let obj: {
    num: number,
    str: string,
} = {
    num: 1,
    str: "string"
}