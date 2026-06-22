# **6\. Inventory Management**

Tạo màn hình Quản lý tồn kho cho PharmaAssist.

Kích thước: w-screen h-screen.  
Ngôn ngữ giao diện: tiếng Việt.

Sidebar:  
\- Active menu: Tồn kho.

Top header:  
\- Tiêu đề: Quản lý tồn kho.

Nội dung chính:  
1\. Hàng card thống kê:  
\- Tổng thuốc trong kho  
\- Thuốc sắp hết  
\- Thuốc hết hàng  
\- Thuốc gần hết hạn

2\. Thanh bộ lọc:  
\- Search input: Tìm thuốc trong kho  
\- Dropdown: Trạng thái tồn kho  
\- Dropdown: Hạn sử dụng  
\- Button outline: XUẤT BÁO CÁO  
\- Button chính: CẬP NHẬT TỒN KHO

3\. Bảng tồn kho:  
Cột:  
\- Mã thuốc  
\- Tên thuốc  
\- Số lượng tồn  
\- Ngưỡng cảnh báo  
\- Ngày hết hạn  
\- Vị trí kho  
\- Trạng thái  
\- Thao tác

Dữ liệu mẫu:  
\- MED001 | Paracetamol 500mg | 12 | 20 | 12/2026 | Kệ A1 | Sắp hết  
\- MED002 | Amoxicillin 500mg | 0 | 15 | 09/2026 | Kệ B2 | Hết hàng  
\- MED003 | Vitamin C 500mg | 35 | 20 | 06/2026 | Kệ C1 | Gần hết hạn

4\. Panel cảnh báo bên phải:  
Tiêu đề: Cảnh báo kho  
\- Paracetamol 500mg còn dưới ngưỡng cảnh báo.  
\- Amoxicillin 500mg đã hết hàng.  
\- Vitamin C 500mg gần hết hạn.

Tạo thao tác:  
\- Click CẬP NHẬT TỒN KHO mở modal cập nhật số lượng.  
\- Click Xem lịch sử mở chi tiết biến động kho.  
\- Bộ lọc thay đổi dữ liệu trong bảng.
