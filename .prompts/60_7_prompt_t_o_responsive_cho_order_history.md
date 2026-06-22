# **7\. Prompt tạo responsive cho Order History**

Tạo phiên bản responsive desktop và mobile cho màn hình Lịch sử đơn hàng của PharmaAssist.

Kích thước:  
\- Desktop: w-screen h-screen.  
\- Mobile: 390x844.

Ngôn ngữ:  
\- Toàn bộ giao diện tiếng Việt.

Desktop:  
\- Giữ bảng lịch sử đơn hàng đầy đủ.  
\- Có sidebar, top header, filter card, bảng, drawer thông tin nhanh.

Mobile:  
\- Ẩn sidebar.  
\- Dùng top app bar:  
  \- Hamburger  
  \- Tiêu đề: Lịch sử đơn hàng  
  \- Icon filter  
  \- Icon thông báo  
\- Không dùng bảng ngang.  
\- Chuyển mỗi đơn hàng thành card list.

Card đơn hàng mobile gồm:  
\- Mã đơn: ORD0001  
\- Trạng thái: Đã thanh toán  
\- Khách hàng: Nguyễn Văn Minh  
\- Số điện thoại: 0901234567  
\- Ngày tạo: 30/05/2026 09:10  
\- Tổng tiền: 130.000đ  
\- Hóa đơn: INV0001  
\- Button: XEM CHI TIẾT  
\- Button text: XEM HÓA ĐƠN

Bộ lọc mobile:  
\- Khi click icon filter, mở bottom sheet.  
\- Bottom sheet gồm:  
  \- Từ ngày \- đến ngày  
  \- Trạng thái đơn hàng  
  \- Phương thức thanh toán  
  \- Nhân viên bán  
  \- Button ĐẶT LẠI  
  \- Button ÁP DỤNG

Mobile states:  
\- Loading: skeleton card list.  
\- Empty: Chưa có đơn hàng nào.  
\- Error: Không thể tải lịch sử đơn hàng.

Prototype:  
\- Click XEM CHI TIẾT → chuyển sang Chi tiết đơn hàng mobile.  
\- Click XEM HÓA ĐƠN → chuyển sang Invoice mobile.  
\- Click filter → mở bottom sheet.

---
