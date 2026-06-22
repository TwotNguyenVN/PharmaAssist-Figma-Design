# **7\. Customer Purchase History — Lịch sử mua hàng của khách**

Tạo màn hình “Lịch sử mua hàng của khách” cho hệ thống PharmaAssist.

Kích thước:  
\- w-screen h-screen.

Ngôn ngữ:  
\- Toàn bộ giao diện bằng tiếng Việt.

Phong cách:  
\- Enterprise web app sạch.  
\- Nền nội dung \#f7f7f7.  
\- Card trắng bo 16px.  
\- CTA chính \#024ad8.  
\- Chữ chính \#1a1a1a.  
\- Button/input bo góc 4px.  
\- Font Inter hoặc Manrope.

Sidebar:  
\- Active menu: Khách hàng.

Top header:  
\- Tiêu đề: Lịch sử mua hàng  
\- Subtitle: Nguyễn Văn Minh \- 0901234567  
\- Button outline: QUAY LẠI  
\- Button chính: TẠO ĐƠN MỚI

Nội dung chính:

1\. Card tổng quan khách hàng  
Hiển thị:  
\- Khách hàng: Nguyễn Văn Minh  
\- Số điện thoại: 0901234567  
\- Số lần mua: 5  
\- Tổng chi tiêu: 1.250.000đ  
\- Đơn gần nhất: ORD0001  
\- Cảnh báo từng xuất hiện: 1

2\. Bộ lọc lịch sử mua  
Bao gồm:  
\- Date range picker: Từ ngày \- đến ngày  
\- Dropdown trạng thái đơn  
\- Search input: Tìm theo mã đơn hoặc tên thuốc  
\- Button outline: ĐẶT LẠI  
\- Button chính: ÁP DỤNG

3\. Bảng lịch sử mua  
Cột:  
\- Mã đơn  
\- Ngày mua  
\- Nhân viên bán  
\- Danh sách thuốc  
\- Tổng tiền  
\- Thanh toán  
\- Trạng thái  
\- Thao tác

Dữ liệu:  
\- ORD0001 | 30/05/2026 | Trần Thị B | Paracetamol, Ibuprofen, Warfarin | 130.000đ | Tiền mặt | Đã thanh toán | Xem chi tiết  
\- ORD0095 | 25/05/2026 | Nguyễn Văn A | Vitamin C, Paracetamol | 250.000đ | Chuyển khoản | Đã thanh toán | Xem chi tiết

4\. Panel bên phải  
Hiển thị:  
\- Thuốc đã mua nhiều nhất  
\- Cảnh báo tương tác từng xuất hiện  
\- Ghi chú tư vấn gần đây  
\- Button outline: XEM HỒ SƠ KHÁCH HÀNG

Tạo thao tác prototype:  
\- Click QUAY LẠI → quay về Chi tiết khách hàng.  
\- Click Xem chi tiết ở ORD0001 → chuyển sang Chi tiết đơn hàng.  
\- Click TẠO ĐƠN MỚI → chuyển sang Sales POS với khách hàng được chọn sẵn.  
\- Click XEM HỒ SƠ KHÁCH HÀNG → quay về Chi tiết khách hàng.

---
