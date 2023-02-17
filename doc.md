# lesson-0x2:

    - typescript chuyển đổi dynamic type thành static type.
    - định nghĩa các kiểu dữ liệu mặt định cho các biến.

# lesson-0x3:

    - làm quen với các kiểu dữ liệu cơ bản.
    - js là nn dynamic type. Nên kiểu dữ liệu của biến có thể thay đổi linh động.
    - let a = 10,
    - a = "hello" vẫn ok ko lỗi.
    - Nhưng ts sẽ chặc chẻ hơn vì các biến đc khai báo data type rõ ràng.
    - Ts nó có thể tự dự đoán đc kiểu dữ liệu thông qua giá trị.

# lesson-0x4:

    - interface là nguyên tắc cốt lõi của ts nó check type dựa vào hình dạng của dữ liệu.
    - giống như tạo ra obj với các kiểu dữ liệu và các obj khác có thể copy hình dạng cũng như properties của obj đó.

# lesson-0x5:

    - Enums nó ko phải là kiểu dữ liệu mở rộng của js.
    - Nó giúp việc tạo 1 tập các constants đơn giản hơn.

# lesson-0x6:

    - Any type: đôi lúc các biển ko chắc kiểu dữ liệu của nó.
    - Và đôi khi ko muốn compiler ts check kiểu dữ liệu của nó.
    - Giống như dynamic type của js.

    <!------------------------------------------------->

    - Void là kiểu dữ liệu mà hàm trả về.
    - Khi hàm mà ko cần trả về bất cứ dữ liệu gì thì dùng type void.

    <!------------------------------------------------->

    - Union type là tập hợp các kiểu dữ liệu cho 1 biến
    (number | string | boolean) <= đây là kiểu union

    <!------------------------------------------------->

    - Aliases type: là đặt tên cho 1 hoặc 1 tập kiểu dữ liệu
