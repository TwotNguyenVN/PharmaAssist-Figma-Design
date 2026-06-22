# **5\. Supplier Detail — Chi tiết nhà cung cấp**

Tạo màn hình “Chi tiết nhà cung cấp” cho hệ thống PharmaAssist.

Kích thước:  
\- w-screen h-screen.

Ngôn ngữ:  
\- Toàn bộ giao diện bằng tiếng Việt.

Phong cách:  
\- Enterprise web app sạch.  
\- Nền nội dung \#f7f7f7.  
\- Card trắng bo góc 16px.  
\- CTA chính \#024ad8.  
\- Text chính \#1a1a1a.  
\- Button/input bo góc 4px.  
\- Dùng font Inter hoặc Manrope.

Sidebar:  
\- Active menu: Nhà cung cấp.

Top header:  
\- Tiêu đề: Chi tiết nhà cung cấp  
\- Subtitle: Xem thông tin liên hệ, lịch sử nhập hàng và trạng thái hợp tác.  
\- Button outline: QUAY LẠI  
\- Button chính: CHỈNH SỬA

Nội dung chính chia 2 cột.

Cột trái:

1\. Card thông tin nhà cung cấp  
Hiển thị:  
\- Mã nhà cung cấp: NCC001  
\- Tên nhà cung cấp: Công ty Dược An Tâm  
\- Người liên hệ: Nguyễn Văn Bình  
\- Số điện thoại: 0909000001  
\- Email: lienhe@antam.demo  
\- Địa chỉ: 25 Đường Demo, TP.HCM  
\- Mã số thuế mẫu: MST-DEMO-001  
\- Trạng thái: Đang hợp tác

2\. Card ghi chú  
Hiển thị:  
\- Nhà cung cấp chính cho nhóm thuốc giảm đau và vitamin.  
\- Giao hàng đúng hạn trong các phiếu nhập gần đây.

Cột phải:

1\. Card thống kê hợp tác  
Hiển thị:  
\- Tổng phiếu nhập: 8  
\- Tổng giá trị nhập: 18.500.000đ  
\- Phiếu nhập gần nhất: IMP001  
\- Ngày nhập gần nhất: 20/05/2026  
\- Trạng thái công nợ: Không theo dõi trong MVP

2\. Card lịch sử nhập gần đây  
Bảng gồm cột:  
\- Mã phiếu  
\- Ngày nhập  
\- Số mặt hàng  
\- Tổng tiền  
\- Trạng thái  
\- Thao tác

Dữ liệu:  
\- IMP001 | 20/05/2026 | 3 | 3.540.000đ | Đã nhập kho | Xem  
\- IMP008 | 15/05/2026 | 5 | 4.200.000đ | Đã nhập kho | Xem

Footer:  
\- Button outline: XEM LỊCH SỬ NHẬP  
\- Button outline: TẠM NGỪNG HỢP TÁC  
\- Button chính: TẠO PHIẾU NHẬP

Tạo thao tác prototype:  
\- Click QUAY LẠI → quay về Quản lý nhà cung cấp.  
\- Click TẠO PHIẾU NHẬP → chuyển sang Stock Import với nhà cung cấp được chọn sẵn.  
\- Click XEM LỊCH SỬ NHẬP → chuyển sang Stock Import History và lọc theo NCC001.  
\- Click TẠM NGỪNG HỢP TÁC → mở modal xác nhận.

---
