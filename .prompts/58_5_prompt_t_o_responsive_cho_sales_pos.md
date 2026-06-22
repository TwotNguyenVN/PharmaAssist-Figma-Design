# **5\. Prompt tạo responsive cho Sales POS**

Màn hình này quan trọng nhất vì desktop 3 cột nhưng mobile phải đổi sang tab.

Tạo phiên bản responsive desktop và mobile cho màn hình Bán thuốc tại quầy của PharmaAssist.

Kích thước:  
\- Desktop: w-screen h-screen.  
\- Mobile: 390x844.

Ngôn ngữ:  
\- Toàn bộ giao diện tiếng Việt.

Desktop:  
\- Giữ layout 3 cột:  
  1\. Tìm thuốc  
  2\. Đơn bán hiện tại  
  3\. Cảnh báo và tư vấn

Mobile:  
\- Không dùng 3 cột.  
\- Dùng top app bar với hamburger, tiêu đề “Bán thuốc”, icon thông báo.  
\- Dùng tab hoặc stepper gồm:  
  1\. Tìm thuốc  
  2\. Đơn hàng  
  3\. Cảnh báo  
  4\. Thanh toán

Tab 1: Tìm thuốc  
\- Search input full width.  
\- Filter chips có horizontal scroll.  
\- Danh sách thuốc dạng card list.  
\- Mỗi card thuốc có:  
  \- Tên thuốc  
  \- Hoạt chất  
  \- Giá bán  
  \- Tồn kho  
  \- Badge trạng thái  
  \- Button THÊM  
\- Thuốc hết hàng có button disabled.

Tab 2: Đơn hàng  
\- Hiển thị khách hàng hoặc Khách lẻ.  
\- Danh sách thuốc trong đơn dạng card.  
\- Quantity stepper lớn, dễ bấm.  
\- Tổng tiền sticky ở cuối màn hình.  
\- Button LƯU TẠM và HỦY ĐƠN.

Tab 3: Cảnh báo  
\- Nếu có tương tác, hiển thị card cảnh báo:  
  \- Ibuprofen 400mg \+ Warfarin 5mg  
  \- Mức độ: Cao  
  \- Button XEM CHI TIẾT CẢNH BÁO  
\- Textarea ghi chú tư vấn.  
\- Checkbox: Đã tư vấn cho khách hàng.

Tab 4: Thanh toán  
\- Tóm tắt đơn.  
\- Tổng tiền.  
\- Button THANH TOÁN full width sticky bottom.

Responsive behavior:  
\- Khi thêm Ibuprofen và Warfarin, hiển thị badge cảnh báo trên tab “Cảnh báo”.  
\- Nếu cảnh báo mức cao chưa xác nhận, button THANH TOÁN disabled.  
\- Sau khi xác nhận cảnh báo, button THANH TOÁN active.

Prototype:  
\- Click THÊM ở thuốc → thêm vào đơn và cập nhật tab Đơn hàng.  
\- Click tab Cảnh báo → xem cảnh báo.  
\- Click XEM CHI TIẾT CẢNH BÁO → mở modal cảnh báo mobile.  
\- Click THANH TOÁN → chuyển sang Payment mobile.

---
