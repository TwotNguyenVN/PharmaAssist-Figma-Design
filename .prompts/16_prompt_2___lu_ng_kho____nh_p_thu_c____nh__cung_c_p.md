# **Prompt 2 — Luồng kho \+ nhập thuốc \+ nhà cung cấp**

Nối prototype cho nhóm luồng “Kho thuốc \+ nhập thuốc \+ nhà cung cấp” của hệ thống PharmaAssist.

Mục tiêu:  
\- Demo được nghiệp vụ theo dõi tồn kho, xem thuốc sắp hết, nhập thuốc, xác nhận nhập kho và xem nhà cung cấp.  
\- Có desktop và mobile nếu frame tương ứng đã tồn tại.  
\- Tất cả thao tác, toast, modal, drawer, bottom sheet đều bằng tiếng Việt.

Kích thước:  
\- Desktop: w-screen h-screen.  
\- Mobile: responsive 320px–479px, không khóa theo một kích thước cố định.

Dữ liệu demo bắt buộc:  
\- MED001: Paracetamol 500mg  
\- Tồn kho: 12 hộp  
\- Ngưỡng cảnh báo: 20 hộp  
\- Trạng thái: Sắp hết  
\- Vị trí kho: Kệ A1  
\- Mã lô: LOT001  
\- Nhà cung cấp: Công ty Dược An Tâm  
\- Mã nhà cung cấp: NCC001  
\- Phiếu nhập: IMP001

\==================================================  
LUỒNG 1 — TỪ DASHBOARD ĐẾN TỒN KHO  
\==================================================

Dashboard desktop:  
\- Click task “3 thuốc sắp hết cần nhập thêm” → Quản lý tồn kho.  
\- Click cảnh báo “Paracetamol 500mg còn 12 hộp” → Quản lý tồn kho và highlight MED001.

Dashboard mobile:  
\- Tap card cảnh báo kho hoặc “Xem kho” → Inventory mobile nếu có.  
\- Mobile dùng card list thay vì table.

Inventory desktop:  
\- Click dòng MED001 Paracetamol 500mg → mở drawer chi tiết tồn kho hoặc chuyển sang Chi tiết lô thuốc.  
\- Click XEM CHI TIẾT → Chi tiết lô thuốc.  
\- Click XEM LỊCH SỬ BIẾN ĐỘNG → mở drawer Lịch sử biến động kho.  
\- Click CẬP NHẬT TỒN KHO hoặc ĐIỀU CHỈNH TỒN → Điều chỉnh tồn kho.

Inventory mobile:  
\- Tap card MED001 → Chi tiết lô thuốc mobile.  
\- Tap BIẾN ĐỘNG KHO → bottom sheet lịch sử biến động kho.  
\- Tap filter icon → mở bottom sheet bộ lọc.

\==================================================  
LUỒNG 2 — CHI TIẾT LÔ VÀ BIẾN ĐỘNG KHO  
\==================================================

Chi tiết lô thuốc:  
\- Click QUAY LẠI → Quản lý tồn kho.  
\- Click XEM PHIẾU NHẬP → Chi tiết phiếu nhập thuốc.  
\- Click ĐIỀU CHỈNH TỒN → Điều chỉnh tồn kho.  
\- Click IN NHÃN LÔ → toast “Đang gửi lệnh in nhãn lô.”  
\- Click TẠO PHIẾU NHẬP → Tạo phiếu nhập thuốc.

Drawer hoặc bottom sheet Lịch sử biến động kho:  
\- Click filter loại biến động: Nhập kho / Bán hàng / Điều chỉnh.  
\- Click ÁP DỤNG → cập nhật danh sách.  
\- Click mã tham chiếu IMP001 → Chi tiết phiếu nhập thuốc.  
\- Click mã tham chiếu ORD0001 → Chi tiết đơn hàng.  
\- Click XUẤT LỊCH SỬ → toast “Xuất lịch sử biến động thành công.”  
\- Click ĐÓNG hoặc overlay → đóng drawer/bottom sheet.

\==================================================  
LUỒNG 3 — ĐIỀU CHỈNH TỒN KHO  
\==================================================

Điều chỉnh tồn kho:  
\- Chọn thuốc: Paracetamol 500mg.  
\- Chọn lô: LOT001.  
\- Chọn loại điều chỉnh: Giảm tồn.  
\- Nhập số lượng điều chỉnh: 2\.  
\- Chọn lý do: Kiểm kê thực tế.  
\- Nhập ghi chú: Điều chỉnh theo kiểm kê cuối ngày.  
\- Tick checkbox “Tôi xác nhận thông tin điều chỉnh là chính xác”.  
\- Click LƯU ĐIỀU CHỈNH → mở modal xác nhận.  
\- Trong modal, click XÁC NHẬN → toast “Điều chỉnh tồn kho thành công.”  
\- Sau khi lưu → quay lại Quản lý tồn kho hoặc mở Lịch sử biến động kho.

