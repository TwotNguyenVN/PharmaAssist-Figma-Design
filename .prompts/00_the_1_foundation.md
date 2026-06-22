# Thẻ 1

# **Kích thước: w-screen h-screen**

# **0\. Prompt nền chung cho toàn bộ hệ thống**

Thiết kế giao diện web app desktop cho hệ thống PharmaAssist – website quản lý nhà thuốc.

Yêu cầu ngôn ngữ:  
\- Toàn bộ text trên giao diện phải là tiếng Việt.  
\- Tất cả nút, menu, tiêu đề, placeholder, trạng thái, bảng dữ liệu đều dùng tiếng Việt.  
\- Giao diện phải có thao tác rõ ràng: nút bấm, ô nhập, dropdown, bảng, modal, tab, bộ lọc, thông báo.

Phong cách thiết kế:  
\- Giao diện enterprise sạch, hiện đại, dễ demo.  
\- Nền chính màu trắng \#ffffff.  
\- Nền khu vực nội dung màu xám rất nhạt \#f7f7f7.  
\- Màu chữ chính \#1a1a1a.  
\- Màu chữ phụ \#3d3d3d hoặc \#636363.  
\- Màu CTA chính \#024ad8, chỉ dùng cho nút chính, trạng thái đang chọn và link quan trọng.  
\- Màu danger/error \#b3262b dùng cho lỗi hoặc cảnh báo nghiêm trọng.  
\- Card bo góc 16px.  
\- Button và input bo góc 4px.  
\- Button chính cao 44px, chữ in hoa, font 14px, weight 600\.  
\- Dùng font Inter hoặc Manrope.  
\- Dùng spacing theo hệ 8px.  
\- Card có shadow nhẹ: 0 2px 8px rgba(26, 26, 26, 0.08).  
\- Modal có shadow: 0 8px 24px rgba(26, 26, 26, 0.12).  
\- Không dùng quá nhiều màu sặc sỡ.  
\- Ưu tiên bảng rõ ràng, form dễ nhập, thông tin dễ đọc.

Layout chung:  
\- Desktop frame 1366x768.  
\- Có sidebar bên trái.  
\- Có top header với tên màn hình, ô tìm kiếm, chuông thông báo và avatar người dùng.  
\- Sidebar gồm: Dashboard, Quản lý thuốc, Danh mục thuốc, Tồn kho, Nhập thuốc, Bán thuốc, Khách hàng, Báo cáo, Người dùng, Phân quyền, AI Copilot, Nhật ký AI, Graph Explorer, Hồ sơ.  
\- Menu đang chọn dùng màu xanh \#024ad8 hoặc nền xanh nhạt \#c9e0fc.

# **1\. Login**

Tạo màn hình Login cho hệ thống PharmaAssist.

Kích thước: **w-screen h-screen**  
Ngôn ngữ giao diện: tiếng Việt.

Phong cách:  
\- Nền trắng \#ffffff.  
\- Card đăng nhập màu trắng, bo góc 16px, shadow nhẹ.  
\- CTA chính màu \#024ad8.  
\- Button/input bo 4px.  
\- Chữ chính \#1a1a1a.  
\- Dùng font Inter hoặc Manrope.

Bố cục:  
\- Màn hình chia 2 cột.  
\- Cột trái là khối giới thiệu hệ thống có hình minh họa nhà thuốc dạng abstract, có chi tiết chevron xanh \#024ad8.  
\- Cột phải là form đăng nhập đặt trong card.

Nội dung cột trái:  
\- Tiêu đề lớn: PharmaAssist  
\- Mô tả: Website quản lý nhà thuốc, bán thuốc, tồn kho và cảnh báo tương tác thuốc.  
\- 3 điểm nổi bật:  
  1\. Quản lý thuốc và tồn kho  
  2\. Bán thuốc và thanh toán nhanh  
  3\. Cảnh báo tương tác thuốc theo dữ liệu mẫu

Form đăng nhập:  
\- Tiêu đề: Đăng nhập hệ thống  
\- Subtitle: Vui lòng đăng nhập để tiếp tục.  
\- Input: Email hoặc tên đăng nhập  
\- Input: Mật khẩu  
\- Checkbox: Ghi nhớ đăng nhập  
\- Link: Quên mật khẩu?  
\- Button chính: ĐĂNG NHẬP  
\- Text nhỏ: Hệ thống phục vụ đồ án Công Nghệ Phần Mềm.

Box tài khoản demo:  
\- Admin: admin@pharmaassist.local  
\- Nhân viên: staff@pharmaassist.local  
\- Kho: warehouse@pharmaassist.local

Tạo trạng thái thao tác:  
\- Button ĐĂNG NHẬP có thể click.  
\- Link Quên mật khẩu có thể click.  
\- Input có trạng thái focus.  
\- Hiển thị thông báo lỗi mẫu: Sai email hoặc mật khẩu.

# **2\. Dashboard**

Tạo màn hình Dashboard cho PharmaAssist.

Kích thước: **w-screen h-screen**  
Ngôn ngữ giao diện: tiếng Việt.

Dùng layout chung:  
\- Sidebar bên trái.  
\- Top header.  
\- Nội dung nền \#f7f7f7.  
\- Card trắng bo 16px.

Sidebar:  
\- Active menu: Dashboard.

Top header:  
\- Tiêu đề: Dashboard  
\- Search placeholder: Tìm kiếm nhanh...  
\- Icon thông báo  
\- Avatar: Admin

