# **Prompt 3 — Luồng khách hàng \+ đơn hàng \+ báo cáo**

Nối prototype cho nhóm luồng “Khách hàng \+ đơn hàng \+ thanh toán/hóa đơn history \+ báo cáo” của hệ thống PharmaAssist.

Mục tiêu:  
\- Demo được nghiệp vụ tra cứu khách hàng, xem lịch sử mua, xem đơn hàng, hóa đơn, thanh toán và báo cáo.  
\- Có desktop và mobile nếu frame tương ứng đã tồn tại.  
\- Tất cả text, toast, modal, filter, drawer đều bằng tiếng Việt.  
\- Dữ liệu phải thống nhất với ORD0001 và KH001.

Kích thước:  
\- Desktop: w-screen h-screen.  
\- Mobile: responsive 320px–479px, không khóa theo một kích thước cố định.

Dữ liệu demo bắt buộc:  
\- Khách hàng: KH001 Nguyễn Văn Minh  
\- Số điện thoại: 0901234567  
\- Đơn hàng: ORD0001  
\- Hóa đơn: INV0001  
\- Thanh toán: PAY001  
\- Tổng tiền: 130.000đ  
\- Trạng thái: Đã thanh toán  
\- Cảnh báo tương tác: Ibuprofen 400mg \+ Warfarin 5mg

\==================================================  
LUỒNG 1 — QUẢN LÝ KHÁCH HÀNG  
\==================================================

Customer Management desktop:  
\- Click menu Khách hàng → Quản lý khách hàng.  
\- Click THÊM KHÁCH HÀNG → mở modal thêm khách hàng.  
\- Nhập tên khách hàng, số điện thoại, địa chỉ, ghi chú.  
\- Click LƯU KHÁCH HÀNG → toast “Lưu khách hàng thành công.”  
\- Click dòng KH001 Nguyễn Văn Minh → Chi tiết khách hàng.  
\- Click XEM LỊCH SỬ MUA → Lịch sử mua hàng của khách.

Customer Management mobile nếu có:  
\- Danh sách khách hàng chuyển thành card list.  
\- Tap KH001 → Chi tiết khách hàng mobile.  
\- Tap filter icon → bottom sheet bộ lọc.

\==================================================  
LUỒNG 2 — CHI TIẾT KHÁCH HÀNG VÀ LỊCH SỬ MUA  
\==================================================

Chi tiết khách hàng:  
\- Click QUAY LẠI → Quản lý khách hàng.  
\- Click CHỈNH SỬA KHÁCH HÀNG → mở form chỉnh sửa khách hàng.  
\- Click XEM TOÀN BỘ LỊCH SỬ MUA → Lịch sử mua hàng của khách.  
\- Click ORD0001 trong lịch sử gần đây → Chi tiết đơn hàng.  
\- Click TẠO ĐƠN BÁN CHO KHÁCH → Sales POS với khách hàng Nguyễn Văn Minh đã được chọn sẵn.  
\- Click XEM CẢNH BÁO nếu có → mở modal cảnh báo tương tác đã xử lý.

Lịch sử mua hàng của khách:  
\- Click QUAY LẠI → Chi tiết khách hàng.  
\- Click bộ lọc ngày → chọn 7 ngày gần nhất.  
\- Click ÁP DỤNG → toast “Đã áp dụng bộ lọc.”  
\- Click ORD0001 → Chi tiết đơn hàng.  
\- Click TẠO ĐƠN MỚI → Sales POS với khách hàng đã chọn.  
\- Click XEM HỒ SƠ KHÁCH HÀNG → Chi tiết khách hàng.

Mobile:  
\- Card lịch sử mua hiển thị từng đơn hàng.  
\- Tap ORD0001 → Order Detail mobile.  
\- Sticky footer có LỊCH SỬ MUA và TẠO ĐƠN BÁN.

\==================================================  
LUỒNG 3 — LỊCH SỬ ĐƠN HÀNG  
\==================================================

Order History desktop:  
\- Click menu Bán thuốc → Lịch sử đơn hàng.  
\- Click TẠO ĐƠN MỚI → Sales POS.  
\- Click ĐẶT LẠI → reset bộ lọc.  
\- Click ÁP DỤNG BỘ LỌC → toast “Đã áp dụng bộ lọc.”  
\- Click dòng ORD0001 → mở drawer Thông tin nhanh đơn hàng.  
\- Click mã hóa đơn INV0001 → Hóa đơn.  
\- Click menu ba chấm ở ORD0001:  
  \- Xem chi tiết  
  \- Xem hóa đơn  
  \- In lại hóa đơn  
  \- Hủy đơn

Drawer Thông tin nhanh:  
\- Click X → đóng drawer.  
\- Click XEM HÓA ĐƠN → Hóa đơn.  
\- Click XEM CHI TIẾT ĐƠN HÀNG → Chi tiết đơn hàng.

Order History mobile:  
\- Table chuyển thành card list.  
\- Tap card ORD0001 → Chi tiết đơn hàng mobile.  
\- Tap icon filter → bottom sheet bộ lọc.  
\- Tap XEM HÓA ĐƠN → Invoice mobile.

