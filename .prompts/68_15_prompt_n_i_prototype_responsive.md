# **15\. Prompt nối prototype responsive**

Tạo prototype responsive cho PharmaAssist, gồm luồng desktop và mobile.

Kích thước:  
\- Desktop: w-screen h-screen.  
\- Mobile: 390x844.

Luồng desktop:  
1\. Login desktop → Dashboard desktop.  
2\. Dashboard desktop → Sales POS desktop.  
3\. Sales POS desktop → Drug Interaction Alert desktop.  
4\. Drug Interaction Alert desktop → Sales POS desktop.  
5\. Sales POS desktop → Payment desktop.  
6\. Payment desktop → Invoice desktop.  
7\. Invoice desktop → Order History desktop.  
8\. Order History desktop → Order Detail desktop.  
9\. Order Detail desktop → Invoice desktop.

Luồng mobile:  
1\. Login mobile → Dashboard mobile.  
2\. Dashboard mobile → Sales POS mobile.  
3\. Sales POS mobile tab Tìm thuốc → thêm thuốc.  
4\. Sales POS mobile tab Cảnh báo → mở Drug Interaction Alert mobile.  
5\. Drug Interaction Alert mobile → quay lại Sales POS mobile.  
6\. Sales POS mobile tab Thanh toán → Payment mobile.  
7\. Payment mobile → Invoice mobile.  
8\. Invoice mobile → Order History mobile.  
9\. Order History mobile → Order Detail mobile.  
10\. Order Detail mobile → Invoice mobile.

Navigation:  
\- Desktop dùng sidebar.  
\- Mobile dùng hamburger drawer.  
\- Click hamburger mở mobile menu.  
\- Click overlay đóng mobile menu.

Interactions:  
\- Drawer dùng Move In 300ms.  
\- Modal dùng Smart Animate hoặc Dissolve 200ms.  
\- Bottom sheet mobile dùng Move In từ dưới lên.  
\- Toast hiển thị góc trên phải trên desktop.  
\- Toast hiển thị phía dưới hoặc trên cùng trên mobile.

Yêu cầu:  
\- Desktop và mobile dùng cùng dữ liệu demo.  
\- ORD0001, INV0001, Nguyễn Văn Minh và cảnh báo Ibuprofen \+ Warfarin phải thống nhất.  
\- Tất cả text tiếng Việt.  
\- Tất cả button chính dùng \#024ad8.

---

# **Cách làm thực tế trong Figma**

Bạn nên gửi theo thứ tự này:

1\. Prompt nền responsive  
2\. Login responsive  
3\. Dashboard responsive  
4\. Sales POS responsive  
5\. Drug Interaction Alert responsive  
6\. Order History responsive  
7\. Order Detail responsive  
8\. Invoice responsive  
9\. Inventory responsive  
10\. Customer Detail responsive  
11\. AI Copilot responsive  
12\. Mobile menu  
13\. Responsive component rules  
14\. Prototype responsive

Không cần responsive tất cả 35+ màn hình. Với đồ án, chỉ cần responsive cho **màn hình lõi** là đủ để chứng minh bạn có tư duy UI/UX tốt.

Dưới đây là **prompt nối prototype thao tác demo** cho Figma. Prompt này dùng cho cả **desktop `w-screen h-screen`** và **mobile `390x844`**, đồng thời nối các màn hình chính bạn đã tạo.

Tạo prototype thao tác demo hoàn chỉnh cho hệ thống PharmaAssist.

Mục tiêu:  
\- Nối các màn hình thành các luồng demo rõ ràng để trình bày đồ án.  
\- Prototype phải thao tác được bằng click/tap.  
\- Toàn bộ text, toast, modal, label, trạng thái đều dùng tiếng Việt.  
\- Dữ liệu giữa các màn hình phải thống nhất.  
\- Hỗ trợ cả desktop và mobile.

Kích thước:  
\- Desktop: w-screen h-screen.  
\- Mobile: 390x844.

Phong cách giữ nguyên:  
\- Nền nội dung \#f7f7f7.  
\- Card trắng bo 16px.  
\- CTA chính \#024ad8.  
\- Danger \#b3262b.  
\- Chữ chính \#1a1a1a.  
\- Button/input bo 4px.  
\- Font Inter hoặc Manrope.

