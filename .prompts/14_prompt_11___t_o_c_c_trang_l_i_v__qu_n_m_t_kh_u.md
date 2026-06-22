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

# Thẻ 2

Mình đã đọc lại file prompt bạn gửi. Bộ prompt hiện tại đã thống nhất các nguyên tắc chính: giao diện tiếng Việt, có thao tác rõ ràng, dùng sidebar \+ top header, nền `#f7f7f7`, card trắng bo `16px`, CTA `#024ad8`, button/input bo `4px`, font Inter/Manrope và dữ liệu demo PharmaAssist.

Dưới đây là **15 prompt cho 15 màn hình mới**, đã chỉnh lại yêu cầu kích thước thành:

Kích thước: w-screen h-screen

Bạn có thể copy từng prompt gửi cho Figma.

---

# **1\. Medicine Detail — Chi tiết thuốc**

Tạo màn hình “Chi tiết thuốc” cho hệ thống PharmaAssist.

Kích thước:  
\- w-screen h-screen.

Ngôn ngữ:  
\- Toàn bộ giao diện sử dụng tiếng Việt.  
\- Tất cả tiêu đề, nút, label, placeholder, badge, bảng dữ liệu và thông báo đều bằng tiếng Việt.

Phong cách thiết kế:  
\- Enterprise web app sạch, hiện đại, dễ thao tác.  
\- Nền nội dung \#f7f7f7.  
\- Card màu trắng \#ffffff, bo góc 16px.  
\- CTA chính màu \#024ad8.  
\- Màu chữ chính \#1a1a1a.  
\- Màu chữ phụ \#3d3d3d hoặc \#636363.  
\- Button và input bo góc 4px.  
\- Button chính cao 44px, chữ in hoa.  
\- Dùng font Inter hoặc Manrope.  
\- Spacing theo hệ 8px.  
\- Card có shadow nhẹ: 0 2px 8px rgba(26, 26, 26, 0.08).  
\- Không dùng quá nhiều màu nổi.

Sidebar:  
\- Active menu: Quản lý thuốc.

Top header:  
\- Tiêu đề: Chi tiết thuốc  
\- Subtitle: Xem thông tin chi tiết, giá bán, tồn kho và lịch sử liên quan của thuốc.  
\- Ô tìm kiếm nhanh  
\- Icon thông báo  
\- Avatar người dùng  
\- Button outline: QUAY LẠI  
\- Button chính: CHỈNH SỬA THUỐC

Nội dung chính chia 2 cột.

Cột trái:

1\. Card thông tin cơ bản  
Hiển thị:  
\- Mã thuốc: MED001  
\- Tên thuốc: Paracetamol 500mg  
\- Danh mục: Giảm đau, hạ sốt  
\- Hoạt chất: Paracetamol  
\- Dạng bào chế: Viên nén  
\- Đơn vị tính: Hộp  
\- Nhà sản xuất: Pharma Demo  
\- Trạng thái kinh doanh: Đang bán

2\. Card thông tin giá  
Hiển thị:  
\- Giá nhập gần nhất: 18.000đ  
\- Giá bán: 25.000đ  
\- Lợi nhuận ước tính: 7.000đ  
\- Ngày cập nhật giá: 30/05/2026

3\. Card mô tả và ghi chú  
Hiển thị:  
\- Mô tả ngắn: Thuốc mẫu phục vụ đồ án quản lý nhà thuốc.  
\- Ghi chú nội bộ: Cần theo dõi tồn kho vì số lượng hiện tại dưới ngưỡng cảnh báo.

Cột phải:

1\. Card tồn kho hiện tại  
Hiển thị:  
\- Tồn kho: 12 hộp  
\- Ngưỡng cảnh báo: 20 hộp  
\- Trạng thái: Sắp hết  
\- Vị trí kho: Kệ A1  
\- Hạn sử dụng gần nhất: 31/12/2026  
\- Button outline: XEM TỒN KHO

2\. Card lô thuốc gần nhất  
Bảng gồm cột:  
\- Mã lô  
\- Số lượng  
\- Ngày nhập  
\- Hạn sử dụng  
\- Trạng thái

Dữ liệu:  
\- LOT001 | 12 | 20/05/2026 | 31/12/2026 | Sắp hết

3\. Card lịch sử bán gần đây  
Bảng gồm cột:  
\- Mã đơn  
\- Ngày bán  
\- Số lượng  
\- Thành tiền  
\- Thao tác

Dữ liệu:  
\- ORD0001 | 30/05/2026 | 2 | 50.000đ | Xem  
\- ORD0095 | 25/05/2026 | 10 | 250.000đ | Xem

Footer hành động:  
\- Button outline: XEM LỊCH SỬ BÁN  
\- Button outline: XEM BIẾN ĐỘNG KHO  
\- Button chính: CHỈNH SỬA THUỐC

Tạo thao tác prototype:  
\- Click QUAY LẠI → quay về màn hình Quản lý thuốc.  
\- Click CHỈNH SỬA THUỐC → mở màn hình hoặc modal Thêm/Sửa thuốc.  
\- Click XEM TỒN KHO → chuyển sang Quản lý tồn kho với thuốc MED001 được chọn.  
\- Click XEM BIẾN ĐỘNG KHO → mở drawer Lịch sử biến động kho.  
\- Click ORD0001 → chuyển sang Chi tiết đơn hàng.

---

# **2\. Batch / Lot Detail — Chi tiết lô thuốc**

Tạo màn hình “Chi tiết lô thuốc” cho hệ thống PharmaAssist.

Kích thước:  
\- w-screen h-screen.

Ngôn ngữ:  
\- Toàn bộ giao diện bằng tiếng Việt.

Phong cách thiết kế:  
\- Enterprise web app sạch.  
\- Nền nội dung \#f7f7f7.  
\- Card trắng bo góc 16px.  
\- CTA chính \#024ad8.  
\- Chữ chính \#1a1a1a.  
\- Button/input bo góc 4px.  
\- Dùng font Inter hoặc Manrope.  
\- Spacing theo hệ 8px.  
\- Badge trạng thái rõ ràng nhưng không quá nhiều màu.

Sidebar:  
\- Active menu: Tồn kho.

Top header:  
\- Tiêu đề: Chi tiết lô thuốc  
\- Subtitle: Theo dõi thông tin lô, hạn sử dụng và biến động tồn kho.  
\- Button outline: QUAY LẠI  
\- Button chính: ĐIỀU CHỈNH TỒN

Nội dung chính:

1\. Card thông tin lô thuốc  
Hiển thị:  
\- Mã lô: LOT001  
\- Thuốc: Paracetamol 500mg  
\- Mã thuốc: MED001  
\- Nhà cung cấp: Công ty Dược An Tâm  
\- Phiếu nhập: IMP001  
\- Ngày nhập: 20/05/2026  
\- Hạn sử dụng: 31/12/2026  
\- Số lượng nhập ban đầu: 70  
\- Tồn hiện tại: 12  
\- Vị trí kho: Kệ A1  
\- Trạng thái: Sắp hết

2\. Card cảnh báo lô thuốc  
Hiển thị alert:  
\- Lô thuốc còn dưới ngưỡng cảnh báo.  
\- Cần xem xét nhập thêm hàng.  
\- Button outline: TẠO PHIẾU NHẬP

3\. Card biến động lô thuốc  
Bảng gồm cột:  
\- Thời gian  
\- Loại biến động  
\- Mã tham chiếu  
\- Số lượng thay đổi  
\- Tồn sau thay đổi  
\- Người thao tác  
\- Ghi chú

Dữ liệu mẫu:  
\- 20/05/2026 10:00 | Nhập kho | IMP001 | \+70 | 70 | Nguyễn Văn A | Nhập từ nhà cung cấp  
\- 25/05/2026 09:30 | Bán hàng | ORD0095 | \-10 | 60 | Trần Thị B | Bán tại quầy  
\- 30/05/2026 09:10 | Bán hàng | ORD0001 | \-2 | 58 | Trần Thị B | Bán tại quầy

4\. Card thao tác nhanh  
\- Button outline: XEM PHIẾU NHẬP  
\- Button outline: XEM LỊCH SỬ BÁN  
\- Button outline: IN NHÃN LÔ  
\- Button chính: ĐIỀU CHỈNH TỒN

Tạo thao tác prototype:  
\- Click QUAY LẠI → quay về Quản lý tồn kho.  
\- Click XEM PHIẾU NHẬP → chuyển sang Chi tiết phiếu nhập thuốc.  
\- Click ĐIỀU CHỈNH TỒN → chuyển sang màn hình Điều chỉnh tồn kho.  
\- Click IN NHÃN LÔ → hiển thị toast: Đang gửi lệnh in nhãn lô.

---

# **3\. Stock Adjustment — Điều chỉnh tồn kho**

Tạo màn hình “Điều chỉnh tồn kho” cho hệ thống PharmaAssist.

Kích thước:  
\- w-screen h-screen.

Ngôn ngữ:  
\- Toàn bộ giao diện bằng tiếng Việt.

Phong cách:  
\- Enterprise web app sạch.  
\- Nền nội dung \#f7f7f7.  
\- Card trắng bo góc 16px.  
\- CTA chính \#024ad8.  
\- Danger \#b3262b.  
\- Chữ chính \#1a1a1a.  
\- Button/input bo góc 4px.  
\- Dùng font Inter hoặc Manrope.

Sidebar:  
\- Active menu: Tồn kho.

Top header:  
\- Tiêu đề: Điều chỉnh tồn kho  
\- Subtitle: Ghi nhận điều chỉnh tồn kho khi kiểm kê, sai lệch hoặc hàng hỏng.  
\- Button outline: QUAY LẠI

Nội dung chính chia 2 cột.

Cột trái:

1\. Card chọn thuốc  
Bao gồm:  
\- Search input: Tìm thuốc cần điều chỉnh  
\- Dropdown: Chọn lô thuốc  
\- Thông tin thuốc đã chọn:  
  \- Tên thuốc: Paracetamol 500mg  
  \- Mã thuốc: MED001  
  \- Lô thuốc: LOT001  
  \- Tồn hiện tại: 12 hộp  
  \- Ngưỡng cảnh báo: 20 hộp  
  \- Vị trí kho: Kệ A1  
  \- Trạng thái: Sắp hết

2\. Card form điều chỉnh  
Fields:  
\- Loại điều chỉnh:  
  \- Tăng tồn  
  \- Giảm tồn  
  \- Cập nhật số lượng thực tế  
\- Số lượng điều chỉnh  
\- Lý do điều chỉnh:  
  \- Kiểm kê thực tế  
  \- Hàng hỏng  
  \- Sai lệch dữ liệu  
  \- Hủy đơn  
  \- Khác  
\- Ghi chú  
\- Checkbox: Tôi xác nhận thông tin điều chỉnh là chính xác

Cột phải:

1\. Card xem trước kết quả  
Hiển thị:  
\- Tồn hiện tại: 12  
\- Thay đổi: \-2  
\- Tồn sau điều chỉnh: 10  
\- Trạng thái mới: Sắp hết  
\- Người thao tác: Lê Nhân Kho  
\- Thời gian dự kiến: 30/05/2026 15:30

2\. Card lưu ý nghiệp vụ  
Hiển thị:  
\- Mọi điều chỉnh tồn kho sẽ được ghi vào lịch sử biến động kho.  
\- Không nên điều chỉnh tồn kho nếu chưa có lý do rõ ràng.  
\- Dữ liệu trong màn hình là dữ liệu mẫu phục vụ đồ án.

Footer:  
\- Button outline: HỦY  
\- Button chính: LƯU ĐIỀU CHỈNH

Modal xác nhận:  
\- Tiêu đề: Xác nhận điều chỉnh tồn kho  
\- Nội dung: Bạn có chắc chắn muốn lưu điều chỉnh tồn kho cho Paracetamol 500mg?  
\- Button outline: QUAY LẠI  
\- Button chính: XÁC NHẬN

Tạo thao tác prototype:  
\- Nếu chưa nhập lý do, hiển thị lỗi: Vui lòng chọn lý do điều chỉnh.  
\- Click LƯU ĐIỀU CHỈNH → mở modal xác nhận.  
\- Click XÁC NHẬN → hiển thị toast: Điều chỉnh tồn kho thành công.  
\- Sau khi lưu → quay về Quản lý tồn kho hoặc mở Lịch sử biến động kho.

---

# **4\. Stock Import Detail — Chi tiết phiếu nhập thuốc**

Tạo màn hình “Chi tiết phiếu nhập thuốc” cho hệ thống PharmaAssist.

Kích thước:  
\- w-screen h-screen.

Ngôn ngữ:  
\- Toàn bộ giao diện bằng tiếng Việt.

Phong cách:  
\- Nền nội dung \#f7f7f7.  
\- Card trắng bo góc 16px.  
\- CTA chính \#024ad8.  
\- Chữ chính \#1a1a1a.  
\- Button/input bo góc 4px.  
\- Font Inter hoặc Manrope.

Sidebar:  
\- Active menu: Lịch sử nhập thuốc.

Top header:  
\- Tiêu đề: Chi tiết phiếu nhập thuốc  
\- Subtitle: Xem thông tin phiếu nhập, danh sách thuốc và lịch sử xử lý.  
\- Button outline: QUAY LẠI  
\- Button chính: IN PHIẾU NHẬP

Nội dung chính chia 2 cột.

Cột trái:

1\. Card thông tin phiếu nhập  
Hiển thị:  
\- Mã phiếu: IMP001  
\- Nhà cung cấp: Công ty Dược An Tâm  
\- Ngày nhập: 20/05/2026  
\- Người nhập: Nguyễn Văn A  
\- Trạng thái: Đã nhập kho  
\- Ghi chú: Nhập bổ sung thuốc sắp hết

2\. Card danh sách thuốc nhập  
Bảng gồm cột:  
\- Mã thuốc  
\- Tên thuốc  
\- Mã lô  
\- Số lượng  
\- Giá nhập  
\- Hạn sử dụng  
\- Thành tiền

Dữ liệu:  
\- MED001 | Paracetamol 500mg | LOT001 | 70 | 18.000đ | 31/12/2026 | 1.260.000đ  
\- MED004 | Ibuprofen 400mg | LOT002 | 50 | 24.000đ | 31/10/2026 | 1.200.000đ  
\- MED005 | Warfarin 5mg | LOT003 | 30 | 36.000đ | 30/11/2026 | 1.080.000đ

Cột phải:

1\. Card tổng kết  
Hiển thị:  
\- Tổng số mặt hàng: 3  
\- Tổng số lượng: 150  
\- Tổng tiền nhập: 3.540.000đ  
\- Trạng thái cập nhật kho: Đã cập nhật

2\. Card lịch sử thao tác  
Timeline:  
\- 20/05/2026 09:00 Tạo phiếu nhập  
\- 20/05/2026 09:15 Lưu nháp  
\- 20/05/2026 10:00 Xác nhận nhập kho  
\- 20/05/2026 10:01 Cập nhật tồn kho

3\. Card liên kết nhanh  
\- Button outline: XEM NHÀ CUNG CẤP  
\- Button outline: XEM BIẾN ĐỘNG KHO  
\- Button outline: XEM TỒN KHO SAU NHẬP

Tạo thao tác prototype:  
\- Click QUAY LẠI → quay về Lịch sử nhập thuốc.  
\- Click IN PHIẾU NHẬP → hiển thị toast: Đang gửi lệnh in phiếu nhập.  
\- Click XEM NHÀ CUNG CẤP → chuyển sang Chi tiết nhà cung cấp.  
\- Click XEM BIẾN ĐỘNG KHO → mở drawer Lịch sử biến động kho.

---

# **5\. Supplier Detail — Chi tiết nhà cung cấp**

Tạo màn hình “Chi tiết nhà cung cấp” cho hệ thống PharmaAssist.

Kích thước:  
\- w-screen h-screen.

Ngôn ngữ:  
\- Toàn bộ giao diện bằng tiếng Việt.

Phong cách:  
\- Enterprise web app sạch.  
\- Nền nội dung \#f7f7f7.  
\- Card trắng bo góc 16px.  
\- CTA chính \#024ad8.  
\- Text chính \#1a1a1a.  
\- Button/input bo góc 4px.  
\- Dùng font Inter hoặc Manrope.

Sidebar:  
\- Active menu: Nhà cung cấp.