Nội dung chính:  
1\. Hàng card thống kê:  
\- Doanh thu hôm nay: 8.450.000đ  
\- Số đơn bán: 36  
\- Thuốc sắp hết: 12  
\- Thuốc gần hết hạn: 7  
\- Cảnh báo tương tác: 5

2\. Card biểu đồ:  
\- Tiêu đề: Doanh thu 7 ngày gần nhất  
\- Biểu đồ cột hoặc đường dạng placeholder  
\- Bộ lọc: Hôm nay, 7 ngày, 30 ngày

3\. Card cảnh báo tồn kho:  
Bảng gồm cột:  
\- Mã thuốc  
\- Tên thuốc  
\- Tồn kho  
\- Ngưỡng cảnh báo  
\- Hạn dùng  
\- Trạng thái  
Dữ liệu mẫu:  
\- MED001 | Paracetamol 500mg | 12 | 20 | 12/2026 | Sắp hết  
\- MED002 | Amoxicillin 500mg | 8 | 15 | 09/2026 | Sắp hết  
\- MED003 | Vitamin C 500mg | 35 | 20 | 06/2026 | Gần hết hạn

4\. Card thao tác nhanh:  
\- Button: TẠO ĐƠN BÁN  
\- Button: NHẬP THUỐC  
\- Button: THÊM THUỐC  
\- Button: XEM BÁO CÁO

Tạo các thao tác:  
\- Click TẠO ĐƠN BÁN chuyển sang Sales POS.  
\- Click NHẬP THUỐC chuyển sang Stock Import.  
\- Click THÊM THUỐC mở modal thêm thuốc.  
\- Click XEM BÁO CÁO chuyển sang Reports.

# **3\. Medicine Management**

Tạo màn hình Quản lý thuốc cho PharmaAssist.

Kích thước: w-screen h-screen.  
Ngôn ngữ giao diện: tiếng Việt.

Sidebar:  
\- Active menu: Quản lý thuốc.

Top header:  
\- Tiêu đề: Quản lý thuốc  
\- Search placeholder: Tìm thuốc, mã thuốc, hoạt chất...  
\- Avatar người dùng.

Nội dung chính:  
\- Một card lớn màu trắng bo 16px chứa toàn bộ danh sách thuốc.

Thanh công cụ phía trên:  
\- Ô tìm kiếm: Tìm theo tên thuốc, mã thuốc, hoạt chất  
\- Dropdown: Danh mục  
\- Dropdown: Trạng thái  
\- Dropdown: Sắp xếp  
\- Button outline: XUẤT EXCEL  
\- Button chính màu \#024ad8: THÊM THUỐC

Bảng thuốc:  
Cột:  
\- Mã thuốc  
\- Tên thuốc  
\- Danh mục  
\- Hoạt chất  
\- Đơn vị tính  
\- Giá bán  
\- Tồn kho  
\- Hạn dùng  
\- Trạng thái  
\- Thao tác

Dữ liệu mẫu:  
\- MED001 | Paracetamol 500mg | Giảm đau | Paracetamol | Hộp | 25.000đ | 120 | 12/2026 | Đang bán  
\- MED002 | Amoxicillin 500mg | Kháng sinh | Amoxicillin | Vỉ | 45.000đ | 18 | 09/2026 | Sắp hết  
\- MED003 | Vitamin C 500mg | Vitamin | Acid ascorbic | Lọ | 60.000đ | 35 | 06/2026 | Gần hết hạn  
\- MED004 | Loratadine 10mg | Dị ứng | Loratadine | Hộp | 38.000đ | 80 | 11/2026 | Đang bán

Thao tác từng dòng:  
\- Xem  
\- Sửa  
\- Xóa

Tạo các trạng thái:  
\- Badge Đang bán màu trung tính.  
\- Badge Sắp hết màu cảnh báo.  
\- Badge Gần hết hạn màu danger nhẹ.  
\- Click THÊM THUỐC mở màn hình hoặc modal Medicine Form.  
\- Click Sửa mở form chỉnh sửa thuốc.  
\- Click Xóa mở modal xác nhận xóa.

# **4\. Medicine Form / Add Edit Medicine**

Tạo màn hình hoặc modal Thêm/Sửa thuốc cho PharmaAssist.

Kích thước: w-screen h-screen hoặc modal lớn 880px.  
Ngôn ngữ giao diện: tiếng Việt.

Phong cách:  
\- Form card màu trắng, bo góc 16px.  
\- Input bo 4px, cao 44px.  
\- Nút chính màu \#024ad8.  
\- Nền ngoài form màu \#f7f7f7.

Tiêu đề:  
\- Thêm thuốc mới  
\- Subtitle: Nhập thông tin thuốc để quản lý bán hàng và tồn kho.

Form chia 2 cột:

Thông tin cơ bản:  
\- Mã thuốc  
\- Tên thuốc  
\- Danh mục thuốc  
\- Hoạt chất  
\- Dạng bào chế  
\- Đơn vị tính  
\- Nhà sản xuất  
\- Mô tả ngắn

Thông tin bán hàng:  
\- Giá nhập  
\- Giá bán  
\- Thuế nếu có  
\- Trạng thái: Đang bán / Tạm ngừng

Thông tin tồn kho:  
\- Số lượng ban đầu  
\- Ngưỡng cảnh báo sắp hết  
\- Ngày hết hạn  
\- Vị trí lưu kho

Thông tin an toàn:  
\- Ghi chú sử dụng nội bộ  
\- Checkbox: Cần kiểm tra tương tác khi bán  
\- Text nhỏ: Dữ liệu thuốc trong đồ án là dữ liệu mẫu.

