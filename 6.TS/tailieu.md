# Typescript

- TypeScript requires compilation into JavaScript before it can run in the browser

# Basic:

## Variable:

- with `let`, we cannot redeclare a variable with the same name.

![alt text](/6.TS/images/image-1.png)

- The second type of variable is `const`, and it comes with several restrictions. You cannot assign values to a const variable multiple times or redeclare it.

![alt text](/6.TS/images/image.png)

## Datatypes:( String, number, boolean, null, object, arrays, undefined)

## Classes:

- `Classes` are a fundamental concept that allows you to define blueprints for creating objects with specific properties.

- `Classes` provide a way to create reusable, organized and structured code.

- The `This` keyword is used when you want to reference a value from the class.

- `Constructors` are special methods within a `class ` executed when an object is created. They are used for object initialization and any necessary setup.

- This demonstrates how we can use classes and constructors to initialize objects, and it's coded in TypeScript.

![alt text](/6.TS/images/image-2.png)

# Advanced:

## Inheritance:

- `inheritance` allows one class to inherit the properties and methods of another class. If a class has specific properties and methods defined in it, another class can utilize those properties from the first class without the need to redefine them.

- `Parent classes` contain common properties and methods that can be inherited by other classes serving
as a template for child classes.

-  `child classes` inherit from `parent classes` and can also introduce their own specific
properties and methods. They even have the ability to override existing methods.

![alt text](/6.TS/images/image-3.png)

## Modules:

- specifically module R.

- Modules are like program building blocks used to identify and reuse code.They come in various forms, but their primary purpose is to make the code modular and easy to maintain.

![alt text](/6.TS/images/image-4.png)

![alt text](/6.TS/images/image-5.png)

![alt text](/6.TS/images/image-6.png)

## Explicit vs Annotation:

## Void:

- `the Void keyword` serves as a data type, primarily used for
defining the return type of functions in TypeScript and JavaScript.

- `void` được sử dụng để biểu thị rằng một hàm không trả về bất kỳ giá trị nào. Đây là kiểu dữ liệu phổ biến khi bạn viết các hàm thực thi một hành động (như ghi log, thay đổi dữ liệu toàn cục) thay vì tính toán và trả về kết quả

![alt text](/6.TS/images/image-7.png)

## Unknowes:

![alt text](/6.TS/images/image-8.png)

## 

- Để biên dịch file TypeScript (.ts) sử dụng cấu hình từ file `tsconfig.json`, bạn cần dùng lệnh tsc của TypeScript Compiler.
- Quy tắc cốt lõi bạn cần nhớ: Nếu bạn truyền tên file trực tiếp vào lệnh (ví dụ: tsc index.ts), TypeScript sẽ BỎ QUA hoàn toàn file cấu hình `tsconfig.json`

## TS config target:

- Cấu hình target trong file `tsconfig.json` xác định phiên bản ECMAScript (JavaScript) đầu ra mà mã nguồn TypeScript của bạn sẽ được biên dịch thành. Nó giúp đảm bảo mã nguồn có thể chạy mượt mà trên môi trường (trình duyệt hoặc Node.js) mà bạn chỉ định

1. Cách hoạt động của `target`:

- Hạ cấp cú pháp (Downleveling): Nếu bạn viết code bằng tính năng mới nhưng đặt target ở phiên bản cũ, TypeScript sẽ tự động viết lại mã đó bằng cú pháp cũ tương đương.

- Ví dụ thực tế: Khi bạn sử dụng Arrow Function `(() => {})`:

   - Chọn "target": "ES5": Code chuyển thành định nghĩa hàm truyền thống function() {} vì ES5 chưa hỗ trợ hàm mũi tên.
   
   - Chọn "target": "ES6": Giữ nguyên cú pháp () => {}.
   
- Tự động áp dụng `lib`: Thay đổi `target` cũng sẽ thay đổi các định nghĩa API mặc định (thuộc tùy chọn `lib`) đi kèm tương ứng với phiên bản đó

2. Dưới đây là các giá trị bạn có thể lựa chọn dựa trên môi trường chạy code:

- ES5: Thích hợp nếu dự án bắt buộc phải hỗ trợ các hệ thống hoặc trình duyệt cực kỳ cũ.

- ES6 / ES2015: Cung cấp sự cân bằng tốt, hỗ trợ async/await, Promise, và các class cơ bản.

- ES2020 / ES2022: Lựa chọn tối ưu cho các ứng dụng web hiện đại và các phiên bản Node.js LTS. Bản dịch tạo ra ít mã thừa và dễ đọc hơn.

- ESNext: Nhắm đến phiên bản JavaScript cao nhất mà phiên bản TypeScript hiện tại của bạn hỗ trợ. Giá trị này nên dùng cẩn thận vì cấu trúc đầu ra có thể thay đổi sau mỗi lần bạn nâng cấp phiên bản TypeScript

