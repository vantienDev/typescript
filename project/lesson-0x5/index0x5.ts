// Enum
// Numeric enums
enum Direction {
    UP = 1,
    DOWN, // DOWN = 2
    LEFT, // LEFT = 3
    RIGHT // RIGHT = 4

    // Numeric enums có hỗ trợ auto-incremented
}

function _direction(direction: Direction): void { 
    console.log("Num of dirction: ", direction); 
}

_direction(Direction.UP) // num = 1

enum Direction2 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
    
    // String enums ko hỗ trợ auto-incremented
}
  
// enums có thể mix nhiều kiểu dữ liệu khác nhau.

// Reverse mappings
enum Enum {
    A,
  }
   
let a = Enum.A; // lấy giá trị của member đầu như là index
  console.log("a:", a);
  
// dùng index ấy để lấy ra tên của member ấy
let nameOfA = Enum[a]; // "A" 
console.log("nameOfA:", nameOfA);
  