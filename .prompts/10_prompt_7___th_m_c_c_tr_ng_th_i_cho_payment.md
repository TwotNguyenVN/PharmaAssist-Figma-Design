# **Prompt 7 — Thêm các trạng thái cho Payment**

Nâng cấp màn hình Thanh toán của PharmaAssist với nhiều trạng thái xử lý.

Giữ nguyên giao diện và dữ liệu ORD0001.

Tạo 4 state hoặc frame variant:

1\. Trạng thái mặc định  
\- Chưa chọn phương thức thanh toán.  
\- Nút XÁC NHẬN THANH TOÁN disabled.

2\. Đang xử lý  
\- Hiển thị loading indicator.  
\- Text: Đang xử lý thanh toán...  
\- Disable toàn bộ input và button.  
\- Không cho quay lại trong khi đang xử lý.

3\. Thanh toán thành công  
\- Icon thành công.  
\- Tiêu đề: Thanh toán thành công  
\- Nội dung: Đơn hàng ORD0001 đã được thanh toán.  
\- Tổng tiền: 130.000đ  
\- Mã hóa đơn: INV0001  
\- Button chính: XEM HÓA ĐƠN  
\- Button outline: TẠO ĐƠN MỚI

4\. Thanh toán thất bại  
\- Icon lỗi.  
\- Tiêu đề: Thanh toán không thành công  
\- Nội dung: Không thể xác nhận giao dịch. Vui lòng kiểm tra lại hoặc chọn phương thức khác.  
\- Button outline: CHỌN PHƯƠNG THỨC KHÁC  
\- Button chính: THỬ LẠI

5\. Chờ xác nhận chuyển khoản  
\- Tiêu đề: Đang chờ xác nhận chuyển khoản  
\- Mã giao dịch mẫu  
\- Tổng tiền  
\- Text: Vui lòng xác nhận khi đã nhận được thanh toán.  
\- Button outline: HỦY GIAO DỊCH  
\- Button chính: XÁC NHẬN ĐÃ NHẬN TIỀN

Prototype:  
\- Click XÁC NHẬN THANH TOÁN → trạng thái Đang xử lý.  
\- Sau 1–2 giây → trạng thái Thành công.  
\- Tạo thêm một nhánh demo → trạng thái Thất bại.  
\- Click THỬ LẠI → quay về form thanh toán.  
\- Click XEM HÓA ĐƠN → màn hình Invoice.

---