Top header:  
\- Tiêu đề: Chi tiết nhà cung cấp  
\- Subtitle: Xem thông tin liên hệ, lịch sử nhập hàng và trạng thái hợp tác.  
\- Button outline: QUAY LẠI  
\- Button chính: CHỈNH SỬA

Nội dung chính chia 2 cột.

Cột trái:

1\. Card thông tin nhà cung cấp  
Hiển thị:  
\- Mã nhà cung cấp: NCC001  
\- Tên nhà cung cấp: Công ty Dược An Tâm  
\- Người liên hệ: Nguyễn Văn Bình  
\- Số điện thoại: 0909000001  
\- Email: lienhe@antam.demo  
\- Địa chỉ: 25 Đường Demo, TP.HCM  
\- Mã số thuế mẫu: MST-DEMO-001  
\- Trạng thái: Đang hợp tác

2\. Card ghi chú  
Hiển thị:  
\- Nhà cung cấp chính cho nhóm thuốc giảm đau và vitamin.  
\- Giao hàng đúng hạn trong các phiếu nhập gần đây.

Cột phải:

1\. Card thống kê hợp tác  
Hiển thị:  
\- Tổng phiếu nhập: 8  
\- Tổng giá trị nhập: 18.500.000đ  
\- Phiếu nhập gần nhất: IMP001  
\- Ngày nhập gần nhất: 20/05/2026  
\- Trạng thái công nợ: Không theo dõi trong MVP

2\. Card lịch sử nhập gần đây  
Bảng gồm cột:  
\- Mã phiếu  
\- Ngày nhập  
\- Số mặt hàng  
\- Tổng tiền  
\- Trạng thái  
\- Thao tác

Dữ liệu:  
\- IMP001 | 20/05/2026 | 3 | 3.540.000đ | Đã nhập kho | Xem  
\- IMP008 | 15/05/2026 | 5 | 4.200.000đ | Đã nhập kho | Xem

Footer:  
\- Button outline: XEM LỊCH SỬ NHẬP  
\- Button outline: TẠM NGỪNG HỢP TÁC  
\- Button chính: TẠO PHIẾU NHẬP

Tạo thao tác prototype:  
\- Click QUAY LẠI → quay về Quản lý nhà cung cấp.  
\- Click TẠO PHIẾU NHẬP → chuyển sang Stock Import với nhà cung cấp được chọn sẵn.  
\- Click XEM LỊCH SỬ NHẬP → chuyển sang Stock Import History và lọc theo NCC001.  
\- Click TẠM NGỪNG HỢP TÁC → mở modal xác nhận.

---

# **6\. Customer Detail — Chi tiết khách hàng**

Tạo màn hình “Chi tiết khách hàng” cho hệ thống PharmaAssist.

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
\- Button/input bo góc 4px.  
\- Font Inter hoặc Manrope.

Sidebar:  
\- Active menu: Khách hàng.

Top header:  
\- Tiêu đề: Chi tiết khách hàng  
\- Subtitle: Xem thông tin khách hàng, lịch sử mua và ghi chú tư vấn.  
\- Button outline: QUAY LẠI  
\- Button chính: CHỈNH SỬA KHÁCH HÀNG

Nội dung chính chia 2 cột.

Cột trái:

1\. Card hồ sơ khách hàng  
Hiển thị:  
\- Mã khách hàng: KH001  
\- Tên khách hàng: Nguyễn Văn Minh  
\- Số điện thoại: 0901234567  
\- Địa chỉ: TP.HCM  
\- Nhóm khách hàng: Khách quay lại  
\- Ngày tạo: 10/05/2026  
\- Ghi chú: Khách thường mua thuốc giảm đau và vitamin.

2\. Card thống kê mua hàng  
Hiển thị:  
\- Số lần mua: 5  
\- Tổng chi tiêu: 1.250.000đ  
\- Đơn gần nhất: ORD0001  
\- Ngày mua gần nhất: 30/05/2026  
\- Phương thức thanh toán thường dùng: Tiền mặt

Cột phải:

1\. Card lịch sử mua gần đây  
Bảng gồm cột:  
\- Mã đơn  
\- Ngày mua  
\- Số mặt hàng  
\- Tổng tiền  
\- Trạng thái  
\- Thao tác

Dữ liệu:  
\- ORD0001 | 30/05/2026 | 3 | 130.000đ | Đã thanh toán | Xem  
\- ORD0095 | 25/05/2026 | 2 | 250.000đ | Đã thanh toán | Xem

2\. Card ghi chú tư vấn  
Hiển thị:  
\- ORD0001: Đã thông báo cảnh báo tương tác cho khách hàng.  
\- ORD0095: Khách hỏi về thông tin sử dụng thuốc mẫu trong đồ án.

3\. Card cảnh báo liên quan  
Hiển thị:  
\- Từng có cảnh báo tương tác trong đơn ORD0001.  
\- Button outline: XEM CẢNH BÁO

Footer:  
\- Button outline: XEM TOÀN BỘ LỊCH SỬ MUA  
\- Button chính: TẠO ĐƠN BÁN CHO KHÁCH

Tạo thao tác prototype:  
\- Click QUAY LẠI → quay về Quản lý khách hàng.  
\- Click ORD0001 hoặc Xem → chuyển sang Chi tiết đơn hàng.  
\- Click TẠO ĐƠN BÁN CHO KHÁCH → chuyển sang Sales POS với khách hàng đã được chọn.  
\- Click XEM TOÀN BỘ LỊCH SỬ MUA → chuyển sang Lịch sử mua hàng của khách.

---

# **7\. Customer Purchase History — Lịch sử mua hàng của khách**

Tạo màn hình “Lịch sử mua hàng của khách” cho hệ thống PharmaAssist.

Kích thước:  
\- w-screen h-screen.

Ngôn ngữ:  
\- Toàn bộ giao diện bằng tiếng Việt.

Phong cách:  
\- Enterprise web app sạch.  
\- Nền nội dung \#f7f7f7.  
\- Card trắng bo 16px.  
\- CTA chính \#024ad8.  
\- Chữ chính \#1a1a1a.  
\- Button/input bo góc 4px.  
\- Font Inter hoặc Manrope.

Sidebar:  
\- Active menu: Khách hàng.

Top header:  
\- Tiêu đề: Lịch sử mua hàng  
\- Subtitle: Nguyễn Văn Minh \- 0901234567  
\- Button outline: QUAY LẠI  
\- Button chính: TẠO ĐƠN MỚI

Nội dung chính:

1\. Card tổng quan khách hàng  
Hiển thị:  
\- Khách hàng: Nguyễn Văn Minh  
\- Số điện thoại: 0901234567  
\- Số lần mua: 5  
\- Tổng chi tiêu: 1.250.000đ  
\- Đơn gần nhất: ORD0001  
\- Cảnh báo từng xuất hiện: 1

2\. Bộ lọc lịch sử mua  
Bao gồm:  
\- Date range picker: Từ ngày \- đến ngày  
\- Dropdown trạng thái đơn  
\- Search input: Tìm theo mã đơn hoặc tên thuốc  
\- Button outline: ĐẶT LẠI  
\- Button chính: ÁP DỤNG

3\. Bảng lịch sử mua  
Cột:  
\- Mã đơn  
\- Ngày mua  
\- Nhân viên bán  
\- Danh sách thuốc  
\- Tổng tiền  
\- Thanh toán  
\- Trạng thái  
\- Thao tác

Dữ liệu:  
\- ORD0001 | 30/05/2026 | Trần Thị B | Paracetamol, Ibuprofen, Warfarin | 130.000đ | Tiền mặt | Đã thanh toán | Xem chi tiết  
\- ORD0095 | 25/05/2026 | Nguyễn Văn A | Vitamin C, Paracetamol | 250.000đ | Chuyển khoản | Đã thanh toán | Xem chi tiết

4\. Panel bên phải  
Hiển thị:  
\- Thuốc đã mua nhiều nhất  
\- Cảnh báo tương tác từng xuất hiện  
\- Ghi chú tư vấn gần đây  
\- Button outline: XEM HỒ SƠ KHÁCH HÀNG

Tạo thao tác prototype:  
\- Click QUAY LẠI → quay về Chi tiết khách hàng.  
\- Click Xem chi tiết ở ORD0001 → chuyển sang Chi tiết đơn hàng.  
\- Click TẠO ĐƠN MỚI → chuyển sang Sales POS với khách hàng được chọn sẵn.  
\- Click XEM HỒ SƠ KHÁCH HÀNG → quay về Chi tiết khách hàng.

---

# **8\. Payment History — Lịch sử thanh toán**

Tạo màn hình “Lịch sử thanh toán” cho hệ thống PharmaAssist.

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
\- Button/input bo góc 4px.  
\- Font Inter hoặc Manrope.

Sidebar:  
\- Active menu: Bán thuốc.  
\- Trong nhóm Bán thuốc có submenu:  
  \- Tạo đơn bán  
  \- Lịch sử đơn hàng  
  \- Lịch sử thanh toán  
  \- Lịch sử hóa đơn

Top header:  
\- Tiêu đề: Lịch sử thanh toán  
\- Subtitle: Theo dõi các giao dịch thanh toán tại nhà thuốc.  
\- Button outline: XUẤT EXCEL

Nội dung chính:

1\. Card thống kê  
Hiển thị 5 card:  
\- Tổng giao dịch hôm nay: 36  
\- Tổng tiền đã thu: 8.450.000đ  
\- Giao dịch tiền mặt: 21  
\- Giao dịch chuyển khoản: 12  
\- Giao dịch thất bại: 1

2\. Bộ lọc thanh toán  
Bao gồm:  
\- Search input: Tìm mã đơn, mã hóa đơn, khách hàng  
\- Date range picker  
\- Dropdown phương thức thanh toán  
\- Dropdown trạng thái giao dịch  
\- Button outline: ĐẶT LẠI  
\- Button chính: ÁP DỤNG

3\. Bảng lịch sử thanh toán  
Cột:  
\- Mã giao dịch  
\- Mã đơn  
\- Mã hóa đơn  
\- Khách hàng  
\- Phương thức  
\- Số tiền  
\- Thời gian  
\- Trạng thái  
\- Thao tác

Dữ liệu:  
\- PAY001 | ORD0001 | INV0001 | Nguyễn Văn Minh | Tiền mặt | 130.000đ | 30/05/2026 09:18 | Thành công | Xem  
\- PAY002 | ORD0002 | INV0002 | Lê Thị Hoa | Chuyển khoản | 85.000đ | 30/05/2026 10:25 | Thành công | Xem  
\- PAY003 | ORD0003 | Chưa có | Khách lẻ | Chuyển khoản | 25.000đ | 30/05/2026 11:40 | Chờ xác nhận | Xem

4\. Drawer chi tiết thanh toán  
Khi click Xem, mở drawer bên phải với:  
\- Mã giao dịch  
\- Mã đơn  
\- Mã hóa đơn  
\- Khách hàng  
\- Phương thức thanh toán  
\- Số tiền  
\- Trạng thái  
\- Thời gian xử lý  
\- Người xác nhận  
\- Button outline: XEM ĐƠN HÀNG  
\- Button chính: XEM HÓA ĐƠN

Tạo thao tác prototype:  
\- Click Xem → mở drawer chi tiết thanh toán.  
\- Click mã đơn ORD0001 → chuyển sang Chi tiết đơn hàng.  
\- Click mã hóa đơn INV0001 → chuyển sang Hóa đơn.  
\- Click XUẤT EXCEL → hiển thị toast: Xuất lịch sử thanh toán thành công.

---

# **9\. Invoice History — Lịch sử hóa đơn**

Tạo màn hình “Lịch sử hóa đơn” cho hệ thống PharmaAssist.

Kích thước:  
\- w-screen h-screen.

Ngôn ngữ:  
\- Toàn bộ giao diện bằng tiếng Việt.

Phong cách:  
\- Enterprise web app sạch.  
\- Nền nội dung \#f7f7f7.  
\- Card trắng bo 16px.  
\- CTA chính \#024ad8.  
\- Chữ chính \#1a1a1a.  
\- Button/input bo góc 4px.  
\- Font Inter hoặc Manrope.

Sidebar:  
\- Active menu: Bán thuốc.  
\- Trong nhóm Bán thuốc có submenu:  
  \- Tạo đơn bán  
  \- Lịch sử đơn hàng  
  \- Lịch sử thanh toán  
  \- Lịch sử hóa đơn

Top header:  
\- Tiêu đề: Lịch sử hóa đơn  
\- Subtitle: Tra cứu hóa đơn đã phát hành, in lại hoặc tải PDF.  
\- Button outline: XUẤT DANH SÁCH

Nội dung chính:

1\. Card thống kê  
Hiển thị:  
\- Tổng hóa đơn hôm nay: 31  
\- Hóa đơn đã in: 24  
\- Hóa đơn đã tải PDF: 8  
\- Hóa đơn đã hủy: 1

2\. Bộ lọc hóa đơn  
Bao gồm:  
\- Search input: Tìm mã hóa đơn, mã đơn, khách hàng  
\- Date range picker  
\- Dropdown trạng thái hóa đơn  
\- Dropdown phương thức thanh toán  
\- Button outline: ĐẶT LẠI  
\- Button chính: ÁP DỤNG

3\. Bảng lịch sử hóa đơn  
Cột:  
\- Mã hóa đơn  
\- Mã đơn hàng  
\- Ngày tạo  
\- Khách hàng  
\- Tổng tiền  
\- Phương thức thanh toán  
\- Trạng thái  
\- Thao tác

Dữ liệu:  
\- INV0001 | ORD0001 | 30/05/2026 09:19 | Nguyễn Văn Minh | 130.000đ | Tiền mặt | Đã phát hành | Xem  
\- INV0002 | ORD0002 | 30/05/2026 10:26 | Lê Thị Hoa | 85.000đ | Chuyển khoản | Đã phát hành | Xem

4\. Thao tác từng dòng  
\- Xem hóa đơn  
\- In lại  
\- Tải PDF  
\- Gửi hóa đơn

5\. Modal gửi hóa đơn  
Fields:  
\- Email hoặc số điện thoại khách hàng  
\- Ghi chú gửi hóa đơn  
Buttons:  
\- HỦY  
\- GỬI HÓA ĐƠN

Tạo thao tác prototype:  
\- Click Xem hóa đơn → chuyển sang màn hình Hóa đơn.  
\- Click In lại → hiển thị toast: Đang gửi lệnh in hóa đơn.  
\- Click Tải PDF → hiển thị toast: Tải hóa đơn thành công.  
\- Click Gửi hóa đơn → mở modal gửi hóa đơn.

---

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

# **11\. Settings — Cài đặt hệ thống**

Tạo màn hình “Cài đặt hệ thống” cho PharmaAssist.

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
\- Button/input bo góc 4px.  
\- Font Inter hoặc Manrope.

Sidebar:  
\- Active menu: Cài đặt.

Top header:  
\- Tiêu đề: Cài đặt hệ thống  
\- Subtitle: Cấu hình thông tin vận hành, hóa đơn, tồn kho và AI.  
\- Button chính: LƯU CÀI ĐẶT

Nội dung chính chia 2 cột.

Cột trái: Menu cài đặt  
Tạo vertical tabs:  
\- Thông tin nhà thuốc  
\- Bán hàng  
\- Tồn kho  
\- Hóa đơn  
\- Thông báo  
\- AI & an toàn  
\- Sao lưu dữ liệu

Cột phải: Nội dung cài đặt

Section Thông tin nhà thuốc:  
\- Tên nhà thuốc  
\- Số điện thoại  
\- Địa chỉ  
\- Email  
\- Mã số thuế mẫu

Section Bán hàng:  
\- Toggle: Cho phép bán cho khách lẻ  
\- Toggle: Cho phép lưu tạm đơn  
\- Toggle: Yêu cầu ghi chú khi hủy đơn

Section Tồn kho:  
\- Input: Ngưỡng cảnh báo mặc định  
\- Input: Số ngày cảnh báo gần hết hạn  
\- Toggle: Cho phép điều chỉnh tồn kho

Section Hóa đơn:  
\- Toggle: Tự động tạo hóa đơn sau thanh toán  
\- Toggle: Hiển thị disclaimer trên hóa đơn  
\- Toggle: Cho phép tải PDF