Footer form:  
\- Button outline: HỦY  
\- Button chính: LƯU THUỐC

Tạo thao tác:  
\- Click LƯU THUỐC hiển thị toast: Lưu thuốc thành công.  
\- Click HỦY quay lại Quản lý thuốc.  
\- Nếu thiếu tên thuốc, hiển thị lỗi dưới input: Vui lòng nhập tên thuốc.

# **5\. Category Management**

Tạo màn hình Quản lý danh mục thuốc cho PharmaAssist.

Kích thước: w-screen h-screen.  
Ngôn ngữ giao diện: tiếng Việt.

Sidebar:  
\- Active menu: Danh mục thuốc.

Top header:  
\- Tiêu đề: Quản lý danh mục thuốc.

Nội dung chính:  
\- Card lớn chứa danh sách danh mục.  
\- Bên phải có panel thêm/sửa danh mục.

Thanh công cụ:  
\- Search input: Tìm danh mục thuốc  
\- Button chính: THÊM DANH MỤC

Bảng danh mục:  
Cột:  
\- Mã danh mục  
\- Tên danh mục  
\- Mô tả  
\- Số thuốc  
\- Trạng thái  
\- Thao tác

Dữ liệu mẫu:  
\- CAT001 | Giảm đau, hạ sốt | Nhóm thuốc giảm đau thông dụng | 12 | Đang dùng  
\- CAT002 | Kháng sinh | Nhóm thuốc kháng sinh mẫu | 8 | Đang dùng  
\- CAT003 | Vitamin | Nhóm vitamin và khoáng chất | 15 | Đang dùng  
\- CAT004 | Dị ứng | Nhóm thuốc dị ứng mẫu | 6 | Đang dùng

Panel bên phải:  
\- Tiêu đề: Thêm danh mục  
\- Input: Tên danh mục  
\- Textarea: Mô tả  
\- Dropdown: Trạng thái  
\- Button: LƯU DANH MỤC

Tạo thao tác:  
\- Click THÊM DANH MỤC focus vào panel form.  
\- Click Sửa đổ dữ liệu vào panel bên phải.  
\- Click Xóa mở modal xác nhận.

# **6\. Inventory Management**

Tạo màn hình Quản lý tồn kho cho PharmaAssist.

Kích thước: w-screen h-screen.  
Ngôn ngữ giao diện: tiếng Việt.

Sidebar:  
\- Active menu: Tồn kho.

Top header:  
\- Tiêu đề: Quản lý tồn kho.

Nội dung chính:  
1\. Hàng card thống kê:  
\- Tổng thuốc trong kho  
\- Thuốc sắp hết  
\- Thuốc hết hàng  
\- Thuốc gần hết hạn

2\. Thanh bộ lọc:  
\- Search input: Tìm thuốc trong kho  
\- Dropdown: Trạng thái tồn kho  
\- Dropdown: Hạn sử dụng  
\- Button outline: XUẤT BÁO CÁO  
\- Button chính: CẬP NHẬT TỒN KHO

3\. Bảng tồn kho:  
Cột:  
\- Mã thuốc  
\- Tên thuốc  
\- Số lượng tồn  
\- Ngưỡng cảnh báo  
\- Ngày hết hạn  
\- Vị trí kho  
\- Trạng thái  
\- Thao tác

Dữ liệu mẫu:  
\- MED001 | Paracetamol 500mg | 12 | 20 | 12/2026 | Kệ A1 | Sắp hết  
\- MED002 | Amoxicillin 500mg | 0 | 15 | 09/2026 | Kệ B2 | Hết hàng  
\- MED003 | Vitamin C 500mg | 35 | 20 | 06/2026 | Kệ C1 | Gần hết hạn

4\. Panel cảnh báo bên phải:  
Tiêu đề: Cảnh báo kho  
\- Paracetamol 500mg còn dưới ngưỡng cảnh báo.  
\- Amoxicillin 500mg đã hết hàng.  
\- Vitamin C 500mg gần hết hạn.

Tạo thao tác:  
\- Click CẬP NHẬT TỒN KHO mở modal cập nhật số lượng.  
\- Click Xem lịch sử mở chi tiết biến động kho.  
\- Bộ lọc thay đổi dữ liệu trong bảng.

# **7\. Stock Import**

Tạo màn hình Nhập thuốc cho PharmaAssist.

Kích thước: w-screen h-screen.  
Ngôn ngữ giao diện: tiếng Việt.

Sidebar:  
\- Active menu: Nhập thuốc.

Top header:  
\- Tiêu đề: Tạo phiếu nhập thuốc.

Nội dung chính chia 2 cột.

Cột trái: Card thông tin phiếu nhập  
Fields:  
\- Mã phiếu nhập  
\- Nhà cung cấp  
\- Ngày nhập  
\- Người nhập  
\- Ghi chú

Card thêm thuốc vào phiếu:  
\- Dropdown: Chọn thuốc  
\- Input: Số lượng nhập  
\- Input: Giá nhập  
\- Date picker: Hạn sử dụng  
\- Button chính: THÊM VÀO PHIẾU

Cột phải: Card chi tiết phiếu nhập  
Bảng:  
\- Thuốc  
\- Số lượng  
\- Giá nhập  
\- Hạn sử dụng  
\- Thành tiền  
\- Thao tác

Tổng kết:  
\- Tổng số mặt hàng  
\- Tổng số lượng  
\- Tổng tiền nhập  
\- Button outline: HỦY PHIẾU  
\- Button chính: LƯU PHIẾU NHẬP

