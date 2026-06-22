# **6\. Customer Detail — Chi tiết khách hàng**

Tạo màn hình “Chi tiết khách hàng” cho hệ thống PharmaAssist.

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
\- Active menu: Khách hàng.

Top header:  
\- Tiêu đề: Chi tiết khách hàng  
\- Subtitle: Xem thông tin khách hàng, lịch sử mua và ghi chú tư vấn.  
\- Button outline: QUAY LẠI  
\- Button chính: CHỈNH SỬA KHÁCH HÀNG

Nội dung chính chia 2 cột.

Cột trái:

1\. Card hồ sơ khách hàng  
Hiển thị:  
\- Mã khách hàng: KH001  
\- Tên khách hàng: Nguyễn Văn Minh  
\- Số điện thoại: 0901234567  
\- Địa chỉ: TP.HCM  
\- Nhóm khách hàng: Khách quay lại  
\- Ngày tạo: 10/05/2026  
\- Ghi chú: Khách thường mua thuốc giảm đau và vitamin.

2\. Card thống kê mua hàng  
Hiển thị:  
\- Số lần mua: 5  
\- Tổng chi tiêu: 1.250.000đ  
\- Đơn gần nhất: ORD0001  
\- Ngày mua gần nhất: 30/05/2026  
\- Phương thức thanh toán thường dùng: Tiền mặt

Cột phải:

1\. Card lịch sử mua gần đây  
Bảng gồm cột:  
\- Mã đơn  
\- Ngày mua  
\- Số mặt hàng  
\- Tổng tiền  
\- Trạng thái  
\- Thao tác

Dữ liệu:  
\- ORD0001 | 30/05/2026 | 3 | 130.000đ | Đã thanh toán | Xem  
\- ORD0095 | 25/05/2026 | 2 | 250.000đ | Đã thanh toán | Xem

2\. Card ghi chú tư vấn  
Hiển thị:  
\- ORD0001: Đã thông báo cảnh báo tương tác cho khách hàng.  
\- ORD0095: Khách hỏi về thông tin sử dụng thuốc mẫu trong đồ án.

3\. Card cảnh báo liên quan  
Hiển thị:  
\- Từng có cảnh báo tương tác trong đơn ORD0001.  
\- Button outline: XEM CẢNH BÁO

Footer:  
\- Button outline: XEM TOÀN BỘ LỊCH SỬ MUA  
\- Button chính: TẠO ĐƠN BÁN CHO KHÁCH

Tạo thao tác prototype:  
\- Click QUAY LẠI → quay về Quản lý khách hàng.  
\- Click ORD0001 hoặc Xem → chuyển sang Chi tiết đơn hàng.  
\- Click TẠO ĐƠN BÁN CHO KHÁCH → chuyển sang Sales POS với khách hàng đã được chọn.  
\- Click XEM TOÀN BỘ LỊCH SỬ MUA → chuyển sang Lịch sử mua hàng của khách.

---