Section AI & an toàn:  
\- Toggle: Bật AI Copilot  
\- Toggle: Bật AI Audit Log  
\- Toggle: Bắt buộc disclaimer AI  
\- Toggle: Chặn nội dung kê đơn/chẩn đoán

Footer:  
\- Button outline: HỦY THAY ĐỔI  
\- Button chính: LƯU CÀI ĐẶT

Tạo thao tác prototype:  
\- Click từng tab bên trái → đổi nội dung cài đặt bên phải.  
\- Khi có thay đổi chưa lưu → hiển thị banner: Bạn có thay đổi chưa được lưu.  
\- Click LƯU CÀI ĐẶT → hiển thị toast: Lưu cài đặt thành công.

---

# **12\. Pharmacy Profile — Hồ sơ nhà thuốc**

Tạo màn hình “Hồ sơ nhà thuốc” cho hệ thống PharmaAssist.

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
\- Button/input bo góc 4px.  
\- Font Inter hoặc Manrope.

Sidebar:  
\- Active menu: Hồ sơ nhà thuốc hoặc Cài đặt.

Top header:  
\- Tiêu đề: Hồ sơ nhà thuốc  
\- Subtitle: Quản lý thông tin hiển thị của nhà thuốc trên hệ thống và hóa đơn.  
\- Button chính: CHỈNH SỬA THÔNG TIN

Nội dung chính chia 2 cột.

Cột trái:

1\. Card thông tin nhà thuốc  
Hiển thị:  
\- Tên nhà thuốc: Nhà thuốc Demo  
\- Số điện thoại: 0900 000 000  
\- Email: nhathuoc@demo.local  
\- Địa chỉ: 123 Đường Demo, TP.HCM  
\- Mã số thuế mẫu: MST-DEMO-001  
\- Người phụ trách: Nguyễn Quản Trị  
\- Trạng thái: Đang hoạt động

2\. Card logo và nhận diện  
Hiển thị:  
\- Logo nhà thuốc  
\- Màu chính hệ thống: \#024ad8  
\- Button outline: TẢI LOGO LÊN

Cột phải:

1\. Card thông tin hiển thị trên hóa đơn  
Hiển thị:  
\- Tên hiển thị: Nhà thuốc Demo  
\- Địa chỉ in hóa đơn  
\- Số điện thoại in hóa đơn  
\- Dòng cảm ơn khách hàng  
\- Disclaimer hóa đơn

2\. Card giờ hoạt động  
Hiển thị:  
\- Thứ 2 \- Thứ 6: 07:00 \- 21:00  
\- Thứ 7 \- Chủ nhật: 08:00 \- 20:00

3\. Card trạng thái cấu hình  
Hiển thị:  
\- Hóa đơn: Đã cấu hình  
\- Logo: Chưa tải lên  
\- Thông tin liên hệ: Đầy đủ

Tạo thao tác prototype:  
\- Click CHỈNH SỬA THÔNG TIN → mở form chỉnh sửa.  
\- Click TẢI LOGO LÊN → mở upload state.  
\- Click Lưu → hiển thị toast: Cập nhật hồ sơ nhà thuốc thành công.

---

# **13\. System Audit Log — Nhật ký hệ thống**

Tạo màn hình “Nhật ký hệ thống” cho PharmaAssist.

Kích thước:  
\- w-screen h-screen.

Ngôn ngữ:  
\- Toàn bộ giao diện bằng tiếng Việt.

Mục tiêu:  
\- Theo dõi các thao tác quan trọng của người dùng trong hệ thống.  
\- Khác với Nhật ký AI, màn hình này ghi log thao tác hệ thống thông thường.

Phong cách:  
\- Enterprise web app sạch.  
\- Nền nội dung \#f7f7f7.  
\- Card trắng bo góc 16px.  
\- CTA chính \#024ad8.  
\- Text chính \#1a1a1a.  
\- Button/input bo góc 4px.  
\- Font Inter hoặc Manrope.

Sidebar:  
\- Active menu: Nhật ký hệ thống hoặc Cài đặt.

Top header:  
\- Tiêu đề: Nhật ký hệ thống  
\- Subtitle: Truy vết thao tác người dùng trên các module quan trọng.  
\- Button outline: XUẤT NHẬT KÝ

Nội dung chính:

1\. Bộ lọc  
Bao gồm:  
\- Search input: Tìm người dùng, hành động, mã tham chiếu  
\- Date range picker  
\- Dropdown module  
\- Dropdown hành động  
\- Dropdown mức độ  
\- Button outline: ĐẶT LẠI  
\- Button chính: ÁP DỤNG

2\. Bảng nhật ký hệ thống  
Cột:  
\- Thời gian  
\- Người dùng  
\- Vai trò  
\- Module  
\- Hành động  
\- Mã tham chiếu  
\- Địa chỉ IP mẫu  
\- Kết quả  
\- Thao tác

Dữ liệu:  
\- 30/05/2026 09:10 | Trần Thị B | Nhân viên nhà thuốc | Bán thuốc | Tạo đơn hàng | ORD0001 | 127.0.0.1 | Thành công | Xem  
\- 30/05/2026 09:12 | Trần Thị B | Nhân viên nhà thuốc | Cảnh báo | Xác nhận tư vấn | ORD0001 | 127.0.0.1 | Thành công | Xem  
\- 30/05/2026 10:00 | Nguyễn Văn A | Nhân viên kho | Nhập thuốc | Xác nhận nhập kho | IMP001 | 127.0.0.1 | Thành công | Xem  
\- 30/05/2026 11:00 | Admin | Admin | Người dùng | Khóa tài khoản | USER003 | 127.0.0.1 | Thành công | Xem

3\. Drawer chi tiết log  
Khi click Xem, mở drawer bên phải:  
\- Thông tin hành động  
\- Dữ liệu trước  
\- Dữ liệu sau  
\- Người thao tác  
\- Thời gian  
\- Kết quả  
\- Mã tham chiếu  
\- Button outline: SAO CHÉP LOG

Tạo thao tác prototype:  
\- Click Xem → mở drawer chi tiết.  
\- Click mã tham chiếu ORD0001 → chuyển sang Chi tiết đơn hàng.  
\- Click mã tham chiếu IMP001 → chuyển sang Chi tiết phiếu nhập.  
\- Click XUẤT NHẬT KÝ → hiển thị toast: Xuất nhật ký hệ thống thành công.

---

# **14\. Backup / Export Data — Sao lưu và xuất dữ liệu**

Tạo màn hình “Sao lưu và xuất dữ liệu” cho PharmaAssist.

Kích thước:  
\- w-screen h-screen.

Ngôn ngữ:  
\- Toàn bộ giao diện bằng tiếng Việt.

Phong cách:  
\- Enterprise web app sạch.  
\- Nền nội dung \#f7f7f7.  
\- Card trắng bo góc 16px.  
\- CTA chính \#024ad8.  
\- Danger \#b3262b cho cảnh báo bảo mật.  
\- Button/input bo góc 4px.  
\- Font Inter hoặc Manrope.

Sidebar:  
\- Active menu: Sao lưu dữ liệu hoặc Cài đặt.

Top header:  
\- Tiêu đề: Sao lưu và xuất dữ liệu  
\- Subtitle: Sao lưu dữ liệu demo và xuất dữ liệu phục vụ báo cáo, kiểm thử.

Nội dung chính chia 2 cột.

Cột trái:

1\. Card sao lưu dữ liệu  
Hiển thị:  
\- Lần sao lưu gần nhất: 30/05/2026 18:00  
\- Trạng thái: Thành công  
\- Dung lượng: 12.5 MB  
\- Người thực hiện: Admin  
\- Button chính: TẠO BẢN SAO LƯU

2\. Card xuất dữ liệu  
Checkbox chọn dữ liệu:  
\- Thuốc  
\- Tồn kho  
\- Khách hàng  
\- Đơn hàng  
\- Hóa đơn  
\- Phiếu nhập  
\- Nhật ký AI  
\- Nhật ký hệ thống

Định dạng:  
\- Excel  
\- CSV  
\- JSON

Button:  
\- XUẤT DỮ LIỆU

Cột phải:

1\. Card lịch sử sao lưu  
Bảng:  
\- Thời gian  
\- Loại  
\- Dung lượng  
\- Người thực hiện  
\- Trạng thái  
\- Thao tác

Dữ liệu:  
\- 30/05/2026 18:00 | Sao lưu toàn bộ | 12.5 MB | Admin | Thành công | Tải xuống  
\- 29/05/2026 18:00 | Sao lưu toàn bộ | 12.1 MB | Admin | Thành công | Tải xuống

2\. Card cảnh báo bảo mật  
Hiển thị:  
\- Dữ liệu khách hàng, hóa đơn và lịch sử mua hàng cần được bảo vệ.  
\- Không chia sẻ file sao lưu công khai.  
\- Không đưa dữ liệu thật vào đồ án hoặc repository công khai.

Modal xác nhận xuất dữ liệu:  
\- Tiêu đề: Xác nhận xuất dữ liệu  
\- Nội dung: Bạn có chắc chắn muốn xuất các nhóm dữ liệu đã chọn?  
\- Button outline: HỦY  
\- Button chính: XÁC NHẬN XUẤT

Tạo thao tác prototype:  
\- Click TẠO BẢN SAO LƯU → hiển thị loading rồi toast: Tạo bản sao lưu thành công.  
\- Click XUẤT DỮ LIỆU → mở modal xác nhận.  
\- Click Tải xuống → hiển thị toast: Đang tải file sao lưu.

---

# **15\. Demo Scenario Page — Kịch bản demo**

Tạo màn hình “Kịch bản demo” cho hệ thống PharmaAssist.

Kích thước:  
\- w-screen h-screen.

Ngôn ngữ:  
\- Toàn bộ giao diện bằng tiếng Việt.

Mục đích:  
\- Đây là màn hình hỗ trợ trình bày đồ án.  
\- Cho phép nhóm chọn nhanh các luồng demo chính.  
\- Không phải màn hình nghiệp vụ thật của nhà thuốc.

Phong cách:  
\- Enterprise web app sạch.  
\- Nền nội dung \#f7f7f7.  
\- Card trắng bo góc 16px.  
\- CTA chính \#024ad8.  
\- Chữ chính \#1a1a1a.  
\- Button/input bo góc 4px.  
\- Font Inter hoặc Manrope.

Sidebar:  
\- Active menu: Kịch bản demo.

Top header:  
\- Tiêu đề: Kịch bản demo PharmaAssist  
\- Subtitle: Chọn một luồng để trình bày nhanh trong buổi bảo vệ đồ án.  
\- Avatar người dùng  
\- Button outline: QUAY VỀ DASHBOARD

Nội dung chính:

Tạo 5 card kịch bản demo dạng grid.

Card 1: Luồng bán thuốc và cảnh báo tương tác  
Mô tả:  
\- Tạo đơn, thêm thuốc, phát hiện tương tác, ghi chú tư vấn, thanh toán và in hóa đơn.  
Các bước:  
1\. Bán thuốc tại quầy  
2\. Thêm Ibuprofen và Warfarin  
3\. Xem cảnh báo tương tác  
4\. Xác nhận tư vấn  
5\. Thanh toán  
6\. In hóa đơn  
Button chính: BẮT ĐẦU DEMO

Card 2: Luồng quản lý kho và nhập thuốc  
Mô tả:  
\- Xem thuốc sắp hết, tạo phiếu nhập, xác nhận nhập kho và kiểm tra biến động tồn.  
Các bước:  
1\. Quản lý tồn kho  
2\. Xem thuốc sắp hết  
3\. Tạo phiếu nhập  
4\. Xác nhận nhập kho  
5\. Xem lịch sử biến động  
Button chính: BẮT ĐẦU DEMO

Card 3: Luồng tra cứu đơn hàng  
Mô tả:  
\- Mở lịch sử đơn hàng, xem chi tiết, xem hóa đơn và cảnh báo đã xử lý.  
Các bước:  
1\. Lịch sử đơn hàng  
2\. Chọn ORD0001  
3\. Xem chi tiết đơn hàng  
4\. Xem cảnh báo tương tác  
5\. Xem hóa đơn  
Button chính: BẮT ĐẦU DEMO

Card 4: Luồng AI Copilot  
Mô tả:  
\- AI giải thích cảnh báo tương tác và tạo ghi chú tư vấn nháp.  
Các bước:  
1\. Mở AI Copilot  
2\. Chọn prompt giải thích cảnh báo  
3\. Xem kết quả nháp  
4\. Lưu ghi chú  
5\. Xem Nhật ký AI  
Button chính: BẮT ĐẦU DEMO

Card 5: Luồng phân quyền  
Mô tả:  
\- So sánh menu và quyền truy cập giữa Admin, Nhân viên nhà thuốc và Nhân viên kho.  
Các bước:  
1\. Mở Vai trò & phân quyền  
2\. Chọn từng vai trò  
3\. Xem quyền tương ứng  
4\. Chuyển sidebar theo vai trò  
Button chính: BẮT ĐẦU DEMO

Card ghi chú an toàn:  
\- Tất cả dữ liệu thuốc, tương tác thuốc và AI output là dữ liệu mẫu phục vụ đồ án.  
\- Thông tin cảnh báo chỉ mang tính tham khảo, không thay thế tư vấn của dược sĩ, bác sĩ hoặc chuyên gia y tế.

Tạo thao tác prototype:  
\- Click BẮT ĐẦU DEMO ở Card 1 → chuyển sang Sales POS.  
\- Click BẮT ĐẦU DEMO ở Card 2 → chuyển sang Inventory.  
\- Click BẮT ĐẦU DEMO ở Card 3 → chuyển sang Lịch sử đơn hàng.  
\- Click BẮT ĐẦU DEMO ở Card 4 → chuyển sang AI Copilot.  
\- Click BẮT ĐẦU DEMO ở Card 5 → chuyển sang Role & Permission.  
\- Click QUAY VỀ DASHBOARD → chuyển sang Dashboard.

---

## **Thứ tự gửi cho Figma**

Bạn gửi theo đúng thứ tự này để Figma hiểu mạch thiết kế:

1\. Chi tiết thuốc  
2\. Chi tiết lô thuốc  
3\. Điều chỉnh tồn kho  
4\. Chi tiết phiếu nhập thuốc  
5\. Chi tiết nhà cung cấp  
6\. Chi tiết khách hàng  
7\. Lịch sử mua hàng của khách  
8\. Lịch sử thanh toán  
9\. Lịch sử hóa đơn  
10\. Trung tâm thông báo  
11\. Cài đặt hệ thống  
12\. Hồ sơ nhà thuốc  
13\. Nhật ký hệ thống  
14\. Sao lưu và xuất dữ liệu  
15\. Kịch bản demo

Lưu ý khi gửi: vì bạn đã yêu cầu kích thước `w-screen h-screen`, không cần ghi `w-screen h-screen` nữa để tránh Figma hiểu nhầm.

# Thẻ 3

Để Figma tạo giao diện cho **cả máy tính và điện thoại**, bạn cần yêu cầu Figma tạo **responsive design theo nhiều breakpoint**, không chỉ tạo một frame desktop.

Bạn nên làm theo cách này:

Desktop: w-screen h-screen  
Tablet: 768px hoặc 1024px width  
Mobile: 390px x 844px hoặc w-screen h-screen mobile

Nhưng với đồ án, mình khuyên làm **2 phiên bản chính**:

1\. Desktop / Web app  
2\. Mobile / Responsive web

Không cần làm đủ mọi màn hình mobile. Chỉ nên làm mobile cho các màn hình quan trọng.

---

# **1\. Có nên tạo mobile cho toàn bộ màn hình không?**

Không nên.

Vì hệ thống quản lý nhà thuốc chủ yếu dùng trên **máy tính tại quầy**, nên bản desktop là chính. Mobile chỉ cần để chứng minh UI có responsive.

Nên tạo mobile cho 6 màn hình này:

| STT | Màn hình | Lý do |
| ----- | ----- | ----- |
| 1 | Login | Người dùng có thể đăng nhập trên điện thoại |
| 2 | Dashboard | Xem nhanh tổng quan |
| 3 | Sales POS | Chứng minh luồng bán thuốc responsive |
| 4 | Drug Interaction Alert | Cảnh báo cần hiển thị tốt trên mobile |
| 5 | Order History | Tra cứu đơn hàng |
| 6 | Invoice | Xem hóa đơn trên mobile |

Nếu còn thời gian, thêm:

Inventory  
Customer Detail  
AI Copilot