Dữ liệu demo bắt buộc giữ thống nhất:  
\- Đơn hàng: ORD0001  
\- Hóa đơn: INV0001  
\- Khách hàng: Nguyễn Văn Minh  
\- Số điện thoại: 0901234567  
\- Nhân viên bán: Trần Thị B  
\- Tổng tiền: 130.000đ  
\- Thanh toán: Tiền mặt  
\- Trạng thái đơn: Đã thanh toán  
\- Cảnh báo tương tác: Ibuprofen 400mg \+ Warfarin 5mg  
\- Mức độ cảnh báo: Cao  
\- Trạng thái cảnh báo: Đã tư vấn

\==================================================  
A. LUỒNG DEMO 1 — ĐĂNG NHẬP VÀ DASHBOARD  
\==================================================

Desktop:  
1\. Login desktop  
\- Click button “ĐĂNG NHẬP” → chuyển sang Dashboard desktop.  
\- Click link “Quên mật khẩu?” → chuyển sang màn hình Quên mật khẩu desktop nếu có.  
\- Nếu click login sai demo state → hiển thị lỗi “Sai email hoặc mật khẩu.”

Mobile:  
1\. Login mobile  
\- Tap button “ĐĂNG NHẬP” → chuyển sang Dashboard mobile.  
\- Tap “Quên mật khẩu?” → chuyển sang Quên mật khẩu mobile nếu có.

Dashboard desktop:  
\- Click “TẠO ĐƠN BÁN” → Sales POS desktop.  
\- Click “NHẬP THUỐC” → Tạo phiếu nhập thuốc desktop.  
\- Click “XEM TỒN KHO” hoặc task cảnh báo kho → Quản lý tồn kho desktop.  
\- Click “XEM BÁO CÁO” → Báo cáo & thống kê desktop.  
\- Click một cảnh báo tương tác gần đây ORD0001 → Chi tiết đơn hàng desktop.

Dashboard mobile:  
\- Tap hamburger → mở mobile drawer menu.  
\- Tap “TẠO ĐƠN BÁN” → Sales POS mobile.  
\- Tap “Xem kho” trong card cảnh báo kho → Inventory mobile.  
\- Tap cảnh báo tương tác ORD0001 → Order Detail mobile.

Transition:  
\- Chuyển trang dùng Smart Animate hoặc Instant 200ms.  
\- Mobile drawer dùng Move In từ trái 300ms.

\==================================================  
B. LUỒNG DEMO 2 — BÁN THUỐC VÀ CẢNH BÁO TƯƠNG TÁC  
\==================================================

Desktop Sales POS:  
1\. Click “THÊM” ở Paracetamol 500mg  
\- Thêm thuốc vào đơn hiện tại.  
\- Cập nhật tạm tính \+50.000đ.

2\. Click “THÊM” ở Ibuprofen 400mg  
\- Thêm thuốc vào đơn.  
\- Cập nhật tạm tính \+32.000đ.

3\. Click “THÊM” ở Warfarin 5mg  
\- Thêm thuốc vào đơn.  
\- Cập nhật tạm tính \+48.000đ.  
\- Tổng thanh toán hiển thị 130.000đ.  
\- Hiển thị card cảnh báo tương tác bên phải.  
\- Đổi trạng thái đơn thành “Có cảnh báo chưa xử lý”.  
\- Disable button “THANH TOÁN”.

4\. Click “XEM CHI TIẾT CẢNH BÁO”  
\- Mở modal “Cảnh báo tương tác thuốc”.

Modal cảnh báo desktop:  
\- Hiển thị cặp thuốc: Ibuprofen 400mg \+ Warfarin 5mg.  
\- Mức độ: Cao.  
\- Có mô tả nguy cơ, khuyến nghị xử lý, ghi chú tư vấn.  
\- Có disclaimer:  
  “Thông tin cảnh báo chỉ mang tính tham khảo, không thay thế tư vấn của dược sĩ, bác sĩ hoặc chuyên gia y tế.”

Tương tác trong modal:  
\- Button “ĐÃ HIỂU VÀ TIẾP TỤC” ban đầu disabled.  
\- Tick checkbox “Tôi đã đọc cảnh báo và ghi nhận tư vấn” → button active.  
\- Click “ĐÃ HIỂU VÀ TIẾP TỤC” → đóng modal, quay lại Sales POS.  
\- Sau khi đóng modal:  
  \- Card cảnh báo chuyển trạng thái “Đã tư vấn”.  
  \- Checkbox “Đã tư vấn cho khách hàng” được tick.  
  \- Trạng thái đơn đổi thành “Sẵn sàng thanh toán”.  
  \- Button “THANH TOÁN” active.

