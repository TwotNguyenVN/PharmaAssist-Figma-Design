# **8\. Payment History — Lịch sử thanh toán**

Tạo màn hình “Lịch sử thanh toán” cho hệ thống PharmaAssist.

Kích thước:  
\- w-screen h-screen.

Ngôn ngữ:  
\- Toàn bộ giao diện bằng tiếng Việt.

Phong cách:  
\- Enterprise web app sạch.  
\- Nền nội dung \#f7f7f7.  
\- Card trắng bo góc 16px.  
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
\- Tiêu đề: Lịch sử thanh toán  
\- Subtitle: Theo dõi các giao dịch thanh toán tại nhà thuốc.  
\- Button outline: XUẤT EXCEL

Nội dung chính:

1\. Card thống kê  
Hiển thị 5 card:  
\- Tổng giao dịch hôm nay: 36  
\- Tổng tiền đã thu: 8.450.000đ  
\- Giao dịch tiền mặt: 21  
\- Giao dịch chuyển khoản: 12  
\- Giao dịch thất bại: 1

2\. Bộ lọc thanh toán  
Bao gồm:  
\- Search input: Tìm mã đơn, mã hóa đơn, khách hàng  
\- Date range picker  
\- Dropdown phương thức thanh toán  
\- Dropdown trạng thái giao dịch  
\- Button outline: ĐẶT LẠI  
\- Button chính: ÁP DỤNG

3\. Bảng lịch sử thanh toán  
Cột:  
\- Mã giao dịch  
\- Mã đơn  
\- Mã hóa đơn  
\- Khách hàng  
\- Phương thức  
\- Số tiền  
\- Thời gian  
\- Trạng thái  
\- Thao tác

Dữ liệu:  
\- PAY001 | ORD0001 | INV0001 | Nguyễn Văn Minh | Tiền mặt | 130.000đ | 30/05/2026 09:18 | Thành công | Xem  
\- PAY002 | ORD0002 | INV0002 | Lê Thị Hoa | Chuyển khoản | 85.000đ | 30/05/2026 10:25 | Thành công | Xem  
\- PAY003 | ORD0003 | Chưa có | Khách lẻ | Chuyển khoản | 25.000đ | 30/05/2026 11:40 | Chờ xác nhận | Xem

4\. Drawer chi tiết thanh toán  
Khi click Xem, mở drawer bên phải với:  
\- Mã giao dịch  
\- Mã đơn  
\- Mã hóa đơn  
\- Khách hàng  
\- Phương thức thanh toán  
\- Số tiền  
\- Trạng thái  
\- Thời gian xử lý  
\- Người xác nhận  
\- Button outline: XEM ĐƠN HÀNG  
\- Button chính: XEM HÓA ĐƠN

Tạo thao tác prototype:  
\- Click Xem → mở drawer chi tiết thanh toán.  
\- Click mã đơn ORD0001 → chuyển sang Chi tiết đơn hàng.  
\- Click mã hóa đơn INV0001 → chuyển sang Hóa đơn.  
\- Click XUẤT EXCEL → hiển thị toast: Xuất lịch sử thanh toán thành công.

---