\==================================================  
LUỒNG 4 — CHI TIẾT ĐƠN HÀNG  
\==================================================

Order Detail desktop:  
\- Click QUAY LẠI → Lịch sử đơn hàng.  
\- Click XEM HÓA ĐƠN → Hóa đơn.  
\- Click XEM CHI TIẾT CẢNH BÁO → mở modal cảnh báo tương tác đã xử lý.  
\- Click IN LẠI HÓA ĐƠN → toast “Đang gửi lệnh in hóa đơn.”  
\- Click HỦY ĐƠN → mở modal xác nhận hủy đơn.  
\- Click TẠO ĐƠN MỚI → Sales POS.

Modal xác nhận hủy đơn:  
\- Nếu chưa nhập lý do và click XÁC NHẬN HỦY → lỗi “Vui lòng nhập lý do hủy đơn.”  
\- Sau khi nhập lý do → click XÁC NHẬN HỦY.  
\- Đổi trạng thái đơn thành Đã hủy.  
\- Disable nút HỦY ĐƠN.  
\- Toast “Đã hủy đơn hàng ORD0001.”

Mobile Order Detail:  
\- Tap quay lại → Order History mobile.  
\- Tap XEM HÓA ĐƠN → Invoice mobile.  
\- Tap XEM CHI TIẾT CẢNH BÁO → modal hoặc bottom sheet cảnh báo.

\==================================================  
LUỒNG 5 — LỊCH SỬ THANH TOÁN  
\==================================================

Payment History desktop:  
\- Click menu Lịch sử thanh toán.  
\- Click bộ lọc phương thức: Tiền mặt.  
\- Click ÁP DỤNG → toast “Đã áp dụng bộ lọc.”  
\- Click dòng PAY001 → mở drawer chi tiết thanh toán.  
\- Click XEM ĐƠN HÀNG → Chi tiết đơn hàng ORD0001.  
\- Click XEM HÓA ĐƠN → Hóa đơn INV0001.  
\- Click mã đơn ORD0001 → Chi tiết đơn hàng.  
\- Click mã hóa đơn INV0001 → Hóa đơn.  
\- Click XUẤT EXCEL → toast “Xuất lịch sử thanh toán thành công.”

Mobile nếu có:  
\- Danh sách thanh toán chuyển thành card list.  
\- Tap PAY001 → mở chi tiết thanh toán hoặc bottom sheet.

\==================================================  
LUỒNG 6 — LỊCH SỬ HÓA ĐƠN  
\==================================================

Invoice History desktop:  
\- Click menu Lịch sử hóa đơn.  
\- Click Xem hóa đơn ở INV0001 → Hóa đơn.  
\- Click In lại → toast “Đang gửi lệnh in hóa đơn.”  
\- Click Tải PDF → toast “Tải hóa đơn thành công.”  
\- Click Gửi hóa đơn → mở modal gửi hóa đơn.  
\- Nhập email hoặc số điện thoại.  
\- Click GỬI HÓA ĐƠN → toast “Gửi hóa đơn thành công.”  
\- Click Xem bản in nếu có → Invoice Print View.

Mobile:  
\- Card hóa đơn mobile.  
\- Tap INV0001 → Invoice mobile.

\==================================================  
LUỒNG 7 — BÁO CÁO & THỐNG KÊ  
\==================================================

Reports desktop:  
\- Click menu Báo cáo.  
\- Chọn khoảng thời gian: 7 ngày.  
\- Click ÁP DỤNG BỘ LỌC → cập nhật chart.  
\- Click tab Doanh thu → hiển thị biểu đồ doanh thu.  
\- Click tab Thuốc bán chạy → hiển thị bảng top thuốc.  
\- Click Paracetamol trong bảng top thuốc → Chi tiết thuốc.  
\- Click tab Tồn kho → hiển thị báo cáo tồn đầu kỳ, nhập trong kỳ, bán trong kỳ, tồn cuối kỳ.  
\- Click tab Thanh toán → hiển thị tỷ lệ phương thức thanh toán.  
\- Click tab Tương tác thuốc → hiển thị số cảnh báo tương tác theo kỳ.  
\- Click XUẤT PDF → toast “Xuất PDF thành công.”  
\- Click XUẤT EXCEL → toast “Xuất Excel thành công.”

Reports mobile nếu có:  
\- Filter mở bằng bottom sheet.  
\- Các chart hiển thị dạng card xếp dọc.  
\- Bảng chuyển thành card list.

\==================================================  
QUY TẮC CHUNG  
\==================================================

\- Desktop dùng sidebar.  
\- Mobile dùng hamburger drawer.  
\- Desktop drawer mở từ phải.  
\- Mobile bottom sheet mở từ dưới lên.  
\- Filter mobile dùng bottom sheet.  
\- Toast desktop góc trên phải.  
\- Toast mobile phía dưới.  
\- Button chính dùng \#024ad8.  
\- Button danger dùng \#b3262b.  
\- Modal có overlay nền tối nhẹ.  
\- Dữ liệu ORD0001, INV0001, PAY001, KH001 phải thống nhất.  
\- Disclaimer cảnh báo thuốc phải giữ nguyên ở Order Detail và Interaction Alert.

---
