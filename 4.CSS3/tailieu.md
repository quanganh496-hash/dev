![alt text](image.png)

![alt text](image-1.png)

# 0. CSS Types:

![alt text](image-2.png)

CSS (Cascading Style Sheets) được tích hợp vào tài liệu HTML theo 3 cách chính:

- Inline (Nội tuyến): Dùng thuộc tính style trực tiếp trong từng thẻ HTML.
- Internal (Nội bộ): Đặt trong thẻ `<style>` ở phần `<head>` của trang.
- External (Từ bên ngoài): Liên kết tới file `.css` tách biệt (phổ biến nhất cho các dự án).

![alt text](image-6.png)

![alt text](image-7.png)

![alt text](image-8.png)

# 1. Selector:

![alt text](image-4.png)

- Whenever we use a simple selector with an element tag, it will be applied on all paragraphs.
- However, if we use the class tag, the property will just be applied on elements of a certain class.

## 1.1 Element:
- The element selector selects HTML elements based on the element name.

## 1.2 Class:

Class trong CSS (lớp) là bộ chọn (selector) dùng để định kiểu (style) cho một hoặc nhiều phần tử HTML cụ thể có cùng thuộc tính lớp. Class được khai báo bằng dấu chấm (.) theo sau là tên lớp. Nó cho phép tái sử dụng định dạng trên nhiều phần tử, giúp mã HTML/CSS gọn nhẹ, dễ bảo trì và tối ưu hóa quy trình thiết kế giao diện web. 

![alt text](images/image-4.png)

![alt text](images/image.png)

![alt text](images/image-5.png)

## 1.3 ID

ID trong CSS (định danh) được dùng để định kiểu cho một phần tử HTML duy nhất trên trang web. ID sử dụng dấu thăng `(#)` theo sau là tên ID để chọn phần tử. Mỗi trang chỉ nên có một phần tử mang ID đó, có độ ưu tiên cao cao nhất trong CSS, thường dùng cho các thành phần độc nhất như `#header`, `#footer`

![alt text](images/image-1.png)

![alt text](images/image-2.png)

![alt text](images/image-3.png)

**Note**:

- The only difference is that the ID is unique in a page and can only apply to at most one element.

- One single element while the class, you know, like in a classroom, we have many students and here we have the same meaning.We are talking about a class, so which means like we have many elements.

# 2. Color:

![alt text](image-5.png)

![alt text](images/image-6.png)

![alt text](images/image-7.png)

![alt text](images/image-8.png)


## 2.1 Hex values:

![alt text](images/image-11.png)

![alt text](images/image-12.png)

## 2.2 RGB values:

![alt text](images/image-13.png)

![alt text](images/image-14.png)

- That's red, green, blue, alpha.
- The Alpha Channel is the transparency level of your color or opacity level.
- Meaning how much can you see through it 
- By default, all colors are 100 percent visible.
- There's you can't see through them.
- So they're alpha value is one.
- It goes from zero to one.

Ex:

![alt text](images/image-15.png)

# 3. Sizing:


## 3.1 Pixel(Absolute):

- Pixel is what's called an absolute unit, meaning it doesn't depend on anything.

## 3.2 Percentage(relative):

- they kind of just adjust to their containing parent elements.

## 3.3 EM (relative):

- `em` is mostly used to size text size.
- Your font is absolutely crucial in having a good looking page.
- It's one of the most important aspects of UI design typography.
- `em` is another relative unit of measurement similar to percentage.
- `em` always has a number of upgrades. Like `2em`, `3em`, `0.5em`

- Font size `2em` means If I didn't have any access, I want my size to be twice as big.
- Font size is usually inherited from the parents.

## 3.4 REM (relative):

-  `REM` is exactly the same as `EM` except it's not relative to the inherited font size from the parent.
- It's relative to the root element to your beloved HTML tag.

 
NOTE: **If no font size here, but the browser will actually act as if the HTML element has a font size 16 pixels on it.**

# 4. Box model:

![alt text](images/image-16.png)

## 4.1 Content:

- What you see inside the box in the context of a paragraph content is the text itself, in the case of our sections, in our profile.
- The children are the content.
- That's the visible part.

## 4.2 Padding:

![alt text](image-16.png)

![alt text](image-17.png)

## 4.3 Border:

![alt text](image-10.png)

![alt text](image-11.png)

![alt text](image-12.png)

- The border of your element by default is zero pixels.

![alt text](image-13.png)

## 4.4 Margin:

- `Margin` is the space around the visible part of the elements outside the borders.
- Margins are what allowing neighbouring elements to be laid out next to each other without bumping into one another.
- And the way you change margin is very similar to padding.
- `margin-top`, `margin-right`, `margin-bottom` and `margin-left`.

# 5. Fonts:

![alt text](image-21.png)

https://fonts.google.com


tài liệu thanm khảo:

https://www-w3schools-com.translate.goog/css/default.asp?_x_tr_sl=en&_x_tr_tl=vi&_x_tr_hl=vi&_x_tr_pto=tc

# 6. Back-ground:

![alt text](image-9.png)

# Basic propeties:

![alt text](image-14.png)

![alt text](image-15.png)

# Typography propeties:

![alt text](image-18.png)

![alt text](image-19.png)

