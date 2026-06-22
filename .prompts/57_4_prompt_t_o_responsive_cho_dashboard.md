# **4\. Prompt tạo responsive cho Dashboard**

Tạo phiên bản responsive desktop và mobile cho màn hình Dashboard của PharmaAssist.

Kích thước:  
\- Desktop: w-screen h-screen.  
\- Mobile: 390x844.

Ngôn ngữ:  
\- Toàn bộ giao diện tiếng Việt.

Desktop:  
\- Giữ layout sidebar trái và top header.  
\- Nội dung gồm card tình hình hôm nay, việc cần xử lý, cảnh báo kho, cảnh báo tương tác gần đây, hoạt động gần nhất và thao tác nhanh.

Mobile:  
\- Ẩn sidebar desktop.  
\- Dùng top app bar:  
  \- Hamburger menu  
  \- Logo PharmaAssist  
  \- Icon thông báo  
  \- Avatar nhỏ  
\- Nội dung 1 cột.  
\- Card thống kê hiển thị dạng 2 cột nhỏ hoặc horizontal scroll.  
\- Card “Việc cần xử lý” đặt ngay sau thống kê.  
\- Card “Cảnh báo kho” hiển thị dạng list.  
\- Card “Hoạt động gần nhất” hiển thị dạng timeline dọc.  
\- Button thao tác nhanh hiển thị dạng grid 2 cột:  
  \- TẠO ĐƠN BÁN  
  \- NHẬP THUỐC  
  \- XEM TỒN KHO  
  \- XEM BÁO CÁO  
\- Không dùng biểu đồ lớn trên mobile.  
\- Nếu có mini chart thì đặt trong card doanh thu.

Prototype:  
\- Click hamburger mở mobile drawer menu.  
\- Click TẠO ĐƠN BÁN chuyển sang Sales POS mobile.  
\- Click Cảnh báo kho chuyển sang Inventory mobile nếu có.

---
