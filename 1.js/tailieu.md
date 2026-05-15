

# 0.  What are variables?

- Variables are used to store data values and can be declared using var, let or const.

| Thuộc tính    | var       | let   | const       |
| ------------- | --------- | ----- | ----------- |
| Scope         | Function  | Block | Block       |
| Gán lại       | ✅         | ✅     | ❌           |
| Khai báo lại  | ✅         | ❌     | ❌           |
| Hoisting      | Có        | Có    | Có          |
| Dùng phổ biến | ❌ (tránh) | ✅     | ✅ (ưu tiên) |




# 1. Function

![alt text](image-46.png)

## 1.1 Parameters:

![alt text](image-47.png)

## 1.2 Function with return:

![alt text](image-48.png)

![alt text](image-49.png)

# 2. What is an object ?

lưu trữ dữ liệu hoặc tạo 1 biến : 
     
     let .... = ..... 
lưu nhiều : 

     let .... = {
       ..... <=== object
       .....
     } 

ex:

![alt text](/1.js/image/image-1.png)

## 2.1 document:

![alt text](/1.js/image/image-2.png)

![alt text](image-29.png)

![alt text](image-30.png)

![alt text](image-31.png)

![alt text](image-32.png)

- go and check the time of the statements running by doing what we just did.

## 2.2 Arrays object:

![alt text](image-82.png)

# 3.What is an Arrays?

- tập hợp 1 hay nhiều phân tử

- trong JS bắt đầu bằng số 0

![alt text](/1.js/image/image-5.png)

![alt text](image-58.png)

- `push` chỉ là phần tích hợp sẵn của ngôn ngữ JS mà các mảng tự động có quyền truy cập

![alt text](/1.js/image/image-8.png)




## 3.0 Sort and revers method:

![alt text](image-61.png)

![alt text](image-60.png)

## 3.1 Pop and push method:

![alt text](image-62.png)

- delete the last value

![alt text](/1.js/image/image-3.png)

![alt text](/1.js/image/image-4.png)

## 3.2 Shift and unshift method:

![alt text](image-63.png)

- `Shift` deletes first value.

- `unshift`adds value in first position.

## 3.3 concat and join method:

![alt text](image-64.png)

- `concat` method is just to concatenate.To join pieces together.To join objects together.

- `join` adds value in between each value.


## 3.2 slice and splice method:


![alt text](image-66.png)

- `slice` delete the number of value from the first position onwards.

![alt text](image-65.png)

- `splice` adds the value in the position we want.

## isarray method:

![alt text](image-67.png)

![alt text](image-68.png)

`is` method is used to check the data type of the past value and tell us if it's in the array.

## indexOf and lastindex method:

![alt text](image-69.png)

![alt text](image-70.png)

-  `index off ` is used for searching the array's content.

## ForEach method:

![alt text](image-73.png)

![alt text](image-74.png)

- `forEach` trong JavaScript là phương thức tích hợp sẵn trên Array dùng để lặp qua từng phần tử, thực thi một hàm `callback`. Nó giúp mã ngắn gọn, dễ đọc, tự động duyệt mảng theo thứ tự chỉ mục tăng dần

## includes method:

![alt text](image-77.png)

- In JavaScript, the `.includes()` method is a built-in function used to check if a specific value exists within an array or a string. It returns a boolean value: `true` if the value is found, and `false` if it isn't

- we want to find which value we give in our array, then we can use the include method

## some and every method:

![alt text](image-78.png)

- it will check my array . There is any value which is greater or equal to 18 will have to values.

![alt text](image-85.png)

- There is all value is much greater or equal to 18 . it will true.

## find and findindex method:

![alt text](image-86.png)

- find value 

![alt text](image-87.png)

- find position of value counted from left



## 3.4.Làm tròn số: 

![alt text](/1.js/image/image-7.png)

=>> 8

## 3.5 Để tra cứu 1 mục trong 1 mảng bằng chỉ số của nó

![alt text](/1.js/image/image-11.png)

=>> 8

![alt text](/1.js/image/image-12.png)

==> dog

# 4. Making decisions:


## 4.2 while:

![alt text](/1.js/image/image-14.png)

### 4.2.1 Mỗi câu nằm trên 1 dòng riêng:

![alt text](/1.js/image/image-15.png)

## 4.3 Condition ternary statement:

![alt text](image-33.png)

- Toán tử ba ngôi (Ternary Operator) trong JavaScript là cách viết tắt gọn nhẹ của câu lệnh if...else, giúp kiểm tra điều kiện và trả về một trong hai giá trị

      biểu_thức_điều_kiện ? biểu_thức_1 : biểu_thức_2;

- `biểu_thức_điều_kiện`: Điều kiện cần kiểm tra (trả về true hoặc false).
- `?`: Dấu phân cách giữa điều kiện và kết quả.
- `biểu_thức_1`: Giá trị được trả về nếu điều kiện đúng.
- `:`: Dấu phân cách giữa giá trị đúng và sai.biểu_thức_2: Giá trị được trả về nếu điều kiện sai

