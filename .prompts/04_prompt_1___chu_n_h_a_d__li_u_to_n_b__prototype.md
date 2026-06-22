# **Prompt 1 — Chuẩn hóa dữ liệu toàn bộ prototype**

Gửi prompt này trước để Figma sửa dữ liệu không thống nhất giữa các màn hình.

Rà soát và chuẩn hóa toàn bộ dữ liệu mẫu trong các màn hình PharmaAssist.

Không thay đổi phong cách thiết kế hoặc bố cục chính. Chỉ cập nhật dữ liệu để tất cả màn hình sử dụng cùng một bộ dữ liệu thống nhất.

1\. Dữ liệu thuốc chuẩn

MED001  
\- Tên thuốc: Paracetamol 500mg  
\- Danh mục: Giảm đau, hạ sốt  
\- Hoạt chất: Paracetamol  
\- Đơn vị tính: Hộp  
\- Giá bán: 25.000đ  
\- Tồn kho: 12  
\- Ngưỡng cảnh báo: 20  
\- Hạn sử dụng: 31/12/2026  
\- Vị trí kho: Kệ A1  
\- Trạng thái: Sắp hết

MED002  
\- Tên thuốc: Amoxicillin 500mg  
\- Danh mục: Kháng sinh  
\- Hoạt chất: Amoxicillin  
\- Đơn vị tính: Vỉ  
\- Giá bán: 45.000đ  
\- Tồn kho: 0  
\- Ngưỡng cảnh báo: 15  
\- Hạn sử dụng: 30/09/2026  
\- Vị trí kho: Kệ B2  
\- Trạng thái: Hết hàng

MED003  
\- Tên thuốc: Vitamin C 500mg  
\- Danh mục: Vitamin  
\- Hoạt chất: Acid ascorbic  
\- Đơn vị tính: Lọ  
\- Giá bán: 60.000đ  
\- Tồn kho: 35  
\- Ngưỡng cảnh báo: 20  
\- Hạn sử dụng: 30/06/2026  
\- Vị trí kho: Kệ C1  
\- Trạng thái: Gần hết hạn

MED004  
\- Tên thuốc: Ibuprofen 400mg  
\- Danh mục: Giảm đau  
\- Hoạt chất: Ibuprofen  
\- Đơn vị tính: Hộp  
\- Giá bán: 32.000đ  
\- Tồn kho: 60  
\- Ngưỡng cảnh báo: 20  
\- Hạn sử dụng: 31/10/2026  
\- Vị trí kho: Kệ A2  
\- Trạng thái: Bình thường

MED005  
\- Tên thuốc: Warfarin 5mg  
\- Danh mục: Thuốc mẫu cần kiểm tra tương tác  
\- Hoạt chất: Warfarin  
\- Đơn vị tính: Hộp  
\- Giá bán: 48.000đ  
\- Tồn kho: 20  
\- Ngưỡng cảnh báo: 10  
\- Hạn sử dụng: 30/11/2026  
\- Vị trí kho: Kệ D1  
\- Trạng thái: Bình thường

2\. Dữ liệu đơn hàng chuẩn

Mã đơn hàng: ORD0001  
Ngày tạo: 30/05/2026 09:10  
Khách hàng: Nguyễn Văn Minh  
Số điện thoại: 0901234567  
Nhân viên bán: Trần Thị B

Danh sách thuốc:  
\- Paracetamol 500mg, số lượng 2, đơn giá 25.000đ, thành tiền 50.000đ  
\- Ibuprofen 400mg, số lượng 1, đơn giá 32.000đ, thành tiền 32.000đ  
\- Warfarin 5mg, số lượng 1, đơn giá 48.000đ, thành tiền 48.000đ

Tạm tính: 130.000đ  
Giảm giá: 0đ  
Tổng thanh toán: 130.000đ  
Phương thức thanh toán: Tiền mặt  
Trạng thái: Đã thanh toán  
Mã hóa đơn: INV0001

3\. Dữ liệu cảnh báo tương tác chuẩn

\- Thuốc 1: Ibuprofen 400mg  
\- Thuốc 2: Warfarin 5mg  
\- Mức độ: Cao  
\- Trạng thái xử lý: Đã tư vấn  
\- Ghi chú tư vấn: Đã thông báo cảnh báo cho khách hàng.

4\. Áp dụng dữ liệu trên cho các màn hình:  
\- Dashboard  
\- Quản lý thuốc  
\- Quản lý tồn kho  
\- Bán thuốc tại quầy  
\- Thanh toán  
\- Hóa đơn  
\- Lịch sử đơn hàng  
\- Chi tiết đơn hàng  
\- Quản lý khách hàng  
\- AI Copilot  
\- Nhật ký AI

Không để cùng một thuốc có số lượng tồn khác nhau giữa các màn hình.  
Không để tổng tiền ORD0001 khác nhau giữa Sales POS, Payment, Invoice và Chi tiết đơn hàng.

---