![alt text](image-20.png)

![alt text](image-22.png)

# Selections propeties:

![alt text](image-23.png)

1. Các giá trị cốt lõi
- block: Chiếm toàn bộ chiều rộng của dòng hiện tại và đẩy phần tử tiếp theo xuống dòng mới (Ví dụ: `<div>`, `<p>`, `<h1>`). Cho phép tùy chỉnh width, height, margin và padding.
- inline: Chỉ chiếm không gian vừa đủ chứa nội dung, nằm trên cùng một dòng với các phần tử inline khác (Ví dụ: `<span>`, `<a>`). Không thể thiết lập width hay height.
- inline-block: Kết hợp ưu điểm của cả hai loại trên. Nằm trên cùng một dòng nhưng vẫn cho phép tùy chỉnh width, height, margin và padding.
- none: Ẩn hoàn toàn phần tử khỏi trang web, không chiếm bất kỳ không gian nào (các phần tử con cũng bị ẩn)

2. Các mô hình bố cục hiện đại:
- flex hoặc inline-flex: Kích hoạt Flexbox, giúp căn chỉnh, sắp xếp và phân bổ không gian giữa các phần tử một chiều (dọc hoặc ngang) một cách dễ dàng.
- grid hoặc inline-grid: Kích hoạt CSS Grid, tạo bố cục dạng lưới gồm các hàng và cột, lý tưởng cho việc xây dựng khung trang web phức tạp.


![alt text](image-24.png)

![alt text](image-25.png)

Thuộc tính z-index trong CSS kiểm soát thứ tự xếp chồng (mức độ ưu tiên hiển thị trước/sau) của các phần tử HTML trên trục Z (trục vuông góc với màn hình máy tính). Phần tử có z-index lớn hơn sẽ nằm đè lên trên phần tử có z-index nhỏ hơn.

![alt text](image-26.png)

Thuộc tính overflow trong CSS kiểm soát cách hiển thị của nội dung khi nó quá lớn, vượt ra khỏi vùng chứa (khung bao bọc) của một phần tử [1, 2].

![alt text](image-27.png)

Thuộc tính float trong CSS được dùng để căn chỉnh một phần tử trôi dạt sang bên trái hoặc bên phải của vùng chứa. Nó cho phép các nội dung hoặc phần tử khác (như văn bản) cuộn, bao quanh phần tử đó, thường được áp dụng trong việc tạo bố cục hoặc căn lề hình ảnh.

Các giá trị cơ bản
- left: Đẩy phần tử sang bên trái của phần tử cha/vùng chứa.
- right: Đẩy phần tử sang bên phải của phần tử cha/vùng chứa.
- none: Mặc định, không trôi dạt.
- inherit: Kế thừa thuộc tính float từ phần tử cha.

![alt text](image-28.png)

![alt text](image-29.png)

![alt text](image-30.png)

- `Pseudo-element` trong CSS là một "phần tử giả" được sử dụng để tạo kiểu cho các phần cụ thể của một phần tử hoặc chèn thêm nội dung mà không cần thêm thẻ HTML mới. Nó giúp mã HTML gọn gàng, linh hoạt hơn và tách biệt hoàn toàn nội dung với giao diện

![alt text](image-31.png)

# Extra features

![alt text](image-32.png)

![alt text](image-33.png)

- `border-radius` là thuộc tính CSS dùng để bo tròn các góc của một phần tử.Cách hoạt động cơ bảnGiá trị: Có thể dùng đơn vị pixel (px), phần trăm (%), em, rem, v.v.Hình tròn hoàn hảo: Để tạo một hình tròn từ một khối hình vuông, hãy đặt border-radius: 50%;.

![alt text](image-39.png)

![alt text](image-41.png)

![alt text](image-43.png)

![alt text](image-34.png)

- đổ bóng

# Responsive design:



![alt text](image-35.png)

- `CSS Grid Layout` là hệ thống bố cục hai chiều (2D) mạnh mẽ trong CSS. Nó cho phép bạn chia trang web thành các hàng và cột để sắp xếp các phần tử HTML một cách chính xác mà không cần dùng đến float hay position

![alt text](image-36.png)

- `CSS Flexbox (Flexible Box Layout)` là một mô hình thiết kế giao diện một chiều giúp bạn tự động sắp xếp, căn chỉnh và phân bổ không gian cho các phần tử bên trong một khung chứa (container), ngay cả khi chưa biết trước kích thước của chúng. Định dạng này giúp giao diện web hiển thị co giãn linh hoạt và tương thích tốt trên mọi kích thước màn hình

![alt text](image-45.png)

![alt text](image-37.png)

![alt text](image-38.png)

- `Media Queries` là một tính năng cốt lõi của CSS3 cho phép bạn áp dụng các kiểu định dạng khác nhau dựa trên đặc điểm của thiết bị hiển thị, chẳng hạn như kích thước màn hình, độ phân giải hoặc hướng xoay. Đây là công cụ nền tảng để xây dựng giao diện Responsive Web Design (thiết kế web thích ứng), giúp trang web hiển thị tối ưu từ điện thoại di động, máy tính bảng đến máy tính để bàn

![alt text](image-46.png)

![alt text](image-48.png)

![alt text](image-50.png)

![alt text](image-52.png)