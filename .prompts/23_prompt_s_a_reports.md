## **Prompt sửa Reports**

Chỉnh lại màn hình Báo cáo & thống kê của PharmaAssist để khác rõ với Dashboard.

Mục tiêu Reports:  
\- Là màn hình phân tích dữ liệu theo khoảng thời gian.  
\- Dành cho Admin hoặc chủ nhà thuốc.  
\- Tập trung vào biểu đồ, bảng thống kê, so sánh và xuất báo cáo.  
\- Không hiển thị task vận hành hằng ngày như Dashboard.

Ngôn ngữ giao diện: tiếng Việt.

Phong cách:  
\- Enterprise analytics dashboard.  
\- Nền \#f7f7f7.  
\- Card trắng bo 16px.  
\- CTA chính \#024ad8.  
\- Chữ chính \#1a1a1a.  
\- Button/input bo 4px.  
\- Biểu đồ rõ ràng, bảng có thể lọc.

Bố cục Reports:  
1\. Header:  
\- Tiêu đề: Báo cáo & thống kê  
\- Subtitle: Phân tích doanh thu, tồn kho và hiệu quả bán hàng theo thời gian.  
\- Button outline: XUẤT PDF  
\- Button chính: XUẤT EXCEL

2\. Bộ lọc báo cáo:  
\- Khoảng thời gian: Hôm nay / 7 ngày / 30 ngày / Tùy chỉnh  
\- Date range picker: Từ ngày \- đến ngày  
\- Dropdown: Loại báo cáo  
\- Dropdown: Nhân viên bán  
\- Button: ÁP DỤNG BỘ LỌC

3\. Tab báo cáo:  
\- Doanh thu  
\- Thuốc bán chạy  
\- Tồn kho  
\- Thanh toán  
\- Tương tác thuốc

4\. Khu vực biểu đồ chính:  
\- Biểu đồ doanh thu theo ngày  
\- Biểu đồ số đơn theo ngày  
\- Biểu đồ tỷ lệ phương thức thanh toán

5\. Bảng “Top thuốc bán chạy”  
Cột:  
\- Xếp hạng  
\- Tên thuốc  
\- Danh mục  
\- Số lượng bán  
\- Doanh thu  
\- Tỷ lệ đóng góp

6\. Bảng “Báo cáo tồn kho”  
Cột:  
\- Tên thuốc  
\- Tồn đầu kỳ  
\- Nhập trong kỳ  
\- Bán trong kỳ  
\- Tồn cuối kỳ  
\- Trạng thái

7\. Card “Tóm tắt phân tích”  
\- Doanh thu tăng/giảm so với kỳ trước  
\- Nhóm thuốc bán chạy nhất  
\- Phương thức thanh toán phổ biến nhất  
\- Số cảnh báo tương tác trong kỳ

Không hiển thị timeline hoạt động gần nhất, thao tác nhanh hoặc checklist việc cần xử lý. Những nội dung đó thuộc Dashboard.

## **Prompt tạo màn hình Chi tiết đơn hàng**

Tạo màn hình Chi tiết đơn hàng cho PharmaAssist.

Kích thước: w-screen h-screen.  
Ngôn ngữ giao diện: tiếng Việt.

Phong cách:  
\- Enterprise web app sạch.  
\- Nền nội dung \#f7f7f7.  
\- Card trắng bo góc 16px.  
\- CTA chính \#024ad8.  
\- Chữ chính \#1a1a1a.  
\- Button/input bo 4px.  
\- Dùng font Inter hoặc Manrope.

Sidebar:  
\- Active menu: Bán thuốc.

Top header:  
\- Tiêu đề: Chi tiết đơn hàng  
\- Button outline: QUAY LẠI  
\- Button chính: XEM HÓA ĐƠN

Nội dung chính chia 2 cột.

Cột trái:  
Card thông tin đơn hàng:  
\- Mã đơn hàng: ORD0001  
\- Ngày tạo: 30/05/2026 09:10  
\- Nhân viên bán: Trần Thị B  
\- Khách hàng: Nguyễn Văn Minh  
\- Số điện thoại: 0901234567  
\- Trạng thái: Đã thanh toán

Card danh sách thuốc:  
Bảng:  
\- Tên thuốc  
\- Số lượng  
\- Đơn giá  
\- Thành tiền  
\- Ghi chú

Dữ liệu mẫu:  
\- Paracetamol 500mg | 2 | 25.000đ | 50.000đ  
\- Ibuprofen 400mg | 1 | 32.000đ | 32.000đ  
\- Warfarin 5mg | 1 | 48.000đ | 48.000đ

Cột phải:  
Card thanh toán:  
\- Tạm tính  
\- Giảm giá  
\- Tổng tiền  
\- Phương thức thanh toán  
\- Mã hóa đơn

Card cảnh báo tương tác:  
\- Cặp thuốc: Ibuprofen 400mg \+ Warfarin 5mg  
\- Mức độ: Cao  
\- Trạng thái xử lý: Đã tư vấn  
\- Ghi chú tư vấn: Đã thông báo cảnh báo cho khách hàng.  
\- Button: XEM CHI TIẾT CẢNH BÁO

Card lịch sử thao tác:  
\- 09:10 Tạo đơn hàng  
\- 09:12 Hiển thị cảnh báo tương tác  
\- 09:15 Xác nhận tư vấn  
\- 09:18 Thanh toán thành công  
\- 09:19 Tạo hóa đơn

Footer:  
\- Button outline: IN LẠI HÓA ĐƠN  
\- Button outline: HỦY ĐƠN  
\- Button chính: TẠO ĐƠN MỚI

Tạo thao tác:  
\- Click XEM HÓA ĐƠN chuyển sang màn hình Invoice.  
\- Click XEM CHI TIẾT CẢNH BÁO mở modal cảnh báo tương tác thuốc.  
\- Click IN LẠI HÓA ĐƠN hiển thị toast.
