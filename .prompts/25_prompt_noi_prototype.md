# Prompt nối prototype thao tác demo 

Tạo prototype có thể thao tác cho luồng demo “Lịch sử đơn hàng → Chi tiết đơn hàng → Hóa đơn” của hệ thống PharmaAssist.

Ngôn ngữ:  
\- Toàn bộ giao diện và thông báo đều bằng tiếng Việt.

Mục tiêu:  
\- Người dùng có thể mở danh sách đơn hàng đã bán.  
\- Chọn một đơn hàng để xem thông tin nhanh.  
\- Mở màn hình Chi tiết đơn hàng.  
\- Xem hoặc in lại hóa đơn.  
\- Quay lại danh sách đơn hàng hoặc tạo đơn bán mới.

Luồng prototype chính:

1\. Từ Sidebar  
\- Click menu “Bán thuốc”.  
\- Mở submenu:  
  \- Tạo đơn bán  
  \- Lịch sử đơn hàng  
\- Click “Lịch sử đơn hàng”.  
\- Chuyển đến màn hình Lịch sử đơn hàng.  
\- Hiệu ứng chuyển trang: Smart Animate hoặc Instant, thời gian 200–300ms.

2\. Màn hình Lịch sử đơn hàng  
\- Click button “TẠO ĐƠN MỚI” → chuyển sang màn hình Bán thuốc tại quầy.  
\- Click “ĐẶT LẠI” → đưa tất cả bộ lọc về giá trị mặc định.  
\- Click “ÁP DỤNG BỘ LỌC” → cập nhật bảng và hiển thị toast:  
  “Đã áp dụng bộ lọc.”  
\- Click số trang hoặc nút trang trước/trang sau → chuyển trạng thái phân trang.  
\- Click mã hóa đơn “INV0001” → chuyển trực tiếp sang màn hình Hóa đơn.  
\- Click một dòng đơn hàng, ví dụ ORD0001 → mở drawer “Thông tin nhanh đơn hàng” từ bên phải.  
\- Drawer mở bằng hiệu ứng Move In từ phải, thời gian 300ms.

3\. Drawer Thông tin nhanh đơn hàng  
Hiển thị:  
\- Mã đơn hàng: ORD0001  
\- Khách hàng: Nguyễn Văn Minh  
\- Ngày tạo: 30/05/2026 09:10  
\- Nhân viên bán: Trần Thị B  
\- Trạng thái: Đã thanh toán  
\- Tổng tiền: 130.000đ  
\- Phương thức thanh toán: Tiền mặt  
\- Mã hóa đơn: INV0001

Thao tác:  
\- Click nút X hoặc click vùng nền ngoài drawer → đóng drawer.  
\- Click “XEM HÓA ĐƠN” → chuyển sang màn hình Hóa đơn.  
\- Click “XEM CHI TIẾT ĐƠN HÀNG” → chuyển sang màn hình Chi tiết đơn hàng.

4\. Màn hình Chi tiết đơn hàng  
\- Click “QUAY LẠI” → quay về màn hình Lịch sử đơn hàng.  
\- Click “XEM HÓA ĐƠN” → chuyển sang màn hình Hóa đơn.  
\- Click “XEM CHI TIẾT CẢNH BÁO” → mở modal Cảnh báo tương tác thuốc.  
\- Click “IN LẠI HÓA ĐƠN” → hiển thị toast:  
  “Đang gửi lệnh in hóa đơn.”  
\- Click “HỦY ĐƠN” → mở modal xác nhận hủy đơn.  
\- Click “TẠO ĐƠN MỚI” → chuyển sang màn hình Bán thuốc tại quầy.

5\. Modal Cảnh báo tương tác thuốc  
Hiển thị:  
\- Cặp thuốc: Ibuprofen 400mg \+ Warfarin 5mg  
\- Mức độ: Cao  
\- Trạng thái xử lý: Đã tư vấn  
\- Ghi chú tư vấn: Đã thông báo cảnh báo cho khách hàng.  
\- Disclaimer:  
  “Thông tin cảnh báo chỉ mang tính tham khảo, không thay thế tư vấn của dược sĩ, bác sĩ hoặc chuyên gia y tế.”

