# **2\. Prompt nền để Figma tạo responsive**

Gửi prompt này trước:

Chuyển bộ giao diện PharmaAssist hiện tại thành responsive design cho cả máy tính và điện thoại.

Yêu cầu chung:  
\- Giữ nguyên phong cách thiết kế hiện tại.  
\- Toàn bộ giao diện vẫn dùng tiếng Việt.  
\- Desktop dùng kích thước w-screen h-screen.  
\- Mobile dùng frame 390x844.  
\- Không thay đổi màu sắc, font, spacing và component style.  
\- Nền nội dung \#f7f7f7.  
\- Card trắng bo góc 16px.  
\- CTA chính \#024ad8.  
\- Button/input bo góc 4px.  
\- Font Inter hoặc Manrope.  
\- Tất cả nút, bảng, form, modal, drawer, badge vẫn phải thao tác được.

Breakpoint:  
\- Desktop: w-screen h-screen.  
\- Tablet: 768px–1024px nếu cần.  
\- Mobile: 390x844.

Responsive rules:  
1\. Desktop:  
\- Sidebar cố định bên trái.  
\- Top header ngang.  
\- Nội dung có thể chia 2 hoặc 3 cột.  
\- Bảng dữ liệu hiển thị đầy đủ.

2\. Mobile:  
\- Ẩn sidebar desktop.  
\- Dùng top app bar với logo, hamburger menu, icon thông báo và avatar.  
\- Menu mở bằng bottom sheet hoặc drawer từ trái.  
\- Nội dung chuyển thành 1 cột.  
\- Bảng dữ liệu chuyển thành card list.  
\- Bộ lọc chuyển thành bottom sheet.  
\- Modal full width hoặc gần full width.  
\- Button chính full width ở cuối màn hình nếu là thao tác quan trọng.  
\- Giữ touch target tối thiểu 44px.  
\- Không để text quá nhỏ dưới 12px.  
\- Không dùng layout 3 cột trên mobile.

---
