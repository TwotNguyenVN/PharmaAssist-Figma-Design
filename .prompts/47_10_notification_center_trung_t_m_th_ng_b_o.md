# **10\. Notification Center — Trung tâm thông báo**

Tạo màn hình “Trung tâm thông báo” cho hệ thống PharmaAssist.

Kích thước:  
\- w-screen h-screen.

Ngôn ngữ:  
\- Toàn bộ giao diện bằng tiếng Việt.

Phong cách:  
\- Enterprise web app sạch.  
\- Nền nội dung \#f7f7f7.  
\- Card trắng bo góc 16px.  
\- CTA chính \#024ad8.  
\- Chữ chính \#1a1a1a.  
\- Badge cảnh báo rõ ràng nhưng không quá nhiều màu.  
\- Button/input bo góc 4px.  
\- Font Inter hoặc Manrope.

Sidebar:  
\- Có thể không cần active menu riêng.  
\- Nếu có menu riêng, active: Thông báo.

Top header:  
\- Tiêu đề: Trung tâm thông báo  
\- Subtitle: Theo dõi cảnh báo tồn kho, đơn hàng, thanh toán, AI và hệ thống.  
\- Button outline: ĐÁNH DẤU TẤT CẢ ĐÃ ĐỌC

Nội dung chính:

1\. Tabs thông báo  
\- Tất cả  
\- Kho thuốc  
\- Bán hàng  
\- Thanh toán  
\- AI  
\- Hệ thống

2\. Bộ lọc  
\- Search input: Tìm thông báo  
\- Dropdown trạng thái: Tất cả / Chưa đọc / Đã đọc  
\- Dropdown mức độ: Tất cả / Thông tin / Cảnh báo / Quan trọng

3\. Danh sách thông báo  
Mỗi item gồm:  
\- Icon loại thông báo  
\- Tiêu đề  
\- Nội dung ngắn  
\- Thời gian  
\- Trạng thái đã đọc/chưa đọc  
\- Button hành động

Dữ liệu:  
1\. Thuốc sắp hết  
\- Nội dung: Paracetamol 500mg chỉ còn 12 hộp.  
\- Thời gian: 10 phút trước  
\- Button: XEM TỒN KHO

2\. Cảnh báo tương tác thuốc  
\- Nội dung: Đơn ORD0001 có tương tác mức cao.  
\- Thời gian: 20 phút trước  
\- Button: XEM ĐƠN HÀNG

3\. Thanh toán thành công  
\- Nội dung: Hóa đơn INV0001 đã được tạo.  
\- Thời gian: 30 phút trước  
\- Button: XEM HÓA ĐƠN

4\. AI Guardrail  
\- Nội dung: Một yêu cầu AI đã bị chặn do vượt phạm vi.  
\- Thời gian: 1 giờ trước  
\- Button: XEM NHẬT KÝ AI

Tạo thao tác prototype:  
\- Click item → đánh dấu đã đọc.  
\- Click ĐÁNH DẤU TẤT CẢ ĐÃ ĐỌC → cập nhật trạng thái toàn bộ item.  
\- Click XEM TỒN KHO → chuyển sang Quản lý tồn kho.  
\- Click XEM ĐƠN HÀNG → chuyển sang Chi tiết đơn hàng.  
\- Click XEM HÓA ĐƠN → chuyển sang Hóa đơn.  
\- Click XEM NHẬT KÝ AI → chuyển sang Nhật ký AI.

---
