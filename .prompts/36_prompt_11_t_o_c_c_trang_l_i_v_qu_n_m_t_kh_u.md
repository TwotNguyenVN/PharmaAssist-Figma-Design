# **Prompt 11 — Tạo các trang lỗi và Quên mật khẩu**

Gửi sau cùng nếu còn thời gian.

Tạo 3 màn hình hệ thống đơn giản cho PharmaAssist.

Giữ cùng phong cách:  
\- Nền trắng hoặc \#f7f7f7.  
\- CTA \#024ad8.  
\- Chữ \#1a1a1a.  
\- Card bo 16px.  
\- Button bo 4px.  
\- Toàn bộ bằng tiếng Việt.

Màn hình 1: Quên mật khẩu

\- Logo PharmaAssist  
\- Tiêu đề: Quên mật khẩu  
\- Mô tả: Nhập email tài khoản để nhận hướng dẫn đặt lại mật khẩu.  
\- Input: Email  
\- Button chính: GỬI YÊU CẦU  
\- Link: Quay lại đăng nhập  
\- Success state:  
  “Yêu cầu đặt lại mật khẩu đã được gửi.”  
\- Error state:  
  “Không tìm thấy tài khoản với email này.”

Màn hình 2: Không có quyền truy cập

\- Mã lỗi: 403  
\- Tiêu đề: Bạn không có quyền truy cập  
\- Mô tả: Tài khoản hiện tại không được phép sử dụng chức năng này.  
\- Button chính: QUAY VỀ DASHBOARD  
\- Button outline: QUAY LẠI

Màn hình 3: Không tìm thấy trang

\- Mã lỗi: 404  
\- Tiêu đề: Không tìm thấy trang  
\- Mô tả: Trang bạn đang tìm không tồn tại hoặc đã được di chuyển.  
\- Button chính: QUAY VỀ DASHBOARD  
\- Button outline: QUAY LẠI

# **Thứ tự gửi cho Figma**

Nên gửi theo thứ tự:

1\. Chuẩn hóa dữ liệu toàn bộ prototype  
2\. Phân biệt Quản lý thuốc và Quản lý tồn kho  
3\. Tạo Quản lý nhà cung cấp  
4\. Tạo drawer Lịch sử biến động kho  
5\. Nâng cấp Tạo phiếu nhập  
6\. Nâng cấp Sales POS  
7\. Thêm trạng thái Payment  
8\. Tạo Invoice Print View  
9\. Nâng cấp Role & Permission  
10\. Chuẩn hóa sidebar theo vai trò  
11\. Tạo Quên mật khẩu, 403 và 404

Sau các prompt này, bộ Figma của bạn sẽ gần như hoàn chỉnh về phạm vi. Bước kế tiếp sẽ là kiểm tra prototype, component, responsive và chuẩn bị kịch bản demo, thay vì tiếp tục thêm chức năng.
