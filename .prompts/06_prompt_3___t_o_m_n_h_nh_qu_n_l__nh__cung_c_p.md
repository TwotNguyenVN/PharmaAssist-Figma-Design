# **Prompt 3 — Tạo màn hình Quản lý nhà cung cấp**

Đây là màn hình mới nên bổ sung nhất.

Tạo màn hình “Quản lý nhà cung cấp” cho hệ thống PharmaAssist.

Kích thước:  
\- w-screen h-screen.

Ngôn ngữ:  
\- Toàn bộ giao diện bằng tiếng Việt.

Phong cách:  
\- Enterprise web app sạch, hiện đại.  
\- Nền nội dung \#f7f7f7.  
\- Card trắng \#ffffff, bo góc 16px.  
\- CTA chính \#024ad8.  
\- Chữ chính \#1a1a1a.  
\- Button và input bo 4px.  
\- Font Inter hoặc Manrope.  
\- Spacing theo hệ 8px.  
\- Shadow nhẹ cho card.

Sidebar:  
Tạo nhóm menu “Kho thuốc” gồm:  
\- Tồn kho  
\- Nhập thuốc  
\- Lịch sử nhập thuốc  
\- Nhà cung cấp

Mục active:  
\- Nhà cung cấp

Top header:  
\- Tiêu đề: Quản lý nhà cung cấp  
\- Subtitle: Quản lý thông tin và lịch sử nhập hàng từ các nhà cung cấp.  
\- Ô tìm kiếm nhanh  
\- Icon thông báo  
\- Avatar người dùng  
\- Button chính: THÊM NHÀ CUNG CẤP

Nội dung chính:

1\. Card thống kê:  
\- Tổng nhà cung cấp: 8  
\- Đang hợp tác: 6  
\- Tạm ngừng: 2  
\- Tổng phiếu nhập tháng này: 14

2\. Thanh tìm kiếm và bộ lọc:  
\- Search input: Tìm theo tên, mã hoặc số điện thoại  
\- Dropdown: Trạng thái  
  \- Tất cả  
  \- Đang hợp tác  
  \- Tạm ngừng  
\- Dropdown: Sắp xếp  
  \- Mới nhất  
  \- Tên A–Z  
  \- Nhiều phiếu nhập nhất  
\- Button outline: XUẤT DANH SÁCH  
\- Button chính: THÊM NHÀ CUNG CẤP

3\. Bảng nhà cung cấp:  
Cột:  
\- Mã nhà cung cấp  
\- Tên nhà cung cấp  
\- Người liên hệ  
\- Số điện thoại  
\- Email  
\- Số phiếu nhập  
\- Tổng giá trị nhập  
\- Trạng thái  
\- Thao tác

Dữ liệu mẫu:  
\- NCC001 | Công ty Dược An Tâm | Nguyễn Văn Bình | 0909000001 | lienhe@antam.demo | 8 | 18.500.000đ | Đang hợp tác  
\- NCC002 | Nhà phân phối Minh Châu | Trần Thị Lan | 0909000002 | minchau@demo.local | 5 | 9.800.000đ | Đang hợp tác  
\- NCC003 | Dược phẩm Thành Công | Lê Văn Nam | 0909000003 | thanhcong@demo.local | 2 | 4.200.000đ | Tạm ngừng

4\. Thao tác từng dòng:  
\- Xem chi tiết  
\- Sửa  
\- Xem lịch sử nhập  
\- Tạm ngừng hợp tác

5\. Drawer chi tiết nhà cung cấp:  
\- Mã nhà cung cấp  
\- Tên nhà cung cấp  
\- Người liên hệ  
\- Số điện thoại  
\- Email  
\- Địa chỉ  
\- Mã số thuế mẫu  
\- Trạng thái  
\- Số phiếu nhập  
\- Tổng giá trị nhập  
\- Phiếu nhập gần nhất  
\- Button outline: XEM LỊCH SỬ NHẬP  
\- Button chính: CHỈNH SỬA

6\. Modal thêm/sửa nhà cung cấp:  
Fields:  
\- Mã nhà cung cấp  
\- Tên nhà cung cấp  
\- Người liên hệ  
\- Số điện thoại  
\- Email  
\- Địa chỉ  
\- Mã số thuế  
\- Trạng thái  
\- Ghi chú

Buttons:  
\- HỦY  
\- LƯU NHÀ CUNG CẤP

Tạo thao tác:  
\- Click THÊM NHÀ CUNG CẤP mở modal.  
\- Click một dòng mở drawer.  
\- Click XEM LỊCH SỬ NHẬP chuyển sang Lịch sử nhập thuốc và tự áp dụng bộ lọc nhà cung cấp.  
\- Click Tạm ngừng hợp tác mở modal xác nhận.  
\- Sau khi lưu hiển thị toast: Lưu nhà cung cấp thành công.

---