---

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

# **3\. Prompt tạo responsive cho Login**

Tạo phiên bản responsive desktop và mobile cho màn hình Login của PharmaAssist.

Kích thước:  
\- Desktop: w-screen h-screen.  
\- Mobile: 390x844.

Ngôn ngữ:  
\- Toàn bộ giao diện tiếng Việt.

Giữ phong cách:  
\- Nền trắng.  
\- CTA \#024ad8.  
\- Card trắng bo 16px.  
\- Button/input bo 4px.  
\- Font Inter hoặc Manrope.

Desktop:  
\- Layout 2 cột.  
\- Cột trái giới thiệu hệ thống PharmaAssist.  
\- Cột phải là card đăng nhập.

Mobile:  
\- Layout 1 cột.  
\- Ẩn hoặc rút gọn phần minh họa lớn.  
\- Logo PharmaAssist ở trên cùng.  
\- Form đăng nhập chiếm gần toàn bộ chiều ngang.  
\- Input full width.  
\- Button ĐĂNG NHẬP full width.  
\- Box tài khoản demo đặt phía dưới form, có thể thu gọn.  
\- Link Quên mật khẩu hiển thị rõ.  
\- Không cần sidebar.

Prototype:  
\- Click ĐĂNG NHẬP ở desktop và mobile đều chuyển sang Dashboard tương ứng.  
\- Click Quên mật khẩu chuyển sang màn hình Quên mật khẩu mobile hoặc desktop tương ứng.

---

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

# **6\. Prompt tạo responsive cho Drug Interaction Alert**

Tạo phiên bản responsive desktop và mobile cho modal Cảnh báo tương tác thuốc của PharmaAssist.

Kích thước:  
\- Desktop: modal khoảng 720px trên màn hình w-screen h-screen.  
\- Mobile: bottom sheet hoặc full-screen modal trên frame 390x844.

Ngôn ngữ:  
\- Toàn bộ giao diện tiếng Việt.

Desktop:  
\- Modal trắng bo 16px.  
\- Overlay nền tối nhẹ.  
\- Header, nội dung, footer rõ ràng.

Mobile:  
\- Dùng full-screen modal hoặc bottom sheet gần full height.  
\- Header sticky phía trên:  
  \- Tiêu đề: Cảnh báo tương tác thuốc  
  \- Nút đóng X  
\- Nội dung scroll dọc.  
\- Footer sticky phía dưới với các nút:  
  \- QUAY LẠI  
  \- ĐÃ HIỂU VÀ TIẾP TỤC  
\- Nếu cần nút XÓA THUỐC KHỎI ĐƠN, đặt dạng text danger phía trên footer.

Nội dung:  
\- Cặp thuốc: Ibuprofen 400mg \+ Warfarin 5mg  
\- Mức độ: Cao  
\- Mô tả nguy cơ  
\- Khuyến nghị xử lý  
\- Textarea ghi chú tư vấn  
\- Checkbox: Tôi đã đọc cảnh báo và ghi nhận tư vấn  
\- Disclaimer:  
  “Thông tin cảnh báo chỉ mang tính tham khảo, không thay thế tư vấn của dược sĩ, bác sĩ hoặc chuyên gia y tế.”

Prototype:  
\- Nút ĐÃ HIỂU VÀ TIẾP TỤC disabled khi chưa tick checkbox.  
\- Tick checkbox → nút active.  
\- Click ĐÃ HIỂU VÀ TIẾP TỤC → quay về Sales POS mobile hoặc desktop tương ứng.

---

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

# **9\. Prompt tạo responsive cho Invoice**

Tạo phiên bản responsive desktop và mobile cho màn hình Hóa đơn của PharmaAssist.

Kích thước:  
\- Desktop: w-screen h-screen.  
\- Mobile: 390x844.

Ngôn ngữ:  
\- Toàn bộ giao diện tiếng Việt.

Desktop:  
\- Giữ màn hình hóa đơn hiện tại với sidebar, top header và card hóa đơn.

Mobile:  
\- Dùng top app bar:  
  \- Nút quay lại  
  \- Tiêu đề: Hóa đơn  
  \- Icon more  
\- Không hiển thị sidebar.  
\- Hóa đơn hiển thị dạng card full width.  
\- Bảng thuốc chuyển thành danh sách thuốc.  
\- Các nút hành động đặt sticky dưới màn hình.

Nội dung mobile:  
\- PharmaAssist  
\- Nhà thuốc Demo  
\- Mã hóa đơn: INV0001  
\- Mã đơn: ORD0001  
\- Ngày bán: 30/05/2026  
\- Khách hàng: Nguyễn Văn Minh  
\- Nhân viên bán: Trần Thị B  
\- Phương thức thanh toán: Tiền mặt

Danh sách thuốc:  
\- Paracetamol 500mg | SL 2 | 50.000đ  
\- Ibuprofen 400mg | SL 1 | 32.000đ  
\- Warfarin 5mg | SL 1 | 48.000đ

Tổng kết:  
\- Tạm tính: 130.000đ  
\- Giảm giá: 0đ  
\- Tổng tiền: 130.000đ

Disclaimer:  
\- Thông tin cảnh báo chỉ mang tính tham khảo, không thay thế tư vấn của dược sĩ, bác sĩ hoặc chuyên gia y tế.

Footer sticky:  
\- Button outline: TẢI PDF  
\- Button chính: IN HÓA ĐƠN

Prototype:  
\- Click IN HÓA ĐƠN → toast.  
\- Click TẢI PDF → toast.  
\- Click quay lại → Chi tiết đơn hàng mobile.

---

# **10\. Prompt tạo responsive cho Inventory**

Tạo phiên bản responsive desktop và mobile cho màn hình Quản lý tồn kho của PharmaAssist.

Kích thước:  
\- Desktop: w-screen h-screen.  
\- Mobile: 390x844.

Ngôn ngữ:  
\- Toàn bộ giao diện tiếng Việt.

Desktop:  
\- Giữ bảng tồn kho đầy đủ.

Mobile:  
\- Dùng top app bar với hamburger, tiêu đề “Tồn kho”, icon filter.  
\- Card thống kê hiển thị dạng 2 cột hoặc horizontal scroll.  
\- Không dùng bảng ngang.  
\- Danh sách tồn kho chuyển thành card list.

Card tồn kho mobile gồm:  
\- Tên thuốc  
\- Mã thuốc  
\- Mã lô  
\- Tồn hiện tại  
\- Ngưỡng cảnh báo  
\- Hạn sử dụng  
\- Vị trí kho  
\- Badge trạng thái  
\- Button: XEM CHI TIẾT  
\- Button text: BIẾN ĐỘNG KHO

Bộ lọc mobile:  
\- Click icon filter mở bottom sheet.  
\- Gồm:  
  \- Search thuốc  
  \- Trạng thái tồn kho  
  \- Hạn sử dụng  
  \- Vị trí kho  
  \- Button ĐẶT LẠI  
  \- Button ÁP DỤNG

Prototype:  
\- Click XEM CHI TIẾT → Chi tiết lô thuốc mobile.  
\- Click BIẾN ĐỘNG KHO → drawer hoặc bottom sheet lịch sử biến động kho.  
\- Click hamburger → mở mobile menu.

---

# **11\. Prompt tạo responsive cho Customer Detail**

Tạo phiên bản responsive desktop và mobile cho màn hình Chi tiết khách hàng của PharmaAssist.

Kích thước:  
\- Desktop: w-screen h-screen.  
\- Mobile: 390x844.

Ngôn ngữ:  
\- Toàn bộ giao diện tiếng Việt.

Desktop:  
\- Giữ layout 2 cột.

Mobile:  
\- Dùng top app bar:  
  \- Nút quay lại  
  \- Tiêu đề: Chi tiết khách hàng  
  \- Icon more  
\- Nội dung 1 cột.

Thứ tự card mobile:  
1\. Card hồ sơ khách hàng  
\- Nguyễn Văn Minh  
\- 0901234567  
\- Nhóm khách hàng: Khách quay lại

2\. Card thống kê  
\- Số lần mua  
\- Tổng chi tiêu  
\- Đơn gần nhất  
\- Ngày mua gần nhất

3\. Card lịch sử mua gần đây  
\- Mỗi đơn hàng hiển thị dạng card nhỏ.  
\- ORD0001 | 130.000đ | Đã thanh toán  
\- Button: XEM CHI TIẾT

4\. Card ghi chú tư vấn  
\- Hiển thị ghi chú từ ORD0001.

Footer sticky:  
\- Button outline: LỊCH SỬ MUA  
\- Button chính: TẠO ĐƠN BÁN

Prototype:  
\- Click LỊCH SỬ MUA → Lịch sử mua hàng mobile.  
\- Click TẠO ĐƠN BÁN → Sales POS mobile với khách hàng đã chọn.

---

# **12\. Prompt tạo responsive cho AI Copilot**

Tạo phiên bản responsive desktop và mobile cho màn hình AI Copilot của PharmaAssist.

Kích thước:  
\- Desktop: w-screen h-screen.  
\- Mobile: 390x844.

Ngôn ngữ:  
\- Toàn bộ giao diện tiếng Việt.

Lưu ý an toàn:  
\- AI chỉ hỗ trợ tham khảo.  
\- Không thể hiện AI như bác sĩ.  
\- Không kê đơn, không chẩn đoán.  
\- Luôn hiển thị disclaimer.

Desktop:  
\- Giữ layout 2 cột: Chat với AI và Ngữ cảnh hiện tại.

Mobile:  
\- Dùng top app bar:  
  \- Nút quay lại hoặc hamburger  
  \- Tiêu đề: AI Copilot  
  \- Icon lịch sử  
\- Dùng tab:  
  1\. Chat  
  2\. Ngữ cảnh  
  3\. Ghi chú nháp

Tab Chat:  
\- Danh sách tin nhắn chiếm phần chính.  
\- Quick prompts dạng chip horizontal scroll.  
\- Input chat sticky bottom.  
\- Button GỬI.

Tab Ngữ cảnh:  
\- Card đơn hàng đang xét.  
\- Danh sách thuốc.  
\- Card cảnh báo tương tác.

Tab Ghi chú nháp:  
\- Nội dung ghi chú tư vấn nháp.  
\- Button SAO CHÉP.  
\- Button LƯU VÀO GHI CHÚ.

Disclaimer sticky hoặc card cuối:  
\- Nội dung AI chỉ mang tính tham khảo, không thay thế tư vấn của dược sĩ, bác sĩ hoặc chuyên gia y tế.

Prototype:  
\- Click quick prompt “Giải thích cảnh báo tương tác” → tạo tin nhắn trả lời mẫu.  
\- Click LƯU VÀO GHI CHÚ → toast.

---

# **13\. Prompt tạo mobile menu / responsive navigation**

Prompt này rất quan trọng để Figma hiểu cách chuyển sidebar sang mobile.

Tạo responsive navigation cho hệ thống PharmaAssist.

Kích thước:  
\- Desktop: w-screen h-screen.  
\- Mobile: 390x844.

Desktop navigation:  
\- Sidebar cố định bên trái.  
\- Top header cố định phía trên nội dung.  
\- Sidebar có icon và label.  
\- Menu active dùng nền xanh nhạt \#c9e0fc và chữ \#024ad8.

Mobile navigation:  
\- Không hiển thị sidebar cố định.  
\- Dùng top app bar cao khoảng 56px:  
  \- Icon hamburger bên trái  
  \- Tên màn hình ở giữa hoặc bên trái  
  \- Icon thông báo  
  \- Avatar nhỏ  
\- Khi click hamburger, mở drawer menu từ trái.  
\- Drawer menu chiếm khoảng 80% chiều rộng màn hình.  
\- Có overlay nền tối nhẹ.  
\- Drawer có:  
  \- Logo PharmaAssist  
  \- Tên người dùng  
  \- Vai trò  
  \- Danh sách menu  
  \- Nút Đăng xuất ở cuối

Mobile menu cho Admin:  
\- Dashboard  
\- Quản lý thuốc  
\- Danh mục thuốc  
\- Kho thuốc  
  \- Tồn kho  
  \- Nhập thuốc  
  \- Lịch sử nhập thuốc  
  \- Nhà cung cấp  
\- Bán thuốc  
  \- Tạo đơn bán  
  \- Lịch sử đơn hàng  
  \- Lịch sử thanh toán  
  \- Lịch sử hóa đơn  
\- Khách hàng  
\- Báo cáo  
\- Người dùng  
\- Phân quyền  
\- AI Copilot  
\- Nhật ký AI  
\- Graph Explorer  
\- Cài đặt  
\- Hồ sơ

Prototype:  
\- Click hamburger → mở drawer.  
\- Click overlay hoặc X → đóng drawer.  
\- Click menu item → chuyển sang màn hình tương ứng.

---

# **14\. Prompt tạo responsive component rules**

Gửi prompt này để Figma thống nhất component.

Tạo responsive component rules cho toàn bộ giao diện PharmaAssist.

Áp dụng cho cả desktop và mobile.

Component rules:

1\. Button  
Desktop:  
\- Chiều cao 44px.  
\- Padding 12px 24px.  
\- Bo góc 4px.  
Mobile:  
\- Chiều cao tối thiểu 44px.  
\- Button chính trong form hoặc footer nên full width.  
\- Khoảng cách giữa các button tối thiểu 8px.

2\. Input  
Desktop:  
\- Chiều cao 44px.  
\- Label phía trên.  
Mobile:  
\- Full width.  
\- Touch target tối thiểu 44px.  
\- Không đặt quá 2 input trên một hàng.

3\. Table  
Desktop:  
\- Dùng bảng đầy đủ.  
Mobile:  
\- Chuyển bảng thành card list.  
\- Mỗi row thành một card.  
\- Thao tác đưa vào menu ba chấm hoặc button text.

4\. Modal  
Desktop:  
\- Modal centered.  
\- Width 560–720px.  
Mobile:  
\- Full-screen modal hoặc bottom sheet.  
\- Header sticky.  
\- Footer sticky nếu có hành động chính.

5\. Drawer  
Desktop:  
\- Drawer mở từ phải.  
\- Width 480–720px.  
Mobile:  
\- Drawer chuyển thành full-screen hoặc bottom sheet.

6\. Filter  
Desktop:  
\- Filter nằm ngang phía trên bảng.  
Mobile:  
\- Filter nằm trong bottom sheet mở từ icon filter.

7\. Card  
Desktop:  
\- Có thể chia 2–3 cột.  
Mobile:  
\- Xếp 1 cột.  
\- Padding 16px.  
\- Bo góc 16px.

8\. Sidebar  
Desktop:  
\- Sidebar cố định.  
Mobile:  
\- Chuyển thành hamburger drawer.

Đảm bảo mọi màn hình responsive vẫn dùng:  
\- Nền \#f7f7f7.  
\- Card trắng.  
\- CTA \#024ad8.  
\- Text \#1a1a1a.  
\- Button/input bo 4px.  
\- Card bo 16px.

---

# **15\. Prompt nối prototype responsive**

Tạo prototype responsive cho PharmaAssist, gồm luồng desktop và mobile.

Kích thước:  
\- Desktop: w-screen h-screen.  
\- Mobile: 390x844.

Luồng desktop:  
1\. Login desktop → Dashboard desktop.  
2\. Dashboard desktop → Sales POS desktop.  
3\. Sales POS desktop → Drug Interaction Alert desktop.  
4\. Drug Interaction Alert desktop → Sales POS desktop.  
5\. Sales POS desktop → Payment desktop.  
6\. Payment desktop → Invoice desktop.  
7\. Invoice desktop → Order History desktop.  
8\. Order History desktop → Order Detail desktop.  
9\. Order Detail desktop → Invoice desktop.

Luồng mobile:  
1\. Login mobile → Dashboard mobile.  
2\. Dashboard mobile → Sales POS mobile.  
3\. Sales POS mobile tab Tìm thuốc → thêm thuốc.  
4\. Sales POS mobile tab Cảnh báo → mở Drug Interaction Alert mobile.  
5\. Drug Interaction Alert mobile → quay lại Sales POS mobile.  
6\. Sales POS mobile tab Thanh toán → Payment mobile.  
7\. Payment mobile → Invoice mobile.  
8\. Invoice mobile → Order History mobile.  
9\. Order History mobile → Order Detail mobile.  
10\. Order Detail mobile → Invoice mobile.