Tạo thao tác:  
\- Click THÊM VÀO PHIẾU thêm dòng vào bảng.  
\- Click icon xóa để xóa thuốc khỏi phiếu.  
\- Click LƯU PHIẾU NHẬP hiển thị toast: Tạo phiếu nhập thành công.  
\- Click HỦY PHIẾU mở modal xác nhận.

# **8\. Stock Import History**

Tạo màn hình Lịch sử nhập thuốc cho PharmaAssist.

Kích thước: w-screen h-screen.  
Ngôn ngữ giao diện: tiếng Việt.

Sidebar:  
\- Active menu: Nhập thuốc.

Top header:  
\- Tiêu đề: Lịch sử nhập thuốc.

Nội dung chính:  
1\. Thanh bộ lọc:  
\- Search input: Tìm mã phiếu hoặc nhà cung cấp  
\- Date range picker: Từ ngày \- đến ngày  
\- Dropdown: Nhà cung cấp  
\- Dropdown: Trạng thái  
\- Button outline: XUẤT EXCEL  
\- Button chính: TẠO PHIẾU NHẬP

2\. Bảng phiếu nhập:  
Cột:  
\- Mã phiếu  
\- Nhà cung cấp  
\- Ngày nhập  
\- Người nhập  
\- Số mặt hàng  
\- Tổng tiền  
\- Trạng thái  
\- Thao tác

Dữ liệu mẫu:  
\- IMP001 | Công ty Dược An Tâm | 20/05/2026 | Nguyễn Văn A | 5 | 3.500.000đ | Đã nhập  
\- IMP002 | Nhà phân phối Minh Châu | 22/05/2026 | Trần Thị B | 3 | 1.850.000đ | Nháp

3\. Panel chi tiết bên phải hoặc drawer:  
\- Thông tin phiếu nhập  
\- Danh sách thuốc trong phiếu  
\- Tổng tiền  
\- Button: IN PHIẾU  
\- Button: XEM CHI TIẾT

Tạo thao tác:  
\- Click Xem mở drawer chi tiết.  
\- Click TẠO PHIẾU NHẬP chuyển sang màn hình Stock Import.  
\- Click IN PHIẾU hiển thị trạng thái in.

# **9\. Sales POS**

Tạo màn hình Bán thuốc tại quầy cho PharmaAssist.

Kích thước: w-screen h-screen.  
Ngôn ngữ giao diện: tiếng Việt.

Đây là màn hình quan trọng nhất, cần thật rõ thao tác.

Sidebar:  
\- Active menu: Bán thuốc.

Top header:  
\- Tiêu đề: Bán thuốc tại quầy  
\- Search nhanh  
\- Avatar: Nhân viên nhà thuốc

Bố cục 3 cột:

Cột 1: Tìm kiếm thuốc  
\- Search input: Tìm thuốc theo tên, mã thuốc, hoạt chất  
\- Filter chips: Tất cả, Giảm đau, Kháng sinh, Vitamin, Dị ứng  
\- Danh sách thuốc dạng card nhỏ:  
  \- Tên thuốc  
  \- Hoạt chất  
  \- Giá bán  
  \- Tồn kho  
  \- Badge trạng thái  
  \- Button: THÊM

Dữ liệu mẫu:  
\- Paracetamol 500mg | 25.000đ | Tồn 120  
\- Ibuprofen 400mg | 32.000đ | Tồn 60  
\- Warfarin 5mg | 48.000đ | Tồn 20  
\- Vitamin C 500mg | 60.000đ | Tồn 35

Cột 2: Đơn bán hiện tại  
\- Input khách hàng: Tên hoặc số điện thoại khách hàng  
\- Button nhỏ: THÊM KHÁCH HÀNG  
\- Bảng thuốc trong đơn:  
  \- Thuốc  
  \- Số lượng  
  \- Đơn giá  
  \- Thành tiền  
  \- Xóa  
\- Quantity stepper \+ / \-  
\- Tổng kết:  
  \- Tạm tính  
  \- Giảm giá  
  \- Tổng thanh toán

Cột 3: Cảnh báo và tư vấn  
\- Card: Cảnh báo tương tác thuốc  
\- Nếu có tương tác, hiển thị:  
  \- Cặp thuốc: Ibuprofen 400mg \+ Warfarin 5mg  
  \- Mức độ: Cao  
  \- Mô tả: Có nguy cơ tương tác trong dữ liệu mẫu của hệ thống.  
  \- Button: XEM CHI TIẾT CẢNH BÁO  
\- Textarea: Ghi chú tư vấn  
\- Checkbox: Đã tư vấn cho khách hàng

Footer bên phải:  
\- Button outline: LƯU TẠM  
\- Button outline: HỦY ĐƠN  
\- Button chính: THANH TOÁN

Tạo thao tác:  
\- Click THÊM thêm thuốc vào đơn.  
\- Khi thêm Ibuprofen và Warfarin, tự hiện cảnh báo tương tác.  
\- Click XEM CHI TIẾT CẢNH BÁO mở modal Drug Interaction Alert.  
\- Click THANH TOÁN chuyển sang Payment.

# **10\. Drug Interaction Alert Modal**

Tạo modal Cảnh báo tương tác thuốc cho PharmaAssist.

Kích thước: modal desktop khoảng 720px rộng, nằm trên nền mờ của màn hình Sales POS.  
Ngôn ngữ giao diện: tiếng Việt.