## 4.4 Switch statement:

- switch statement trong JavaScript là cấu trúc rẽ nhánh, dùng để so sánh một giá trị (biểu thức) với nhiều trường hợp (`case)` khác nhau, giúp thay thế các câu lệnh `if...else if` dài dòng và dễ đọc hơn. Nó hoạt động bằng cách kiểm tra sự bằng nhau nghiêm ngặt (`===`) giữa giá trị `switch` và `case`

![alt text](image-34.png)

![alt text](image-35.png)



##  4.5 if/else:

![alt text](/1.js/image/image-13.png)

## 4.6 If Else If statement:

![alt text](image-36.png)

## 4.7 Break and Continue statement:


- `Break` và `Continue` trong JavaScript dùng để điều khiển luồng vòng lặp (`for, while, do...while`). break dừng hoàn toàn vòng lặp và thoát ra ngay lập tức. continue bỏ qua lần lặp hiện tại, bỏ qua các câu lệnh bên dưới nó và chuyển ngay sang lần lặp tiếp theo

![alt text](image-39.png)

![alt text](image-38.png)

## Toán tử ba ngôi (Ternary Operator):

1. Cú pháp tổng quát:

       Biểu_thức_điều_kiện ? Giá_trị_khi_đúng : Dạng_trả_về_khi_sai;

## 4.9 Data Tyres:

![alt text](image-37.png)

### the mistake between the string and the numbers, like they confuse string and numbers.

- When we talk about string.We write statements in double quotations.

- While for numbers and boolean, we do not use double quotations.

### The difference between array and object.

- Is the following objects represent a special data type that's mutable and that can be used to store a collection of data rather than just a single value.
- When it comes to arrays, they are a special type of variable that is also mutable and that can also be used to store a list of values.
- But when you need to depend on the order of the elements in the collection, you need to use arrays.
- When the order is not important for you, you use objects.

# 5.High order function:

## 5.1 a higher-order function is a function that either:
- Accepts a function as an argument

![alt text](image.png)

## 5.2 Create an ex function that return a function:

![alt text](image-1.png)

## 5.3 Useful higher-order functions that are part of the language itself (and not just web browser jargon)

![alt text](image-2.png)

# 6. Returning(trả về) and Mutating(thay đổi):


## 6.1 Mutating:

![alt text](image-3.png)

![alt text](image-4.png)

## 6.2 Return:

![alt text](image-5.png)

![alt text](image-6.png)

## 6.3 Arr.map()

![alt text](image-7.png)

## 6.4 Arr.filter()

Ex1:

![alt text](image-8.png)

Ex2:

![alt text](image-9.png)

# 7. Scope( phạm vi ) and Context( ngữ cảnh ):

## Scope:

- để trong block thì ko truy cập được ngoài block

![alt text](image-10.png)

* Code có thể ra ngoài truy cập 1 biến, nhưng nó không vào trong được (đường 1 chiều). 

![alt text](image-11.png)

- Code di chuyển lên từng cấp đến khi tìm được.

![alt text](image-12.png)

## This:

- the ` this` keyword points towards the object that is executing the current function

![alt text](image-13.png)

## call:

![alt text](image-14.png)

# 8. Anonymous functions:

![alt text](image-15.png)

# 9. Arrow functions: 
- An arrow function is a special type of function that uses an alternate syntax or we could say a cleaner or modr minimalistic syntax 

![alt text](image-18.png)

![alt text](image-17.png)

* Ex:

![alt text](image-19.png)

to:

![alt text](image-20.png)

* Ex2:( this ):

![alt text](image-21.png)

![alt text](image-22.png)

# 10. Function hoisting:

![alt text](image-23.png)


![alt text](image-24.png)

* Không phải hàm nào cũng có hoisting:


![alt text](image-25.png)

![alt text](image-26.png)

# 11. Template literals:

![alt text](image-27.png)

# 12. Semicolons:

![alt text](image-28.png)

# 13. toString() and fill method?

`.toString(base)` để chuyển số sang chuỗi 


![alt text](image-75.png)

![alt text](image-76.png)


# 14. the arithmetic operator:

![alt text](image-40.png)

![alt text](image-41.png)

-  the arithmetic operator works only for numbers like for the numbers data type

# 15. the comparison operators:

![alt text](image-42.png)



# 16. Popup box:

## Alert box:

![alt text](image-43.png)

## Confirm box:

![alt text](image-44.png)

## Prompt box:

![alt text](image-50.png)

=> Pass


![alt text](image-52.png)

# 17. Loop:

##  17.1 while:

![alt text](/1.js/image/image-14.png)

- Vòng lặp `while` kiểm tra điều kiện trước khi thực hiện câu lệnh. Nếu điều kiện sai ngay từ đầu, vòng lặp sẽ bị bỏ qua

## 17.2 Do while loop:

![alt text](image-53.png)

- Vòng lặp `do-while` thực hiện khối lệnh trước, sau đó mới kiểm tra điều kiện. Do đó, khối lệnh luôn được thực hiện ít nhất một lần.

## 17.3 For loop:

![alt text](image-55.png)

## 17.4 Nested loop:

- nested loop is all about making loops in loops, which means that we are making a loop again and again inside the loop, and we're printing the statement.

![alt text](image-56.png)

## 17.5 for in loop:

- Vòng lặp `for...in` trong JavaScript được dùng để duyệt qua các thuộc tính (keys/properties) của một đối tượng (object) hoặc các chỉ mục (index). của mảng (array). Nó trả về chuỗi tên thuộc tính, không phải giá trị. trực tiếp

![alt text](image-83.png)




      const person = {fname:"Vuong", lname:"Trung", age: 31};
      for (let key in person) {
           console.log(key + ": " + person[`key`]); // output: fname: Vuong, lname: Trung...
      }



2. Duyệt Array (trả về index)

       const colors = ["red", "green", "blue"];
       for (let index in colors) {
           console.log(index); // output: "0", "1", "2" (chuỗi)
       }

# 18. Event in JS:

![alt text](image-51.png)

- events can be used to handle and verify user input.
- User actions and browser actions.
- Things that should be done every time a page loads.
- Things that should be done when the page is closed as well.

# 19. String method:

![alt text](image-90.png)

## Array.length:

![alt text](image-88.png)


## Array.UpperCase() :

![alt text](/1.js/image/image-6.png)

=>>TOM

## Array.LowerCase():

![alt text](image-89.png)

## Array.includes():

![alt text](image-91.png)

- you can search what are you looking for in the array(whole word).

## Array.startsWith():

![alt text](image-92.png)

- search the array startswith.

## Array.endsWith():

![alt text](image-93.png)

- search the array endwith.

## Array.search():

![alt text](image-94.png)

- it's showing index value .

## Array.match():

![alt text](image-95.png)

- The `match` method is mostly used when any word is getting used again and again in our string. So it changes into an array.

- `G` means it will search globally. It means that it will search and the whole string. 

## Array.lastIndexOf():

![alt text](image-96.png)

## Array.indexOf():

![alt text](image-97.png)

## Arary.replace():

![alt text](image-98.png)

## Array.trim():

![alt text](image-99.png)

- So this trim method is mostly used in the form text and the form text when the user submits his data and if he accidentally put some space, then to remove that space, the true method is used.

## Array.charAt():

![alt text](image-100.png)

- So it's displaying the one which corresponds to the 20 positions. 

## Array.charCodeAt():

![alt text](image-101.png)

![alt text](image-102.png)

- tra chữ từ bảng hiện bằng số

## Array.concat():

- when we have to make two arrays into one, then we use this like we use the content and same process as with string.

## Array.split():

![alt text](image-103.png)

- The split is when we have to convert our string into an array, then we can do it by split

## Array.repeat():

![alt text](image-104.png)

## Array.slice():

![alt text](image-105.png)

# Number method:

![alt text](image-124.png)

- `parseFloat()` trong JavaScript là hàm toàn cục dùng để phân tích một chuỗi (string) và trả về một số thực (số thập phân). Hàm này đọc chuỗi từ trái sang phải, bỏ qua khoảng trắng, và dừng lại khi gặp ký tự không hợp lệ (không phải số, dấu chấm thập phân, hoặc dấu +/-), trả về `NaN` ( Not-a-Number ) nếu ký tự đầu tiên không thể chuyển đổi. 

![alt text](image-125.png)

- `.toFixed()` trong JavaScript được sử dụng để làm tròn một số đến một số lượng chữ số thập phân nhất định và trả về kết quả dưới dạng chuỗi (string). Đây là công cụ phổ biến để hiển thị dữ liệu tài chính hoặc các phép đo cần độ chính xác cố định. 

# Math method:

![alt text](image-106.png)

## Math.ceil():

![alt text](image-107.png)

- show us the upper value.

## Math.floor():

![alt text](image-108.png)

- it will print us the lower value.

## Math.round():

![alt text](image-109.png)

![alt text](image-110.png)

- it's used to convert the decimal value into a normal value, meaning that it's used to display the decimal value without a point.

## math.trunc():

![alt text](image-111.png)

- `The Math.trunc()` method returns the integer part of a number.

- `The Math.trunc()` method removes the decimals (does NOT round the number).

## Math.max():

![alt text](image-112.png)

## Math.min():

![alt text](image-113.png)

## Math.sqrt():

![alt text](image-114.png)

- căn bậc 2

## Math.cbrt():

![alt text](image-115.png)

- căn bậc 3

## Math.pow():

![alt text](image-116.png)

- gấp số lần

## Math.random():

![alt text](image-117.png)

![alt text](image-118.png)

## Math.abs():

![alt text](image-119.png)

## Math.PI:

![alt text](image-120.png)

# Date method:

![alt text](image-121.png)

## new Date:

![alt text](image-122.png)

![alt text](image-123.png)

# DOM model:

![alt text](image-126.png)

![alt text](image-127.png)

![alt text](image-128.png)

## DOM GET Method:

![alt text](image-129.png)

![alt text](image-130.png)