Navigation:  
\- Desktop dùng sidebar.  
\- Mobile dùng hamburger drawer.  
\- Click hamburger mở mobile menu.  
\- Click overlay đóng mobile menu.

Interactions:  
\- Drawer dùng Move In 300ms.  
\- Modal dùng Smart Animate hoặc Dissolve 200ms.  
\- Bottom sheet mobile dùng Move In từ dưới lên.  
\- Toast hiển thị góc trên phải trên desktop.  
\- Toast hiển thị phía dưới hoặc trên cùng trên mobile.

Yêu cầu:  
\- Desktop và mobile dùng cùng dữ liệu demo.  
\- ORD0001, INV0001, Nguyễn Văn Minh và cảnh báo Ibuprofen \+ Warfarin phải thống nhất.  
\- Tất cả text tiếng Việt.  
\- Tất cả button chính dùng \#024ad8.

---

# **Cách làm thực tế trong Figma**

Bạn nên gửi theo thứ tự này:

1\. Prompt nền responsive  
2\. Login responsive  
3\. Dashboard responsive  
4\. Sales POS responsive  
5\. Drug Interaction Alert responsive  
6\. Order History responsive  
7\. Order Detail responsive  
8\. Invoice responsive  
9\. Inventory responsive  
10\. Customer Detail responsive  
11\. AI Copilot responsive  
12\. Mobile menu  
13\. Responsive component rules  
14\. Prototype responsive

Không cần responsive tất cả 35+ màn hình. Với đồ án, chỉ cần responsive cho **màn hình lõi** là đủ để chứng minh bạn có tư duy UI/UX tốt.

Dưới đây là **prompt nối prototype thao tác demo** cho Figma. Prompt này dùng cho cả **desktop `w-screen h-screen`** và **mobile `390x844`**, đồng thời nối các màn hình chính bạn đã tạo.

Tạo prototype thao tác demo hoàn chỉnh cho hệ thống PharmaAssist.

Mục tiêu:  
\- Nối các màn hình thành các luồng demo rõ ràng để trình bày đồ án.  
\- Prototype phải thao tác được bằng click/tap.  
\- Toàn bộ text, toast, modal, label, trạng thái đều dùng tiếng Việt.  
\- Dữ liệu giữa các màn hình phải thống nhất.  
\- Hỗ trợ cả desktop và mobile.

Kích thước:  
\- Desktop: w-screen h-screen.  
\- Mobile: 390x844.

Phong cách giữ nguyên:  
\- Nền nội dung \#f7f7f7.  
\- Card trắng bo 16px.  
\- CTA chính \#024ad8.  
\- Danger \#b3262b.  
\- Chữ chính \#1a1a1a.  
\- Button/input bo 4px.  
\- Font Inter hoặc Manrope.

Dữ liệu demo bắt buộc giữ thống nhất:  
\- Đơn hàng: ORD0001  
\- Hóa đơn: INV0001  
\- Khách hàng: Nguyễn Văn Minh  
\- Số điện thoại: 0901234567  
\- Nhân viên bán: Trần Thị B  
\- Tổng tiền: 130.000đ  
\- Thanh toán: Tiền mặt  
\- Trạng thái đơn: Đã thanh toán  
\- Cảnh báo tương tác: Ibuprofen 400mg \+ Warfarin 5mg  
\- Mức độ cảnh báo: Cao  
\- Trạng thái cảnh báo: Đã tư vấn

\==================================================  
A. LUỒNG DEMO 1 — ĐĂNG NHẬP VÀ DASHBOARD  
\==================================================

Desktop:  
1\. Login desktop  
\- Click button “ĐĂNG NHẬP” → chuyển sang Dashboard desktop.  
\- Click link “Quên mật khẩu?” → chuyển sang màn hình Quên mật khẩu desktop nếu có.  
\- Nếu click login sai demo state → hiển thị lỗi “Sai email hoặc mật khẩu.”

Mobile:  
1\. Login mobile  
\- Tap button “ĐĂNG NHẬP” → chuyển sang Dashboard mobile.  
\- Tap “Quên mật khẩu?” → chuyển sang Quên mật khẩu mobile nếu có.

Dashboard desktop:  
\- Click “TẠO ĐƠN BÁN” → Sales POS desktop.  
\- Click “NHẬP THUỐC” → Tạo phiếu nhập thuốc desktop.  
\- Click “XEM TỒN KHO” hoặc task cảnh báo kho → Quản lý tồn kho desktop.  
\- Click “XEM BÁO CÁO” → Báo cáo & thống kê desktop.  
\- Click một cảnh báo tương tác gần đây ORD0001 → Chi tiết đơn hàng desktop.

Dashboard mobile:  
\- Tap hamburger → mở mobile drawer menu.  
\- Tap “TẠO ĐƠN BÁN” → Sales POS mobile.  
\- Tap “Xem kho” trong card cảnh báo kho → Inventory mobile.  
\- Tap cảnh báo tương tác ORD0001 → Order Detail mobile.

Transition:  
\- Chuyển trang dùng Smart Animate hoặc Instant 200ms.  
\- Mobile drawer dùng Move In từ trái 300ms.

\==================================================  
B. LUỒNG DEMO 2 — BÁN THUỐC VÀ CẢNH BÁO TƯƠNG TÁC  
\==================================================

Desktop Sales POS:  
1\. Click “THÊM” ở Paracetamol 500mg  
\- Thêm thuốc vào đơn hiện tại.  
\- Cập nhật tạm tính \+50.000đ.

2\. Click “THÊM” ở Ibuprofen 400mg  
\- Thêm thuốc vào đơn.  
\- Cập nhật tạm tính \+32.000đ.

3\. Click “THÊM” ở Warfarin 5mg  
\- Thêm thuốc vào đơn.  
\- Cập nhật tạm tính \+48.000đ.  
\- Tổng thanh toán hiển thị 130.000đ.  
\- Hiển thị card cảnh báo tương tác bên phải.  
\- Đổi trạng thái đơn thành “Có cảnh báo chưa xử lý”.  
\- Disable button “THANH TOÁN”.

4\. Click “XEM CHI TIẾT CẢNH BÁO”  
\- Mở modal “Cảnh báo tương tác thuốc”.

Modal cảnh báo desktop:  
\- Hiển thị cặp thuốc: Ibuprofen 400mg \+ Warfarin 5mg.  
\- Mức độ: Cao.  
\- Có mô tả nguy cơ, khuyến nghị xử lý, ghi chú tư vấn.  
\- Có disclaimer:  
  “Thông tin cảnh báo chỉ mang tính tham khảo, không thay thế tư vấn của dược sĩ, bác sĩ hoặc chuyên gia y tế.”

Tương tác trong modal:  
\- Button “ĐÃ HIỂU VÀ TIẾP TỤC” ban đầu disabled.  
\- Tick checkbox “Tôi đã đọc cảnh báo và ghi nhận tư vấn” → button active.  
\- Click “ĐÃ HIỂU VÀ TIẾP TỤC” → đóng modal, quay lại Sales POS.  
\- Sau khi đóng modal:  
  \- Card cảnh báo chuyển trạng thái “Đã tư vấn”.  
  \- Checkbox “Đã tư vấn cho khách hàng” được tick.  
  \- Trạng thái đơn đổi thành “Sẵn sàng thanh toán”.  
  \- Button “THANH TOÁN” active.

5\. Click “THANH TOÁN”  
\- Chuyển sang Payment desktop.

Mobile Sales POS:  
\- Dùng tab:  
  1\. Tìm thuốc  
  2\. Đơn hàng  
  3\. Cảnh báo  
  4\. Thanh toán

Mobile flow:  
1\. Tap tab “Tìm thuốc”.  
2\. Tap “THÊM” ở Paracetamol.  
3\. Tap “THÊM” ở Ibuprofen.  
4\. Tap “THÊM” ở Warfarin.  
5\. Hiển thị badge cảnh báo trên tab “Cảnh báo”.  
6\. Tap tab “Cảnh báo”.  
7\. Tap “XEM CHI TIẾT CẢNH BÁO” → mở Drug Interaction Alert mobile.  
8\. Tick checkbox xác nhận.  
9\. Tap “ĐÃ HIỂU VÀ TIẾP TỤC” → quay lại Sales POS mobile.  
10\. Tap tab “Thanh toán”.  
11\. Tap button “THANH TOÁN” → Payment mobile.

Transition:  
\- Modal desktop dùng Dissolve 200ms.  
\- Modal mobile dùng bottom sheet hoặc full-screen modal Move In từ dưới 300ms.  
\- Tab mobile dùng Smart Animate 200ms.

\==================================================  
C. LUỒNG DEMO 3 — THANH TOÁN VÀ HÓA ĐƠN  
\==================================================

Payment desktop:  
1\. Chọn phương thức thanh toán: “Tiền mặt”.  
2\. Nhập “Khách đưa”: 150.000đ.  
3\. Tự tính “Tiền thối lại”: 20.000đ.  
4\. Click “XÁC NHẬN THANH TOÁN”.  
5\. Chuyển sang trạng thái “Đang xử lý thanh toán”.  
6\. Sau đó chuyển sang state “Thanh toán thành công”.  
7\. Click “XEM HÓA ĐƠN” → Invoice desktop.

Payment mobile:  
1\. Tap chọn “Tiền mặt”.  
2\. Nhập 150.000đ.  
3\. Hiển thị tiền thối lại 20.000đ.  
4\. Tap “XÁC NHẬN THANH TOÁN”.  
5\. Hiển thị loading state “Đang xử lý thanh toán...”.  
6\. Chuyển sang state “Thanh toán thành công”.  
7\. Tap “XEM HÓA ĐƠN” → Invoice mobile.

Invoice desktop:  
\- Click “IN HÓA ĐƠN” → hiển thị toast “Đang gửi lệnh in hóa đơn.”  
\- Click “TẢI PDF” → hiển thị toast “Tải hóa đơn thành công.”  
\- Click “GỬI HÓA ĐƠN” → mở modal gửi hóa đơn.  
\- Click “QUAY LẠI BÁN HÀNG” → Sales POS desktop.  
\- Click mã đơn ORD0001 nếu có → Chi tiết đơn hàng desktop.

Invoice mobile:  
\- Tap “IN HÓA ĐƠN” → toast “Đang gửi lệnh in hóa đơn.”  
\- Tap “TẢI PDF” → toast “Tải hóa đơn thành công.”  
\- Tap quay lại → Order Detail mobile hoặc Sales POS mobile tùy điểm vào.

Toast:  
\- Desktop: góc trên bên phải.  
\- Mobile: phía dưới màn hình hoặc phía trên nội dung.  
\- Tự đóng sau 2–3 giây.  
\- Có icon và nút đóng X.

\==================================================  
D. LUỒNG DEMO 4 — LỊCH SỬ ĐƠN HÀNG VÀ CHI TIẾT ĐƠN  
\==================================================

Desktop:  
1\. Từ sidebar, click “Bán thuốc”.  
2\. Mở submenu:  
   \- Tạo đơn bán  
   \- Lịch sử đơn hàng  
   \- Lịch sử thanh toán  
   \- Lịch sử hóa đơn  
3\. Click “Lịch sử đơn hàng” → Order History desktop.

Order History desktop:  
\- Click “TẠO ĐƠN MỚI” → Sales POS desktop.  
\- Click “ĐẶT LẠI” → reset bộ lọc.  
\- Click “ÁP DỤNG BỘ LỌC” → toast “Đã áp dụng bộ lọc.”  
\- Click dòng ORD0001 → mở drawer “Thông tin nhanh đơn hàng” từ bên phải.  
\- Click mã hóa đơn INV0001 → Invoice desktop.

Drawer thông tin nhanh:  
\- Click X hoặc overlay → đóng drawer.  
\- Click “XEM HÓA ĐƠN” → Invoice desktop.  
\- Click “XEM CHI TIẾT ĐƠN HÀNG” → Order Detail desktop.

Order Detail desktop:  
\- Click “QUAY LẠI” → Order History desktop.  
\- Click “XEM HÓA ĐƠN” → Invoice desktop.  
\- Click “XEM CHI TIẾT CẢNH BÁO” → mở modal cảnh báo tương tác.  
\- Click “IN LẠI HÓA ĐƠN” → toast “Đang gửi lệnh in hóa đơn.”  
\- Click “HỦY ĐƠN” → mở modal xác nhận hủy đơn.  
\- Click “TẠO ĐƠN MỚI” → Sales POS desktop.

Modal xác nhận hủy đơn:  
\- Tiêu đề: Xác nhận hủy đơn hàng.  
\- Textarea: Nhập lý do hủy đơn.  
\- Click “XÁC NHẬN HỦY” khi chưa nhập lý do → lỗi “Vui lòng nhập lý do hủy đơn.”  
\- Sau khi nhập lý do và click “XÁC NHẬN HỦY”:  
  \- Đóng modal.  
  \- Đổi trạng thái đơn thành “Đã hủy”.  
  \- Disable nút “HỦY ĐƠN”.  
  \- Toast: “Đã hủy đơn hàng ORD0001.”

Mobile:  
1\. Từ mobile drawer menu, tap “Lịch sử đơn hàng”.  
2\. Chuyển sang Order History mobile.  
3\. Tap card ORD0001 → Order Detail mobile.  
4\. Tap “XEM HÓA ĐƠN” → Invoice mobile.  
5\. Tap quay lại → Order Detail mobile.  
6\. Tap quay lại → Order History mobile.

Transition:  
\- Desktop drawer Move In từ phải 300ms.  
\- Mobile chuyển card detail dùng Smart Animate 200ms.  
\- Modal xác nhận dùng Dissolve 200ms.

\==================================================  
E. LUỒNG DEMO 5 — KHO THUỐC VÀ NHẬP THUỐC  
\==================================================

Desktop:  
1\. Từ Dashboard, click task “3 thuốc sắp hết cần nhập thêm” hoặc menu “Tồn kho”.  
2\. Chuyển sang Inventory desktop.  
3\. Click dòng MED001 Paracetamol 500mg.  
4\. Mở drawer chi tiết lô thuốc hoặc chuyển sang Batch / Lot Detail.  
5\. Click “XEM LỊCH SỬ BIẾN ĐỘNG” → mở drawer Lịch sử biến động kho.  
6\. Click “TẠO PHIẾU NHẬP” → Stock Import desktop.

Stock Import desktop:  
1\. Chọn nhà cung cấp: Công ty Dược An Tâm.  
2\. Chọn thuốc: Paracetamol 500mg.  
3\. Nhập số lượng: 70\.  
4\. Nhập giá nhập: 18.000đ.  
5\. Chọn hạn sử dụng: 31/12/2026.  
6\. Click “THÊM VÀO PHIẾU”.  
7\. Click “LƯU NHÁP” → toast “Đã lưu nháp phiếu nhập.”  
8\. Click “XÁC NHẬN NHẬP KHO” → mở modal xác nhận nhập kho.  
9\. Click “XÁC NHẬN NHẬP KHO” trong modal.  
10\. Chuyển trạng thái phiếu sang “Đã nhập kho”.  
11\. Toast “Nhập kho thành công.”  
12\. Chuyển sang Chi tiết phiếu nhập hoặc Lịch sử nhập thuốc.

Chi tiết phiếu nhập:  
\- Click “XEM BIẾN ĐỘNG KHO” → mở drawer biến động kho.  
\- Click “XEM NHÀ CUNG CẤP” → Supplier Detail.  
\- Click “IN PHIẾU NHẬP” → toast.

Mobile:  
\- Nếu có Inventory mobile:  
  \- Tap card MED001 → Batch Detail mobile.  
  \- Tap “BIẾN ĐỘNG KHO” → bottom sheet biến động kho.  
  \- Tap “TẠO PHIẾU NHẬP” → Stock Import mobile nếu có.  
\- Nếu chưa có mobile kho, chuyển về desktop flow.

\==================================================  
F. LUỒNG DEMO 6 — KHÁCH HÀNG  
\==================================================

Desktop:  
1\. Click menu “Khách hàng” → Customer Management desktop.  
2\. Click dòng KH001 Nguyễn Văn Minh → Customer Detail desktop.  
3\. Click “XEM TOÀN BỘ LỊCH SỬ MUA” → Customer Purchase History desktop.  
4\. Click ORD0001 → Order Detail desktop.  
5\. Click “TẠO ĐƠN BÁN CHO KHÁCH” → Sales POS desktop với khách hàng Nguyễn Văn Minh được chọn sẵn.

