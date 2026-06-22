# **Prompt 4 — Tạo drawer Lịch sử biến động kho**

Không cần làm màn hình độc lập, drawer là đủ.

Tạo drawer “Lịch sử biến động kho” cho màn hình Quản lý tồn kho của PharmaAssist.

Kích thước:  
\- Drawer rộng khoảng 720px.  
\- Mở từ bên phải.  
\- Nền phía sau có overlay tối nhẹ.  
\- Card drawer màu trắng, bo góc trái 16px.

Ngôn ngữ:  
\- Toàn bộ bằng tiếng Việt.

Header:  
\- Tiêu đề: Lịch sử biến động kho  
\- Subtitle: Paracetamol 500mg – MED001  
\- Nút đóng X

Thông tin tổng quan:  
\- Tồn hiện tại: 12 hộp  
\- Ngưỡng cảnh báo: 20 hộp  
\- Vị trí kho: Kệ A1  
\- Trạng thái: Sắp hết

Bộ lọc:  
\- Date range picker: Từ ngày \- đến ngày  
\- Dropdown loại biến động:  
  \- Tất cả  
  \- Nhập kho  
  \- Bán hàng  
  \- Điều chỉnh  
  \- Hủy đơn  
  \- Trả hàng  
\- Button: ÁP DỤNG

Bảng biến động:  
Cột:  
\- Thời gian  
\- Loại biến động  
\- Mã tham chiếu  
\- Số lượng trước  
\- Thay đổi  
\- Số lượng sau  
\- Người thao tác  
\- Ghi chú

Dữ liệu mẫu:  
\- 20/05/2026 10:00 | Nhập kho | IMP001 | 20 | \+50 | 70 | Nguyễn Văn A | Nhập từ Công ty Dược An Tâm  
\- 25/05/2026 09:30 | Bán hàng | ORD0095 | 70 | \-10 | 60 | Trần Thị B | Bán tại quầy  
\- 29/05/2026 15:10 | Điều chỉnh | ADJ001 | 60 | \-2 | 58 | Lê Nhân Kho | Điều chỉnh kiểm kê  
\- 30/05/2026 09:10 | Bán hàng | ORD0001 | 58 | \-2 | 56 | Trần Thị B | Bán tại quầy

Lưu ý:  
Điều chỉnh dữ liệu mẫu để dòng cuối cùng và tồn hiện tại hợp lý. Có thể bổ sung thêm các giao dịch bán để tồn cuối cùng bằng 12\.

Footer:  
\- Button outline: ĐÓNG  
\- Button chính: XUẤT LỊCH SỬ

Tạo thao tác:  
\- Click filter cập nhật bảng.  
\- Click mã tham chiếu IMP001 chuyển sang chi tiết phiếu nhập.  
\- Click mã tham chiếu ORD0001 chuyển sang Chi tiết đơn hàng.  
\- Click XUẤT LỊCH SỬ hiển thị toast: Xuất lịch sử biến động thành công.

---
