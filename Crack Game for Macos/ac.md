# HƯỚNG DẪN CÀI ASSETTO CORSA (STEAMRIP) TRÊN MAC SILICON QUA CROSSOVER

> Sửa triệt để các lỗi: sập game, lỗi `kglCreateTextureFromFile`, màn hình đen khi nạp trận.

## 1. CÁC FILE CẦN CHUẨN BỊ TRƯỚC

- **Bộ game**: `Assetto Corsa v1.16.4` bản giải nén sẵn (SteamRIP)
- **Font chữ Windows**: file `ac-fonts.zip` và file `segoeui.ttf` sau khi giải nén
- **DirectX Offline**: `DirectX Redist June 2010`
- **Vị trí lưu tệp tải về**: **Downloads**

---

## 2. BƯỚC 1: KHỞI TẠO BOTTLE CHUẨN

- Mở **CrossOver**.
- Nhấn **+** ở góc dưới bên trái.
- Chọn **New Bottle...**
- Đặt tên chai là **ac** hoặc tên tuỳ ý.
- Chọn **Bottle Type: Windows 10 64-bit**.
- Nhấn **Create**.
- Sau khi chai được tạo xong, nhấn **Install Application into Bottle** ở cột bên phải.
- Cài lần lượt các phần mềm bổ trợ sau vào chai này:
  - **Steam**
  - **Microsoft Visual C++ Redistributable (latest)**

---

## 3. BƯỚC 2: SỬA LỖI UI VÀ BÙ ĐẮP THƯ VIỆN HỆ THỐNG

> Đây là bước cốt lõi. Nếu bỏ qua, game rất dễ sập ngay khi mở, xuất hiện lỗi `kglCreateTexture` và `ksgui.cpp`.

### 3.1 Ghi đè thư viện `dwrite`

- Trên giao diện chai **CrossOver**, nhấn nút **Wine Configuration**.
- Chuyển sang tab **Libraries**.
- Tại ô trống dưới dòng **New override for library:**, nhập:
  - **dwrite**
- Nhấn **Add**.
- Kiểm tra danh sách hiển thị phải là **dwrite (native, builtin)**.
- Nhấn **Apply** → **OK**.

### 3.2 Copy font chữ Windows thiếu

- Mở **Finder** trên Mac.
- Nhấn tổ hợp phím **Command + Shift + G**.
- Dán đường dẫn sau:
  - **~/Library/Application Support/CrossOver/Bottles/ac/drive_c/windows/Fonts/**
- Sao chép file `segoeui.ttf` đã giải nén từ `ac-fonts.zip` vào thư mục này.

---

## 4. BƯỚC 3: CÀI ĐẶT DIRECTX REDIST OFFLINE

- Bộ cài **DirectX Online** mặc định của CrossOver thường lỗi **Will Not Install**.
- Bắt buộc phải cài bản **Offline** để bù đắp file **d3dx11_43.dll**.
- Nhấp đúp vào file:
  - `directx_jun2010_redist.exe`
- CrossOver sẽ tự động nhận diện và mở màn hình cài đặt **DirectX for Modern Games**.
- Nhấn nút **Install** màu hồng ở góc trên bên phải.
- Chấp nhận các bước **Agree / Next** cho đến khi tiến trình hoàn tất.

---

## 5. BƯỚC 4: THIẾT LẬP HỆ THỐNG ĐỒ HỌA TRÊN CROSSOVER

- Trên giao diện quản lý chai, tìm mục **ADVANCED SETTINGS** ở cột bên phải.
- Trong mục **Graphics**, chọn chế độ **DXVK**.
- Đảm bảo công tắc **MSync** đang ở trạng thái **Bật**.
- Tắt **High Resolution Mode** để tránh xung đột với màn hình Retina.

---

## 6. BƯỚC 5: KHỞI ĐỘNG VÀ ĐỒNG BỘ QUA CONTENT MANAGER

### 6.1 Đổi tên file Content Manager

- Vào thư mục game **Assetto Corsa v1.16.4** trong Finder.
- Tìm file:
  - `Content Manager.exe`
- Đổi tên thành:
  - `Content Manager Local Safe.exe`
- Đây là bước bắt buộc để chạy ứng dụng ở chế độ an toàn cục bộ, tránh treo màn hình khi mở.

### 6.2 Chạy bằng CrossOver

- Quay lại **CrossOver**.
- Chọn **Run Command**.
- Nhấn **Browse...**.
- Chỉ đường dẫn đến file:
  - `Content Manager Local Safe.exe`
- Nhấn **Save Command as a Launcher** để tạo shortcut mở nhanh.
- Nhấn **Run**.

### 6.3 Thiết lập đường dẫn game và Content Manager

- Khi giao diện **Content Manager** hiện lên lần đầu, chọn đúng đường dẫn thư mục game gốc của bạn.
- Vào **SETTINGS** ở góc trên bên phải.
- Chọn tab **CONTENT MANAGER**.
- Chọn mục **DRIVE**.
- Tại dòng **Game Starter**, đổi sang **AppID**.
- Bỏ tích ô:
  - **Try to start Steam if not running when starting a race**

### 6.4 Thiết lập màn hình trong Assetto Corsa

- Vào **SETTINGS** → **ASSETTO CORSA** → **VIDEO**
- Tại mục **Resolution**, chọn độ phân giải chuẩn như:
  - **1920x1080**
  - hoặc **1440x900** nếu màn hình Mac nhỏ hơn
- Bỏ tích ô **Fullscreen** để tránh lỗi đồ họa với Retina.
- Giảm **Motion blur** về **0** (tắt).

---

## 7. LƯU Ý CUỐI CÙNG

- Luôn giữ **CrossOver** và **Wine** ở chế độ ổn định.
- Nếu game vẫn crash, kiểm tra lại các bước:
  - **dwrite override**
  - **Font Windows**
  - **DirectX Offline**
  - **DXVK / MSync**
  - **Content Manager Local Safe.exe**
- Nếu cần, có thể chạy lại từ shortcut đã tạo bằng **Run Command** để tiết kiệm thời gian.

---

## 8. TÓM TẮT NGẮN GỌN

- **Cài Bottle Win 10 64-bit**
- **Cài Steam + Visual C++ Redistributable**
- **Override `dwrite`**
- **Copy font `segoeui.ttf` vào `~/Library/Application Support/CrossOver/Bottles/ac/drive_c/windows/Fonts/`**
- **Cài DirectX Offline**
- **Chọn DXVK + MSync**
- **Dùng `Content Manager Local Safe.exe`**
- **Chạy ở chế độ Windowed + Resolution phù hợp**

