# **13\. System Audit Log — Nhật ký hệ thống**

Tạo màn hình “Nhật ký hệ thống” cho PharmaAssist.

Kích thước:  
\- w-screen h-screen.

Ngôn ngữ:  
\- Toàn bộ giao diện bằng tiếng Việt.

Mục tiêu:  
\- Theo dõi các thao tác quan trọng của người dùng trong hệ thống.  
\- Khác với Nhật ký AI, màn hình này ghi log thao tác hệ thống thông thường.

Phong cách:  
\- Enterprise web app sạch.  
\- Nền nội dung \#f7f7f7.  
\- Card trắng bo góc 16px.  
\- CTA chính \#024ad8.  
\- Text chính \#1a1a1a.  
\- Button/input bo góc 4px.  
\- Font Inter hoặc Manrope.

Sidebar:  
\- Active menu: Nhật ký hệ thống hoặc Cài đặt.

Top header:  
\- Tiêu đề: Nhật ký hệ thống  
\- Subtitle: Truy vết thao tác người dùng trên các module quan trọng.  
\- Button outline: XUẤT NHẬT KÝ

Nội dung chính:

1\. Bộ lọc  
Bao gồm:  
\- Search input: Tìm người dùng, hành động, mã tham chiếu  
\- Date range picker  
\- Dropdown module  
\- Dropdown hành động  
\- Dropdown mức độ  
\- Button outline: ĐẶT LẠI  
\- Button chính: ÁP DỤNG

2\. Bảng nhật ký hệ thống  
Cột:  
\- Thời gian  
\- Người dùng  
\- Vai trò  
\- Module  
\- Hành động  
\- Mã tham chiếu  
\- Địa chỉ IP mẫu  
\- Kết quả  
\- Thao tác

Dữ liệu:  
\- 30/05/2026 09:10 | Trần Thị B | Nhân viên nhà thuốc | Bán thuốc | Tạo đơn hàng | ORD0001 | 127.0.0.1 | Thành công | Xem  
\- 30/05/2026 09:12 | Trần Thị B | Nhân viên nhà thuốc | Cảnh báo | Xác nhận tư vấn | ORD0001 | 127.0.0.1 | Thành công | Xem  
\- 30/05/2026 10:00 | Nguyễn Văn A | Nhân viên kho | Nhập thuốc | Xác nhận nhập kho | IMP001 | 127.0.0.1 | Thành công | Xem  
\- 30/05/2026 11:00 | Admin | Admin | Người dùng | Khóa tài khoản | USER003 | 127.0.0.1 | Thành công | Xem

3\. Drawer chi tiết log  
Khi click Xem, mở drawer bên phải:  
\- Thông tin hành động  
\- Dữ liệu trước  
\- Dữ liệu sau  
\- Người thao tác  
\- Thời gian  
\- Kết quả  
\- Mã tham chiếu  
\- Button outline: SAO CHÉP LOG

Tạo thao tác prototype:  
\- Click Xem → mở drawer chi tiết.  
\- Click mã tham chiếu ORD0001 → chuyển sang Chi tiết đơn hàng.  
\- Click mã tham chiếu IMP001 → chuyển sang Chi tiết phiếu nhập.  
\- Click XUẤT NHẬT KÝ → hiển thị toast: Xuất nhật ký hệ thống thành công.

---
