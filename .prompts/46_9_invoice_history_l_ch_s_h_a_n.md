# **9\. Invoice History — Lịch sử hóa đơn**

Tạo màn hình “Lịch sử hóa đơn” cho hệ thống PharmaAssist.

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
\- Active menu: Bán thuốc.  
\- Trong nhóm Bán thuốc có submenu:  
  \- Tạo đơn bán  
  \- Lịch sử đơn hàng  
  \- Lịch sử thanh toán  
  \- Lịch sử hóa đơn

Top header:  
\- Tiêu đề: Lịch sử hóa đơn  
\- Subtitle: Tra cứu hóa đơn đã phát hành, in lại hoặc tải PDF.  
\- Button outline: XUẤT DANH SÁCH

Nội dung chính:

1\. Card thống kê  
Hiển thị:  
\- Tổng hóa đơn hôm nay: 31  
\- Hóa đơn đã in: 24  
\- Hóa đơn đã tải PDF: 8  
\- Hóa đơn đã hủy: 1

2\. Bộ lọc hóa đơn  
Bao gồm:  
\- Search input: Tìm mã hóa đơn, mã đơn, khách hàng  
\- Date range picker  
\- Dropdown trạng thái hóa đơn  
\- Dropdown phương thức thanh toán  
\- Button outline: ĐẶT LẠI  
\- Button chính: ÁP DỤNG

3\. Bảng lịch sử hóa đơn  
Cột:  
\- Mã hóa đơn  
\- Mã đơn hàng  
\- Ngày tạo  
\- Khách hàng  
\- Tổng tiền  
\- Phương thức thanh toán  
\- Trạng thái  
\- Thao tác

Dữ liệu:  
\- INV0001 | ORD0001 | 30/05/2026 09:19 | Nguyễn Văn Minh | 130.000đ | Tiền mặt | Đã phát hành | Xem  
\- INV0002 | ORD0002 | 30/05/2026 10:26 | Lê Thị Hoa | 85.000đ | Chuyển khoản | Đã phát hành | Xem

4\. Thao tác từng dòng  
\- Xem hóa đơn  
\- In lại  
\- Tải PDF  
\- Gửi hóa đơn

5\. Modal gửi hóa đơn  
Fields:  
\- Email hoặc số điện thoại khách hàng  
\- Ghi chú gửi hóa đơn  
Buttons:  
\- HỦY  
\- GỬI HÓA ĐƠN

Tạo thao tác prototype:  
\- Click Xem hóa đơn → chuyển sang màn hình Hóa đơn.  
\- Click In lại → hiển thị toast: Đang gửi lệnh in hóa đơn.  
\- Click Tải PDF → hiển thị toast: Tải hóa đơn thành công.  
\- Click Gửi hóa đơn → mở modal gửi hóa đơn.

---