5\. Click “THANH TOÁN”  
\- Chuyển sang Payment desktop.

Mobile Sales POS:  
\- Dùng tab:  
  1\. Tìm thuốc  
  2\. Đơn hàng  
  3\. Cảnh báo  
  4\. Thanh toán

Mobile flow:  
1\. Tap tab “Tìm thuốc”.  
2\. Tap “THÊM” ở Paracetamol.  
3\. Tap “THÊM” ở Ibuprofen.  
4\. Tap “THÊM” ở Warfarin.  
5\. Hiển thị badge cảnh báo trên tab “Cảnh báo”.  
6\. Tap tab “Cảnh báo”.  
7\. Tap “XEM CHI TIẾT CẢNH BÁO” → mở Drug Interaction Alert mobile.  
8\. Tick checkbox xác nhận.  
9\. Tap “ĐÃ HIỂU VÀ TIẾP TỤC” → quay lại Sales POS mobile.  
10\. Tap tab “Thanh toán”.  
11\. Tap button “THANH TOÁN” → Payment mobile.

Transition:  
\- Modal desktop dùng Dissolve 200ms.  
\- Modal mobile dùng bottom sheet hoặc full-screen modal Move In từ dưới 300ms.  
\- Tab mobile dùng Smart Animate 200ms.

\==================================================  
C. LUỒNG DEMO 3 — THANH TOÁN VÀ HÓA ĐƠN  
\==================================================

Payment desktop:  
1\. Chọn phương thức thanh toán: “Tiền mặt”.  
2\. Nhập “Khách đưa”: 150.000đ.  
3\. Tự tính “Tiền thối lại”: 20.000đ.  
4\. Click “XÁC NHẬN THANH TOÁN”.  
5\. Chuyển sang trạng thái “Đang xử lý thanh toán”.  
6\. Sau đó chuyển sang state “Thanh toán thành công”.  
7\. Click “XEM HÓA ĐƠN” → Invoice desktop.

Payment mobile:  
1\. Tap chọn “Tiền mặt”.  
2\. Nhập 150.000đ.  
3\. Hiển thị tiền thối lại 20.000đ.  
4\. Tap “XÁC NHẬN THANH TOÁN”.  
5\. Hiển thị loading state “Đang xử lý thanh toán...”.  
6\. Chuyển sang state “Thanh toán thành công”.  
7\. Tap “XEM HÓA ĐƠN” → Invoice mobile.

Invoice desktop:  
\- Click “IN HÓA ĐƠN” → hiển thị toast “Đang gửi lệnh in hóa đơn.”  
\- Click “TẢI PDF” → hiển thị toast “Tải hóa đơn thành công.”  
\- Click “GỬI HÓA ĐƠN” → mở modal gửi hóa đơn.  
\- Click “QUAY LẠI BÁN HÀNG” → Sales POS desktop.  
\- Click mã đơn ORD0001 nếu có → Chi tiết đơn hàng desktop.

Invoice mobile:  
\- Tap “IN HÓA ĐƠN” → toast “Đang gửi lệnh in hóa đơn.”  
\- Tap “TẢI PDF” → toast “Tải hóa đơn thành công.”  
\- Tap quay lại → Order Detail mobile hoặc Sales POS mobile tùy điểm vào.

Toast:  
\- Desktop: góc trên bên phải.  
\- Mobile: phía dưới màn hình hoặc phía trên nội dung.  
\- Tự đóng sau 2–3 giây.  
\- Có icon và nút đóng X.

\==================================================  
D. LUỒNG DEMO 4 — LỊCH SỬ ĐƠN HÀNG VÀ CHI TIẾT ĐƠN  
\==================================================

Desktop:  
1\. Từ sidebar, click “Bán thuốc”.  
2\. Mở submenu:  
   \- Tạo đơn bán  
   \- Lịch sử đơn hàng  
   \- Lịch sử thanh toán  
   \- Lịch sử hóa đơn  
3\. Click “Lịch sử đơn hàng” → Order History desktop.

