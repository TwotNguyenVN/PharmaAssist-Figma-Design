# **8\. Prompt tạo responsive cho Order Detail**

Tạo phiên bản responsive desktop và mobile cho màn hình Chi tiết đơn hàng của PharmaAssist.

Kích thước:  
\- Desktop: w-screen h-screen.  
\- Mobile: 390x844.

Ngôn ngữ:  
\- Toàn bộ giao diện tiếng Việt.

Desktop:  
\- Giữ layout 2 cột hiện tại.

Mobile:  
\- Dùng top app bar:  
  \- Nút quay lại  
  \- Tiêu đề: Chi tiết đơn hàng  
  \- Icon more  
\- Nội dung chuyển thành 1 cột.  
\- Thông tin đơn hàng hiển thị thành các card xếp dọc.

Thứ tự card mobile:  
1\. Card trạng thái đơn  
\- ORD0001  
\- Đã thanh toán  
\- Tổng tiền: 130.000đ

2\. Card thông tin khách hàng  
\- Nguyễn Văn Minh  
\- 0901234567  
\- Nhân viên bán: Trần Thị B  
\- Ngày tạo: 30/05/2026 09:10

3\. Card danh sách thuốc  
\- Hiển thị mỗi thuốc dạng row/card:  
  \- Tên thuốc  
  \- Số lượng  
  \- Đơn giá  
  \- Thành tiền

4\. Card thanh toán  
\- Tạm tính  
\- Giảm giá  
\- Tổng tiền  
\- Phương thức thanh toán  
\- Mã hóa đơn

5\. Card cảnh báo tương tác  
\- Ibuprofen 400mg \+ Warfarin 5mg  
\- Mức độ: Cao  
\- Trạng thái xử lý: Đã tư vấn  
\- Button: XEM CHI TIẾT CẢNH BÁO

6\. Card lịch sử thao tác  
\- Timeline dọc

Footer sticky mobile:  
\- Button outline: IN LẠI HÓA ĐƠN  
\- Button chính: XEM HÓA ĐƠN

Prototype:  
\- Click XEM HÓA ĐƠN → Invoice mobile.  
\- Click XEM CHI TIẾT CẢNH BÁO → modal cảnh báo mobile.  
\- Click quay lại → Lịch sử đơn hàng mobile.

---
