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
