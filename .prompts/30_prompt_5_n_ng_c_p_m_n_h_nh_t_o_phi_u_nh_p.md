# **Prompt 5 — Nâng cấp màn hình Tạo phiếu nhập**

Nâng cấp màn hình “Tạo phiếu nhập thuốc” của PharmaAssist để thể hiện rõ quy trình lưu nháp và xác nhận nhập kho.

Giữ nguyên phong cách hiện tại:  
\- Tiếng Việt.  
\- Nền \#f7f7f7.  
\- Card trắng bo 16px.  
\- CTA \#024ad8.  
\- Button/input bo 4px.

Bổ sung trạng thái phiếu nhập:  
\- Nháp  
\- Chờ xác nhận  
\- Đã nhập kho  
\- Đã hủy

Trong header phiếu nhập:  
\- Mã phiếu: IMP003  
\- Trạng thái hiện tại: Nháp  
\- Ngày tạo  
\- Người tạo

Bổ sung các nút footer:  
\- HỦY PHIẾU  
\- LƯU NHÁP  
\- XÁC NHẬN NHẬP KHO

Quy tắc:  
\- LƯU NHÁP cho phép lưu khi chưa nhập đầy đủ tất cả thuốc.  
\- XÁC NHẬN NHẬP KHO chỉ active khi:  
  \- Có nhà cung cấp.  
  \- Có ít nhất một thuốc.  
  \- Tất cả thuốc có số lượng, giá nhập và hạn sử dụng hợp lệ.  
\- Sau khi xác nhận, phiếu chuyển sang “Đã nhập kho”.  
\- Không cho chỉnh sửa phiếu đã nhập kho.

Tạo modal xác nhận:

Tiêu đề:  
Xác nhận nhập kho

Nội dung:  
Sau khi xác nhận, số lượng thuốc trong phiếu sẽ được cộng vào tồn kho và phiếu nhập không thể chỉnh sửa trực tiếp.

Thông tin:  
\- Mã phiếu: IMP003  
\- Nhà cung cấp: Công ty Dược An Tâm  
\- Số mặt hàng: 3  
\- Tổng số lượng: 120  
\- Tổng tiền: 5.600.000đ

Buttons:  
\- QUAY LẠI  
\- XÁC NHẬN NHẬP KHO

Sau khi xác nhận:  
\- Hiển thị toast: Nhập kho thành công.  
\- Chuyển sang màn hình Chi tiết phiếu nhập hoặc Lịch sử nhập thuốc.  
\- Tồn kho của các thuốc được cập nhật.

---
