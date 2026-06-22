# **4\. Stock Import Detail — Chi tiết phiếu nhập thuốc**

Tạo màn hình “Chi tiết phiếu nhập thuốc” cho hệ thống PharmaAssist.

Kích thước:  
\- w-screen h-screen.

Ngôn ngữ:  
\- Toàn bộ giao diện bằng tiếng Việt.

Phong cách:  
\- Nền nội dung \#f7f7f7.  
\- Card trắng bo góc 16px.  
\- CTA chính \#024ad8.  
\- Chữ chính \#1a1a1a.  
\- Button/input bo góc 4px.  
\- Font Inter hoặc Manrope.

Sidebar:  
\- Active menu: Lịch sử nhập thuốc.

Top header:  
\- Tiêu đề: Chi tiết phiếu nhập thuốc  
\- Subtitle: Xem thông tin phiếu nhập, danh sách thuốc và lịch sử xử lý.  
\- Button outline: QUAY LẠI  
\- Button chính: IN PHIẾU NHẬP

Nội dung chính chia 2 cột.

Cột trái:

1\. Card thông tin phiếu nhập  
Hiển thị:  
\- Mã phiếu: IMP001  
\- Nhà cung cấp: Công ty Dược An Tâm  
\- Ngày nhập: 20/05/2026  
\- Người nhập: Nguyễn Văn A  
\- Trạng thái: Đã nhập kho  
\- Ghi chú: Nhập bổ sung thuốc sắp hết

2\. Card danh sách thuốc nhập  
Bảng gồm cột:  
\- Mã thuốc  
\- Tên thuốc  
\- Mã lô  
\- Số lượng  
\- Giá nhập  
\- Hạn sử dụng  
\- Thành tiền

Dữ liệu:  
\- MED001 | Paracetamol 500mg | LOT001 | 70 | 18.000đ | 31/12/2026 | 1.260.000đ  
\- MED004 | Ibuprofen 400mg | LOT002 | 50 | 24.000đ | 31/10/2026 | 1.200.000đ  
\- MED005 | Warfarin 5mg | LOT003 | 30 | 36.000đ | 30/11/2026 | 1.080.000đ

Cột phải:

1\. Card tổng kết  
Hiển thị:  
\- Tổng số mặt hàng: 3  
\- Tổng số lượng: 150  
\- Tổng tiền nhập: 3.540.000đ  
\- Trạng thái cập nhật kho: Đã cập nhật

2\. Card lịch sử thao tác  
Timeline:  
\- 20/05/2026 09:00 Tạo phiếu nhập  
\- 20/05/2026 09:15 Lưu nháp  
\- 20/05/2026 10:00 Xác nhận nhập kho  
\- 20/05/2026 10:01 Cập nhật tồn kho

3\. Card liên kết nhanh  
\- Button outline: XEM NHÀ CUNG CẤP  
\- Button outline: XEM BIẾN ĐỘNG KHO  
\- Button outline: XEM TỒN KHO SAU NHẬP

Tạo thao tác prototype:  
\- Click QUAY LẠI → quay về Lịch sử nhập thuốc.  
\- Click IN PHIẾU NHẬP → hiển thị toast: Đang gửi lệnh in phiếu nhập.  
\- Click XEM NHÀ CUNG CẤP → chuyển sang Chi tiết nhà cung cấp.  
\- Click XEM BIẾN ĐỘNG KHO → mở drawer Lịch sử biến động kho.

---
