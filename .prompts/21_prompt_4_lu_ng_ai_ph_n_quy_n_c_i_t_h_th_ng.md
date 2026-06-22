# **Prompt 4 — Luồng AI \+ phân quyền \+ cài đặt \+ hệ thống**

Nối prototype cho nhóm luồng “AI \+ phân quyền \+ cài đặt \+ hệ thống” của PharmaAssist.

Mục tiêu:  
\- Demo được AI Copilot, Nhật ký AI, Graph Explorer, phân quyền, người dùng, thông báo, cài đặt, sao lưu, nhật ký hệ thống và trang lỗi.  
\- Có desktop và mobile nếu frame tương ứng đã tồn tại.  
\- Tất cả thao tác, toast, modal, drawer, bottom sheet đều bằng tiếng Việt.  
\- Giữ đúng nguyên tắc an toàn: AI không kê đơn, không chẩn đoán.

Kích thước:  
\- Desktop: w-screen h-screen.  
\- Mobile: responsive 320px–479px, không khóa theo một kích thước cố định.

Dữ liệu demo:  
\- Cảnh báo tương tác: Ibuprofen 400mg \+ Warfarin 5mg  
\- Đơn hàng liên quan: ORD0001  
\- Khách hàng: Nguyễn Văn Minh  
\- Người dùng Staff: Trần Nhân Viên  
\- Admin: Nguyễn Quản Trị

\==================================================  
LUỒNG 1 — AI COPILOT  
\==================================================

AI Copilot desktop:  
\- Click menu AI Copilot.  
\- Click quick prompt “Giải thích cảnh báo tương tác”.  
\- Hiển thị tin nhắn AI mẫu giải thích cảnh báo Ibuprofen \+ Warfarin.  
\- Hiển thị disclaimer:  
  “Nội dung AI chỉ mang tính tham khảo, không thay thế tư vấn của dược sĩ, bác sĩ hoặc chuyên gia y tế.”  
\- Click TẠO GHI CHÚ TƯ VẤN hoặc LƯU VÀO GHI CHÚ.  
\- Hiển thị ghi chú tư vấn nháp.  
\- Click SAO CHÉP → toast “Đã sao chép ghi chú.”  
\- Click LƯU VÀO GHI CHÚ → toast “Đã lưu ghi chú tư vấn.”  
\- Click menu Nhật ký AI → AI Audit Log.

AI Copilot mobile:  
\- Dùng tab Chat / Ngữ cảnh / Ghi chú nháp.  
\- Tap quick prompt → tạo phản hồi.  
\- Tap LƯU VÀO GHI CHÚ → toast.  
\- Input chat sticky bottom.

Yêu cầu an toàn:  
\- Không tạo nội dung kê đơn.  
\- Không chẩn đoán.  
\- Không khẳng định thuốc an toàn tuyệt đối.  
\- Luôn hiển thị disclaimer.

\==================================================  
LUỒNG 2 — NHẬT KÝ AI  
\==================================================

AI Audit Log:  
\- Click menu Nhật ký AI.  
\- Click dòng log ORD0001 → mở drawer chi tiết log.  
\- Drawer hiển thị:  
  \- Prompt người dùng  
  \- Phản hồi AI  
  \- Guardrail result  
  \- Thời gian xử lý  
  \- Mức rủi ro  
\- Click SAO CHÉP LOG → toast “Đã sao chép log.”  
\- Click filter trạng thái “Bị chặn bởi guardrail”.  
\- Bảng cập nhật log yêu cầu bị chặn.  
\- Click XUẤT NHẬT KÝ → toast “Xuất nhật ký AI thành công.”

Mobile nếu có:  
\- Log chuyển thành card list.  
\- Tap log → bottom sheet chi tiết log.

\==================================================  
LUỒNG 3 — GRAPH EXPLORER  
\==================================================

Graph Explorer desktop:  
\- Click menu Graph Explorer.  
\- Click node Ibuprofen.  
\- Panel trái cập nhật thông tin Ibuprofen.  
\- Click node Warfarin.  
\- Hiển thị cạnh TƯƠNG\_TÁC\_VỚI giữa Ibuprofen và Warfarin.  
\- Click cạnh tương tác → mở drawer chi tiết quan hệ.  
\- Drawer hiển thị:  
  \- Thuốc 1: Ibuprofen 400mg  
  \- Thuốc 2: Warfarin 5mg  
  \- Mức độ: Cao  
  \- Mô tả mẫu  
  \- Khuyến nghị mẫu  
\- Click XEM CHI TIẾT THUỐC → Chi tiết thuốc.  
\- Nhập “Warfarin” vào search.  
\- Click TÌM KIẾM → lọc graph.

Disclaimer:  
\- Graph chỉ sử dụng dữ liệu mẫu phục vụ đồ án. Không sử dụng như dữ liệu y khoa thật.

Mobile nếu có:  
\- Tap node → bottom sheet node detail.  
\- Tap cạnh tương tác → bottom sheet chi tiết tương tác.

