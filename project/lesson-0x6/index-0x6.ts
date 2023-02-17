let any: any = 10; // Biến với kiểu dữ liệu any

any = "any" // có thể lưu trữ kiểu string

console.log(any);

// --------------------------------------------

// Void

function test(text: string): void{ // fnc test ko cần trả về bất cứ giá trị nào
    console.log(text); 
}
test('text')

// Aliases type
type typeOfValue1 = (string | number)
type typeOfValue2 = (string|number)


// Union

function sumorconcat(value1: typeOfValue1, value2: typeOfValue2): (string | number) { // fnc này trả về data type (string | number)
    // vulue1, value2 đều có kiểu là string và number
    // (string | number) => là kiểu union type

    if (typeof value1 === 'number' && typeof value2 === 'number') { 
        console.log("Number");
        return value1 + value2
    }

    if (typeof value1 === 'string' && typeof value2 === 'string') { 
        console.log("Concat");
        return value1 + value2
    }

    throw new Error("Params no match any data type function's request")
}

console.log(sumorconcat("hello ", "world"))