Order History desktop:  
\- Click “TẠO ĐƠN MỚI” → Sales POS desktop.  
\- Click “ĐẶT LẠI” → reset bộ lọc.  
\- Click “ÁP DỤNG BỘ LỌC” → toast “Đã áp dụng bộ lọc.”  
\- Click dòng ORD0001 → mở drawer “Thông tin nhanh đơn hàng” từ bên phải.  
\- Click mã hóa đơn INV0001 → Invoice desktop.

Drawer thông tin nhanh:  
\- Click X hoặc overlay → đóng drawer.  
\- Click “XEM HÓA ĐƠN” → Invoice desktop.  
\- Click “XEM CHI TIẾT ĐƠN HÀNG” → Order Detail desktop.

Order Detail desktop:  
\- Click “QUAY LẠI” → Order History desktop.  
\- Click “XEM HÓA ĐƠN” → Invoice desktop.  
\- Click “XEM CHI TIẾT CẢNH BÁO” → mở modal cảnh báo tương tác.  
\- Click “IN LẠI HÓA ĐƠN” → toast “Đang gửi lệnh in hóa đơn.”  
\- Click “HỦY ĐƠN” → mở modal xác nhận hủy đơn.  
\- Click “TẠO ĐƠN MỚI” → Sales POS desktop.

Modal xác nhận hủy đơn:  
\- Tiêu đề: Xác nhận hủy đơn hàng.  
\- Textarea: Nhập lý do hủy đơn.  
\- Click “XÁC NHẬN HỦY” khi chưa nhập lý do → lỗi “Vui lòng nhập lý do hủy đơn.”  
\- Sau khi nhập lý do và click “XÁC NHẬN HỦY”:  
  \- Đóng modal.  
  \- Đổi trạng thái đơn thành “Đã hủy”.  
  \- Disable nút “HỦY ĐƠN”.  
  \- Toast: “Đã hủy đơn hàng ORD0001.”

Mobile:  
1\. Từ mobile drawer menu, tap “Lịch sử đơn hàng”.  
2\. Chuyển sang Order History mobile.  
3\. Tap card ORD0001 → Order Detail mobile.  
4\. Tap “XEM HÓA ĐƠN” → Invoice mobile.  
5\. Tap quay lại → Order Detail mobile.  
6\. Tap quay lại → Order History mobile.

Transition:  
\- Desktop drawer Move In từ phải 300ms.  
\- Mobile chuyển card detail dùng Smart Animate 200ms.  
\- Modal xác nhận dùng Dissolve 200ms.

\==================================================  
E. LUỒNG DEMO 5 — KHO THUỐC VÀ NHẬP THUỐC  
\==================================================

Desktop:  
1\. Từ Dashboard, click task “3 thuốc sắp hết cần nhập thêm” hoặc menu “Tồn kho”.  
2\. Chuyển sang Inventory desktop.  
3\. Click dòng MED001 Paracetamol 500mg.  
4\. Mở drawer chi tiết lô thuốc hoặc chuyển sang Batch / Lot Detail.  
5\. Click “XEM LỊCH SỬ BIẾN ĐỘNG” → mở drawer Lịch sử biến động kho.  
6\. Click “TẠO PHIẾU NHẬP” → Stock Import desktop.

Stock Import desktop:  
1\. Chọn nhà cung cấp: Công ty Dược An Tâm.  
2\. Chọn thuốc: Paracetamol 500mg.  
3\. Nhập số lượng: 70\.  
4\. Nhập giá nhập: 18.000đ.  
5\. Chọn hạn sử dụng: 31/12/2026.  
6\. Click “THÊM VÀO PHIẾU”.  
7\. Click “LƯU NHÁP” → toast “Đã lưu nháp phiếu nhập.”  
8\. Click “XÁC NHẬN NHẬP KHO” → mở modal xác nhận nhập kho.  
9\. Click “XÁC NHẬN NHẬP KHO” trong modal.  
10\. Chuyển trạng thái phiếu sang “Đã nhập kho”.  
11\. Toast “Nhập kho thành công.”  
12\. Chuyển sang Chi tiết phiếu nhập hoặc Lịch sử nhập thuốc.

Chi tiết phiếu nhập:  
\- Click “XEM BIẾN ĐỘNG KHO” → mở drawer biến động kho.  
\- Click “XEM NHÀ CUNG CẤP” → Supplier Detail.  
\- Click “IN PHIẾU NHẬP” → toast.

Mobile:  
\- Nếu có Inventory mobile:  
  \- Tap card MED001 → Batch Detail mobile.  
  \- Tap “BIẾN ĐỘNG KHO” → bottom sheet biến động kho.  
  \- Tap “TẠO PHIẾU NHẬP” → Stock Import mobile nếu có.  