Phong cách:  
\- Modal trắng, bo góc 16px.  
\- Shadow 0 8px 24px rgba(26, 26, 26, 0.12).  
\- Không dùng nền đỏ toàn bộ.  
\- Chỉ dùng màu \#b3262b cho badge mức độ cao hoặc icon cảnh báo.  
\- Button chính màu \#024ad8.

Nội dung modal:  
Header:  
\- Icon cảnh báo  
\- Tiêu đề: Cảnh báo tương tác thuốc  
\- Nút đóng X

Thông tin cặp thuốc:  
\- Thuốc 1: Ibuprofen 400mg  
\- Thuốc 2: Warfarin 5mg  
\- Mức độ: Cao

Các section:  
1\. Mô tả nguy cơ  
\- Có nguy cơ xảy ra tương tác khi sử dụng đồng thời hai thuốc này theo dữ liệu mẫu của hệ thống.

2\. Khuyến nghị xử lý  
\- Nhân viên cần kiểm tra lại thông tin, ghi chú tư vấn và hỏi dược sĩ phụ trách nếu cần trước khi tiếp tục.

3\. Ghi chú tư vấn  
\- Textarea placeholder: Nhập ghi chú tư vấn cho khách hàng...

4\. Xác nhận  
\- Checkbox: Tôi đã đọc cảnh báo và ghi nhận tư vấn.

Disclaimer bắt buộc:  
\- Thông tin cảnh báo chỉ mang tính tham khảo, không thay thế tư vấn của dược sĩ, bác sĩ hoặc chuyên gia y tế.

Footer:  
\- Button outline: QUAY LẠI ĐƠN HÀNG  
\- Button danger text: XÓA THUỐC KHỎI ĐƠN  
\- Button chính: ĐÃ HIỂU VÀ TIẾP TỤC

Tạo thao tác:  
\- Checkbox phải được tick trước khi nút ĐÃ HIỂU VÀ TIẾP TỤC active.  
\- Click ĐÃ HIỂU VÀ TIẾP TỤC đóng modal và quay lại Sales POS.  
\- Click XÓA THUỐC KHỎI ĐƠN xóa thuốc gây tương tác khỏi đơn.

# **11\. Payment**

Tạo màn hình Thanh toán cho PharmaAssist.

Kích thước: w-screen h-screen.  
Ngôn ngữ giao diện: tiếng Việt.

Sidebar:  
\- Active menu: Bán thuốc.

Top header:  
\- Tiêu đề: Thanh toán đơn hàng.

Nội dung chính chia 2 cột.

Cột trái: Card thông tin thanh toán  
\- Mã đơn hàng: ORD0001  
\- Khách hàng: Nguyễn Văn Minh  
\- Số điện thoại: 0901234567  
\- Nhân viên bán: Trần Thị B  
\- Dropdown: Phương thức thanh toán  
  \- Tiền mặt  
  \- Chuyển khoản  
  \- Thẻ  
  \- Ví điện tử

Nếu chọn tiền mặt:  
\- Tổng tiền cần thanh toán  
\- Khách đưa  
\- Tiền thối lại

Nếu chọn chuyển khoản:  
\- Mã giao dịch  
\- Trạng thái: Chờ xác nhận

Cột phải: Card tóm tắt đơn hàng  
Bảng:  
\- Tên thuốc  
\- Số lượng  
\- Đơn giá  
\- Thành tiền

Dữ liệu:  
\- Paracetamol 500mg | 2 | 25.000đ | 50.000đ  
\- Ibuprofen 400mg | 1 | 32.000đ | 32.000đ  
\- Warfarin 5mg | 1 | 48.000đ | 48.000đ

Tổng kết:  
\- Tạm tính  
\- Giảm giá  
\- Tổng thanh toán

Footer:  
\- Button outline: QUAY LẠI ĐƠN  
\- Button chính: XÁC NHẬN THANH TOÁN

Tạo thao tác:  
\- Chọn phương thức thanh toán.  
\- Nhập tiền khách đưa.  
\- Tự tính tiền thối lại.  
\- Click XÁC NHẬN THANH TOÁN hiển thị toast: Thanh toán thành công và chuyển sang Invoice.

# **12\. Invoice**

Tạo màn hình Hóa đơn cho PharmaAssist.

Kích thước: w-screen h-screen.  
Ngôn ngữ giao diện: tiếng Việt.

Sidebar:  
\- Active menu: Bán thuốc.

Top header:  
\- Tiêu đề: Hóa đơn bán hàng.

Nền nội dung màu \#f7f7f7.  
Ở giữa là card hóa đơn màu trắng, bo góc 16px, có phong cách in ấn sạch sẽ.

Header hóa đơn:  
\- PharmaAssist  
\- Nhà thuốc Demo  
\- Địa chỉ: 123 Đường Demo, TP.HCM  
\- Số điện thoại: 0900 000 000

Thông tin hóa đơn:  
\- Mã hóa đơn: INV0001  
\- Ngày bán: 30/05/2026  
\- Nhân viên bán: Trần Thị B  
\- Khách hàng: Nguyễn Văn Minh  
\- Phương thức thanh toán: Tiền mặt

Bảng thuốc:  
\- STT  
\- Tên thuốc  
\- Số lượng  
\- Đơn giá  
\- Thành tiền

Tổng kết:  
\- Tạm tính  
\- Giảm giá  
\- Tổng tiền

Ghi chú:  
\- Đã ghi nhận cảnh báo tương tác thuốc trong đơn hàng.  
\- Thông tin cảnh báo chỉ mang tính tham khảo, không thay thế tư vấn của dược sĩ, bác sĩ hoặc chuyên gia y tế.

