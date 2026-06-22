# **1\. Medicine Detail — Chi tiết thuốc**

Tạo màn hình “Chi tiết thuốc” cho hệ thống PharmaAssist.

Kích thước:  
\- w-screen h-screen.

Ngôn ngữ:  
\- Toàn bộ giao diện sử dụng tiếng Việt.  
\- Tất cả tiêu đề, nút, label, placeholder, badge, bảng dữ liệu và thông báo đều bằng tiếng Việt.

Phong cách thiết kế:  
\- Enterprise web app sạch, hiện đại, dễ thao tác.  
\- Nền nội dung \#f7f7f7.  
\- Card màu trắng \#ffffff, bo góc 16px.  
\- CTA chính màu \#024ad8.  
\- Màu chữ chính \#1a1a1a.  
\- Màu chữ phụ \#3d3d3d hoặc \#636363.  
\- Button và input bo góc 4px.  
\- Button chính cao 44px, chữ in hoa.  
\- Dùng font Inter hoặc Manrope.  
\- Spacing theo hệ 8px.  
\- Card có shadow nhẹ: 0 2px 8px rgba(26, 26, 26, 0.08).  
\- Không dùng quá nhiều màu nổi.

Sidebar:  
\- Active menu: Quản lý thuốc.

Top header:  
\- Tiêu đề: Chi tiết thuốc  
\- Subtitle: Xem thông tin chi tiết, giá bán, tồn kho và lịch sử liên quan của thuốc.  
\- Ô tìm kiếm nhanh  
\- Icon thông báo  
\- Avatar người dùng  
\- Button outline: QUAY LẠI  
\- Button chính: CHỈNH SỬA THUỐC

Nội dung chính chia 2 cột.

Cột trái:

1\. Card thông tin cơ bản  
Hiển thị:  
\- Mã thuốc: MED001  
\- Tên thuốc: Paracetamol 500mg  
\- Danh mục: Giảm đau, hạ sốt  
\- Hoạt chất: Paracetamol  
\- Dạng bào chế: Viên nén  
\- Đơn vị tính: Hộp  
\- Nhà sản xuất: Pharma Demo  
\- Trạng thái kinh doanh: Đang bán

2\. Card thông tin giá  
Hiển thị:  
\- Giá nhập gần nhất: 18.000đ  
\- Giá bán: 25.000đ  
\- Lợi nhuận ước tính: 7.000đ  
\- Ngày cập nhật giá: 30/05/2026

3\. Card mô tả và ghi chú  
Hiển thị:  
\- Mô tả ngắn: Thuốc mẫu phục vụ đồ án quản lý nhà thuốc.  
\- Ghi chú nội bộ: Cần theo dõi tồn kho vì số lượng hiện tại dưới ngưỡng cảnh báo.

Cột phải:

1\. Card tồn kho hiện tại  
Hiển thị:  
\- Tồn kho: 12 hộp  
\- Ngưỡng cảnh báo: 20 hộp  
\- Trạng thái: Sắp hết  
\- Vị trí kho: Kệ A1  
\- Hạn sử dụng gần nhất: 31/12/2026  
\- Button outline: XEM TỒN KHO

2\. Card lô thuốc gần nhất  
Bảng gồm cột:  
\- Mã lô  
\- Số lượng  
\- Ngày nhập  
\- Hạn sử dụng  
\- Trạng thái

Dữ liệu:  
\- LOT001 | 12 | 20/05/2026 | 31/12/2026 | Sắp hết

3\. Card lịch sử bán gần đây  
Bảng gồm cột:  
\- Mã đơn  
\- Ngày bán  
\- Số lượng  
\- Thành tiền  
\- Thao tác

Dữ liệu:  
\- ORD0001 | 30/05/2026 | 2 | 50.000đ | Xem  
\- ORD0095 | 25/05/2026 | 10 | 250.000đ | Xem

Footer hành động:  
\- Button outline: XEM LỊCH SỬ BÁN  
\- Button outline: XEM BIẾN ĐỘNG KHO  
\- Button chính: CHỈNH SỬA THUỐC

Tạo thao tác prototype:  
\- Click QUAY LẠI → quay về màn hình Quản lý thuốc.  
\- Click CHỈNH SỬA THUỐC → mở màn hình hoặc modal Thêm/Sửa thuốc.  
\- Click XEM TỒN KHO → chuyển sang Quản lý tồn kho với thuốc MED001 được chọn.  
\- Click XEM BIẾN ĐỘNG KHO → mở drawer Lịch sử biến động kho.  
\- Click ORD0001 → chuyển sang Chi tiết đơn hàng.

---
