## prompt cho màn hình **Lịch sử đơn hàng** để bạn copy vào Figma AI/Figma Make. 

Tạo màn hình “Lịch sử đơn hàng” cho hệ thống PharmaAssist.

Kích thước:  
\- w-screen h-screen.

Ngôn ngữ:  
\- Toàn bộ giao diện sử dụng tiếng Việt.  
\- Tất cả tiêu đề, nút, placeholder, trạng thái, bảng dữ liệu và thông báo đều phải là tiếng Việt.

Phong cách thiết kế:  
\- Enterprise web app sạch, hiện đại, dễ thao tác.  
\- Nền nội dung \#f7f7f7.  
\- Card màu trắng \#ffffff, bo góc 16px.  
\- CTA chính màu \#024ad8.  
\- Màu chữ chính \#1a1a1a.  
\- Màu chữ phụ \#3d3d3d hoặc \#636363.  
\- Button và input bo góc 4px.  
\- Dùng font Inter hoặc Manrope.  
\- Spacing theo hệ 8px.  
\- Card có shadow nhẹ: 0 2px 8px rgba(26, 26, 26, 0.08).  
\- Không sử dụng quá nhiều màu nổi.  
\- Badge trạng thái phải rõ ràng nhưng vẫn giữ giao diện chuyên nghiệp.

Sidebar:  
\- Active menu: Bán thuốc.  
\- Trong nhóm menu Bán thuốc, hiển thị các mục con:  
 \- Tạo đơn bán  
 \- Lịch sử đơn hàng  
\- Mục đang active: Lịch sử đơn hàng.

Top header:  
\- Tiêu đề: Lịch sử đơn hàng  
\- Subtitle: Tra cứu các đơn bán, trạng thái thanh toán và hóa đơn đã tạo.  
\- Ô tìm kiếm nhanh.  
\- Icon thông báo.  
\- Avatar người dùng.  
\- Button chính: TẠO ĐƠN MỚI

Nội dung chính:

1\. Hàng card thống kê tổng quan  
Tạo 4 card:  
\- Tổng số đơn hôm nay: 36  
\- Đơn đã thanh toán: 31  
\- Đơn đang xử lý: 3  
\- Đơn đã hủy: 2

2\. Thanh bộ lọc  
Đặt trong một card trắng phía trên bảng.

Bao gồm:  
\- Search input:  
 Placeholder: Tìm theo mã đơn, tên khách hàng hoặc số điện thoại

\- Date range picker:  
 Label: Khoảng thời gian  
 Placeholder: Từ ngày \- đến ngày

\- Dropdown trạng thái đơn hàng:  
 \- Tất cả trạng thái  
 \- Đang tạo  
 \- Chờ thanh toán  
 \- Đã thanh toán  
 \- Đã hủy

\- Dropdown phương thức thanh toán:  
 \- Tất cả phương thức  
 \- Tiền mặt  
 \- Chuyển khoản  
 \- Thẻ  
 \- Ví điện tử

\- Dropdown nhân viên bán:  
 \- Tất cả nhân viên  
 \- Trần Thị B  
 \- Nguyễn Văn A  
 \- Lê Thị C

\- Button outline: ĐẶT LẠI  
\- Button chính: ÁP DỤNG BỘ LỌC

3\. Bảng lịch sử đơn hàng

Các cột:  
\- Mã đơn hàng  
\- Ngày tạo  
\- Khách hàng  
\- Số điện thoại  
\- Nhân viên bán  
\- Số mặt hàng  
\- Tổng tiền  
\- Thanh toán  
\- Trạng thái  
\- Hóa đơn  
\- Thao tác

Dữ liệu mẫu:

Dòng 1:  
\- ORD0001  
\- 30/05/2026 09:10  
\- Nguyễn Văn Minh  
\- 0901234567  
\- Trần Thị B  
\- 3  
\- 130.000đ  
\- Tiền mặt  
\- Đã thanh toán  
\- INV0001  
\- Xem chi tiết

Dòng 2:  
\- ORD0002  
\- 30/05/2026 10:25  
\- Lê Thị Hoa  
\- 0912345678  
\- Nguyễn Văn A  
\- 2  
\- 85.000đ  
\- Chuyển khoản  
\- Đã thanh toán  
\- INV0002  
\- Xem chi tiết

Dòng 3:  
\- ORD0003  
\- 30/05/2026 11:40  
\- Khách lẻ  
\- Không có  
\- Trần Thị B  
\- 1  
\- 25.000đ  
\- Chưa chọn  
\- Chờ thanh toán  
\- Chưa có  
\- Xem chi tiết

Dòng 4:  
\- ORD0004  
\- 30/05/2026 13:15  
\- Phạm Văn Nam  
\- 0934567890  
\- Lê Thị C  
\- 4  
\- 245.000đ  
\- Tiền mặt  
\- Đã hủy  
\- Chưa có  
\- Xem chi tiết