\- Nếu chưa có mobile kho, chuyển về desktop flow.

\==================================================  
F. LUỒNG DEMO 6 — KHÁCH HÀNG  
\==================================================

Desktop:  
1\. Click menu “Khách hàng” → Customer Management desktop.  
2\. Click dòng KH001 Nguyễn Văn Minh → Customer Detail desktop.  
3\. Click “XEM TOÀN BỘ LỊCH SỬ MUA” → Customer Purchase History desktop.  
4\. Click ORD0001 → Order Detail desktop.  
5\. Click “TẠO ĐƠN BÁN CHO KHÁCH” → Sales POS desktop với khách hàng Nguyễn Văn Minh được chọn sẵn.

Mobile:  
1\. Từ mobile drawer, tap “Khách hàng” nếu có.  
2\. Tap khách hàng Nguyễn Văn Minh → Customer Detail mobile.  
3\. Tap “LỊCH SỬ MUA” → Customer Purchase History mobile.  
4\. Tap ORD0001 → Order Detail mobile.  
5\. Tap “TẠO ĐƠN BÁN” → Sales POS mobile.

\==================================================  
G. LUỒNG DEMO 7 — AI COPILOT VÀ NHẬT KÝ AI  
\==================================================

Desktop AI Copilot:  
1\. Click menu “AI Copilot”.  
2\. Click quick prompt “Giải thích cảnh báo tương tác”.  
3\. Hiển thị tin nhắn AI mẫu giải thích cảnh báo Ibuprofen \+ Warfarin.  
4\. Hiển thị disclaimer:  
   “Nội dung AI chỉ mang tính tham khảo, không thay thế tư vấn của dược sĩ, bác sĩ hoặc chuyên gia y tế.”  
5\. Click “TẠO GHI CHÚ TƯ VẤN”.  
6\. Hiển thị ghi chú nháp.  
7\. Click “LƯU VÀO GHI CHÚ” → toast “Đã lưu ghi chú tư vấn.”  
8\. Click “Xem nhật ký AI” hoặc menu “Nhật ký AI” → AI Audit Log.

AI Audit Log:  
\- Click dòng log ORD0001 → mở drawer chi tiết log.  
\- Click “SAO CHÉP LOG” → toast “Đã sao chép log.”  
\- Click filter “Bị chặn bởi guardrail” → hiển thị log yêu cầu bị chặn.

Mobile AI Copilot:  
\- Dùng tab Chat / Ngữ cảnh / Ghi chú nháp.  
\- Tap quick prompt → tạo phản hồi.  
\- Tap “LƯU VÀO GHI CHÚ” → toast.

\==================================================  
H. LUỒNG DEMO 8 — PHÂN QUYỀN VÀ SIDEBAR THEO VAI TRÒ  
\==================================================

Desktop:  
1\. Click menu “Vai trò & phân quyền”.  
2\. Click vai trò “Admin / Chủ nhà thuốc”.  
3\. Hiển thị toàn quyền.  
4\. Click vai trò “Nhân viên nhà thuốc”.  
5\. Hiển thị quyền bán thuốc, khách hàng, hóa đơn, AI Copilot.  
6\. Click vai trò “Nhân viên kho”.  
7\. Hiển thị quyền tồn kho, nhập thuốc, nhà cung cấp.  
8\. Tick hoặc bỏ tick một quyền.  
9\. Hiển thị banner “Bạn có thay đổi chưa được lưu.”  
10\. Click “LƯU PHÂN QUYỀN” → toast “Cập nhật phân quyền thành công.”

Sidebar role switching demo:  
\- Click dropdown vai trò hoặc avatar.  
\- Chọn Admin → sidebar Admin.  
\- Chọn Nhân viên nhà thuốc → sidebar Staff.  
\- Chọn Nhân viên kho → sidebar Warehouse.

Mobile:  
\- Trong mobile drawer, hiển thị menu tương ứng theo vai trò.  
\- Tap avatar hoặc role switch demo → đổi menu.

\==================================================  
I. LUỒNG DEMO 9 — THÔNG BÁO, CÀI ĐẶT, SAO LƯU  
\==================================================

