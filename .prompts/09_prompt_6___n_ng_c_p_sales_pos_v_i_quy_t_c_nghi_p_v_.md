# **Prompt 6 — Nâng cấp Sales POS với quy tắc nghiệp vụ**

Nâng cấp màn hình “Bán thuốc tại quầy” của PharmaAssist với đầy đủ trạng thái nghiệp vụ.

Không thay đổi phong cách thiết kế hiện tại.

1\. Trạng thái thuốc

Thuốc còn hàng:  
\- Badge: Còn hàng  
\- Button THÊM active

Thuốc sắp hết:  
\- Badge: Sắp hết  
\- Hiển thị số lượng còn lại  
\- Button THÊM vẫn active

Thuốc hết hàng:  
\- Badge: Hết hàng  
\- Button THÊM disabled  
\- Tooltip: Không thể bán vì thuốc đã hết hàng

Thuốc gần hết hạn:  
\- Badge: Gần hết hạn  
\- Hiển thị icon cảnh báo nhẹ  
\- Không tự động ngăn bán trong dữ liệu mẫu, nhưng cần hiển thị cảnh báo

2\. Trạng thái đơn hàng

Hiển thị badge trạng thái ở đầu đơn:  
\- Đơn mới  
\- Đã lưu tạm  
\- Có cảnh báo chưa xử lý  
\- Sẵn sàng thanh toán

3\. Quy tắc nút THANH TOÁN

Disable nút THANH TOÁN khi:  
\- Đơn hàng chưa có thuốc.  
\- Có thuốc vượt quá tồn kho.  
\- Có cảnh báo tương tác mức Cao chưa được xác nhận.  
\- Có dòng thuốc bị lỗi dữ liệu.

4\. Kiểm tra tồn kho

Khi tăng số lượng vượt tồn:  
\- Viền input số lượng chuyển sang error.  
\- Hiển thị lỗi: Số lượng bán vượt quá tồn kho hiện có.  
\- Không cho tăng thêm.  
\- Disable nút THANH TOÁN.

5\. Khách hàng

\- Cho phép để trống khách hàng.  
\- Khi để trống, hiển thị “Khách lẻ”.  
\- Button THÊM KHÁCH HÀNG mở modal thêm nhanh.

6\. Cảnh báo tương tác

Khi thêm Ibuprofen 400mg và Warfarin 5mg:  
\- Đổi trạng thái đơn thành “Có cảnh báo chưa xử lý”.  
\- Hiển thị card cảnh báo bên phải.  
\- Button THANH TOÁN disabled.  
\- Sau khi người dùng xác nhận cảnh báo và tick “Đã tư vấn cho khách hàng”, đổi trạng thái thành “Sẵn sàng thanh toán”.  
\- Button THANH TOÁN active.

7\. Lưu tạm

Click LƯU TẠM:  
\- Lưu đơn với trạng thái “Đã lưu tạm”.  
\- Hiển thị toast: Đã lưu tạm đơn hàng.  
\- Đơn được hiển thị trong Lịch sử đơn hàng với trạng thái “Đang tạo”.

8\. Hủy đơn

Click HỦY ĐƠN:  
\- Mở modal yêu cầu lý do hủy.  
\- Sau khi xác nhận, hiển thị toast: Đã hủy đơn hàng.

---