4\. Badge trạng thái

Thiết kế các badge:  
\- Đã thanh toán: badge nền xanh nhạt hoặc trung tính, chữ đậm.  
\- Chờ thanh toán: badge cảnh báo nhẹ.  
\- Đang tạo: badge xám.  
\- Đã hủy: badge danger dùng màu \#b3262b hoặc nền đỏ nhạt.

Badge hóa đơn:  
\- Có hóa đơn: hiển thị mã hóa đơn dạng link màu \#024ad8.  
\- Chưa có hóa đơn: chữ xám “Chưa có”.

5\. Thao tác từng dòng

Trong cột Thao tác có menu ba chấm hoặc các action:  
\- Xem chi tiết  
\- Xem hóa đơn  
\- In lại hóa đơn  
\- Hủy đơn

Quy tắc:  
\- Nếu đơn chưa thanh toán, không hiển thị “Xem hóa đơn”.  
\- Nếu đơn đã hủy, disable “Hủy đơn”.  
\- Nếu chưa có hóa đơn, disable “In lại hóa đơn”.

6\. Panel chi tiết nhanh khi chọn một dòng

Khi click vào một dòng trong bảng, mở drawer bên phải.

Drawer có:  
\- Tiêu đề: Thông tin nhanh đơn hàng  
\- Mã đơn hàng  
\- Khách hàng  
\- Ngày tạo  
\- Nhân viên bán  
\- Trạng thái  
\- Tổng tiền  
\- Phương thức thanh toán  
\- Mã hóa đơn  
\- Danh sách 3 thuốc đầu tiên  
\- Button outline: XEM HÓA ĐƠN  
\- Button chính: XEM CHI TIẾT ĐƠN HÀNG

7\. Phân trang

Phía dưới bảng:  
\- Hiển thị: 1–10 trong tổng số 36 đơn hàng  
\- Dropdown số dòng mỗi trang: 10 / 20 / 50  
\- Nút trang trước  
\- Số trang 1, 2, 3, 4  
\- Nút trang sau

8\. Trạng thái giao diện cần tạo

Tạo các state sau:  
\- Loading state:  
 Skeleton cho bảng và card thống kê.

\- Empty state:  
 Icon đơn giản.  
 Text: Chưa có đơn hàng nào trong khoảng thời gian này.  
 Button: TẠO ĐƠN MỚI

\- Error state:  
 Text: Không thể tải lịch sử đơn hàng.  
 Button: THỬ LẠI

\- Toast:  
 \- Tải danh sách đơn hàng thành công.  
 \- In lại hóa đơn thành công.  
 \- Đã hủy đơn hàng.  
 \- Không thể thực hiện thao tác, vui lòng thử lại.

Tạo thao tác prototype:  
\- Click TẠO ĐƠN MỚI → chuyển sang màn hình Sales POS.  
\- Click vào một dòng đơn hàng → mở drawer thông tin nhanh.  
\- Click XEM CHI TIẾT ĐƠN HÀNG → chuyển sang màn hình Chi tiết đơn hàng.  
\- Click mã hóa đơn INV0001 → chuyển sang màn hình Invoice.  
\- Click IN LẠI HÓA ĐƠN → hiển thị toast “Đang gửi lệnh in”.  
\- Click HỦY ĐƠN → mở modal xác nhận.

Modal xác nhận hủy đơn:  
\- Tiêu đề: Xác nhận hủy đơn hàng  
\- Nội dung: Bạn có chắc chắn muốn hủy đơn hàng ORD0004?  
\- Textarea: Lý do hủy đơn  
\- Button outline: QUAY LẠI  
\- Button danger: XÁC NHẬN HỦY

Yêu cầu UX:  
\- Người dùng phải dễ dàng tìm được đơn theo mã đơn, khách hàng hoặc số điện thoại.  
\- Có thể lọc đơn theo ngày, trạng thái, nhân viên và phương thức thanh toán.  
\- Có thể click trực tiếp vào đơn để xem màn hình Chi tiết đơn hàng.  
\- Bảng phải rõ ràng, không nhồi quá nhiều thông tin.  
\- Hành động quan trọng phải dễ nhận biết.  
Nên cập nhật sidebar

Nhóm **Bán thuốc** nên có cấu trúc:

Bán thuốc  
├── Tạo đơn bán  
└── Lịch sử đơn hàng

Khi đang ở màn hình lịch sử:

Bán thuốc  
└── Lịch sử đơn hàng — active  
Luồng prototype nên nối

Dashboard  
→ Lịch sử đơn hàng  
→ Chọn ORD0001  
→ Chi tiết đơn hàng  
→ Xem hóa đơn  
→ Invoice

Hoặc:

Khách hàng  
→ Lịch sử mua  
→ Chi tiết đơn hàng

Như vậy màn hình **Chi tiết đơn hàng** không bị đứng riêng lẻ mà được kết nối hợp lý với lịch sử bán hàng.
