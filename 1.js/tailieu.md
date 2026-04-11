# 1. Function



![alt text](/1.js/image/image.png)

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

# 3.What is an Arrays?

- tập hợp 1 hay nhiều phân tử

![alt text](/1.js/image/image-5.png)


- `push` chỉ là phần tích hợp sẵn của ngôn ngữ JS mà các mảng tự động có quyền truy cập

## 3.1 Muốn thêm vào dải:
![alt text](/1.js/image/image-3.png)

![alt text](/1.js/image/image-4.png)

## 3.2 Muốn xoá:

![alt text](/1.js/image/image-9.png)


![alt text](/1.js/image/image-8.png)

- trong JS bắt đầu bằng số 0( số bên trái)
- số lượng muốn xoá từ mảng ( số bên phải) 


## 3.3 Muốn viết hoa tất cả cách chữ cái trong tên :

![alt text](/1.js/image/image-6.png)

=>>TOM


## 3.4.Làm tròn số: 

![alt text](/1.js/image/image-7.png)

=>> 8

## 3.5 Để tra cứu 1 mục trong 1 mảng bằng chỉ số của nó

![alt text](/1.js/image/image-11.png)

=>> 8

![alt text](/1.js/image/image-12.png)

==> dog

# 4. Making decisions:

## 4.1 if/else:

![alt text](/1.js/image/image-13.png)

## 4.2 while:

![alt text](/1.js/image/image-14.png)

### 4.2.1 Mỗi câu nằm trên 1 dòng riêng:

![alt text](/1.js/image/image-15.png)

# 5.High order function:

## a higher-order function is a function that either:
- Accepts a function as an argument

![alt text](image.png)

## Create an ex function that rreturn a function:

![alt text](image-1.png)

## useful higher-order functions that are part of the language itself (and not just web browser jargon)

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

# 7. Scope and Context:

## Scope:

- để trong block thì ko truy cập được ngoài block

![alt text](image-10.png)

* Code có thể ra ngoài truy cập 1 biến, nhưng nó không vào trong được (đường 1 chiều). 

![alt text](image-11.png)

- Code di chuyển lên từng cấp đến khi tìm được.

![alt text](image-12.png)