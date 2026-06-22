# **11\. Payment**

Tạo màn hình Thanh toán cho PharmaAssist.

Kích thước: w-screen h-screen.  
Ngôn ngữ giao diện: tiếng Việt.

Sidebar:  
\- Active menu: Bán thuốc.

Top header:  
\- Tiêu đề: Thanh toán đơn hàng.

Nội dung chính chia 2 cột.

Cột trái: Card thông tin thanh toán  
\- Mã đơn hàng: ORD0001  
\- Khách hàng: Nguyễn Văn Minh  
\- Số điện thoại: 0901234567  
\- Nhân viên bán: Trần Thị B  
\- Dropdown: Phương thức thanh toán  
  \- Tiền mặt  
  \- Chuyển khoản  
  \- Thẻ  
  \- Ví điện tử

Nếu chọn tiền mặt:  
\- Tổng tiền cần thanh toán  
\- Khách đưa  
\- Tiền thối lại

Nếu chọn chuyển khoản:  
\- Mã giao dịch  
\- Trạng thái: Chờ xác nhận

Cột phải: Card tóm tắt đơn hàng  
Bảng:  
\- Tên thuốc  
\- Số lượng  
\- Đơn giá  
\- Thành tiền

Dữ liệu:  
\- Paracetamol 500mg | 2 | 25.000đ | 50.000đ  
\- Ibuprofen 400mg | 1 | 32.000đ | 32.000đ  
\- Warfarin 5mg | 1 | 48.000đ | 48.000đ

Tổng kết:  
\- Tạm tính  
\- Giảm giá  
\- Tổng thanh toán

Footer:  
\- Button outline: QUAY LẠI ĐƠN  
\- Button chính: XÁC NHẬN THANH TOÁN

Tạo thao tác:  
\- Chọn phương thức thanh toán.  
\- Nhập tiền khách đưa.  
\- Tự tính tiền thối lại.  
\- Click XÁC NHẬN THANH TOÁN hiển thị toast: Thanh toán thành công và chuyển sang Invoice.
