# **2\. Batch / Lot Detail — Chi tiết lô thuốc**

Tạo màn hình “Chi tiết lô thuốc” cho hệ thống PharmaAssist.

Kích thước:  
\- w-screen h-screen.

Ngôn ngữ:  
\- Toàn bộ giao diện bằng tiếng Việt.

Phong cách thiết kế:  
\- Enterprise web app sạch.  
\- Nền nội dung \#f7f7f7.  
\- Card trắng bo góc 16px.  
\- CTA chính \#024ad8.  
\- Chữ chính \#1a1a1a.  
\- Button/input bo góc 4px.  
\- Dùng font Inter hoặc Manrope.  
\- Spacing theo hệ 8px.  
\- Badge trạng thái rõ ràng nhưng không quá nhiều màu.

Sidebar:  
\- Active menu: Tồn kho.

Top header:  
\- Tiêu đề: Chi tiết lô thuốc  
\- Subtitle: Theo dõi thông tin lô, hạn sử dụng và biến động tồn kho.  
\- Button outline: QUAY LẠI  
\- Button chính: ĐIỀU CHỈNH TỒN

Nội dung chính:

1\. Card thông tin lô thuốc  
Hiển thị:  
\- Mã lô: LOT001  
\- Thuốc: Paracetamol 500mg  
\- Mã thuốc: MED001  
\- Nhà cung cấp: Công ty Dược An Tâm  
\- Phiếu nhập: IMP001  
\- Ngày nhập: 20/05/2026  
\- Hạn sử dụng: 31/12/2026  
\- Số lượng nhập ban đầu: 70  
\- Tồn hiện tại: 12  
\- Vị trí kho: Kệ A1  
\- Trạng thái: Sắp hết

2\. Card cảnh báo lô thuốc  
Hiển thị alert:  
\- Lô thuốc còn dưới ngưỡng cảnh báo.  
\- Cần xem xét nhập thêm hàng.  
\- Button outline: TẠO PHIẾU NHẬP

3\. Card biến động lô thuốc  
Bảng gồm cột:  
\- Thời gian  
\- Loại biến động  
\- Mã tham chiếu  
\- Số lượng thay đổi  
\- Tồn sau thay đổi  
\- Người thao tác  
\- Ghi chú

Dữ liệu mẫu:  
\- 20/05/2026 10:00 | Nhập kho | IMP001 | \+70 | 70 | Nguyễn Văn A | Nhập từ nhà cung cấp  
\- 25/05/2026 09:30 | Bán hàng | ORD0095 | \-10 | 60 | Trần Thị B | Bán tại quầy  
\- 30/05/2026 09:10 | Bán hàng | ORD0001 | \-2 | 58 | Trần Thị B | Bán tại quầy

4\. Card thao tác nhanh  
\- Button outline: XEM PHIẾU NHẬP  
\- Button outline: XEM LỊCH SỬ BÁN  
\- Button outline: IN NHÃN LÔ  
\- Button chính: ĐIỀU CHỈNH TỒN

Tạo thao tác prototype:  
\- Click QUAY LẠI → quay về Quản lý tồn kho.  
\- Click XEM PHIẾU NHẬP → chuyển sang Chi tiết phiếu nhập thuốc.  
\- Click ĐIỀU CHỈNH TỒN → chuyển sang màn hình Điều chỉnh tồn kho.  
\- Click IN NHÃN LÔ → hiển thị toast: Đang gửi lệnh in nhãn lô.

---