Mobile:  
1\. Từ mobile drawer, tap “Khách hàng” nếu có.  
2\. Tap khách hàng Nguyễn Văn Minh → Customer Detail mobile.  
3\. Tap “LỊCH SỬ MUA” → Customer Purchase History mobile.  
4\. Tap ORD0001 → Order Detail mobile.  
5\. Tap “TẠO ĐƠN BÁN” → Sales POS mobile.

\==================================================  
G. LUỒNG DEMO 7 — AI COPILOT VÀ NHẬT KÝ AI  
\==================================================

Desktop AI Copilot:  
1\. Click menu “AI Copilot”.  
2\. Click quick prompt “Giải thích cảnh báo tương tác”.  
3\. Hiển thị tin nhắn AI mẫu giải thích cảnh báo Ibuprofen \+ Warfarin.  
4\. Hiển thị disclaimer:  
   “Nội dung AI chỉ mang tính tham khảo, không thay thế tư vấn của dược sĩ, bác sĩ hoặc chuyên gia y tế.”  
5\. Click “TẠO GHI CHÚ TƯ VẤN”.  
6\. Hiển thị ghi chú nháp.  
7\. Click “LƯU VÀO GHI CHÚ” → toast “Đã lưu ghi chú tư vấn.”  
8\. Click “Xem nhật ký AI” hoặc menu “Nhật ký AI” → AI Audit Log.

AI Audit Log:  
\- Click dòng log ORD0001 → mở drawer chi tiết log.  
\- Click “SAO CHÉP LOG” → toast “Đã sao chép log.”  
\- Click filter “Bị chặn bởi guardrail” → hiển thị log yêu cầu bị chặn.

Mobile AI Copilot:  
\- Dùng tab Chat / Ngữ cảnh / Ghi chú nháp.  
\- Tap quick prompt → tạo phản hồi.  
\- Tap “LƯU VÀO GHI CHÚ” → toast.

\==================================================  
H. LUỒNG DEMO 8 — PHÂN QUYỀN VÀ SIDEBAR THEO VAI TRÒ  
\==================================================

Desktop:  
1\. Click menu “Vai trò & phân quyền”.  
2\. Click vai trò “Admin / Chủ nhà thuốc”.  
3\. Hiển thị toàn quyền.  
4\. Click vai trò “Nhân viên nhà thuốc”.  
5\. Hiển thị quyền bán thuốc, khách hàng, hóa đơn, AI Copilot.  
6\. Click vai trò “Nhân viên kho”.  
7\. Hiển thị quyền tồn kho, nhập thuốc, nhà cung cấp.  
8\. Tick hoặc bỏ tick một quyền.  
9\. Hiển thị banner “Bạn có thay đổi chưa được lưu.”  
10\. Click “LƯU PHÂN QUYỀN” → toast “Cập nhật phân quyền thành công.”

Sidebar role switching demo:  
\- Click dropdown vai trò hoặc avatar.  
\- Chọn Admin → sidebar Admin.  
\- Chọn Nhân viên nhà thuốc → sidebar Staff.  
\- Chọn Nhân viên kho → sidebar Warehouse.

Mobile:  
\- Trong mobile drawer, hiển thị menu tương ứng theo vai trò.  
\- Tap avatar hoặc role switch demo → đổi menu.

\==================================================  
I. LUỒNG DEMO 9 — THÔNG BÁO, CÀI ĐẶT, SAO LƯU  
\==================================================

Notification Center:  
\- Click icon chuông → Trung tâm thông báo.  
\- Click thông báo “Thuốc sắp hết” → Inventory.  
\- Click thông báo “Cảnh báo tương tác thuốc” → Order Detail.  
\- Click “ĐÁNH DẤU TẤT CẢ ĐÃ ĐỌC” → tất cả thông báo chuyển đã đọc.

Settings:  
\- Click menu “Cài đặt”.  
\- Click từng tab:  
  \- Thông tin nhà thuốc  
  \- Bán hàng  
  \- Tồn kho  
  \- Hóa đơn  
  \- AI & an toàn  
\- Toggle một cài đặt.  
\- Hiển thị banner “Bạn có thay đổi chưa được lưu.”  
\- Click “LƯU CÀI ĐẶT” → toast “Lưu cài đặt thành công.”

Backup / Export:  
\- Click “Sao lưu và xuất dữ liệu”.  
\- Click “TẠO BẢN SAO LƯU” → loading → toast “Tạo bản sao lưu thành công.”  
\- Chọn nhóm dữ liệu và định dạng Excel.  
\- Click “XUẤT DỮ LIỆU” → modal xác nhận.  
\- Click “XÁC NHẬN XUẤT” → toast “Xuất dữ liệu thành công.”

\==================================================  
J. LUỒNG DEMO 10 — TRANG KỊCH BẢN DEMO  
\==================================================

Demo Scenario Page:  
\- Click menu “Kịch bản demo”.  
\- Hiển thị 5 card demo:  
  1\. Luồng bán thuốc và cảnh báo tương tác  
  2\. Luồng quản lý kho và nhập thuốc  
  3\. Luồng tra cứu đơn hàng  
  4\. Luồng AI Copilot  
  5\. Luồng phân quyền

Prototype:  
\- Click “BẮT ĐẦU DEMO” ở card 1 → Sales POS.  
\- Click “BẮT ĐẦU DEMO” ở card 2 → Inventory.  
\- Click “BẮT ĐẦU DEMO” ở card 3 → Order History.  
\- Click “BẮT ĐẦU DEMO” ở card 4 → AI Copilot.  
\- Click “BẮT ĐẦU DEMO” ở card 5 → Role & Permission.  
\- Click “QUAY VỀ DASHBOARD” → Dashboard.

\==================================================  
K. QUY TẮC CHUNG CHO PROTOTYPE  
\==================================================

1\. Navigation  
\- Desktop dùng sidebar.  
\- Mobile dùng hamburger drawer.  
\- Click logo PharmaAssist hoặc Dashboard → Dashboard.

2\. Modal  
\- Có overlay nền tối nhẹ.  
\- Đóng khi click X.  
\- Đóng khi click overlay nếu không phải modal xác nhận quan trọng.  
\- Desktop modal centered.  
\- Mobile modal là full-screen hoặc bottom sheet.

3\. Drawer  
\- Desktop drawer mở từ phải.  
\- Mobile drawer mở từ trái cho menu, bottom sheet cho filter.

4\. Toast  
\- Tự đóng sau 2–3 giây.  
\- Có icon trạng thái.  
\- Có nút đóng X.  
\- Desktop toast góc trên phải.  
\- Mobile toast ở dưới hoặc trên cùng.

5\. Button states  
\- Mọi button có default, hover, pressed, disabled.  
\- Button chính dùng \#024ad8.  
\- Button danger dùng \#b3262b.  
\- Disabled dùng màu xám.

6\. Form validation  
\- Nếu trường bắt buộc trống, hiển thị lỗi dưới input.  
\- Input lỗi có viền danger.  
\- Không cho submit nếu dữ liệu bắt buộc chưa hợp lệ.

7\. Responsive  
\- Desktop frame dùng w-screen h-screen.  
\- Mobile frame dùng 390x844.  
\- Desktop bảng giữ dạng table.  
\- Mobile bảng chuyển thành card list.  
\- Desktop sidebar cố định.  
\- Mobile sidebar chuyển thành hamburger drawer.

8\. Data consistency  
\- ORD0001, INV0001, Nguyễn Văn Minh, Trần Thị B và tổng tiền 130.000đ phải thống nhất ở tất cả màn hình.  
\- Cảnh báo Ibuprofen 400mg \+ Warfarin 5mg phải thống nhất ở Sales POS, Interaction Alert, Order Detail, AI Copilot và AI Audit Log.  
\- Dữ liệu thuốc phải thống nhất với tồn kho chuẩn.

9\. Safety disclaimer  
Luôn hiển thị disclaimer ở các màn hình liên quan đến cảnh báo thuốc hoặc AI:  
“Thông tin cảnh báo chỉ mang tính tham khảo, không thay thế tư vấn của dược sĩ, bác sĩ hoặc chuyên gia y tế.”

\==================================================  
L. LUỒNG DEMO NGẮN NÊN ĐÁNH DẤU LÀ PRIMARY FLOW  
\==================================================

Đánh dấu flow chính để trình bày bảo vệ:

Login  
→ Dashboard  
→ Sales POS  
→ Thêm Paracetamol  
→ Thêm Ibuprofen  
→ Thêm Warfarin  
→ Drug Interaction Alert  
→ Xác nhận tư vấn  
→ Payment  
→ Invoice  
→ Order History  
→ Order Detail  
→ AI Copilot  
→ AI Audit Log

Tạo các hotspot rõ ràng cho từng bước để người trình bày chỉ cần click theo thứ tự.

Bạn có thể gửi nguyên prompt này cho Figma sau khi đã tạo đủ các màn hình. Nếu Figma bị quá tải, hãy tách prompt theo từng flow: **Bán thuốc**, **Lịch sử đơn hàng**, **Kho thuốc**, **AI**, **Phân quyền**.

Chuyển giao diện PharmaAssist thành responsive design cho nhiều kích thước thiết bị.

Kích thước:  
\- Desktop: w-screen h-screen.  
\- Tablet: responsive từ 768px đến 1023px.  
\- Mobile: responsive từ 320px đến 479px.  
\- Dùng 390px làm frame tham chiếu, không khóa layout ở 390px.

Quy tắc mobile:  
\- Tất cả layout chính dùng Auto Layout.  
\- Container, card, input và button dùng Fill Container.  
\- Padding ngang mặc định 16px.  
\- Với màn hình nhỏ từ 320px đến 359px, giảm padding ngang còn 12px.  
\- Nội dung chuyển thành 1 cột.  
\- Text dài phải tự xuống dòng.  
\- Không dùng bảng ngang; chuyển bảng thành card list.  
\- Sidebar chuyển thành hamburger drawer.  
\- Modal chuyển thành full-screen modal hoặc bottom sheet.  
\- Button chính full width.  
\- Touch target tối thiểu 44x44px.  
\- Không để nội dung bị tràn ngang.  
\- Kiểm tra giao diện ở các chiều rộng 320px, 360px, 390px, 412px và 430px.

Quy tắc tablet:  
\- Dùng layout 1 hoặc 2 cột tùy nội dung.  
\- Sidebar có thể thu gọn thành icon rail hoặc drawer.  
\- Bảng có thể giữ dạng table nếu đủ chỗ, nếu không thì chuyển card list.

Quy tắc desktop:  
\- Sidebar cố định.  
\- Nội dung có thể chia 2 hoặc 3 cột.  
\- Bảng hiển thị đầy đủ.

### **5\. Tạo prompt kiểm tra responsive**

Bạn có thể gửi prompt này cho Figma:

Rà soát toàn bộ giao diện responsive của PharmaAssist.

Mục tiêu:  
\- Kiểm tra giao diện hoạt động tốt trên nhiều kích thước màn hình.  
\- Không khóa layout theo một kích thước mobile cố định.

Breakpoint:  
\- Mobile Small: 320px–359px  
\- Mobile: 360px–389px  
\- Mobile Large: 390px–479px  
\- Tablet: 768px–1023px  
\- Desktop: từ 1024px trở lên

Yêu cầu:  
\- Dùng Auto Layout cho các frame chính.  
\- Dùng Fill Container cho container, card, input và button.  
\- Text dài phải tự xuống dòng.  
\- Không có overflow ngang.  
\- Sidebar desktop chuyển thành hamburger drawer trên mobile.  
\- Table desktop chuyển thành card list trên mobile.  
\- Filter desktop chuyển thành bottom sheet trên mobile.  
\- Modal desktop chuyển thành full-screen hoặc bottom sheet trên mobile.  
\- Button chính full width trên mobile.  
\- Touch target tối thiểu 44x44px.  
\- Padding ngang mobile mặc định 16px.  
\- Với màn hình 320px, giảm padding còn 12px.  
\- Kiểm tra ở các chiều rộng 320px, 360px, 390px, 412px, 430px, 768px, 1024px và 1440px.

# Thẻ 4

# **3\. Prompt cho Figma để nối lại prototype sau responsive**

Bạn có thể gửi prompt này:

Nối lại prototype sau khi đã hoàn thiện responsive cho PharmaAssist.

Mục tiêu:  
\- Tạo 3 luồng demo riêng biệt, dễ trình bày trong buổi bảo vệ.  
\- Có cả desktop và mobile nếu các frame tương ứng đã tồn tại.  
\- Giữ dữ liệu demo thống nhất.  
\- Tất cả thao tác, toast, modal và trạng thái đều bằng tiếng Việt.

Luồng 1: Bán thuốc và cảnh báo tương tác  
Desktop:  
Login desktop → Dashboard desktop → Bán thuốc tại quầy desktop → Modal cảnh báo tương tác thuốc desktop → Thanh toán desktop → Hóa đơn desktop

Mobile:  
Login mobile → Dashboard mobile → Bán thuốc tại quầy mobile → Modal cảnh báo tương tác thuốc mobile → Thanh toán mobile → Hóa đơn mobile

Tương tác:  
\- Click ĐĂNG NHẬP → Dashboard.  
\- Click TẠO ĐƠN BÁN → Bán thuốc tại quầy.  
\- Click THÊM ở Paracetamol 500mg → thêm vào đơn.  
\- Click THÊM ở Ibuprofen 400mg → thêm vào đơn.  
\- Click THÊM ở Warfarin 5mg → hiển thị cảnh báo tương tác.  
\- Click XEM CHI TIẾT CẢNH BÁO → mở modal cảnh báo.  
\- Tick checkbox xác nhận tư vấn → enable nút ĐÃ HIỂU VÀ TIẾP TỤC.  
\- Click ĐÃ HIỂU VÀ TIẾP TỤC → quay lại đơn bán.  
\- Click THANH TOÁN → Thanh toán.  
\- Click XÁC NHẬN THANH TOÁN → Hóa đơn.  
\- Click IN HÓA ĐƠN → toast “Đang gửi lệnh in hóa đơn.”

Luồng 2: Kho thuốc và nhập thuốc  
Desktop:  
Dashboard desktop → Quản lý tồn kho desktop → Lịch sử biến động kho → Tạo phiếu nhập thuốc desktop → Chi tiết phiếu nhập thuốc desktop

Mobile nếu có:  
Dashboard mobile → Quản lý tồn kho mobile → Lịch sử biến động kho mobile → Tạo phiếu nhập thuốc mobile

Tương tác:  
\- Click cảnh báo “Paracetamol 500mg còn 12 hộp” → Quản lý tồn kho.  
\- Click dòng MED001 Paracetamol 500mg → mở chi tiết lô hoặc drawer tồn kho.  
\- Click XEM LỊCH SỬ BIẾN ĐỘNG → mở drawer/bottom sheet lịch sử biến động kho.  
\- Click TẠO PHIẾU NHẬP → Tạo phiếu nhập thuốc.  
\- Click THÊM VÀO PHIẾU → thêm thuốc vào bảng.  
\- Click LƯU NHÁP → toast “Đã lưu nháp phiếu nhập.”  
\- Click XÁC NHẬN NHẬP KHO → mở modal xác nhận.  
\- Click XÁC NHẬN NHẬP KHO trong modal → Chi tiết phiếu nhập thuốc.  
\- Hiển thị toast “Nhập kho thành công.”

Luồng 3: Tra cứu đơn hàng và báo cáo  
Desktop:  
Lịch sử đơn hàng desktop → Chi tiết đơn hàng desktop → Hóa đơn desktop → Báo cáo & thống kê desktop

Mobile:  
Lịch sử đơn hàng mobile → Chi tiết đơn hàng mobile → Hóa đơn mobile

Tương tác:  
\- Click Lịch sử đơn hàng trong sidebar hoặc mobile drawer.  
\- Click ORD0001 → Chi tiết đơn hàng.  
\- Click XEM CHI TIẾT CẢNH BÁO → mở modal cảnh báo tương tác đã xử lý.  
\- Click XEM HÓA ĐƠN → Hóa đơn.  
\- Click quay lại → Chi tiết đơn hàng.  
\- Click Báo cáo & thống kê → Báo cáo.  
\- Click XUẤT EXCEL hoặc XUẤT BÁO CÁO → toast “Xuất báo cáo thành công.”