\==================================================  
LUỒNG 4 — PHÂN QUYỀN VÀ SIDEBAR THEO VAI TRÒ  
\==================================================

Role & Permission desktop:  
\- Click menu Vai trò & phân quyền.  
\- Click vai trò Admin / Chủ nhà thuốc → hiển thị toàn quyền.  
\- Click vai trò Nhân viên nhà thuốc → hiển thị quyền bán hàng, khách hàng, hóa đơn, AI Copilot.  
\- Click vai trò Nhân viên kho → hiển thị quyền tồn kho, nhập thuốc, nhà cung cấp.  
\- Tick hoặc bỏ tick một quyền.  
\- Hiển thị banner “Bạn có thay đổi chưa được lưu.”  
\- Click LƯU PHÂN QUYỀN → toast “Cập nhật phân quyền thành công.”

Sidebar role switching:  
\- Click avatar hoặc dropdown vai trò.  
\- Chọn Admin → sidebar Admin.  
\- Chọn Nhân viên nhà thuốc → sidebar Staff.  
\- Chọn Nhân viên kho → sidebar Warehouse.  
\- Nếu Staff click vào Người dùng hoặc Phân quyền → chuyển sang 403 Không có quyền truy cập.

Mobile:  
\- Mobile drawer hiển thị menu tương ứng theo vai trò.  
\- Tap avatar hoặc role switch demo → đổi menu.

\==================================================  
LUỒNG 5 — QUẢN LÝ NGƯỜI DÙNG VÀ HỒ SƠ  
\==================================================

User Management:  
\- Click menu Người dùng.  
\- Click THÊM TÀI KHOẢN → mở modal thêm tài khoản.  
\- Nhập họ tên, email, vai trò.  
\- Click LƯU TÀI KHOẢN → toast “Lưu tài khoản thành công.”  
\- Click Sửa → mở modal chỉnh sửa tài khoản.  
\- Click Khóa → mở modal xác nhận khóa.  
\- Click HỦY → đóng modal.

Profile:  
\- Click avatar → Hồ sơ cá nhân.  
\- Click LƯU THAY ĐỔI → toast “Cập nhật hồ sơ thành công.”  
\- Click ĐỔI MẬT KHẨU → mở form đổi mật khẩu.  
\- Nếu mật khẩu xác nhận không khớp → hiển thị lỗi.  
\- Click ĐĂNG XUẤT → mở modal xác nhận.  
\- Click XÁC NHẬN ĐĂNG XUẤT → Login.

\==================================================  
LUỒNG 6 — THÔNG BÁO  
\==================================================

Notification Center:  
\- Click icon chuông trên top header → Trung tâm thông báo.  
\- Click tab Kho thuốc → lọc thông báo kho.  
\- Click thông báo “Paracetamol 500mg chỉ còn 12 hộp” → Quản lý tồn kho.  
\- Click thông báo “Đơn ORD0001 có tương tác mức cao” → Chi tiết đơn hàng.  
\- Click thông báo “Hóa đơn INV0001 đã được tạo” → Hóa đơn.  
\- Click thông báo AI Guardrail → Nhật ký AI.  
\- Click ĐÁNH DẤU TẤT CẢ ĐÃ ĐỌC → toast “Đã đánh dấu tất cả thông báo là đã đọc.”

Mobile:  
\- Tap icon chuông → Notification Center mobile.  
\- Tap item → điều hướng màn hình liên quan.

\==================================================  
LUỒNG 7 — CÀI ĐẶT VÀ HỒ SƠ NHÀ THUỐC  
\==================================================

Settings:  
\- Click menu Cài đặt.  
\- Click tab Thông tin nhà thuốc.  
\- Click tab Bán hàng.  
\- Click tab Tồn kho.  
\- Click tab Hóa đơn.  
\- Click tab AI & an toàn.  
\- Toggle “Bắt buộc disclaimer AI”.  
\- Hiển thị banner “Bạn có thay đổi chưa được lưu.”  
\- Click LƯU CÀI ĐẶT → toast “Lưu cài đặt thành công.”

Pharmacy Profile:  
\- Click Hồ sơ nhà thuốc.  
\- Click CHỈNH SỬA THÔNG TIN → mở form chỉnh sửa.  
\- Click TẢI LOGO LÊN → upload state.  
\- Click LƯU → toast “Cập nhật hồ sơ nhà thuốc thành công.”  
\- Click thông tin hóa đơn nếu có → Invoice Print View hoặc Invoice.

Mobile nếu có:  
\- Settings tab chuyển thành accordion hoặc vertical list.  
\- Toggle vẫn bấm được.  
\- Button LƯU CÀI ĐẶT full width.

\==================================================  
LUỒNG 8 — SAO LƯU VÀ XUẤT DỮ LIỆU  
\==================================================