Notification Center:  
\- Click icon chuông → Trung tâm thông báo.  
\- Click thông báo “Thuốc sắp hết” → Inventory.  
\- Click thông báo “Cảnh báo tương tác thuốc” → Order Detail.  
\- Click “ĐÁNH DẤU TẤT CẢ ĐÃ ĐỌC” → tất cả thông báo chuyển đã đọc.

Settings:  
\- Click menu “Cài đặt”.  
\- Click từng tab:  
  \- Thông tin nhà thuốc  
  \- Bán hàng  
  \- Tồn kho  
  \- Hóa đơn  
  \- AI & an toàn  
\- Toggle một cài đặt.  
\- Hiển thị banner “Bạn có thay đổi chưa được lưu.”  
\- Click “LƯU CÀI ĐẶT” → toast “Lưu cài đặt thành công.”

Backup / Export:  
\- Click “Sao lưu và xuất dữ liệu”.  
\- Click “TẠO BẢN SAO LƯU” → loading → toast “Tạo bản sao lưu thành công.”  
\- Chọn nhóm dữ liệu và định dạng Excel.  
\- Click “XUẤT DỮ LIỆU” → modal xác nhận.  
\- Click “XÁC NHẬN XUẤT” → toast “Xuất dữ liệu thành công.”

\==================================================  
J. LUỒNG DEMO 10 — TRANG KỊCH BẢN DEMO  
\==================================================

Demo Scenario Page:  
\- Click menu “Kịch bản demo”.  
\- Hiển thị 5 card demo:  
  1\. Luồng bán thuốc và cảnh báo tương tác  
  2\. Luồng quản lý kho và nhập thuốc  
  3\. Luồng tra cứu đơn hàng  
  4\. Luồng AI Copilot  
  5\. Luồng phân quyền

Prototype:  
\- Click “BẮT ĐẦU DEMO” ở card 1 → Sales POS.  
\- Click “BẮT ĐẦU DEMO” ở card 2 → Inventory.  
\- Click “BẮT ĐẦU DEMO” ở card 3 → Order History.  
\- Click “BẮT ĐẦU DEMO” ở card 4 → AI Copilot.  
\- Click “BẮT ĐẦU DEMO” ở card 5 → Role & Permission.  
\- Click “QUAY VỀ DASHBOARD” → Dashboard.

\==================================================  
K. QUY TẮC CHUNG CHO PROTOTYPE  
\==================================================

1\. Navigation  
\- Desktop dùng sidebar.  
\- Mobile dùng hamburger drawer.  
\- Click logo PharmaAssist hoặc Dashboard → Dashboard.

2\. Modal  
\- Có overlay nền tối nhẹ.  
\- Đóng khi click X.  
\- Đóng khi click overlay nếu không phải modal xác nhận quan trọng.  
\- Desktop modal centered.  
\- Mobile modal là full-screen hoặc bottom sheet.

3\. Drawer  
\- Desktop drawer mở từ phải.  
\- Mobile drawer mở từ trái cho menu, bottom sheet cho filter.

4\. Toast  
\- Tự đóng sau 2–3 giây.  
\- Có icon trạng thái.  
\- Có nút đóng X.  
\- Desktop toast góc trên phải.  
\- Mobile toast ở dưới hoặc trên cùng.

5\. Button states  
\- Mọi button có default, hover, pressed, disabled.  
\- Button chính dùng \#024ad8.  
\- Button danger dùng \#b3262b.  
\- Disabled dùng màu xám.

6\. Form validation  
\- Nếu trường bắt buộc trống, hiển thị lỗi dưới input.  
\- Input lỗi có viền danger.  
\- Không cho submit nếu dữ liệu bắt buộc chưa hợp lệ.

7\. Responsive  
\- Desktop frame dùng w-screen h-screen.  
\- Mobile frame dùng 390x844.  
\- Desktop bảng giữ dạng table.  
\- Mobile bảng chuyển thành card list.  
\- Desktop sidebar cố định.  
\- Mobile sidebar chuyển thành hamburger drawer.

8\. Data consistency  
\- ORD0001, INV0001, Nguyễn Văn Minh, Trần Thị B và tổng tiền 130.000đ phải thống nhất ở tất cả màn hình.  
\- Cảnh báo Ibuprofen 400mg \+ Warfarin 5mg phải thống nhất ở Sales POS, Interaction Alert, Order Detail, AI Copilot và AI Audit Log.  
\- Dữ liệu thuốc phải thống nhất với tồn kho chuẩn.