Actions phía trên hoặc bên phải:  
\- Button chính: IN HÓA ĐƠN  
\- Button outline: TẢI PDF  
\- Button outline: GỬI HÓA ĐƠN  
\- Button text: QUAY LẠI BÁN HÀNG

Tạo thao tác:  
\- Click IN HÓA ĐƠN hiện toast: Đang gửi lệnh in.  
\- Click TẢI PDF hiện toast: Tải hóa đơn thành công.  
\- Click QUAY LẠI BÁN HÀNG chuyển về Sales POS.

# **13\. Customer Management**

Tạo màn hình Quản lý khách hàng cho PharmaAssist.

Kích thước: w-screen h-screen.  
Ngôn ngữ giao diện: tiếng Việt.

Sidebar:  
\- Active menu: Khách hàng.

Top header:  
\- Tiêu đề: Quản lý khách hàng.

Nội dung chính:  
\- Layout 2 cột: bảng khách hàng bên trái, chi tiết khách hàng bên phải.

Thanh công cụ:  
\- Search input: Tìm theo tên hoặc số điện thoại  
\- Dropdown: Nhóm khách hàng  
\- Button chính: THÊM KHÁCH HÀNG

Bảng khách hàng:  
Cột:  
\- Mã KH  
\- Tên khách hàng  
\- Số điện thoại  
\- Số lần mua  
\- Lần mua gần nhất  
\- Tổng chi tiêu  
\- Thao tác

Dữ liệu:  
\- KH001 | Nguyễn Văn Minh | 0901234567 | 5 | 30/05/2026 | 1.250.000đ  
\- KH002 | Lê Thị Hoa | 0912345678 | 2 | 25/05/2026 | 420.000đ

Panel chi tiết bên phải:  
\- Avatar chữ cái đầu  
\- Tên khách hàng  
\- Số điện thoại  
\- Ghi chú  
\- Lịch sử mua gần đây  
\- Button: CẬP NHẬT  
\- Button outline: XEM LỊCH SỬ MUA

Modal thêm khách hàng:  
\- Tên khách hàng  
\- Số điện thoại  
\- Địa chỉ  
\- Ghi chú  
\- Button: LƯU KHÁCH HÀNG

Tạo thao tác:  
\- Click THÊM KHÁCH HÀNG mở modal.  
\- Click một dòng trong bảng hiển thị chi tiết bên phải.  
\- Click XEM LỊCH SỬ MUA mở danh sách đơn hàng của khách.

# **14\. Reports**

Tạo màn hình Báo cáo & thống kê cho PharmaAssist.

Kích thước: w-screen h-screen.  
Ngôn ngữ giao diện: tiếng Việt.

Sidebar:  
\- Active menu: Báo cáo.

Top header:  
\- Tiêu đề: Báo cáo & thống kê.

Nội dung chính:  
1\. Bộ lọc báo cáo:  
\- Date range picker: Từ ngày \- đến ngày  
\- Dropdown: Loại báo cáo  
  \- Doanh thu  
  \- Thuốc bán chạy  
  \- Tồn kho  
  \- Cảnh báo tương tác  
\- Button outline: LÀM MỚI  
\- Button chính: XUẤT BÁO CÁO

2\. Card thống kê:  
\- Tổng doanh thu  
\- Tổng số đơn  
\- Thuốc bán chạy nhất  
\- Số cảnh báo tương tác  
\- Thuốc sắp hết

3\. Biểu đồ doanh thu:  
\- Tiêu đề: Doanh thu theo ngày  
\- Biểu đồ cột hoặc đường

4\. Bảng thuốc bán chạy:  
Cột:  
\- Xếp hạng  
\- Tên thuốc  
\- Số lượng bán  
\- Doanh thu  
\- Tỷ lệ

5\. Card báo cáo tồn kho:  
\- Thuốc sắp hết  
\- Thuốc gần hết hạn  
\- Thuốc hết hàng

6\. Biểu đồ phương thức thanh toán:  
\- Tiền mặt  
\- Chuyển khoản  
\- Thẻ  
\- Ví điện tử

Tạo thao tác:  
\- Chọn khoảng ngày cập nhật biểu đồ.  
\- Click XUẤT BÁO CÁO hiển thị toast: Xuất báo cáo thành công.  
\- Click vào thuốc bán chạy mở chi tiết thuốc.

# **15\. User Management**

Tạo màn hình Quản lý người dùng cho PharmaAssist.

Kích thước: w-screen h-screen.  
Ngôn ngữ giao diện: tiếng Việt.

Sidebar:  
\- Active menu: Người dùng.

Top header:  
\- Tiêu đề: Quản lý người dùng.

Nội dung chính:  
\- Card trắng bo 16px chứa bảng người dùng.

Thanh công cụ:  
\- Search input: Tìm người dùng  
\- Dropdown: Vai trò  
\- Dropdown: Trạng thái  
\- Button chính: THÊM TÀI KHOẢN

Bảng người dùng:  
Cột:  
\- Họ tên  
\- Email  
\- Vai trò  
\- Trạng thái  
\- Ngày tạo  
\- Lần đăng nhập cuối  
\- Thao tác

Dữ liệu:  
\- Nguyễn Quản Trị | admin@pharmaassist.local | Admin | Đang hoạt động  
\- Trần Nhân Viên | staff@pharmaassist.local | Nhân viên nhà thuốc | Đang hoạt động  
\- Lê Nhân Kho | warehouse@pharmaassist.local | Nhân viên kho | Đang hoạt động

