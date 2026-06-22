# PharmaAssist - Hệ thống Quản trị Nhà thuốc Thông minh 🏥✨

PharmaAssist là một nguyên mẫu giao diện web (UI Prototype) tĩnh được xây dựng bằng HTML5, TailwindCSS và JavaScript (thuần), phục vụ cho quá trình thiết kế và trình bày ứng dụng quản trị nhà thuốc tích hợp Trí tuệ nhân tạo (AI Copilot).

Dự án này bao gồm toàn bộ luồng nghiệp vụ từ bán hàng, nhập kho, quản trị nhân sự cho đến hỗ trợ ra quyết định lâm sàng qua AI.

## 🚀 Hướng dẫn chạy dự án

Bản prototype này là tập hợp các file HTML tĩnh tĩnh, không yêu cầu cài đặt Node.js hay Build tool phức tạp.

1. Clone hoặc tải mã nguồn về máy.
2. Mở file `index.html` (nằm ở thư mục gốc) bằng bất kỳ trình duyệt nào (Chrome, Edge, Firefox, Safari...).
3. Click vào nút **"Bắt đầu trải nghiệm Prototype"** để vào màn hình Đăng nhập và bắt đầu tương tác với giao diện.

> [!TIP]
> Để trải nghiệm mượt mà nhất, bạn có thể dùng tính năng **Live Server** trong VS Code để tránh các vấn đề về CORS khi load local file.

---

## 📂 Cấu trúc thư mục

Dự án có **22 màn hình** được tổ chức theo các luồng nghiệp vụ:

```text
PharmaAssist-Figma-Design/
├── index.html                   # Trang giới thiệu / Gateway
├── auth/
│   └── login.html               # Đăng nhập
├── dashboard/
│   └── dashboard.html           # Tổng quan doanh thu
├── pos/
│   ├── pos.html                 # Giao diện máy bán hàng (Tạo đơn)
│   └── order-history.html       # Lịch sử đơn bán
├── inventory/
│   ├── inventory.html           # Quản lý tồn kho
│   ├── import-create.html       # Tạo phiếu nhập kho
│   ├── import-history.html      # Lịch sử nhập kho
│   └── suppliers.html           # Danh sách nhà cung cấp
├── medicine/
│   ├── medicine_management.html # Danh sách thuốc (CRUD)
│   └── category_management.html # Danh mục thuốc
├── customer/
│   └── customers.html           # Quản lý khách hàng (Danh sách)
├── customers/
│   ├── customers.html               # (Phiên bản backup/chi tiết)
│   ├── customer_detail.html         # Chi tiết khách hàng
│   └── customer-purchase-history.html # Lịch sử mua hàng của KH
├── reports/
│   └── reports.html             # Báo cáo thống kê
├── admin/
│   ├── users.html               # Danh sách người dùng
│   ├── roles.html               # Cấu hình phân quyền
│   ├── pharmacy_profile.html    # Hồ sơ nhà thuốc
│   ├── settings.html            # Cài đặt hệ thống
│   ├── backup.html              # Sao lưu và xuất dữ liệu
│   └── system_logs.html         # Nhật ký hệ thống
├── ai/
│   ├── ai-copilot.html          # Chatbot trợ lý y khoa
│   ├── ai_logs.html             # Giám sát request AI
│   └── graph_explorer.html      # Mạng lưới tri thức / Tương tác
├── notifications/
│   └── notifications.html       # Trung tâm thông báo
├── profile/
│   └── profile.html             # Hồ sơ cá nhân người dùng
├── errors/
│   ├── 403.html                 # Lỗi không có quyền truy cập
│   └── 404.html                 # Lỗi không tìm thấy trang
└── demo/
    ├── app.html                 # Container demo
    └── demo-scenario.html       # Kịch bản demo
```

---

## 👥 Phân công nhiệm vụ nhóm (Team 4 người)

Để đưa toàn bộ prototype này lên **Figma** một cách tối ưu, tránh giẫm chân lên nhau và duy trì được sự đồng bộ, nhóm được chia đều dựa trên **46 file HTML** thuộc 13 thư mục (không tính `demo/` và `index.html` root). Trung bình mỗi người sẽ đảm nhận 11-12 file.

