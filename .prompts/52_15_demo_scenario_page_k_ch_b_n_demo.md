# **15\. Demo Scenario Page — Kịch bản demo**

Tạo màn hình “Kịch bản demo” cho hệ thống PharmaAssist.

Kích thước:  
\- w-screen h-screen.

Ngôn ngữ:  
\- Toàn bộ giao diện bằng tiếng Việt.

Mục đích:  
\- Đây là màn hình hỗ trợ trình bày đồ án.  
\- Cho phép nhóm chọn nhanh các luồng demo chính.  
\- Không phải màn hình nghiệp vụ thật của nhà thuốc.

Phong cách:  
\- Enterprise web app sạch.  
\- Nền nội dung \#f7f7f7.  
\- Card trắng bo góc 16px.  
\- CTA chính \#024ad8.  
\- Chữ chính \#1a1a1a.  
\- Button/input bo góc 4px.  
\- Font Inter hoặc Manrope.

Sidebar:  
\- Active menu: Kịch bản demo.

Top header:  
\- Tiêu đề: Kịch bản demo PharmaAssist  
\- Subtitle: Chọn một luồng để trình bày nhanh trong buổi bảo vệ đồ án.  
\- Avatar người dùng  
\- Button outline: QUAY VỀ DASHBOARD

Nội dung chính:

Tạo 5 card kịch bản demo dạng grid.

Card 1: Luồng bán thuốc và cảnh báo tương tác  
Mô tả:  
\- Tạo đơn, thêm thuốc, phát hiện tương tác, ghi chú tư vấn, thanh toán và in hóa đơn.  
Các bước:  
1\. Bán thuốc tại quầy  
2\. Thêm Ibuprofen và Warfarin  
3\. Xem cảnh báo tương tác  
4\. Xác nhận tư vấn  
5\. Thanh toán  
6\. In hóa đơn  
Button chính: BẮT ĐẦU DEMO

Card 2: Luồng quản lý kho và nhập thuốc  
Mô tả:  
\- Xem thuốc sắp hết, tạo phiếu nhập, xác nhận nhập kho và kiểm tra biến động tồn.  
Các bước:  
1\. Quản lý tồn kho  
2\. Xem thuốc sắp hết  
3\. Tạo phiếu nhập  
4\. Xác nhận nhập kho  
5\. Xem lịch sử biến động  
Button chính: BẮT ĐẦU DEMO

Card 3: Luồng tra cứu đơn hàng  
Mô tả:  
\- Mở lịch sử đơn hàng, xem chi tiết, xem hóa đơn và cảnh báo đã xử lý.  
Các bước:  
1\. Lịch sử đơn hàng  
2\. Chọn ORD0001  
3\. Xem chi tiết đơn hàng  
4\. Xem cảnh báo tương tác  
5\. Xem hóa đơn  
Button chính: BẮT ĐẦU DEMO

Card 4: Luồng AI Copilot  
Mô tả:  
\- AI giải thích cảnh báo tương tác và tạo ghi chú tư vấn nháp.  
Các bước:  
1\. Mở AI Copilot  
2\. Chọn prompt giải thích cảnh báo  
3\. Xem kết quả nháp  
4\. Lưu ghi chú  
5\. Xem Nhật ký AI  
Button chính: BẮT ĐẦU DEMO

Card 5: Luồng phân quyền  
Mô tả:  
\- So sánh menu và quyền truy cập giữa Admin, Nhân viên nhà thuốc và Nhân viên kho.  
Các bước:  
1\. Mở Vai trò & phân quyền  
2\. Chọn từng vai trò  
3\. Xem quyền tương ứng  
4\. Chuyển sidebar theo vai trò  
Button chính: BẮT ĐẦU DEMO

Card ghi chú an toàn:  
\- Tất cả dữ liệu thuốc, tương tác thuốc và AI output là dữ liệu mẫu phục vụ đồ án.  
\- Thông tin cảnh báo chỉ mang tính tham khảo, không thay thế tư vấn của dược sĩ, bác sĩ hoặc chuyên gia y tế.

Tạo thao tác prototype:  
\- Click BẮT ĐẦU DEMO ở Card 1 → chuyển sang Sales POS.  
\- Click BẮT ĐẦU DEMO ở Card 2 → chuyển sang Inventory.  
\- Click BẮT ĐẦU DEMO ở Card 3 → chuyển sang Lịch sử đơn hàng.  
\- Click BẮT ĐẦU DEMO ở Card 4 → chuyển sang AI Copilot.  
\- Click BẮT ĐẦU DEMO ở Card 5 → chuyển sang Role & Permission.  
\- Click QUAY VỀ DASHBOARD → chuyển sang Dashboard.

---

## **Thứ tự gửi cho Figma**

Bạn gửi theo đúng thứ tự này để Figma hiểu mạch thiết kế:

1\. Chi tiết thuốc  
2\. Chi tiết lô thuốc  
3\. Điều chỉnh tồn kho  
4\. Chi tiết phiếu nhập thuốc  
5\. Chi tiết nhà cung cấp  
6\. Chi tiết khách hàng  
7\. Lịch sử mua hàng của khách  
8\. Lịch sử thanh toán  
9\. Lịch sử hóa đơn  
10\. Trung tâm thông báo  
11\. Cài đặt hệ thống  
12\. Hồ sơ nhà thuốc  
13\. Nhật ký hệ thống  
14\. Sao lưu và xuất dữ liệu  
15\. Kịch bản demo

Lưu ý khi gửi: vì bạn đã yêu cầu kích thước `w-screen h-screen`, không cần ghi `w-screen h-screen` nữa để tránh Figma hiểu nhầm.