Validation:  
\- Nếu chưa chọn lý do → hiển thị lỗi “Vui lòng chọn lý do điều chỉnh.”  
\- Nếu chưa tick checkbox → disable nút LƯU ĐIỀU CHỈNH.

\==================================================  
LUỒNG 4 — TẠO PHIẾU NHẬP THUỐC  
\==================================================

Stock Import desktop:  
\- Click menu Nhập thuốc hoặc từ Inventory click TẠO PHIẾU NHẬP.  
\- Chọn nhà cung cấp: Công ty Dược An Tâm.  
\- Chọn thuốc: Paracetamol 500mg.  
\- Nhập số lượng: 70\.  
\- Nhập giá nhập: 18.000đ.  
\- Chọn hạn sử dụng: 31/12/2026.  
\- Click THÊM VÀO PHIẾU → thêm thuốc vào bảng.  
\- Click LƯU NHÁP → toast “Đã lưu nháp phiếu nhập.”  
\- Click XÁC NHẬN NHẬP KHO → mở modal xác nhận nhập kho.

Modal xác nhận nhập kho:  
\- Hiển thị:  
  \- Mã phiếu  
  \- Nhà cung cấp  
  \- Số mặt hàng  
  \- Tổng số lượng  
  \- Tổng tiền  
\- Click QUAY LẠI → đóng modal.  
\- Click XÁC NHẬN NHẬP KHO → chuyển phiếu sang trạng thái Đã nhập kho.  
\- Toast “Nhập kho thành công.”  
\- Chuyển sang Chi tiết phiếu nhập thuốc hoặc Lịch sử nhập thuốc.

Stock Import mobile nếu có:  
\- Form chuyển thành 1 cột.  
\- Button XÁC NHẬN NHẬP KHO full width sticky bottom.  
\- Modal xác nhận nhập kho dùng bottom sheet.

\==================================================  
LUỒNG 5 — LỊCH SỬ NHẬP VÀ CHI TIẾT PHIẾU NHẬP  
\==================================================

Stock Import History:  
\- Click TẠO PHIẾU NHẬP → Stock Import.  
\- Click Xem ở IMP001 → Chi tiết phiếu nhập thuốc.  
\- Click bộ lọc Nhà cung cấp \= Công ty Dược An Tâm.  
\- Click ÁP DỤNG → toast “Đã áp dụng bộ lọc.”  
\- Click IN PHIẾU → toast “Đang gửi lệnh in phiếu nhập.”

Chi tiết phiếu nhập thuốc:  
\- Click QUAY LẠI → Lịch sử nhập thuốc.  
\- Click IN PHIẾU NHẬP → toast “Đang gửi lệnh in phiếu nhập.”  
\- Click XEM NHÀ CUNG CẤP → Chi tiết nhà cung cấp.  
\- Click XEM BIẾN ĐỘNG KHO → drawer Lịch sử biến động kho.  
\- Click XEM TỒN KHO SAU NHẬP → Quản lý tồn kho.

\==================================================  
LUỒNG 6 — NHÀ CUNG CẤP  
\==================================================

Quản lý nhà cung cấp:  
\- Click menu Nhà cung cấp.  
\- Click THÊM NHÀ CUNG CẤP → mở modal thêm nhà cung cấp.  
\- Nhập thông tin nhà cung cấp.  
\- Click LƯU NHÀ CUNG CẤP → toast “Lưu nhà cung cấp thành công.”  
\- Click dòng NCC001 Công ty Dược An Tâm → Chi tiết nhà cung cấp hoặc drawer chi tiết.  
\- Click XEM LỊCH SỬ NHẬP → Lịch sử nhập thuốc lọc theo NCC001.  
\- Click TẠO PHIẾU NHẬP → Stock Import với nhà cung cấp đã chọn.  
\- Click TẠM NGỪNG HỢP TÁC → mở modal xác nhận.  
\- Click QUAY LẠI trong modal → đóng modal.

Chi tiết nhà cung cấp:  
\- Click QUAY LẠI → Quản lý nhà cung cấp.  
\- Click CHỈNH SỬA → mở modal chỉnh sửa nhà cung cấp.  
\- Click TẠO PHIẾU NHẬP → Stock Import.  
\- Click XEM LỊCH SỬ NHẬP → Stock Import History.

\==================================================  
QUY TẮC CHUNG  
\==================================================

\- Desktop dùng sidebar.  
\- Mobile dùng hamburger drawer.  
\- Table desktop giữ dạng bảng.  
\- Table mobile chuyển thành card list.  
\- Filter mobile dùng bottom sheet.  
\- Drawer desktop mở từ phải.  
\- Bottom sheet mobile mở từ dưới lên.  
\- Modal xác nhận dùng overlay nền tối nhẹ.  
\- Toast desktop góc trên phải.  
\- Toast mobile phía dưới.  
\- Button chính dùng \#024ad8.  
\- Nút nguy hiểm dùng \#b3262b.  
\- Không để hotspot bị thiếu.  
\- Dữ liệu tồn kho MED001 phải thống nhất ở Dashboard, Inventory, Batch Detail, Stock Import và Stock Movement.

---