### 🧑‍💻 Thành viên 1: Core Business & POS (Bán hàng & Sản phẩm)
*Chịu trách nhiệm thiết kế khu vực thao tác nhanh, nghiệp vụ cốt lõi. Khối lượng: **11 files**.*

- **Thư mục phụ trách:**
  - `pos/` **(7 files):** Bán hàng (POS), lịch sử đơn, hóa đơn, thanh toán...
  - `medicine/` **(4 files):** Quản lý thuốc, danh mục, form thêm thuốc...
- **Trọng tâm Figma:** Tối ưu hóa UI màn hình POS để người dùng có thể thao tác siêu tốc (tìm kiếm, thêm giỏ hàng, thanh toán).

### 🧑‍💻 Thành viên 2: Inventory & Customers (Kho hàng & Khách hàng)
*Chịu trách nhiệm luồng kho phức tạp và dữ liệu khách hàng. Khối lượng: **12 files**.*

- **Thư mục phụ trách:**
  - `inventory/` **(8 files):** Tồn kho, nhập thuốc, lịch sử nhập, nhà cung cấp, kiểm kê...
  - `customer/` & `customers/` **(4 files):** Danh sách khách hàng, chi tiết, lịch sử mua hàng.
- **Trọng tâm Figma:** Thiết kế chuẩn cấu trúc Bảng (Data Table) cho kho, form tạo phiếu nhập kho phức tạp, thẻ thông tin khách hàng.

### 🧑‍💻 Thành viên 3: Admin, Reports & Profile (Quản trị & Báo cáo)
*Chịu trách nhiệm luồng thiết lập hệ thống và biểu đồ. Khối lượng: **12 files**.*

- **Thư mục phụ trách:**
  - `admin/` **(10 files):** Người dùng, phân quyền, cài đặt, sao lưu, nhật ký, hồ sơ nhà thuốc...
  - `profile/` **(1 file):** Hồ sơ cá nhân.
  - `reports/` **(1 file):** Báo cáo thống kê doanh thu.
- **Trọng tâm Figma:** Chuẩn hóa các Form mẫu (Input field, Dropdown, Toggle switch, Checkbox), hiển thị cấu trúc cây/danh sách dài, và các biểu đồ (Charts).

### 🧑‍💻 Thành viên 4: Design System, AI & Utilities (Thủ lĩnh UI)
*Xây dựng nền tảng dùng chung trước, sau đó phụ trách mảng công nghệ cao và tiện ích. Khối lượng: **11 files**.*

- **Thư mục phụ trách:**
  - **Figma Design System:** Thiết lập UI Kit dùng chung (Typography, Màu `#024ad8`, Components).
  - `ai/` **(5 files):** AI Copilot, nhật ký AI, Graph Explorer.
  - `auth/` **(2 files):** Đăng nhập, quên mật khẩu.
  - `errors/` **(2 files):** Lỗi 403, 404.
  - `notifications/` **(1 file):** Trung tâm thông báo.
  - `dashboard/` **(1 file):** Dashboard tổng quan (ghép các widget lại).
- **Trọng tâm Figma:** Phải là người tạo `Library` trên Figma đầu tiên. Hướng dẫn nhóm dùng Component. Xây dựng UI Chatbot và mạng lưới đồ thị (Graph nodes).

---

> [!IMPORTANT]v
> **Quy tắc làm việc trên Figma:**
> 1. **KHÔNG** ai được tự vẽ nút bấm hay ô text riêng. Tất cả phải kéo từ **Design System Component** do Thành viên 4 tạo ra để đảm bảo nút bấm ở trang Bán hàng giống hệt trang Cài đặt.
> 2. Luôn sử dụng **Auto Layout** cho các mảng nội dung.
> 3. Sidebar (240px) và Header (56px) luôn được ghim cố định. Màn hình mặc định sử dụng kích thước **1440 x 1024** (Desktop).
