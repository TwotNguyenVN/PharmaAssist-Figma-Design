# **9\. Sales POS**

Tạo màn hình Bán thuốc tại quầy cho PharmaAssist.

Kích thước: w-screen h-screen.  
Ngôn ngữ giao diện: tiếng Việt.

Đây là màn hình quan trọng nhất, cần thật rõ thao tác.

Sidebar:  
\- Active menu: Bán thuốc.

Top header:  
\- Tiêu đề: Bán thuốc tại quầy  
\- Search nhanh  
\- Avatar: Nhân viên nhà thuốc

Bố cục 3 cột:

Cột 1: Tìm kiếm thuốc  
\- Search input: Tìm thuốc theo tên, mã thuốc, hoạt chất  
\- Filter chips: Tất cả, Giảm đau, Kháng sinh, Vitamin, Dị ứng  
\- Danh sách thuốc dạng card nhỏ:  
  \- Tên thuốc  
  \- Hoạt chất  
  \- Giá bán  
  \- Tồn kho  
  \- Badge trạng thái  
  \- Button: THÊM

Dữ liệu mẫu:  
\- Paracetamol 500mg | 25.000đ | Tồn 120  
\- Ibuprofen 400mg | 32.000đ | Tồn 60  
\- Warfarin 5mg | 48.000đ | Tồn 20  
\- Vitamin C 500mg | 60.000đ | Tồn 35

Cột 2: Đơn bán hiện tại  
\- Input khách hàng: Tên hoặc số điện thoại khách hàng  
\- Button nhỏ: THÊM KHÁCH HÀNG  
\- Bảng thuốc trong đơn:  
  \- Thuốc  
  \- Số lượng  
  \- Đơn giá  
  \- Thành tiền  
  \- Xóa  
\- Quantity stepper \+ / \-  
\- Tổng kết:  
  \- Tạm tính  
  \- Giảm giá  
  \- Tổng thanh toán

Cột 3: Cảnh báo và tư vấn  
\- Card: Cảnh báo tương tác thuốc  
\- Nếu có tương tác, hiển thị:  
  \- Cặp thuốc: Ibuprofen 400mg \+ Warfarin 5mg  
  \- Mức độ: Cao  
  \- Mô tả: Có nguy cơ tương tác trong dữ liệu mẫu của hệ thống.  
  \- Button: XEM CHI TIẾT CẢNH BÁO  
\- Textarea: Ghi chú tư vấn  
\- Checkbox: Đã tư vấn cho khách hàng

Footer bên phải:  
\- Button outline: LƯU TẠM  
\- Button outline: HỦY ĐƠN  
\- Button chính: THANH TOÁN

Tạo thao tác:  
\- Click THÊM thêm thuốc vào đơn.  
\- Khi thêm Ibuprofen và Warfarin, tự hiện cảnh báo tương tác.  
\- Click XEM CHI TIẾT CẢNH BÁO mở modal Drug Interaction Alert.  
\- Click THANH TOÁN chuyển sang Payment.