Backup / Export Data:  
\- Click menu Sao lưu dữ liệu.  
\- Click TẠO BẢN SAO LƯU.  
\- Hiển thị loading state.  
\- Toast “Tạo bản sao lưu thành công.”  
\- Chọn dữ liệu:  
  \- Thuốc  
  \- Tồn kho  
  \- Khách hàng  
  \- Đơn hàng  
  \- Hóa đơn  
\- Chọn định dạng Excel.  
\- Click XUẤT DỮ LIỆU → mở modal xác nhận.  
\- Click XÁC NHẬN XUẤT → toast “Xuất dữ liệu thành công.”  
\- Click Tải xuống trong lịch sử sao lưu → toast “Đang tải file sao lưu.”

Cảnh báo bảo mật:  
\- Giữ card cảnh báo: Dữ liệu khách hàng, hóa đơn và lịch sử mua hàng cần được bảo vệ.  
\- Không chia sẻ file sao lưu công khai.

\==================================================  
LUỒNG 9 — NHẬT KÝ HỆ THỐNG  
\==================================================

System Audit Log:  
\- Click menu Nhật ký hệ thống.  
\- Chọn module: Bán thuốc.  
\- Click ÁP DỤNG → lọc bảng.  
\- Click dòng “Tạo đơn hàng ORD0001” → mở drawer chi tiết log.  
\- Click mã tham chiếu ORD0001 → Chi tiết đơn hàng.  
\- Click dòng “Xác nhận nhập kho IMP001” → mở drawer.  
\- Click mã IMP001 → Chi tiết phiếu nhập.  
\- Click XUẤT NHẬT KÝ → toast “Xuất nhật ký hệ thống thành công.”

Mobile nếu có:  
\- Log chuyển thành card list.  
\- Tap log → bottom sheet chi tiết.

\==================================================  
LUỒNG 10 — TRANG LỖI VÀ QUÊN MẬT KHẨU  
\==================================================

Quên mật khẩu:  
\- Click Quên mật khẩu? ở Login → Quên mật khẩu.  
\- Nhập email staff@pharmaassist.local.  
\- Click GỬI YÊU CẦU → success state “Yêu cầu đặt lại mật khẩu đã được gửi.”  
\- Click Quay lại đăng nhập → Login.

403 Không có quyền truy cập:  
\- Khi Staff click vào Phân quyền hoặc Người dùng → 403\.  
\- Click QUAY VỀ DASHBOARD → Dashboard.  
\- Click QUAY LẠI → màn hình trước đó.

404 Không tìm thấy trang:  
\- Click đường dẫn không tồn tại hoặc card 404 demo → 404\.  
\- Click QUAY VỀ DASHBOARD → Dashboard.  
\- Click QUAY LẠI → màn hình trước đó.

\==================================================  
LUỒNG 11 — KỊCH BẢN DEMO  
\==================================================

Demo Scenario Page:  
\- Click menu Kịch bản demo.  
\- Click BỎ QUA → ĐĂNG NHẬP TRỰC TIẾP → Login.  
\- Button này phải có nền \#024ad8, chữ trắng, cao 44px, bo góc 4px.  
\- Click BẮT ĐẦU DEMO ở card AI Copilot → AI Copilot.  
\- Click BẮT ĐẦU DEMO ở card Phân quyền → Role & Permission.  
\- Click BẮT ĐẦU DEMO ở card Cài đặt hệ thống nếu có → Settings.

\==================================================  
QUY TẮC CHUNG  
\==================================================

Navigation:  
\- Desktop dùng sidebar.  
\- Mobile dùng hamburger drawer.  
\- Click logo hoặc Dashboard → Dashboard.

Responsive:  
\- Desktop: w-screen h-screen.  
\- Mobile: responsive 320px–479px.  
\- Mobile không khóa layout theo một kích thước cố định.  
\- Mobile table chuyển thành card list.  
\- Mobile filter chuyển thành bottom sheet.  
\- Mobile modal dùng full-screen hoặc bottom sheet.  
\- Button chính full width trên mobile.

Modal:  
\- Desktop modal centered.  
\- Mobile modal full-screen hoặc bottom sheet.  
\- Có overlay nền tối nhẹ.  
\- Click X để đóng.

Drawer:  
\- Desktop drawer mở từ phải.  
\- Mobile drawer menu mở từ trái.  
\- Bottom sheet mở từ dưới lên.

Toast:  
\- Desktop toast góc trên phải.  
\- Mobile toast phía dưới hoặc phía trên.  
\- Tự đóng sau 2–3 giây.  
\- Có icon trạng thái và nút đóng X.

Button states:  
\- Tất cả button có default, hover, pressed, disabled.  
\- Button chính dùng \#024ad8.  
\- Nút danger dùng \#b3262b.

Safety:  
\- AI không kê đơn.  
\- AI không chẩn đoán.  
\- AI không khẳng định thuốc an toàn tuyệt đối.  
\- Luôn hiển thị disclaimer ở AI, cảnh báo tương tác và Graph:  
  “Thông tin cảnh báo chỉ mang tính tham khảo, không thay thế tư vấn của dược sĩ, bác sĩ hoặc chuyên gia y tế.”

---
