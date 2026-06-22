# **2\. Dashboard**

Tạo màn hình Dashboard cho PharmaAssist.

Kích thước: **w-screen h-screen**  
Ngôn ngữ giao diện: tiếng Việt.

Dùng layout chung:  
\- Sidebar bên trái.  
\- Top header.  
\- Nội dung nền \#f7f7f7.  
\- Card trắng bo 16px.

Sidebar:  
\- Active menu: Dashboard.

Top header:  
\- Tiêu đề: Dashboard  
\- Search placeholder: Tìm kiếm nhanh...  
\- Icon thông báo  
\- Avatar: Admin

Nội dung chính:  
1\. Hàng card thống kê:  
\- Doanh thu hôm nay: 8.450.000đ  
\- Số đơn bán: 36  
\- Thuốc sắp hết: 12  
\- Thuốc gần hết hạn: 7  
\- Cảnh báo tương tác: 5

2\. Card biểu đồ:  
\- Tiêu đề: Doanh thu 7 ngày gần nhất  
\- Biểu đồ cột hoặc đường dạng placeholder  
\- Bộ lọc: Hôm nay, 7 ngày, 30 ngày

3\. Card cảnh báo tồn kho:  
Bảng gồm cột:  
\- Mã thuốc  
\- Tên thuốc  
\- Tồn kho  
\- Ngưỡng cảnh báo  
\- Hạn dùng  
\- Trạng thái  
Dữ liệu mẫu:  
\- MED001 | Paracetamol 500mg | 12 | 20 | 12/2026 | Sắp hết  
\- MED002 | Amoxicillin 500mg | 8 | 15 | 09/2026 | Sắp hết  
\- MED003 | Vitamin C 500mg | 35 | 20 | 06/2026 | Gần hết hạn

4\. Card thao tác nhanh:  
\- Button: TẠO ĐƠN BÁN  
\- Button: NHẬP THUỐC  
\- Button: THÊM THUỐC  
\- Button: XEM BÁO CÁO

Tạo các thao tác:  
\- Click TẠO ĐƠN BÁN chuyển sang Sales POS.  
\- Click NHẬP THUỐC chuyển sang Stock Import.  
\- Click THÊM THUỐC mở modal thêm thuốc.  
\- Click XEM BÁO CÁO chuyển sang Reports.