Quy tắc prototype:  
\- Desktop dùng sidebar.  
\- Mobile dùng hamburger drawer.  
\- Modal desktop dùng centered modal.  
\- Modal mobile dùng bottom sheet hoặc full-screen modal.  
\- Filter mobile dùng bottom sheet.  
\- Drawer desktop mở từ phải.  
\- Toast desktop ở góc trên phải.  
\- Toast mobile ở phía dưới màn hình.  
\- Dùng Smart Animate hoặc Instant 200–300ms.  
\- Tất cả nút chính dùng \#024ad8.  
\- Nút nguy hiểm dùng \#b3262b.  
\- Không để hotspot bị thiếu trên mobile.

Dưới đây là prompt mở rộng, có **nhiều luồng demo hơn** và đã bổ sung yêu cầu:

**Prompt đổi màu nền**

Chỉnh dòng “Bỏ qua → Đăng nhập trực tiếp” thành nút nền xanh \#024ad8 để người dùng có thể bỏ qua việc chọn luồng và bắt đầu tự đi test.

Bạn có thể copy nguyên khối này gửi cho Figma.

Nối lại prototype sau khi đã hoàn thiện responsive cho PharmaAssist.

Mục tiêu:  
\- Tạo nhiều luồng demo riêng biệt, dễ trình bày trong buổi bảo vệ.  
\- Có cả desktop và mobile nếu các frame tương ứng đã tồn tại.  
\- Giữ dữ liệu demo thống nhất.  
\- Tất cả thao tác, toast, modal, drawer, bottom sheet và trạng thái đều bằng tiếng Việt.  
\- Cho phép người dùng chọn kịch bản demo hoặc bỏ qua để tự test hệ thống.

Kích thước:  
\- Desktop: w-screen h-screen.  
\- Mobile: responsive mobile, không khóa theo một kích thước cố định.

Yêu cầu đặc biệt cho màn hình Kịch bản demo:  
\- Thêm hoặc chỉnh dòng “Bỏ qua → Đăng nhập trực tiếp” thành button rõ ràng.  
\- Button này có nền màu xanh \#024ad8.  
\- Chữ màu trắng \#ffffff.  
\- Text button: BỎ QUA → ĐĂNG NHẬP TRỰC TIẾP  
\- Button cao tối thiểu 44px.  
\- Bo góc 4px.  
\- Đặt ở vị trí dễ thấy, ví dụ phía trên danh sách card demo hoặc cuối header.  
\- Khi click button này → chuyển thẳng sang màn hình Login.  
\- Mục đích: người dùng có thể bỏ qua việc chọn luồng demo và bắt đầu tự đi test hệ thống.

Dữ liệu demo bắt buộc giữ thống nhất:  
\- Đơn hàng: ORD0001  
\- Hóa đơn: INV0001  
\- Khách hàng: Nguyễn Văn Minh  
\- Số điện thoại: 0901234567  
\- Nhân viên bán: Trần Thị B  
\- Tổng tiền: 130.000đ  
\- Thanh toán: Tiền mặt  
\- Trạng thái đơn: Đã thanh toán  
\- Cảnh báo tương tác: Ibuprofen 400mg \+ Warfarin 5mg  
\- Mức độ cảnh báo: Cao  
\- Trạng thái cảnh báo: Đã tư vấn

\==================================================  
LUỒNG 0 — MÀN HÌNH KỊCH BẢN DEMO  
\==================================================

Desktop:  
Kịch bản demo desktop → chọn từng card demo hoặc bỏ qua để đăng nhập.

Mobile:  
Kịch bản demo mobile → chọn từng card demo hoặc bỏ qua để đăng nhập.

Tương tác:  
\- Click “BỎ QUA → ĐĂNG NHẬP TRỰC TIẾP” → Login.  
\- Click card “Luồng bán thuốc và cảnh báo tương tác” → Sales POS hoặc Login trước nếu muốn bắt đầu đầy đủ.  
\- Click card “Luồng quản lý kho và nhập thuốc” → Inventory.  
\- Click card “Luồng tra cứu đơn hàng” → Order History.  
\- Click card “Luồng AI Copilot” → AI Copilot.  
\- Click card “Luồng phân quyền” → Role & Permission.  
\- Click card “Luồng khách hàng” → Customer Management.  
\- Click card “Luồng báo cáo” → Reports.  
\- Click card “Luồng cài đặt và sao lưu” → Settings.

Quy tắc:  
\- Các card demo có button “BẮT ĐẦU DEMO”.  
\- Button “BỎ QUA → ĐĂNG NHẬP TRỰC TIẾP” phải nổi bật hơn các link phụ.  
\- Không dùng text link mờ cho chức năng bỏ qua.

\==================================================  
LUỒNG 1 — BÁN THUỐC VÀ CẢNH BÁO TƯƠNG TÁC  
\==================================================

Desktop:  
Login desktop → Dashboard desktop → Bán thuốc tại quầy desktop → Modal cảnh báo tương tác thuốc desktop → Thanh toán desktop → Hóa đơn desktop

Mobile:  
Login mobile → Dashboard mobile → Bán thuốc tại quầy mobile → Modal cảnh báo tương tác thuốc mobile → Thanh toán mobile → Hóa đơn mobile

Tương tác:  
\- Click ĐĂNG NHẬP → Dashboard.  
\- Click TẠO ĐƠN BÁN → Bán thuốc tại quầy.  
\- Click THÊM ở Paracetamol 500mg → thêm vào đơn.  
\- Click THÊM ở Ibuprofen 400mg → thêm vào đơn.  
\- Click THÊM ở Warfarin 5mg → hiển thị cảnh báo tương tác.  
\- Click XEM CHI TIẾT CẢNH BÁO → mở modal cảnh báo.  
\- Tick checkbox xác nhận tư vấn → enable nút ĐÃ HIỂU VÀ TIẾP TỤC.  
\- Click ĐÃ HIỂU VÀ TIẾP TỤC → quay lại đơn bán.  
\- Card cảnh báo chuyển sang trạng thái Đã tư vấn.  
\- Button THANH TOÁN được bật.  
\- Click THANH TOÁN → Thanh toán.  
\- Chọn phương thức Tiền mặt.  
\- Nhập khách đưa 150.000đ.  
\- Hiển thị tiền thối lại 20.000đ.  
\- Click XÁC NHẬN THANH TOÁN → Hóa đơn.  
\- Click IN HÓA ĐƠN → toast “Đang gửi lệnh in hóa đơn.”  
\- Click TẢI PDF → toast “Tải hóa đơn thành công.”

Mobile bổ sung:  
\- Sales POS mobile dùng tab: Tìm thuốc, Đơn hàng, Cảnh báo, Thanh toán.  
\- Khi có tương tác, tab Cảnh báo có badge.  
\- Modal cảnh báo mobile dùng bottom sheet hoặc full-screen modal.  
\- Button thanh toán mobile full width và sticky bottom.

\==================================================  
LUỒNG 2 — KHO THUỐC VÀ NHẬP THUỐC  
\==================================================

Desktop:  
Dashboard desktop → Quản lý tồn kho desktop → Chi tiết lô thuốc hoặc drawer tồn kho → Lịch sử biến động kho → Tạo phiếu nhập thuốc desktop → Chi tiết phiếu nhập thuốc desktop

Mobile nếu có:  
Dashboard mobile → Quản lý tồn kho mobile → Chi tiết lô thuốc mobile → Lịch sử biến động kho mobile → Tạo phiếu nhập thuốc mobile

Tương tác:  
\- Click cảnh báo “Paracetamol 500mg còn 12 hộp” → Quản lý tồn kho.  
\- Click dòng MED001 Paracetamol 500mg → mở Chi tiết lô thuốc hoặc drawer tồn kho.  
\- Click XEM LỊCH SỬ BIẾN ĐỘNG → mở drawer hoặc bottom sheet lịch sử biến động kho.  
\- Click TẠO PHIẾU NHẬP → Tạo phiếu nhập thuốc.  
\- Chọn nhà cung cấp: Công ty Dược An Tâm.  
\- Chọn thuốc: Paracetamol 500mg.  
\- Nhập số lượng: 70\.  
\- Nhập giá nhập: 18.000đ.  
\- Chọn hạn sử dụng: 31/12/2026.  
\- Click THÊM VÀO PHIẾU → thêm thuốc vào bảng chi tiết phiếu.  
\- Click LƯU NHÁP → toast “Đã lưu nháp phiếu nhập.”  
\- Click XÁC NHẬN NHẬP KHO → mở modal xác nhận.  
\- Click XÁC NHẬN NHẬP KHO trong modal → Chi tiết phiếu nhập thuốc.  
\- Hiển thị toast “Nhập kho thành công.”  
\- Click IN PHIẾU NHẬP → toast “Đang gửi lệnh in phiếu nhập.”

\==================================================  
LUỒNG 3 — TRA CỨU ĐƠN HÀNG VÀ BÁO CÁO  
\==================================================

Desktop:  
Lịch sử đơn hàng desktop → Chi tiết đơn hàng desktop → Hóa đơn desktop → Báo cáo & thống kê desktop

Mobile:  
Lịch sử đơn hàng mobile → Chi tiết đơn hàng mobile → Hóa đơn mobile

Tương tác:  
\- Click Lịch sử đơn hàng trong sidebar hoặc mobile drawer.  
\- Click hoặc tap ORD0001 → Chi tiết đơn hàng.  
\- Click XEM CHI TIẾT CẢNH BÁO → mở modal cảnh báo tương tác đã xử lý.  
\- Click đóng modal → quay lại Chi tiết đơn hàng.  
\- Click XEM HÓA ĐƠN → Hóa đơn.  
\- Click quay lại → Chi tiết đơn hàng.  
\- Click Báo cáo & thống kê → Báo cáo.  
\- Chọn khoảng thời gian 7 ngày.  
\- Click ÁP DỤNG BỘ LỌC → cập nhật biểu đồ.  
\- Click XUẤT EXCEL hoặc XUẤT BÁO CÁO → toast “Xuất báo cáo thành công.”

\==================================================  
LUỒNG 4 — QUẢN LÝ THUỐC  
\==================================================

Desktop:  
Dashboard desktop → Quản lý thuốc desktop → Chi tiết thuốc desktop → Thêm/Sửa thuốc desktop → Quản lý thuốc desktop

Mobile nếu có:  
Dashboard mobile → Quản lý thuốc mobile → Chi tiết thuốc mobile → Thêm/Sửa thuốc mobile

Tương tác:  
\- Click menu Quản lý thuốc → màn hình Quản lý thuốc.  
\- Nhập “Paracetamol” vào ô tìm kiếm.  
\- Click ÁP DỤNG hoặc chọn kết quả MED001.  
\- Click dòng MED001 → Chi tiết thuốc.  
\- Click CHỈNH SỬA THUỐC → mở màn hình hoặc modal Thêm/Sửa thuốc.  
\- Thay đổi giá bán từ 25.000đ thành 26.000đ.  
\- Click LƯU THUỐC → toast “Lưu thuốc thành công.”  
\- Quay lại Quản lý thuốc.  
\- Click THÊM THUỐC → mở form thêm thuốc mới.  
\- Nếu bấm LƯU khi chưa nhập tên thuốc → hiển thị lỗi “Vui lòng nhập tên thuốc.”

\==================================================  
LUỒNG 5 — QUẢN LÝ DANH MỤC THUỐC  
\==================================================

Desktop:  
Dashboard desktop → Quản lý danh mục thuốc desktop → Thêm/Sửa danh mục → Quản lý thuốc

Tương tác:  
\- Click menu Danh mục thuốc.  
\- Click THÊM DANH MỤC.  
\- Panel hoặc modal thêm danh mục được focus.  
\- Nhập tên danh mục: Thuốc tiêu hóa.  
\- Nhập mô tả: Nhóm thuốc tiêu hóa mẫu phục vụ đồ án.  
\- Click LƯU DANH MỤC → toast “Lưu danh mục thành công.”  
\- Click Sửa ở danh mục “Giảm đau, hạ sốt” → đổ dữ liệu vào form.  
\- Click Xóa → mở modal xác nhận.  
\- Click HỦY → đóng modal.

Mobile nếu có:  
\- Danh mục chuyển thành card list.  
\- Form thêm danh mục mở bằng bottom sheet.

\==================================================  
LUỒNG 6 — NHÀ CUNG CẤP  
\==================================================

Desktop:  
Quản lý nhà cung cấp desktop → Chi tiết nhà cung cấp desktop → Tạo phiếu nhập thuốc desktop → Lịch sử nhập thuốc desktop

Mobile nếu có:  
Quản lý nhà cung cấp mobile → Chi tiết nhà cung cấp mobile

Tương tác:  
\- Click menu Nhà cung cấp.  
\- Click THÊM NHÀ CUNG CẤP → mở modal thêm nhà cung cấp.  
\- Nhập tên: Công ty Dược An Tâm.  
\- Click LƯU NHÀ CUNG CẤP → toast “Lưu nhà cung cấp thành công.”  
\- Click dòng NCC001 → Chi tiết nhà cung cấp.  
\- Click TẠO PHIẾU NHẬP → Stock Import với nhà cung cấp đã được chọn sẵn.  
\- Click XEM LỊCH SỬ NHẬP → Lịch sử nhập thuốc lọc theo NCC001.  
\- Click TẠM NGỪNG HỢP TÁC → mở modal xác nhận.  
\- Click QUAY LẠI → đóng modal.

\==================================================  
LUỒNG 7 — ĐIỀU CHỈNH TỒN KHO  
\==================================================

Desktop:  
Quản lý tồn kho desktop → Chi tiết lô thuốc desktop → Điều chỉnh tồn kho desktop → Lịch sử biến động kho

Mobile nếu có:  
Quản lý tồn kho mobile → Chi tiết lô thuốc mobile → Điều chỉnh tồn kho mobile

Tương tác:  
\- Click menu Tồn kho.  
\- Click dòng MED001 hoặc LOT001.  
\- Chuyển sang Chi tiết lô thuốc.  
\- Click ĐIỀU CHỈNH TỒN → màn hình Điều chỉnh tồn kho.  
\- Chọn loại điều chỉnh: Giảm tồn.  
\- Nhập số lượng điều chỉnh: 2\.  
\- Chọn lý do: Kiểm kê thực tế.  
\- Nhập ghi chú: Điều chỉnh theo kiểm kê cuối ngày.  
\- Tick checkbox xác nhận.  
\- Click LƯU ĐIỀU CHỈNH → mở modal xác nhận.  
\- Click XÁC NHẬN → toast “Điều chỉnh tồn kho thành công.”  
\- Chuyển sang Lịch sử biến động kho hoặc quay lại Tồn kho.

\==================================================  
LUỒNG 8 — KHÁCH HÀNG VÀ LỊCH SỬ MUA  
\==================================================

Desktop:  
Quản lý khách hàng desktop → Chi tiết khách hàng desktop → Lịch sử mua hàng của khách desktop → Chi tiết đơn hàng desktop → Sales POS desktop

Mobile:  
Quản lý khách hàng mobile → Chi tiết khách hàng mobile → Lịch sử mua hàng mobile → Chi tiết đơn hàng mobile

Tương tác:  
\- Click menu Khách hàng.  
\- Click dòng KH001 Nguyễn Văn Minh → Chi tiết khách hàng.  
\- Click XEM TOÀN BỘ LỊCH SỬ MUA → Lịch sử mua hàng của khách.  
\- Click ORD0001 → Chi tiết đơn hàng.  
\- Click quay lại → Lịch sử mua hàng.  
\- Click TẠO ĐƠN BÁN CHO KHÁCH → Sales POS với khách hàng Nguyễn Văn Minh đã được chọn.  
\- Click THÊM KHÁCH HÀNG ở Quản lý khách hàng → mở modal thêm khách hàng.  
\- Click LƯU KHÁCH HÀNG → toast “Lưu khách hàng thành công.”

\==================================================  
LUỒNG 9 — LỊCH SỬ THANH TOÁN  
\==================================================

Desktop:  
Lịch sử thanh toán desktop → Drawer chi tiết thanh toán → Chi tiết đơn hàng → Hóa đơn

Mobile nếu có:  
Lịch sử thanh toán mobile → Chi tiết thanh toán mobile

