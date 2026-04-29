# 0.HTML ?

- Ngôn ngữ tiêu chuẩn để tạo và tổ chức nội dung web là HTML.

- Nó sử dụng một số thành phần hoặc thẻ để chỉ định cấu trúc trang web.

- Các yếu tố HTML, bố cục, định dạng và trình bày đều có thể được quản lý bằng CSS.

- Nó cho phép các nhà phát triển web tạo kiểu cho HTML với nội dung được tạo ra.

- Nó cho phép các nhà phát triển web tạo kiểu cho HTML với nội dung được tạo ra.

- Bây giờ, HTML và CSS là nền tảng để phát triển web vì chúng cung cấp cấu trúc cơ bản và

- Kiểu dáng xác định cách các trang web sẽ được trình bày và cách chúng sẽ hoạt động.

# 1. Html Atributes

![alt text](image-50.png)

# 2.Path:

- get out of the folder amd get in of the folder

![alt text](image.png)

# 3.Tab:
## 1. `<b>` `<strong>` `<i>` `<em>` `<br>` :

![alt text](image-1.png)

![alt text](image-2.png)

## 2.`<sup>` `<sub>`
![alt text](image-3.png)

![alt text](image-4.png)
## 3. `<h1>`,....
![alt text](image-5.png)

![alt text](image-6.png)
## 4. `<blockquote>`
![alt text](image-8.png) ( dùng để trích dẫn )

![alt text](image-9.png)
## 5. `<pre>`
![alt text](image-10.png) ( định nghĩa văn bản đã được định dạng trước )

![alt text](image-11.png)

 Note:

- What is the difference between the html `<b> `and `<strong>` tags?

- While both tags appear on the page to do the same thing, the `<strong>` tag has more semantic meaning than the html` <b> `tag. In effect by adding the `<strong> `tag around a word, we are implying that is is more important or deserves more attention.

## 6.HTML image tag:

![alt text](image-13.png)

![alt text](image-14.png)

![alt text](image-15.png)

# 4.Web image fomats:

![alt text](image-16.png)

Note: 

- What happens to an images quality when you are to aggressive with the compression settings?
- When you set the compression settings to high, you loose a lot of the information in the image. While you may have a small file size, the quality of the image may no longer be useable for the web page.

# 5.Anchor Tab `<a>`:

![alt text](image-17.png)
- is used to create **hyperlinks** that connect one page or resource to another.

note:

- What happens if you forget to put text in between the opening `<a>` tag and the closing `</a>` tag?
- If this is a text based hyperlink and you forget to put text between the open and close `<a>` tag, you wont have anything for the user to click on and hence your link won't really work.

# 6. Unorder and Order list:
![alt text](image-18.png)

![alt text](image-19.png)

- có thể thay `type="A"` bằng `i` `I` `1`. 

note:

- If you don't specify a type in the <ol> tag, what type does it default to?
- If you don't specify a type in the <ol> tag, it will default to using numbers (1,2,3 ...) in your list.

# 7. inline and block elements `<span>` `<div>`:

![alt text](image-20.png)

- inline elements can site side by side `span` 

![alt text](image-21.png)

- the block elements don't want to share the line So they forced each other onto the next block of the next line. `div`

# 8.Creating Basic Table:

![alt text](image-22.png)

![alt text](image-23.png)


![alt text](image-24.png)


![alt text](image-25.png)

- `border="1" ` viền

## 8.1 Gộp hàng:

![alt text](image-30.png)

![alt text](image-27.png)

- `colspan= "3" ` gộp 3 cột 

## 8.2 Gộp cột :

![alt text](image-28.png)

![alt text](image-29.png)

# 9. Form tag:

![alt text](image-31.png)

# 10.Input type text and password :

![alt text](image-32.png)

![alt text](image-33.png)

# 11. Radio buttons and check boxes:

![alt text](image-36.png)

![alt text](image-35.png)

# 12. Drop down box:

![alt text](image-37.png)

- selected : defail.

![alt text](image-39.png)

![alt text](image-38.png)

# 13. Textareas:

![alt text](image-40.png)

![alt text](image-41.png)

# 14. Submit and reset buttons:

![alt text](image-42.png)

![alt text](image-43.png)

note:

- Why is it important to use the name attribute in your form elements?
- The name attribute is vital because that is the key that will get sent to the server along with the value associated with it when the user submits the form.

# 15. Semantic elements:

![alt text](image-44.png)
 
# 16. Common entities:

![alt text](image-45.png)

![alt text](image-46.png)

note:

- Why do many if not most web sites seem to have a common header and footer on each page?
- Many sites opt to have a common header and footer on each page to promote a common look and feel to the site as a whole. It can also make it easier for users to navigate your site.

# 17. `<style>`:

![alt text](image-48.png)

![alt text](image-47.png)

![alt text](image-49.png)

1. Đặc điểm quan trọng:

- Phạm vi: Các quy tắc CSS trong thẻ `<style>` chỉ có tác dụng đối với trang HTML hiện tại (gọi là Internal CSS).
- Vị trí: Luôn nằm trong cặp thẻ `<head>...</head>` để trình duyệt tải phong cách trước khi hiển thị nội dung.
- Ưu tiên: Nó sẽ ghi đè lên các tệp CSS bên ngoài (External CSS) nhưng sẽ bị ghi đè bởi CSS viết trực tiếp trong thẻ (Inline CSS).
2. Khi nào nên dùng?
- Khi bạn chỉ muốn tạo kiểu nhanh cho một trang duy nhất.
- Khi viết các ví dụ nhỏ hoặc làm bài tập thực hành.
- Khi muốn tối ưu tốc độ tải trang cho những đoạn CSS quan trọng (Critical CSS).

# 18. `<script>`

- Trong JavaScript, thẻ `<script>` là thẻ HTML dùng để nhúng hoặc liên kết mã JavaScript vào trang web.

![alt text](image-51.png)

