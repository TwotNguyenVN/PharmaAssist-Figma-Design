# **10\. Drug Interaction Alert Modal**

Tạo modal Cảnh báo tương tác thuốc cho PharmaAssist.

Kích thước: modal desktop khoảng 720px rộng, nằm trên nền mờ của màn hình Sales POS.  
Ngôn ngữ giao diện: tiếng Việt.

Phong cách:  
\- Modal trắng, bo góc 16px.  
\- Shadow 0 8px 24px rgba(26, 26, 26, 0.12).  
\- Không dùng nền đỏ toàn bộ.  
\- Chỉ dùng màu \#b3262b cho badge mức độ cao hoặc icon cảnh báo.  
\- Button chính màu \#024ad8.

Nội dung modal:  
Header:  
\- Icon cảnh báo  
\- Tiêu đề: Cảnh báo tương tác thuốc  
\- Nút đóng X

Thông tin cặp thuốc:  
\- Thuốc 1: Ibuprofen 400mg  
\- Thuốc 2: Warfarin 5mg  
\- Mức độ: Cao

Các section:  
1\. Mô tả nguy cơ  
\- Có nguy cơ xảy ra tương tác khi sử dụng đồng thời hai thuốc này theo dữ liệu mẫu của hệ thống.

2\. Khuyến nghị xử lý  
\- Nhân viên cần kiểm tra lại thông tin, ghi chú tư vấn và hỏi dược sĩ phụ trách nếu cần trước khi tiếp tục.

3\. Ghi chú tư vấn  
\- Textarea placeholder: Nhập ghi chú tư vấn cho khách hàng...

4\. Xác nhận  
\- Checkbox: Tôi đã đọc cảnh báo và ghi nhận tư vấn.

Disclaimer bắt buộc:  
\- Thông tin cảnh báo chỉ mang tính tham khảo, không thay thế tư vấn của dược sĩ, bác sĩ hoặc chuyên gia y tế.

Footer:  
\- Button outline: QUAY LẠI ĐƠN HÀNG  
\- Button danger text: XÓA THUỐC KHỎI ĐƠN  
\- Button chính: ĐÃ HIỂU VÀ TIẾP TỤC

Tạo thao tác:  
\- Checkbox phải được tick trước khi nút ĐÃ HIỂU VÀ TIẾP TỤC active.  
\- Click ĐÃ HIỂU VÀ TIẾP TỤC đóng modal và quay lại Sales POS.  
\- Click XÓA THUỐC KHỎI ĐƠN xóa thuốc gây tương tác khỏi đơn.