Tương tác:  
\- Click menu Lịch sử thanh toán.  
\- Click bộ lọc phương thức thanh toán: Tiền mặt.  
\- Click ÁP DỤNG → toast “Đã áp dụng bộ lọc.”  
\- Click dòng PAY001 → mở drawer chi tiết thanh toán.  
\- Click XEM ĐƠN HÀNG → Chi tiết đơn hàng ORD0001.  
\- Click XEM HÓA ĐƠN → Hóa đơn INV0001.  
\- Click XUẤT EXCEL → toast “Xuất lịch sử thanh toán thành công.”

\==================================================  
LUỒNG 10 — LỊCH SỬ HÓA ĐƠN  
\==================================================

Desktop:  
Lịch sử hóa đơn desktop → Hóa đơn desktop → Invoice Print View

Mobile:  
Lịch sử hóa đơn mobile → Hóa đơn mobile

Tương tác:  
\- Click menu Lịch sử hóa đơn.  
\- Click Xem hóa đơn ở INV0001 → Hóa đơn.  
\- Click IN LẠI → toast “Đang gửi lệnh in hóa đơn.”  
\- Click TẢI PDF → toast “Tải hóa đơn thành công.”  
\- Click GỬI HÓA ĐƠN → mở modal gửi hóa đơn.  
\- Nhập email hoặc số điện thoại.  
\- Click GỬI HÓA ĐƠN → toast “Gửi hóa đơn thành công.”  
\- Click Xem bản in nếu có → Invoice Print View.

\==================================================  
LUỒNG 11 — AI COPILOT VÀ NHẬT KÝ AI  
\==================================================

Desktop:  
AI Copilot desktop → Lưu ghi chú tư vấn → AI Audit Log desktop → Drawer chi tiết log

Mobile:  
AI Copilot mobile → Ghi chú nháp mobile → AI Audit Log mobile nếu có

Tương tác:  
\- Click menu AI Copilot.  
\- Click quick prompt “Giải thích cảnh báo tương tác”.  
\- Hiển thị phản hồi mẫu về cảnh báo Ibuprofen \+ Warfarin.  
\- Hiển thị disclaimer an toàn.  
\- Click TẠO GHI CHÚ TƯ VẤN hoặc LƯU VÀO GHI CHÚ.  
\- Toast “Đã lưu ghi chú tư vấn.”  
\- Click menu Nhật ký AI.  
\- Click dòng log ORD0001 → mở drawer chi tiết log.  
\- Click SAO CHÉP LOG → toast “Đã sao chép log.”  
\- Click filter “Bị chặn bởi guardrail” → hiển thị log yêu cầu bị chặn.

Yêu cầu an toàn:  
\- Không tạo nội dung kê đơn, chẩn đoán hoặc hướng dẫn điều trị.  
\- Luôn giữ disclaimer AI.

\==================================================  
LUỒNG 12 — GRAPH EXPLORER  
\==================================================

Desktop:  
Graph Explorer desktop → Chọn node thuốc → Drawer chi tiết quan hệ → Chi tiết thuốc

Mobile nếu có:  
Graph Explorer mobile → Node detail bottom sheet

Tương tác:  
\- Click menu Graph Explorer.  
\- Click node Ibuprofen.  
\- Panel trái cập nhật:  
  \- Tên: Ibuprofen 400mg  
  \- Loại: Thuốc  
  \- Hoạt chất: Ibuprofen  
  \- Nhóm: Giảm đau  
\- Click node Warfarin.  
\- Hiển thị cạnh TƯƠNG\_TÁC\_VỚI giữa Ibuprofen và Warfarin.  
\- Click cạnh tương tác → mở drawer chi tiết quan hệ.  
\- Drawer hiển thị:  
  \- Thuốc 1  
  \- Thuốc 2  
  \- Mức độ: Cao  
  \- Mô tả mẫu  
  \- Khuyến nghị mẫu  
\- Click XEM CHI TIẾT THUỐC → Chi tiết thuốc.  
\- Click TÌM KIẾM sau khi nhập “Warfarin” → lọc graph.

Disclaimer:  
\- Graph chỉ sử dụng dữ liệu mẫu phục vụ đồ án. Không sử dụng như dữ liệu y khoa thật.

\==================================================  
LUỒNG 13 — PHÂN QUYỀN VÀ SIDEBAR THEO VAI TRÒ  
\==================================================

Desktop:  
Role & Permission desktop → Chọn vai trò → Sửa quyền → Lưu phân quyền → Chuyển sidebar theo vai trò

Mobile:  
Role & Permission mobile nếu có → Mobile drawer theo vai trò

Tương tác:  
\- Click menu Vai trò & phân quyền.  
\- Click vai trò Admin / Chủ nhà thuốc → hiển thị toàn quyền.  
\- Click vai trò Nhân viên nhà thuốc → hiển thị quyền bán hàng, khách hàng, hóa đơn, AI Copilot.  
\- Click vai trò Nhân viên kho → hiển thị quyền tồn kho, nhập thuốc, nhà cung cấp.  
\- Tick hoặc bỏ tick một quyền.  
\- Hiển thị banner “Bạn có thay đổi chưa được lưu.”  
\- Click LƯU PHÂN QUYỀN → toast “Cập nhật phân quyền thành công.”  
\- Click avatar hoặc dropdown vai trò.  
\- Chọn Admin → sidebar Admin.  
\- Chọn Nhân viên nhà thuốc → sidebar Staff.  
\- Chọn Nhân viên kho → sidebar Warehouse.  
\- Nếu người dùng truy cập màn hình không có quyền → chuyển sang 403 Không có quyền truy cập.

\==================================================  
LUỒNG 14 — NGƯỜI DÙNG VÀ HỒ SƠ CÁ NHÂN  
\==================================================

Desktop:  
Quản lý người dùng desktop → Modal thêm tài khoản → Hồ sơ người dùng desktop → Đổi mật khẩu → Đăng xuất

Mobile nếu có:  
Hồ sơ người dùng mobile → Đổi mật khẩu mobile

Tương tác:  
\- Click menu Người dùng.  
\- Click THÊM TÀI KHOẢN → mở modal thêm tài khoản.  
\- Nhập họ tên, email, vai trò.  
\- Click LƯU TÀI KHOẢN → toast “Lưu tài khoản thành công.”  
\- Click Khóa ở một tài khoản → mở modal xác nhận khóa.  
\- Click HỦY → đóng modal.  
\- Click avatar → Hồ sơ cá nhân.  
\- Click LƯU THAY ĐỔI → toast “Cập nhật hồ sơ thành công.”  
\- Click ĐỔI MẬT KHẨU → mở form đổi mật khẩu.  
\- Nếu mật khẩu xác nhận không khớp → hiển thị lỗi.  
\- Click ĐĂNG XUẤT → modal xác nhận.  
\- Click XÁC NHẬN ĐĂNG XUẤT → Login.

\==================================================  
LUỒNG 15 — THÔNG BÁO  
\==================================================

Desktop:  
Notification Center desktop → Click thông báo → Màn hình liên quan

Mobile:  
Notification Center mobile → Tap thông báo → Màn hình liên quan

Tương tác:  
\- Click icon chuông trên top header → Trung tâm thông báo.  
\- Click tab Kho thuốc → lọc thông báo kho.  
\- Click thông báo “Paracetamol 500mg chỉ còn 12 hộp” → Quản lý tồn kho.  
\- Click thông báo “Đơn ORD0001 có tương tác mức cao” → Chi tiết đơn hàng.  
\- Click thông báo “Hóa đơn INV0001 đã được tạo” → Hóa đơn.  
\- Click thông báo AI Guardrail → Nhật ký AI.  
\- Click ĐÁNH DẤU TẤT CẢ ĐÃ ĐỌC → toast “Đã đánh dấu tất cả thông báo là đã đọc.”

\==================================================  
LUỒNG 16 — CÀI ĐẶT HỆ THỐNG VÀ HỒ SƠ NHÀ THUỐC  
\==================================================

Desktop:  
Settings desktop → Pharmacy Profile desktop → Invoice Print View hoặc Invoice

Mobile nếu có:  
Settings mobile → Pharmacy Profile mobile

Tương tác:  
\- Click menu Cài đặt.  
\- Click tab Thông tin nhà thuốc.  
\- Click tab Bán hàng.  
\- Click tab Tồn kho.  
\- Click tab Hóa đơn.  
\- Click tab AI & an toàn.  
\- Toggle “Bắt buộc disclaimer AI”.  
\- Hiển thị banner “Bạn có thay đổi chưa được lưu.”  
\- Click LƯU CÀI ĐẶT → toast “Lưu cài đặt thành công.”  
\- Click Hồ sơ nhà thuốc.  
\- Click CHỈNH SỬA THÔNG TIN → mở form chỉnh sửa.  
\- Click TẢI LOGO LÊN → upload state.  
\- Click LƯU → toast “Cập nhật hồ sơ nhà thuốc thành công.”

\==================================================  
LUỒNG 17 — SAO LƯU VÀ XUẤT DỮ LIỆU  
\==================================================

Desktop:  
Backup / Export Data desktop → Modal xác nhận xuất dữ liệu → Toast thành công

Tương tác:  
\- Click menu Sao lưu dữ liệu.  
\- Click TẠO BẢN SAO LƯU.  
\- Hiển thị loading state.  
\- Toast “Tạo bản sao lưu thành công.”  
\- Chọn dữ liệu:  
  \- Thuốc  
  \- Tồn kho  
  \- Khách hàng  
  \- Đơn hàng  
  \- Hóa đơn  
\- Chọn định dạng Excel.  
\- Click XUẤT DỮ LIỆU → mở modal xác nhận.  
\- Click XÁC NHẬN XUẤT → toast “Xuất dữ liệu thành công.”  
\- Click Tải xuống trong lịch sử sao lưu → toast “Đang tải file sao lưu.”

Cảnh báo:  
\- Giữ card cảnh báo bảo mật dữ liệu khách hàng, hóa đơn và lịch sử mua hàng.

\==================================================  
LUỒNG 18 — NHẬT KÝ HỆ THỐNG  
\==================================================

Desktop:  
System Audit Log desktop → Drawer chi tiết log → Màn hình tham chiếu

Tương tác:  
\- Click menu Nhật ký hệ thống.  
\- Chọn module: Bán thuốc.  
\- Click ÁP DỤNG → lọc bảng.  
\- Click dòng “Tạo đơn hàng ORD0001” → mở drawer chi tiết log.  
\- Click mã tham chiếu ORD0001 → Chi tiết đơn hàng.  
\- Click dòng “Xác nhận nhập kho IMP001” → mở drawer.  
\- Click mã IMP001 → Chi tiết phiếu nhập.  
\- Click XUẤT NHẬT KÝ → toast “Xuất nhật ký hệ thống thành công.”

\==================================================  
LUỒNG 19 — TRANG LỖI VÀ QUÊN MẬT KHẨU  
\==================================================

Desktop và Mobile nếu có:  
Login → Quên mật khẩu → Login  
Sidebar role test → 403  
Route lỗi → 404

Tương tác:  
\- Click “Quên mật khẩu?” ở Login → Quên mật khẩu.  
\- Nhập email staff@pharmaassist.local.  
\- Click GỬI YÊU CẦU → success state “Yêu cầu đặt lại mật khẩu đã được gửi.”  
\- Click Quay lại đăng nhập → Login.  
\- Khi Staff click vào Phân quyền hoặc Người dùng → 403 Không có quyền truy cập.  
\- Click QUAY VỀ DASHBOARD → Dashboard.  
\- Click đường dẫn không tồn tại hoặc card 404 demo → 404 Không tìm thấy trang.  
\- Click QUAY VỀ DASHBOARD → Dashboard.

\==================================================  
LUỒNG 20 — REPORTS CHUYÊN SÂU  
\==================================================

Desktop:  
Reports desktop → Tab Doanh thu → Tab Thuốc bán chạy → Tab Tồn kho → Tab Thanh toán → Tab Tương tác thuốc

Mobile nếu có:  
Reports mobile → Filter bottom sheet → Chart/cards

Tương tác:  
\- Click menu Báo cáo.  
\- Chọn khoảng thời gian: 7 ngày.  
\- Click ÁP DỤNG BỘ LỌC.  
\- Click tab Doanh thu → hiển thị biểu đồ doanh thu.  
\- Click tab Thuốc bán chạy → hiển thị bảng top thuốc.  
\- Click Paracetamol trong bảng → Chi tiết thuốc.  
\- Click tab Tồn kho → hiển thị báo cáo tồn đầu kỳ, nhập, bán, tồn cuối kỳ.  
\- Click tab Thanh toán → hiển thị tỷ lệ phương thức thanh toán.  
\- Click tab Tương tác thuốc → hiển thị số cảnh báo theo kỳ.  
\- Click XUẤT PDF → toast “Xuất PDF thành công.”  
\- Click XUẤT EXCEL → toast “Xuất Excel thành công.”

\==================================================  
QUY TẮC CHUNG CHO TOÀN BỘ PROTOTYPE  
\==================================================

Navigation:  
\- Desktop dùng sidebar.  
\- Mobile dùng hamburger drawer.  
\- Click logo hoặc Dashboard → Dashboard.  
\- Các submenu phải mở/đóng được.

Responsive:  
\- Desktop: w-screen h-screen.  
\- Mobile: responsive 320px–479px, không khóa layout theo một kích thước cố định.  
\- Mobile table chuyển thành card list.  
\- Mobile filter chuyển thành bottom sheet.  
\- Mobile modal dùng full-screen hoặc bottom sheet.  
\- Button chính full width trên mobile.

Modal:  
\- Có overlay nền tối nhẹ.  
\- Desktop modal centered.  
\- Mobile modal full-screen hoặc bottom sheet.  
\- Click X để đóng.  
\- Modal xác nhận quan trọng không tự đóng khi click nhầm nếu đang nhập dữ liệu.

Drawer:  
\- Desktop drawer mở từ phải.  
\- Mobile menu drawer mở từ trái.  
\- Bottom sheet mở từ dưới lên.

Toast:  
\- Desktop toast góc trên phải.  
\- Mobile toast phía dưới hoặc phía trên.  
\- Tự đóng sau 2–3 giây.  
\- Có icon trạng thái và nút đóng X.

Button states:  
\- Tất cả button có default, hover, pressed, disabled.  
\- Button chính dùng \#024ad8.  
\- Nút danger dùng \#b3262b.  
\- Disabled dùng màu xám.

Form validation:  
\- Input bắt buộc bị trống → hiện lỗi dưới input.  
\- Input lỗi có viền danger.  
\- Không submit khi dữ liệu chưa hợp lệ.

Data consistency:  
\- ORD0001, INV0001, Nguyễn Văn Minh, Trần Thị B và tổng tiền 130.000đ phải thống nhất.  
\- Cảnh báo Ibuprofen 400mg \+ Warfarin 5mg phải thống nhất ở Sales POS, Interaction Alert, Order Detail, AI Copilot, Graph Explorer và AI Audit Log.  
\- Dữ liệu tồn kho phải thống nhất với dữ liệu demo chuẩn.

Safety disclaimer:  
Luôn hiển thị disclaimer ở các màn hình liên quan đến cảnh báo thuốc, AI hoặc Graph:  
“Thông tin cảnh báo chỉ mang tính tham khảo, không thay thế tư vấn của dược sĩ, bác sĩ hoặc chuyên gia y tế.”

PRIMARY FLOW:  
Đánh dấu luồng chính để trình bày:  
Kịch bản demo  
→ BỎ QUA → ĐĂNG NHẬP TRỰC TIẾP  
→ Login  
→ Dashboard  
→ Sales POS  
→ Drug Interaction Alert  
→ Payment  
→ Invoice  
→ Order History  
→ Order Detail  
→ AI Copilot  
→ AI Audit Log

Nên gửi nguyên prompt này nếu Figma xử lý được. Trường hợp Figma chạy chậm hoặc nối sai, hãy tách thành 4 prompt nhỏ:

1\. Luồng bán thuốc \+ thanh toán \+ hóa đơn  
2\. Luồng kho \+ nhập thuốc \+ nhà cung cấp  
3\. Luồng khách hàng \+ đơn hàng \+ báo cáo  
4\. Luồng AI \+ phân quyền \+ cài đặt \+ hệ thống

Dưới đây là **4 prompt nhỏ** đã tách ra để Figma dễ xử lý hơn. Bạn gửi lần lượt từng prompt.

---
