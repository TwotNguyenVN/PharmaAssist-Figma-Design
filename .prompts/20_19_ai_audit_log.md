# **19\. AI Audit Log**

Tạo màn hình Nhật ký AI cho PharmaAssist.

Kích thước: w-screen h-screen.  
Ngôn ngữ giao diện: tiếng Việt.

Sidebar:  
\- Active menu: Nhật ký AI.

Top header:  
\- Tiêu đề: Nhật ký hoạt động AI.

Mục tiêu màn hình:  
\- Theo dõi các lần AI được sử dụng.  
\- Phục vụ kiểm tra, truy vết và demo an toàn AI.

Nội dung chính:  
1\. Thanh bộ lọc:  
\- Search input: Tìm theo người dùng, hành động, mã đơn  
\- Dropdown: Loại tác vụ  
  \- Giải thích cảnh báo  
  \- Tạo ghi chú tư vấn  
  \- Tóm tắt báo cáo  
\- Dropdown: Trạng thái  
  \- Thành công  
  \- Bị chặn bởi guardrail  
  \- Lỗi  
\- Date range picker  
\- Button outline: XUẤT NHẬT KÝ

2\. Bảng nhật ký:  
Cột:  
\- Thời gian  
\- Người dùng  
\- Vai trò  
\- Tác vụ AI  
\- Dữ liệu ngữ cảnh  
\- Trạng thái  
\- Mức rủi ro  
\- Thao tác

Dữ liệu mẫu:  
\- 30/05/2026 09:10 | Trần Nhân Viên | Staff | Giải thích cảnh báo tương tác | ORD0001 | Thành công | Trung bình  
\- 30/05/2026 09:20 | Trần Nhân Viên | Staff | Tạo ghi chú tư vấn | ORD0001 | Thành công | Thấp  
\- 30/05/2026 10:00 | Admin | Admin | Yêu cầu kê đơn | Không có | Bị chặn bởi guardrail | Cao

3\. Drawer chi tiết log:  
\- Prompt người dùng  
\- Phản hồi AI  
\- Guardrail result  
\- Thời gian xử lý  
\- Button: SAO CHÉP LOG

Tạo thao tác:  
\- Click Xem mở drawer chi tiết.  
\- Click XUẤT NHẬT KÝ hiển thị toast.  
\- Badge trạng thái khác màu nhưng vẫn giữ giao diện sạch.