## rootDir và outDir

- `rootDir` và `outDir` là cặp thuộc tính cốt lõi trong file `tsconfig.json` giúp bạn kiểm soát vị trí đọc file nguồn và vị trí xuất file sau khi biên dịch.Mục tiêu chính của bộ đôi này là giữ nguyên cấu trúc thư mục từ code nguồn TypeScript (.ts) sang code JavaScript (.js) thành phẩm.

- `rootDir`: Chỉ định thư mục gốc chứa các file TypeScript đầu vào. TypeScript sẽ dựa vào đường dẫn này để tính toán cấu trúc thư mục con bên trong.
- `outDir`: Chỉ định thư mục đầu ra. Toàn bộ file JavaScript sau khi biên dịch (cùng với file map hoặc file định nghĩa `.d.ts` nếu có) sẽ được ném vào đây.

## Access modifiers:

- Public and private methods serve the purpose of controlling access to classes. If a method is marked as public, it can be used anywhere in the code.
Conversely, if a method is marked as private, it's restricted to the class where it's defined.

public:
![alt text](/6.TS/images/image-9.png)


private:
![alt text](/6.TS/images/image-10.png)

![alt text](/6.TS/images/image-11.png)

## Contructors:

- Constructors have a specific role which is initializing objects of a class.
- With the constructor method, we can initialize the properties of a class.
- Key points to remember **include the constructors, name, initialization of properties and the possibility of using multiple constructors**.
- Additionally, the super keyword is often employed

![alt text](/6.TS/images/image-12.png)

![alt text](/6.TS/images/image-13.png)

![alt text](/6.TS/images/image-14.png)

## Promises:

Two crucial concepts to understand are `promises` and `asynchronous operations`:

`promises` and `asynchronous operations` trong typécriptAsynchronous operations (thao tác bất đồng bộ) trong TypeScript là cách xử lý các tác vụ tốn thời gian (như gọi API, đọc file, hẹn giờ) mà không làm đóng băng (block) luồng chạy chính của ứng dụng. 
- `Promise` là một đối tượng đại diện cho kết quả (thành công hoặc thất bại) của tác vụ bất đồng bộ đó trong tương lai.TypeScript thừa hưởng toàn bộ cơ chế này từ JavaScript nhưng bổ sung thêm Type Safety (an toàn kiểu dữ liệu) nhờ vào Generics `(Promise<T>)`, giúp bạn kiểm soát chặt chẽ kiểu dữ liệu trả về ngay khi viết code

- `Promises` and TypeScript provide a way to handle asynchronous operations and their outcomes, whether
they are successful or result in an error.
- Promises represent values that may not be immediately available, but will be at some point in the future.
- TypeScript enhances the safety of promises by allowing you to specify the type of data that will resolve
to.

![alt text](/6.TS/images/image-15.png)

2. Các trạng thái của một Promise:

Một Promise luôn nằm trong 1 của 3 trạng thái duy nhất:
- Pending: Đang chờ xử lý, tác vụ bất đồng bộ chưa hoàn thành.
- Fulfilled (Resolved): Thao tác thành công, trả về giá trị (kiểu T).
- Rejected: Thao tác thất bại, trả về lý do hoặc lỗi (kiểu any hoặc Error).

## Promises with Async:

So what is the use of an asynchronous function?

- The async await syntax simplifies working with promises, **making the code look more like synchronous
code while preserving asynchronous behavior**.
- Promises are essential for handling asynchronous operations in TypeScript, such as network requests,
file input, output, or any situation where you need to wait for a result.
- They provide a structured and type safe way to handle asynchronous workflows as shown in the summary
of the lecture.
- Using promises with async or await patterns, results in more readable and maintainable code for handling
single asynchronous operations, making the code resemble synchronous code.

1. Bản chất của từ khóa async
- Khi bạn gắn từ khóa async trước một hàm, hàm đó luôn luôn trả về một Promise.
- Nếu bạn trả về một giá trị thông thường (ví dụ: string, number), TypeScript sẽ tự động bọc giá trị đó vào một Promise đã được resolve

Thao tác đồng bộ thông thường:
   
    function getAppName(): string {
       return "My TypeScript App";
    }



Thao tác bất đồng bộ dùng async (TypeScript tự. động hiểu kiểu trả về là `Promise<string>`):
    
    
    async function getAppNameAsync(): Promise<string> {
       return "My TypeScript App"; 
       // Tương đương: return Promise.resolve("My TypeScript App");
    }

2. Bản chất của từ khóa `await`
- Từ khóa await chỉ được phép sử dụng bên trong hàm có từ khóa `async`.
- Nó dùng để tạm dừng thực thi hàm async cho đến khi Promise phía sau nó được xử lý xong (lấy ra giá trị từ trạng thái *Fulfilled* hoặc ném ra lỗi từ trạng thái *Rejected*).

![alt text](/6.TS/images/image-16.png)