Thao tác:  
\- Click “QUAY LẠI ĐƠN HÀNG” → đóng modal.  
\- Click nút X → đóng modal.  
\- Không thay đổi trạng thái đơn hàng vì đây là màn hình xem lại lịch sử.

6\. Modal Xác nhận hủy đơn  
Hiển thị:  
\- Tiêu đề: Xác nhận hủy đơn hàng  
\- Nội dung: Bạn có chắc chắn muốn hủy đơn hàng ORD0001?  
\- Textarea: Nhập lý do hủy đơn  
\- Button outline: QUAY LẠI  
\- Button danger: XÁC NHẬN HỦY

Thao tác:  
\- Click “QUAY LẠI” → đóng modal.  
\- Click “XÁC NHẬN HỦY” khi chưa nhập lý do → hiển thị lỗi:  
  “Vui lòng nhập lý do hủy đơn.”  
\- Sau khi nhập lý do và click “XÁC NHẬN HỦY”:  
  \- Đóng modal.  
  \- Đổi trạng thái đơn thành “Đã hủy”.  
  \- Disable nút “HỦY ĐƠN”.  
  \- Hiển thị toast: “Đã hủy đơn hàng ORD0001.”

7\. Màn hình Hóa đơn  
\- Click “QUAY LẠI” → quay về Chi tiết đơn hàng.  
\- Click “IN HÓA ĐƠN” → hiển thị toast:  
  “Đang gửi lệnh in hóa đơn.”  
\- Click “TẢI PDF” → hiển thị toast:  
  “Tải hóa đơn thành công.”  
\- Click “GỬI HÓA ĐƠN” → mở modal nhập email hoặc số điện thoại.  
\- Click “QUAY LẠI BÁN HÀNG” → chuyển sang màn hình Bán thuốc tại quầy.

8\. Màn hình Bán thuốc tại quầy  
\- Click submenu “Lịch sử đơn hàng” trong sidebar → quay lại màn hình Lịch sử đơn hàng.  
\- Click “THÊM” trên thuốc → thêm thuốc vào đơn hiện tại.  
\- Click “THANH TOÁN” → chuyển sang màn hình Thanh toán.

9\. Trạng thái toast  
Tạo các toast ở góc trên bên phải:  
\- Đã áp dụng bộ lọc.  
\- Đang gửi lệnh in hóa đơn.  
\- Tải hóa đơn thành công.  
\- Đã hủy đơn hàng ORD0001.  
\- Không thể thực hiện thao tác, vui lòng thử lại.

Toast:  
\- Tự đóng sau 2–3 giây.  
\- Có icon trạng thái.  
\- Có nút đóng X.

10\. Quy tắc prototype  
\- Tất cả nút phải có trạng thái hover, pressed và disabled.  
\- Drawer và modal phải có overlay nền tối nhẹ.  
\- Modal đóng khi click X hoặc click vùng ngoài.  
\- Nút chính dùng màu \#024ad8.  
\- Nút danger dùng màu \#b3262b.  
\- Button và input bo góc 4px.  
\- Card, modal và drawer bo góc 16px.  
\- Sử dụng Smart Animate 200–300ms cho drawer, modal và chuyển trạng thái.  
\- Giữ nguyên dữ liệu mẫu khi chuyển giữa Lịch sử đơn hàng, Chi tiết đơn hàng và Hóa đơn.

Luồng demo đề xuất:  
Dashboard  
→ Lịch sử đơn hàng  
→ Click ORD0001  
→ Drawer thông tin nhanh  
→ Xem chi tiết đơn hàng  
→ Xem chi tiết cảnh báo  
→ Đóng modal cảnh báo  
→ Xem hóa đơn  
→ In hóa đơn  
→ Quay lại chi tiết đơn hàng  
→ Quay lại lịch sử đơn hàng  
→ Tạo đơn mới

Dựa trên bộ prompt bạn đã dùng, bước tiếp theo nên là **gửi các prompt nâng cấp**, không tạo lại các màn hình cũ. Bộ hiện tại đã bao phủ hầu hết chức năng chính, nhưng còn thiếu quản lý nhà cung cấp, lịch sử biến động kho, trạng thái thanh toán lỗi, bản in hóa đơn và một số quy tắc nhất quán dữ liệu.

Hãy gửi cho Figma theo đúng thứ tự dưới đây.