Badge vai trò:  
\- Admin  
\- Nhân viên nhà thuốc  
\- Nhân viên kho

Modal thêm tài khoản:  
\- Họ tên  
\- Email  
\- Mật khẩu tạm thời  
\- Vai trò  
\- Trạng thái  
\- Button: LƯU TÀI KHOẢN

Tạo thao tác:  
\- Click THÊM TÀI KHOẢN mở modal.  
\- Click Sửa mở modal chỉnh sửa.  
\- Click Khóa mở modal xác nhận khóa tài khoản.  
\- Click Lưu hiển thị toast: Lưu tài khoản thành công.

# **16\. Role & Permission**

Tạo màn hình Vai trò & phân quyền cho PharmaAssist.

Kích thước: w-screen h-screen.  
Ngôn ngữ giao diện: tiếng Việt.

Sidebar:  
\- Active menu: Phân quyền.

Top header:  
\- Tiêu đề: Vai trò & phân quyền.

Nội dung chính:  
\- Layout 2 cột.

Cột trái: Danh sách vai trò  
Card:  
\- Admin / Chủ nhà thuốc  
\- Nhân viên nhà thuốc  
\- Nhân viên kho

Mỗi vai trò có:  
\- Tên vai trò  
\- Mô tả ngắn  
\- Số quyền được cấp  
\- Trạng thái

Cột phải: Ma trận quyền  
Tiêu đề: Quyền của vai trò Admin / Chủ nhà thuốc

Bảng quyền:  
Cột:  
\- Nhóm chức năng  
\- Xem  
\- Thêm  
\- Sửa  
\- Xóa  
\- Xuất báo cáo

Dòng:  
\- Quản lý thuốc  
\- Quản lý kho  
\- Bán thuốc  
\- Thanh toán  
\- Hóa đơn  
\- Khách hàng  
\- Báo cáo  
\- Người dùng  
\- Phân quyền  
\- AI Copilot

Dùng checkbox cho từng quyền.

Footer:  
\- Button outline: HỦY THAY ĐỔI  
\- Button chính: LƯU PHÂN QUYỀN

Tạo thao tác:  
\- Click vai trò bên trái đổi bảng quyền bên phải.  
\- Click checkbox để bật/tắt quyền.  
\- Click LƯU PHÂN QUYỀN hiển thị toast: Cập nhật phân quyền thành công.

# **17\. Profile / User Menu**

Tạo màn hình Hồ sơ người dùng cho PharmaAssist.

Kích thước: w-screen h-screen.  
Ngôn ngữ giao diện: tiếng Việt.

Sidebar:  
\- Active menu: Hồ sơ.

Top header:  
\- Tiêu đề: Hồ sơ cá nhân.

Nội dung chính chia 2 cột:

Cột trái: Card hồ sơ  
\- Avatar chữ cái đầu  
\- Họ tên: Trần Nhân Viên  
\- Vai trò: Nhân viên nhà thuốc  
\- Email: staff@pharmaassist.local  
\- Trạng thái: Đang hoạt động  
\- Button outline: ĐỔI ẢNH ĐẠI DIỆN

Cột phải: Form cập nhật thông tin  
Section 1: Thông tin cá nhân  
\- Họ tên  
\- Email  
\- Số điện thoại  
\- Vai trò, chỉ đọc  
\- Button chính: LƯU THAY ĐỔI

Section 2: Đổi mật khẩu  
\- Mật khẩu hiện tại  
\- Mật khẩu mới  
\- Xác nhận mật khẩu mới  
\- Button outline: ĐỔI MẬT KHẨU

Section 3: Phiên đăng nhập  
\- Lần đăng nhập gần nhất  
\- Thiết bị  
\- Button danger text: ĐĂNG XUẤT

Tạo thao tác:  
\- Click LƯU THAY ĐỔI hiển thị toast thành công.  
\- Click ĐỔI MẬT KHẨU mở trạng thái xác nhận.  
\- Click ĐĂNG XUẤT mở modal xác nhận đăng xuất.

# **18\. AI Copilot**

Tạo màn hình AI Copilot cho PharmaAssist.

Kích thước: w-screen h-screen.  
Ngôn ngữ giao diện: tiếng Việt.

Lưu ý:  
\- Đây là màn hình mock cho đồ án.  
\- Không thể hiện AI như bác sĩ.  
\- AI chỉ hỗ trợ tham khảo, giải thích cảnh báo và tạo nháp ghi chú tư vấn.

Sidebar:  
\- Active menu: AI Copilot.

Top header:  
\- Tiêu đề: AI Copilot hỗ trợ nhà thuốc.

Nội dung chính chia 2 cột:

Cột trái: Chat với AI  
\- Card chat trắng bo 16px.  
\- Tin nhắn hệ thống:  
  “Tôi có thể hỗ trợ giải thích cảnh báo tương tác thuốc, tóm tắt thông tin đơn hàng và tạo ghi chú tư vấn dạng nháp.”  
\- Input chat: Nhập câu hỏi cho AI...  
\- Button chính: GỬI  
\- Quick prompts:  
  \- Giải thích cảnh báo tương tác  
  \- Tạo ghi chú tư vấn  
  \- Tóm tắt đơn hàng  
  \- Gợi ý câu hỏi cần hỏi khách hàng

Cột phải: Ngữ cảnh hiện tại  
Card 1: Đơn hàng đang xét  
\- Khách hàng  
\- Danh sách thuốc  
\- Cảnh báo tương tác