9\. Safety disclaimer  
Luôn hiển thị disclaimer ở các màn hình liên quan đến cảnh báo thuốc hoặc AI:  
“Thông tin cảnh báo chỉ mang tính tham khảo, không thay thế tư vấn của dược sĩ, bác sĩ hoặc chuyên gia y tế.”

\==================================================  
L. LUỒNG DEMO NGẮN NÊN ĐÁNH DẤU LÀ PRIMARY FLOW  
\==================================================

Đánh dấu flow chính để trình bày bảo vệ:

Login  
→ Dashboard  
→ Sales POS  
→ Thêm Paracetamol  
→ Thêm Ibuprofen  
→ Thêm Warfarin  
→ Drug Interaction Alert  
→ Xác nhận tư vấn  
→ Payment  
→ Invoice  
→ Order History  
→ Order Detail  
→ AI Copilot  
→ AI Audit Log

Tạo các hotspot rõ ràng cho từng bước để người trình bày chỉ cần click theo thứ tự.

Bạn có thể gửi nguyên prompt này cho Figma sau khi đã tạo đủ các màn hình. Nếu Figma bị quá tải, hãy tách prompt theo từng flow: **Bán thuốc**, **Lịch sử đơn hàng**, **Kho thuốc**, **AI**, **Phân quyền**.

Chuyển giao diện PharmaAssist thành responsive design cho nhiều kích thước thiết bị.

Kích thước:  
\- Desktop: w-screen h-screen.  
\- Tablet: responsive từ 768px đến 1023px.  
\- Mobile: responsive từ 320px đến 479px.  
\- Dùng 390px làm frame tham chiếu, không khóa layout ở 390px.

Quy tắc mobile:  
\- Tất cả layout chính dùng Auto Layout.  
\- Container, card, input và button dùng Fill Container.  
\- Padding ngang mặc định 16px.  
\- Với màn hình nhỏ từ 320px đến 359px, giảm padding ngang còn 12px.  
\- Nội dung chuyển thành 1 cột.  
\- Text dài phải tự xuống dòng.  
\- Không dùng bảng ngang; chuyển bảng thành card list.  
\- Sidebar chuyển thành hamburger drawer.  
\- Modal chuyển thành full-screen modal hoặc bottom sheet.  
\- Button chính full width.  
\- Touch target tối thiểu 44x44px.  
\- Không để nội dung bị tràn ngang.  
\- Kiểm tra giao diện ở các chiều rộng 320px, 360px, 390px, 412px và 430px.

Quy tắc tablet:  
\- Dùng layout 1 hoặc 2 cột tùy nội dung.  
\- Sidebar có thể thu gọn thành icon rail hoặc drawer.  
\- Bảng có thể giữ dạng table nếu đủ chỗ, nếu không thì chuyển card list.

Quy tắc desktop:  
\- Sidebar cố định.  
\- Nội dung có thể chia 2 hoặc 3 cột.  
\- Bảng hiển thị đầy đủ.

### **5\. Tạo prompt kiểm tra responsive**

Bạn có thể gửi prompt này cho Figma:

Rà soát toàn bộ giao diện responsive của PharmaAssist.

Mục tiêu:  
\- Kiểm tra giao diện hoạt động tốt trên nhiều kích thước màn hình.  
\- Không khóa layout theo một kích thước mobile cố định.

Breakpoint:  
\- Mobile Small: 320px–359px  
\- Mobile: 360px–389px  
\- Mobile Large: 390px–479px  
\- Tablet: 768px–1023px  
\- Desktop: từ 1024px trở lên

Yêu cầu:  
\- Dùng Auto Layout cho các frame chính.  
\- Dùng Fill Container cho container, card, input và button.  
\- Text dài phải tự xuống dòng.  
\- Không có overflow ngang.  
\- Sidebar desktop chuyển thành hamburger drawer trên mobile.  
\- Table desktop chuyển thành card list trên mobile.  
\- Filter desktop chuyển thành bottom sheet trên mobile.  
\- Modal desktop chuyển thành full-screen hoặc bottom sheet trên mobile.  
\- Button chính full width trên mobile.  
\- Touch target tối thiểu 44x44px.  
\- Padding ngang mobile mặc định 16px.  
\- Với màn hình 320px, giảm padding còn 12px.  
\- Kiểm tra ở các chiều rộng 320px, 360px, 390px, 412px, 430px, 768px, 1024px và 1440px.
