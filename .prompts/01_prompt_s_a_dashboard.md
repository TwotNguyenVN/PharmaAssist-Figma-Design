## **Prompt sửa Dashboard**

Chỉnh lại màn hình Dashboard của PharmaAssist để khác rõ với màn hình Báo cáo.

Mục tiêu Dashboard:  
\- Là màn hình tổng quan vận hành trong ngày.  
\- Giúp Admin hoặc nhân viên thấy nhanh việc cần xử lý ngay.  
\- Không tập trung phân tích dữ liệu dài hạn.  
\- Không hiển thị quá nhiều biểu đồ.

Ngôn ngữ giao diện: tiếng Việt.

Phong cách:  
\- Giữ style enterprise sạch.  
\- Nền \#f7f7f7.  
\- Card trắng bo 16px.  
\- CTA chính màu \#024ad8.  
\- Chữ chính \#1a1a1a.  
\- Button/input bo 4px.

Bố cục Dashboard:  
1\. Header:  
\- Tiêu đề: Tổng quan hôm nay  
\- Subtitle: Theo dõi nhanh hoạt động nhà thuốc trong ngày.  
\- Button chính: TẠO ĐƠN BÁN  
\- Button outline: NHẬP THUỐC

2\. Hàng card tình hình hôm nay:  
\- Doanh thu hôm nay  
\- Đơn bán hôm nay  
\- Thuốc sắp hết  
\- Cảnh báo cần xử lý

3\. Card “Việc cần xử lý”  
Hiển thị danh sách task dạng checklist:  
\- 3 thuốc sắp hết cần nhập thêm  
\- 2 thuốc gần hết hạn cần kiểm tra  
\- 1 đơn bán có cảnh báo tương tác cần ghi chú tư vấn  
\- 1 phiếu nhập đang ở trạng thái nháp

Mỗi task có nút hành động nhỏ:  
\- Xem kho  
\- Xem đơn  
\- Hoàn tất

4\. Card “Cảnh báo kho”  
Danh sách cảnh báo ngắn:  
\- Paracetamol 500mg còn 12 hộp  
\- Amoxicillin 500mg đã hết hàng  
\- Vitamin C 500mg gần hết hạn

5\. Card “Cảnh báo tương tác gần đây”  
Bảng nhỏ:  
\- Thời gian  
\- Đơn hàng  
\- Cặp thuốc  
\- Mức độ  
\- Trạng thái xử lý

6\. Card “Hoạt động gần nhất”  
Timeline:  
\- 09:10 tạo đơn ORD0001  
\- 09:20 thanh toán hóa đơn INV0001  
\- 10:00 nhập thuốc IMP0002  
\- 10:30 cập nhật tồn kho MED003

7\. Card “Thao tác nhanh”  
\- Tạo đơn bán  
\- Thêm thuốc  
\- Nhập thuốc  
\- Xem tồn kho

Không đặt biểu đồ doanh thu lớn ở Dashboard. Nếu có thì chỉ dùng mini chart nhỏ trong card doanh thu hôm nay.
