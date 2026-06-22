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
