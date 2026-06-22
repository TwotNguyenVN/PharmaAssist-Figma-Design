# **14\. Backup / Export Data — Sao lưu và xuất dữ liệu**

Tạo màn hình “Sao lưu và xuất dữ liệu” cho PharmaAssist.

Kích thước:  
\- w-screen h-screen.

Ngôn ngữ:  
\- Toàn bộ giao diện bằng tiếng Việt.

Phong cách:  
\- Enterprise web app sạch.  
\- Nền nội dung \#f7f7f7.  
\- Card trắng bo góc 16px.  
\- CTA chính \#024ad8.  
\- Danger \#b3262b cho cảnh báo bảo mật.  
\- Button/input bo góc 4px.  
\- Font Inter hoặc Manrope.

Sidebar:  
\- Active menu: Sao lưu dữ liệu hoặc Cài đặt.

Top header:  
\- Tiêu đề: Sao lưu và xuất dữ liệu  
\- Subtitle: Sao lưu dữ liệu demo và xuất dữ liệu phục vụ báo cáo, kiểm thử.

Nội dung chính chia 2 cột.

Cột trái:

1\. Card sao lưu dữ liệu  
Hiển thị:  
\- Lần sao lưu gần nhất: 30/05/2026 18:00  
\- Trạng thái: Thành công  
\- Dung lượng: 12.5 MB  
\- Người thực hiện: Admin  
\- Button chính: TẠO BẢN SAO LƯU

2\. Card xuất dữ liệu  
Checkbox chọn dữ liệu:  
\- Thuốc  
\- Tồn kho  
\- Khách hàng  
\- Đơn hàng  
\- Hóa đơn  
\- Phiếu nhập  
\- Nhật ký AI  
\- Nhật ký hệ thống

Định dạng:  
\- Excel  
\- CSV  
\- JSON

Button:  
\- XUẤT DỮ LIỆU

Cột phải:

1\. Card lịch sử sao lưu  
Bảng:  
\- Thời gian  
\- Loại  
\- Dung lượng  
\- Người thực hiện  
\- Trạng thái  
\- Thao tác

Dữ liệu:  
\- 30/05/2026 18:00 | Sao lưu toàn bộ | 12.5 MB | Admin | Thành công | Tải xuống  
\- 29/05/2026 18:00 | Sao lưu toàn bộ | 12.1 MB | Admin | Thành công | Tải xuống

2\. Card cảnh báo bảo mật  
Hiển thị:  
\- Dữ liệu khách hàng, hóa đơn và lịch sử mua hàng cần được bảo vệ.  
\- Không chia sẻ file sao lưu công khai.  
\- Không đưa dữ liệu thật vào đồ án hoặc repository công khai.

Modal xác nhận xuất dữ liệu:  
\- Tiêu đề: Xác nhận xuất dữ liệu  
\- Nội dung: Bạn có chắc chắn muốn xuất các nhóm dữ liệu đã chọn?  
\- Button outline: HỦY  
\- Button chính: XÁC NHẬN XUẤT

Tạo thao tác prototype:  
\- Click TẠO BẢN SAO LƯU → hiển thị loading rồi toast: Tạo bản sao lưu thành công.  
\- Click XUẤT DỮ LIỆU → mở modal xác nhận.  
\- Click Tải xuống → hiển thị toast: Đang tải file sao lưu.

---
