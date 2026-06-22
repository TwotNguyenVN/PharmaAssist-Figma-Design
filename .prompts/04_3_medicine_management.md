# **3\. Medicine Management**

Tạo màn hình Quản lý thuốc cho PharmaAssist.

Kích thước: w-screen h-screen.  
Ngôn ngữ giao diện: tiếng Việt.

Sidebar:  
\- Active menu: Quản lý thuốc.

Top header:  
\- Tiêu đề: Quản lý thuốc  
\- Search placeholder: Tìm thuốc, mã thuốc, hoạt chất...  
\- Avatar người dùng.

Nội dung chính:  
\- Một card lớn màu trắng bo 16px chứa toàn bộ danh sách thuốc.

Thanh công cụ phía trên:  
\- Ô tìm kiếm: Tìm theo tên thuốc, mã thuốc, hoạt chất  
\- Dropdown: Danh mục  
\- Dropdown: Trạng thái  
\- Dropdown: Sắp xếp  
\- Button outline: XUẤT EXCEL  
\- Button chính màu \#024ad8: THÊM THUỐC

Bảng thuốc:  
Cột:  
\- Mã thuốc  
\- Tên thuốc  
\- Danh mục  
\- Hoạt chất  
\- Đơn vị tính  
\- Giá bán  
\- Tồn kho  
\- Hạn dùng  
\- Trạng thái  
\- Thao tác

Dữ liệu mẫu:  
\- MED001 | Paracetamol 500mg | Giảm đau | Paracetamol | Hộp | 25.000đ | 120 | 12/2026 | Đang bán  
\- MED002 | Amoxicillin 500mg | Kháng sinh | Amoxicillin | Vỉ | 45.000đ | 18 | 09/2026 | Sắp hết  
\- MED003 | Vitamin C 500mg | Vitamin | Acid ascorbic | Lọ | 60.000đ | 35 | 06/2026 | Gần hết hạn  
\- MED004 | Loratadine 10mg | Dị ứng | Loratadine | Hộp | 38.000đ | 80 | 11/2026 | Đang bán

Thao tác từng dòng:  
\- Xem  
\- Sửa  
\- Xóa

Tạo các trạng thái:  
\- Badge Đang bán màu trung tính.  
\- Badge Sắp hết màu cảnh báo.  
\- Badge Gần hết hạn màu danger nhẹ.  
\- Click THÊM THUỐC mở màn hình hoặc modal Medicine Form.  
\- Click Sửa mở form chỉnh sửa thuốc.  
\- Click Xóa mở modal xác nhận xóa.
