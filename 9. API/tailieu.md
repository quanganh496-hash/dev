
### 1. REST API 

![alt text](image-9.png)

*   **Cách hoạt động:** Dựa trên các phương thức HTTP tiêu chuẩn như `GET` (lấy dữ liệu), `POST` (tạo mới), `PUT` (cập nhật), và `DELETE` (xóa). 

![alt text](image-8.png)

*   **Đặc điểm nổi bật:** Có tính chất **phi trạng thái (stateless)**, nghĩa là mỗi yêu cầu là độc lập và máy chủ không lưu thông tin của các request trước đó. Điều này giúp hệ thống xử lý lượng lớn người dùng cùng lúc mà không xung đột dữ liệu.

![alt text](image-10.png)

*   **Ứng dụng:** Là chuẩn mực cho các ứng dụng web, di động và thiết bị thông minh hiện nay.

![alt text](image-11.png)

*   **Hạn chế:**

![alt text](image-12.png)

### 2. SOAP API 

![alt text](image.png)

*   **Cách hoạt động:** Sử dụng định dạng **XML** với cấu trúc nghiêm ngặt như một "bản hợp đồng". Mỗi thông điệp gửi đi bao gồm lớp vỏ (envelope), tiêu đề (header) chứa metadata và thân (body) chứa dữ liệu.
*   **Đặc điểm nổi bật:** Độc lập với giao thức (có thể chạy trên HTTP, SMTP, TCP...). Nó ưu tiên tính bảo mật và độ chính xác cao.
*   **Ứng dụng:** Thường dùng trong các hệ thống đòi hỏi độ tin cậy tuyệt đối như ngân hàng, tổ chức y tế và hệ thống chính phủ.

### 3. gRPC 
*   **Cách hoạt động:** Phát triển bởi Google, gRPC sử dụng **Protocol Buffers** (định dạng nhị phân) để nén dữ liệu và tận dụng **HTTP/2** để tăng tốc độ truyền tải.
*   **Đặc điểm nổi bật:** Nhanh hơn 7-10 lần so với REST. Hỗ trợ 4 mô hình giao tiếp mạnh mẽ bao gồm streaming (một chiều, hai chiều).

![alt text](image-1.png)

![alt text](image-2.png)

*   **Ứng dụng:** Các hệ thống yêu cầu độ trễ thấp như *Netflix*, *Uber* và giao dịch tài chính tần suất cao.

### 4. GraphQL 

![alt text](image-3.png)

*   **Cách hoạt động:** Là ngôn ngữ truy vấn cho API. Thay vì nhiều endpoint cố định, client gửi yêu cầu chính xác những gì họ cần.
*   **Đặc điểm nổi bật:** Giải quyết hoàn toàn vấn đề lấy dư thừa hoặc thiếu dữ liệu của REST, giúp ứng dụng hoạt động hiệu quả hơn.
*   **Ứng dụng:** Các nền tảng hiện đại như *GitHub*, *Shopify*, *Pinterest*.

### 5. Webhook 



*   **Cách hoạt động:** Cơ chế "đẩy" dữ liệu. Khi có một sự kiện xảy ra, máy chủ sẽ tự động gửi thông báo đến một `callback URL` đã thiết lập sẵn mà không cần client phải hỏi lại (polling).
*   **Đặc điểm nổi bật:** Tiết kiệm tài nguyên hệ thống, cập nhật theo thời gian thực.
*   **Ứng dụng:** Thông báo trạng thái đơn hàng (Shopify), cập nhật mã nguồn (GitHub).


### 6. WebSocket 
![alt text](image-4.png)
*   **Cách hoạt động:** Thiết lập kết nối hai chiều liên tục giữa client và server thông qua một "cái bắt tay" ban đầu.

![alt text](image-6.png)

![alt text](image-7.png)

*   **Đặc điểm nổi bật:** Cho phép máy chủ chủ động gửi dữ liệu về client mà không cần chờ yêu cầu, độ trễ cực thấp.
*   **Ứng dụng:** Ứng dụng chat, bảng giá chứng khoán, trò chơi trực tuyến.

![alt text](image-5.png)
### 7. WebRTC 
*   **Cách hoạt động:** Bộ framework cho phép truyền dữ liệu trực tiếp giữa các thiết bị (**Peer-to-Peer**) mà không cần qua máy chủ trung gian.
*   **Đặc điểm nổi bật:** Tối ưu hóa chất lượng theo đường truyền mạng, bảo mật và cực nhanh.
*   **Ứng dụng:** Gọi video trực tuyến (Google Meet), chia sẻ màn hình.