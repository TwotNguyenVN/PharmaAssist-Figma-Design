# **Prompt 1 — Luồng bán thuốc \+ thanh toán \+ hóa đơn**

Nối prototype cho nhóm luồng “Bán thuốc \+ cảnh báo tương tác \+ thanh toán \+ hóa đơn” của hệ thống PharmaAssist.

Mục tiêu:  
\- Tạo luồng demo chính để trình bày đồ án.  
\- Có desktop và mobile nếu frame tương ứng đã tồn tại.  
\- Tất cả text, toast, modal, trạng thái đều bằng tiếng Việt.  
\- Giữ dữ liệu demo thống nhất.

Kích thước:  
\- Desktop: w-screen h-screen.  
\- Mobile: responsive 320px–479px, không khóa theo một kích thước cố định.

Dữ liệu bắt buộc:  
\- Đơn hàng: ORD0001  
\- Hóa đơn: INV0001  
\- Khách hàng: Nguyễn Văn Minh  
\- Số điện thoại: 0901234567  
\- Nhân viên bán: Trần Thị B  
\- Tổng tiền: 130.000đ  
\- Thanh toán: Tiền mặt  
\- Cảnh báo tương tác: Ibuprofen 400mg \+ Warfarin 5mg  
\- Mức độ cảnh báo: Cao  
\- Trạng thái cảnh báo: Đã tư vấn

\==================================================  
LUỒNG 1 — KỊCH BẢN DEMO VÀ ĐĂNG NHẬP  
\==================================================

Desktop và Mobile:  
\- Màn hình bắt đầu: Kịch bản demo.  
\- Chỉnh dòng “Bỏ qua → Đăng nhập trực tiếp” thành button rõ ràng.  
\- Button có nền \#024ad8.  
\- Chữ màu trắng \#ffffff.  
\- Text button: BỎ QUA → ĐĂNG NHẬP TRỰC TIẾP  
\- Button cao tối thiểu 44px.  
\- Bo góc 4px.  
\- Đặt ở vị trí dễ thấy.  
\- Click button này → chuyển sang Login.

Login:  
\- Click ĐĂNG NHẬP → Dashboard.  
\- Click Quên mật khẩu? → Quên mật khẩu nếu frame đã có.  
\- Nếu dùng trạng thái lỗi demo → hiển thị “Sai email hoặc mật khẩu.”

Dashboard:  
\- Click TẠO ĐƠN BÁN → Bán thuốc tại quầy.  
\- Click cảnh báo tương tác gần đây ORD0001 nếu có → Chi tiết đơn hàng.

\==================================================  
LUỒNG 2 — BÁN THUỐC VÀ CẢNH BÁO TƯƠNG TÁC  
\==================================================

Desktop Sales POS:  
\- Click THÊM ở Paracetamol 500mg → thêm vào đơn, cập nhật tạm tính \+50.000đ.  
\- Click THÊM ở Ibuprofen 400mg → thêm vào đơn, cập nhật tạm tính \+32.000đ.  
\- Click THÊM ở Warfarin 5mg → thêm vào đơn, cập nhật tạm tính \+48.000đ.  
\- Tổng thanh toán hiển thị 130.000đ.  
\- Hiển thị card cảnh báo tương tác bên phải.  
\- Đổi trạng thái đơn thành “Có cảnh báo chưa xử lý”.  
\- Disable button THANH TOÁN.  
\- Click XEM CHI TIẾT CẢNH BÁO → mở modal Cảnh báo tương tác thuốc.

Mobile Sales POS:  
\- Dùng tab:  
  1\. Tìm thuốc  
  2\. Đơn hàng  
  3\. Cảnh báo  
  4\. Thanh toán  
\- Tap THÊM ở Paracetamol 500mg → thêm vào đơn.  
\- Tap THÊM ở Ibuprofen 400mg → thêm vào đơn.  
\- Tap THÊM ở Warfarin 5mg → thêm vào đơn.  
\- Hiển thị badge cảnh báo trên tab Cảnh báo.  
\- Tap tab Cảnh báo.  
\- Tap XEM CHI TIẾT CẢNH BÁO → mở modal hoặc bottom sheet cảnh báo tương tác.