Card 2: Kết quả nháp  
\- Tiêu đề: Ghi chú tư vấn nháp  
\- Nội dung nháp  
\- Button outline: SAO CHÉP  
\- Button chính: LƯU VÀO GHI CHÚ

Disclaimer bắt buộc:  
\- Nội dung AI chỉ mang tính tham khảo, không thay thế tư vấn của dược sĩ, bác sĩ hoặc chuyên gia y tế.

Tạo thao tác:  
\- Click GỬI tạo tin nhắn trả lời mẫu.  
\- Click SAO CHÉP hiển thị toast.  
\- Click LƯU VÀO GHI CHÚ lưu nội dung nháp vào đơn hàng.

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

# **20\. Graph Explorer**

Tạo màn hình Graph Explorer cho PharmaAssist.

Kích thước: w-screen h-screen.  
Ngôn ngữ giao diện: tiếng Việt.

Lưu ý:  
\- Đây là màn hình mock hoặc nâng cao.  
\- Hiển thị quan hệ thuốc, hoạt chất, nhóm thuốc và tương tác thuốc.  
\- Dữ liệu chỉ là dữ liệu mẫu phục vụ đồ án.

Sidebar:  
\- Active menu: Graph Explorer.

Top header:  
\- Tiêu đề: Graph Explorer.

Nội dung chính chia 2 cột:

Cột trái: Bộ lọc và tìm kiếm  
Card tìm kiếm:  
\- Search input: Tìm thuốc, hoạt chất hoặc nhóm thuốc  
\- Dropdown: Loại node  
  \- Thuốc  
  \- Hoạt chất  
  \- Nhóm thuốc  
  \- Tương tác  
\- Button chính: TÌM KIẾM

Card node đang chọn:  
\- Tên: Ibuprofen 400mg  
\- Loại: Thuốc  
\- Hoạt chất: Ibuprofen  
\- Nhóm: Giảm đau  
\- Số tương tác mẫu: 2  
\- Button outline: XEM CHI TIẾT

Cột phải: Khu vực graph lớn  
\- Nền trắng.  
\- Các node dạng vòng tròn hoặc card nhỏ:  
  \- Ibuprofen  
  \- Warfarin  
  \- Paracetamol  
  \- Nhóm giảm đau  
  \- Hoạt chất Ibuprofen  
  \- Tương tác mức cao  
\- Các cạnh nối có nhãn:  
  \- CÓ\_HOẠT\_CHẤT  
  \- THUỘC\_NHÓM  
  \- TƯƠNG\_TÁC\_VỚI

Panel dưới graph:  
\- Bảng quan hệ liên quan:  
Cột:  
\- Nguồn  
\- Quan hệ  
\- Đích  
\- Mức độ  
\- Mô tả

Disclaimer:  
\- Graph chỉ sử dụng dữ liệu mẫu phục vụ đồ án. Không sử dụng như dữ liệu y khoa thật.

Tạo thao tác:  
\- Click node hiển thị thông tin ở panel trái.  
\- Click TÌM KIẾM lọc graph.  
\- Click XEM CHI TIẾT mở drawer chi tiết quan hệ thuốc.

# **Prompt nối prototype thao tác demo**

Tạo prototype flow có thể thao tác cho bộ giao diện PharmaAssist.

Luồng demo chính:  
1\. Login  
\- Click ĐĂNG NHẬP → Dashboard

2\. Dashboard  
\- Click TẠO ĐƠN BÁN → Bán thuốc tại quầy  
\- Click NHẬP THUỐC → Tạo phiếu nhập thuốc  
\- Click XEM BÁO CÁO → Báo cáo & thống kê

3\. Quản lý thuốc  
\- Click THÊM THUỐC → Thêm/Sửa thuốc  
\- Click Sửa → Thêm/Sửa thuốc  
\- Click Xóa → Modal xác nhận xóa

4\. Tồn kho  
\- Click CẬP NHẬT TỒN KHO → Modal cập nhật tồn kho  
\- Click XUẤT BÁO CÁO → Toast thành công

5\. Bán thuốc tại quầy  
\- Click THÊM ở Paracetamol → thêm vào đơn  
\- Click THÊM ở Ibuprofen → thêm vào đơn  
\- Click THÊM ở Warfarin → hiển thị cảnh báo tương tác  
\- Click XEM CHI TIẾT CẢNH BÁO → Modal cảnh báo tương tác thuốc

6\. Modal cảnh báo tương tác thuốc  
\- Tick checkbox Tôi đã đọc cảnh báo  
\- Click ĐÃ HIỂU VÀ TIẾP TỤC → quay lại Bán thuốc tại quầy

7\. Bán thuốc tại quầy  
\- Click THANH TOÁN → Thanh toán

8\. Thanh toán  
\- Chọn phương thức Tiền mặt  
\- Nhập số tiền khách đưa  
\- Click XÁC NHẬN THANH TOÁN → Hóa đơn

9\. Hóa đơn  
\- Click IN HÓA ĐƠN → Toast Đang gửi lệnh in  
\- Click QUAY LẠI BÁN HÀNG → Bán thuốc tại quầy

10\. AI Copilot  
\- Click GỬI → hiển thị câu trả lời mẫu của AI  
\- Click LƯU VÀO GHI CHÚ → Toast thành công

11\. Nhật ký AI  
\- Click Xem → mở drawer chi tiết log

12\. Graph Explorer  
\- Click node Ibuprofen → cập nhật panel thông tin bên trái

Tất cả tương tác phải rõ ràng để trình bày demo đồ án.
