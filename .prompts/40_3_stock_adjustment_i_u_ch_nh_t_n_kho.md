# **3\. Stock Adjustment — Điều chỉnh tồn kho**

Tạo màn hình “Điều chỉnh tồn kho” cho hệ thống PharmaAssist.

Kích thước:  
\- w-screen h-screen.

Ngôn ngữ:  
\- Toàn bộ giao diện bằng tiếng Việt.

Phong cách:  
\- Enterprise web app sạch.  
\- Nền nội dung \#f7f7f7.  
\- Card trắng bo góc 16px.  
\- CTA chính \#024ad8.  
\- Danger \#b3262b.  
\- Chữ chính \#1a1a1a.  
\- Button/input bo góc 4px.  
\- Dùng font Inter hoặc Manrope.

Sidebar:  
\- Active menu: Tồn kho.

Top header:  
\- Tiêu đề: Điều chỉnh tồn kho  
\- Subtitle: Ghi nhận điều chỉnh tồn kho khi kiểm kê, sai lệch hoặc hàng hỏng.  
\- Button outline: QUAY LẠI

Nội dung chính chia 2 cột.

Cột trái:

1\. Card chọn thuốc  
Bao gồm:  
\- Search input: Tìm thuốc cần điều chỉnh  
\- Dropdown: Chọn lô thuốc  
\- Thông tin thuốc đã chọn:  
  \- Tên thuốc: Paracetamol 500mg  
  \- Mã thuốc: MED001  
  \- Lô thuốc: LOT001  
  \- Tồn hiện tại: 12 hộp  
  \- Ngưỡng cảnh báo: 20 hộp  
  \- Vị trí kho: Kệ A1  
  \- Trạng thái: Sắp hết

2\. Card form điều chỉnh  
Fields:  
\- Loại điều chỉnh:  
  \- Tăng tồn  
  \- Giảm tồn  
  \- Cập nhật số lượng thực tế  
\- Số lượng điều chỉnh  
\- Lý do điều chỉnh:  
  \- Kiểm kê thực tế  
  \- Hàng hỏng  
  \- Sai lệch dữ liệu  
  \- Hủy đơn  
  \- Khác  
\- Ghi chú  
\- Checkbox: Tôi xác nhận thông tin điều chỉnh là chính xác

Cột phải:

1\. Card xem trước kết quả  
Hiển thị:  
\- Tồn hiện tại: 12  
\- Thay đổi: \-2  
\- Tồn sau điều chỉnh: 10  
\- Trạng thái mới: Sắp hết  
\- Người thao tác: Lê Nhân Kho  
\- Thời gian dự kiến: 30/05/2026 15:30

2\. Card lưu ý nghiệp vụ  
Hiển thị:  
\- Mọi điều chỉnh tồn kho sẽ được ghi vào lịch sử biến động kho.  
\- Không nên điều chỉnh tồn kho nếu chưa có lý do rõ ràng.  
\- Dữ liệu trong màn hình là dữ liệu mẫu phục vụ đồ án.

Footer:  
\- Button outline: HỦY  
\- Button chính: LƯU ĐIỀU CHỈNH

Modal xác nhận:  
\- Tiêu đề: Xác nhận điều chỉnh tồn kho  
\- Nội dung: Bạn có chắc chắn muốn lưu điều chỉnh tồn kho cho Paracetamol 500mg?  
\- Button outline: QUAY LẠI  
\- Button chính: XÁC NHẬN

Tạo thao tác prototype:  
\- Nếu chưa nhập lý do, hiển thị lỗi: Vui lòng chọn lý do điều chỉnh.  
\- Click LƯU ĐIỀU CHỈNH → mở modal xác nhận.  
\- Click XÁC NHẬN → hiển thị toast: Điều chỉnh tồn kho thành công.  
\- Sau khi lưu → quay về Quản lý tồn kho hoặc mở Lịch sử biến động kho.

---