Modal cảnh báo tương tác:  
\- Hiển thị cặp thuốc: Ibuprofen 400mg \+ Warfarin 5mg.  
\- Mức độ: Cao.  
\- Có mô tả nguy cơ, khuyến nghị xử lý, ghi chú tư vấn.  
\- Có checkbox: Tôi đã đọc cảnh báo và ghi nhận tư vấn.  
\- Có disclaimer:  
  “Thông tin cảnh báo chỉ mang tính tham khảo, không thay thế tư vấn của dược sĩ, bác sĩ hoặc chuyên gia y tế.”  
\- Button ĐÃ HIỂU VÀ TIẾP TỤC ban đầu disabled.  
\- Tick checkbox → button ĐÃ HIỂU VÀ TIẾP TỤC active.  
\- Click ĐÃ HIỂU VÀ TIẾP TỤC → đóng modal, quay lại Sales POS.  
\- Sau khi đóng modal:  
  \- Card cảnh báo chuyển sang trạng thái Đã tư vấn.  
  \- Checkbox Đã tư vấn cho khách hàng được tick.  
  \- Trạng thái đơn đổi thành Sẵn sàng thanh toán.  
  \- Button THANH TOÁN active.

\==================================================  
LUỒNG 3 — THANH TOÁN  
\==================================================

Desktop Payment:  
\- Click THANH TOÁN từ Sales POS → Thanh toán.  
\- Chọn phương thức thanh toán: Tiền mặt.  
\- Nhập Khách đưa: 150.000đ.  
\- Tự tính Tiền thối lại: 20.000đ.  
\- Click XÁC NHẬN THANH TOÁN.  
\- Chuyển sang state Đang xử lý thanh toán.  
\- Sau đó chuyển sang state Thanh toán thành công.  
\- Click XEM HÓA ĐƠN → Hóa đơn.

Mobile Payment:  
\- Tap THANH TOÁN từ tab Thanh toán → Payment mobile.  
\- Chọn Tiền mặt.  
\- Nhập 150.000đ.  
\- Hiển thị tiền thối lại 20.000đ.  
\- Tap XÁC NHẬN THANH TOÁN.  
\- Hiển thị loading “Đang xử lý thanh toán...”.  
\- Chuyển sang Thanh toán thành công.  
\- Tap XEM HÓA ĐƠN → Invoice mobile.

Trạng thái thanh toán thất bại nếu có:  
\- Click nhánh demo THẤT BẠI → hiển thị “Thanh toán không thành công”.  
\- Click THỬ LẠI → quay lại form thanh toán.

\==================================================  
LUỒNG 4 — HÓA ĐƠN  
\==================================================

Invoice desktop:  
\- Click IN HÓA ĐƠN → toast “Đang gửi lệnh in hóa đơn.”  
\- Click TẢI PDF → toast “Tải hóa đơn thành công.”  
\- Click GỬI HÓA ĐƠN → mở modal gửi hóa đơn.  
\- Trong modal gửi hóa đơn:  
  \- Nhập email hoặc số điện thoại.  
  \- Click GỬI HÓA ĐƠN → toast “Gửi hóa đơn thành công.”  
\- Click QUAY LẠI BÁN HÀNG → Sales POS.  
\- Click mã đơn ORD0001 nếu có → Chi tiết đơn hàng.

Invoice mobile:  
\- Tap IN HÓA ĐƠN → toast “Đang gửi lệnh in hóa đơn.”  
\- Tap TẢI PDF → toast “Tải hóa đơn thành công.”  
\- Tap quay lại → Chi tiết đơn hàng hoặc Sales POS tùy điểm vào.

Invoice Print View nếu có:  
\- Click Xem bản in hoặc In hóa đơn → Invoice Print View.  
\- Không hiển thị sidebar, top header hoặc navigation trong bản in.

\==================================================  
QUY TẮC CHUNG  
\==================================================

\- Desktop dùng sidebar.  
\- Mobile dùng hamburger drawer.  
\- Modal desktop dùng centered modal.  
\- Modal mobile dùng bottom sheet hoặc full-screen modal.  
\- Toast desktop ở góc trên phải.  
\- Toast mobile ở phía dưới hoặc phía trên.  
\- Dùng Smart Animate hoặc Instant 200–300ms.  
\- Button chính dùng \#024ad8.  
\- Button danger dùng \#b3262b.  
\- Không để hotspot bị thiếu trên mobile.  
\- Không làm thay đổi dữ liệu demo chuẩn.

---
