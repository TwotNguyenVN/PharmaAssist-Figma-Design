# **4\. Medicine Form / Add Edit Medicine**

Tạo màn hình hoặc modal Thêm/Sửa thuốc cho PharmaAssist.

Kích thước: w-screen h-screen hoặc modal lớn 880px.  
Ngôn ngữ giao diện: tiếng Việt.

Phong cách:  
\- Form card màu trắng, bo góc 16px.  
\- Input bo 4px, cao 44px.  
\- Nút chính màu \#024ad8.  
\- Nền ngoài form màu \#f7f7f7.

Tiêu đề:  
\- Thêm thuốc mới  
\- Subtitle: Nhập thông tin thuốc để quản lý bán hàng và tồn kho.

Form chia 2 cột:

Thông tin cơ bản:  
\- Mã thuốc  
\- Tên thuốc  
\- Danh mục thuốc  
\- Hoạt chất  
\- Dạng bào chế  
\- Đơn vị tính  
\- Nhà sản xuất  
\- Mô tả ngắn

Thông tin bán hàng:  
\- Giá nhập  
\- Giá bán  
\- Thuế nếu có  
\- Trạng thái: Đang bán / Tạm ngừng

Thông tin tồn kho:  
\- Số lượng ban đầu  
\- Ngưỡng cảnh báo sắp hết  
\- Ngày hết hạn  
\- Vị trí lưu kho

Thông tin an toàn:  
\- Ghi chú sử dụng nội bộ  
\- Checkbox: Cần kiểm tra tương tác khi bán  
\- Text nhỏ: Dữ liệu thuốc trong đồ án là dữ liệu mẫu.

Footer form:  
\- Button outline: HỦY  
\- Button chính: LƯU THUỐC

Tạo thao tác:  
\- Click LƯU THUỐC hiển thị toast: Lưu thuốc thành công.  
\- Click HỦY quay lại Quản lý thuốc.  
\- Nếu thiếu tên thuốc, hiển thị lỗi dưới input: Vui lòng nhập tên thuốc.
