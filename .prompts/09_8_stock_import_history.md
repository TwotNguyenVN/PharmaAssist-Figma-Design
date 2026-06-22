# **8\. Stock Import History**

Tạo màn hình Lịch sử nhập thuốc cho PharmaAssist.

Kích thước: w-screen h-screen.  
Ngôn ngữ giao diện: tiếng Việt.

Sidebar:  
\- Active menu: Nhập thuốc.

Top header:  
\- Tiêu đề: Lịch sử nhập thuốc.

Nội dung chính:  
1\. Thanh bộ lọc:  
\- Search input: Tìm mã phiếu hoặc nhà cung cấp  
\- Date range picker: Từ ngày \- đến ngày  
\- Dropdown: Nhà cung cấp  
\- Dropdown: Trạng thái  
\- Button outline: XUẤT EXCEL  
\- Button chính: TẠO PHIẾU NHẬP

2\. Bảng phiếu nhập:  
Cột:  
\- Mã phiếu  
\- Nhà cung cấp  
\- Ngày nhập  
\- Người nhập  
\- Số mặt hàng  
\- Tổng tiền  
\- Trạng thái  
\- Thao tác

Dữ liệu mẫu:  
\- IMP001 | Công ty Dược An Tâm | 20/05/2026 | Nguyễn Văn A | 5 | 3.500.000đ | Đã nhập  
\- IMP002 | Nhà phân phối Minh Châu | 22/05/2026 | Trần Thị B | 3 | 1.850.000đ | Nháp

3\. Panel chi tiết bên phải hoặc drawer:  
\- Thông tin phiếu nhập  
\- Danh sách thuốc trong phiếu  
\- Tổng tiền  
\- Button: IN PHIẾU  
\- Button: XEM CHI TIẾT

Tạo thao tác:  
\- Click Xem mở drawer chi tiết.  
\- Click TẠO PHIẾU NHẬP chuyển sang màn hình Stock Import.  
\- Click IN PHIẾU hiển thị trạng thái in.
