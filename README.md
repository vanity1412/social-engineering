# 🚨 Social Engineering Demo - Quid Pro Quo Attack

## ⚠️ CẢNH BÁO QUAN TRỌNG
**Trang web này được tạo ra chỉ để mục đích GIÁO DỤC và NGHIÊN CỨU BẢO MẬT. KHÔNG sử dụng cho mục đích bất hợp pháp.**

## 📋 Mô tả
Đây là một trang web demo mô phỏng tấn công **Social Engineering** loại **Quid Pro Quo** (Đổi chác). Trang web được thiết kế để:

- Minh họa cách kẻ tấn công sử dụng kỹ thuật "đổi chác" để lấy thông tin
- Giáo dục người dùng về các dấu hiệu nhận biết tấn công social engineering
- Cung cấp kiến thức phòng chống tấn công

## 🎯 Kỹ thuật Quid Pro Quo được mô phỏng

### 1. **Lời hứa phần thưởng hấp dẫn**
- iPhone 15 Pro Max "miễn phí"
- Giá trị cao (35.990.000 VNĐ)
- Tạo cảm giác may mắn đặc biệt

### 2. **Tạo cảm giác khẩn cấp**
- Countdown timer 5 phút
- "Chỉ còn X phút để hoàn thành"
- Thông báo "hết hạn" để tăng áp lực

### 3. **Thu thập thông tin nhạy cảm**
- Thông tin cá nhân (họ tên, địa chỉ, SĐT)
- Thông tin tài chính (số tài khoản, thẻ tín dụng)
- Mật khẩu ngân hàng
- Dưới vỏ bọc "khảo sát" và "xác minh danh tính"

### 4. **Tạo độ tin cậy giả**
- Logo và thiết kế chuyên nghiệp
- Badge "Được xác minh", "Bảo mật SSL"
- Testimonials giả từ "người dùng"
- Form khảo sát có vẻ hợp pháp

## 🛡️ Cách phòng chống

### **Dấu hiệu nhận biết tấn công:**
- ❌ Lời hứa "miễn phí" quá hấp dẫn
- ❌ Yêu cầu thông tin nhạy cảm không cần thiết
- ❌ Tạo cảm giác khẩn cấp giả tạo
- ❌ Yêu cầu mật khẩu, số thẻ tín dụng
- ❌ URL không chính thức, không có HTTPS

### **Cách bảo vệ:**
- ✅ Luôn kiểm tra URL và chứng chỉ SSL
- ✅ Không bao giờ cung cấp mật khẩu ngân hàng
- ✅ Sử dụng trang web chính thức của ngân hàng
- ✅ Không tin vào các lời hứa "miễn phí" quá hấp dẫn
- ✅ Xác minh danh tính trước khi cung cấp thông tin

## 🚀 Cách chạy demo

### Cách 1: Mở file HTML trực tiếp
1. Mở file `index.html` trong trình duyệt
2. Đọc cảnh báo và nhấn "Tiếp tục xem demo"
3. Trải nghiệm cách thức hoạt động của tấn công
4. Học cách nhận biết và phòng chống

### Cách 2: Chạy với Web Server (Khuyến nghị)

#### Yêu cầu:
- Python 3.7 trở lên
- Flask (cài đặt: `pip install Flask`)

#### Chạy server:

**Windows:**
```bash
python web.py
# Chọn 1 (HTTP) hoặc 2 (HTTPS)
```

Hoặc double-click: `start_server.bat`

**Linux/Mac:**
```bash
python3 web.py
# Chọn 1 (HTTP) hoặc 2 (HTTPS)
```

#### Truy cập:
- **Trang chính**: http://localhost:5000
- **Admin Panel**: http://localhost:5000/admin
- **Dữ liệu JSON**: `social_engineering_data.json`

#### Tính năng:
1. **Form Submit** → Dữ liệu lưu vào JSON tự động
2. **Admin Panel** → Xem dữ liệu thu thập, thống kê
3. **Export CSV** → Download dữ liệu
4. **Tìm kiếm** → Filter theo tên, email, SĐT

## 📁 Cấu trúc file

```
├── index.html              # Trang web chính
├── styles.css              # CSS styling
├── script.js               # JavaScript logic
├── web.py                  # Flask web server (HTTP/HTTPS)
├── requirements.txt        # Python dependencies
├── start_server.bat        # Script khởi động (Windows)
├── start_server.sh         # Script khởi động (Linux/Mac)
├── HUONG_DAN_CHAY.md      # Hướng dẫn chạy web server
├── QUICK_START.md         # Bắt đầu nhanh
├── DEMO_SUMMARY.md        # Tóm tắt dự án
├── .gitignore             # Git ignore file
├── LICENSE                # License
└── README.md              # Tài liệu hướng dẫn
```

## 📚 Tài liệu hướng dẫn

- 📖 [README.md](README.md) - Tài liệu chính (file này)
- ⚡ [QUICK_START.md](QUICK_START.md) - Bắt đầu nhanh trong 3 bước
- 📘 [HUONG_DAN_CHAY.md](HUONG_DAN_CHAY.md) - Hướng dẫn chi tiết
- 📝 [DEMO_SUMMARY.md](DEMO_SUMMARY.md) - Tóm tắt dự án

## 🎓 Mục đích giáo dục

Trang web này giúp:
- **Nhận biết** các dấu hiệu tấn công social engineering
- **Hiểu rõ** cách thức hoạt động của kỹ thuật Quid Pro Quo
- **Học cách** phòng chống và bảo vệ bản thân
- **Nâng cao** ý thức bảo mật thông tin

## ⚖️ Lưu ý pháp lý

- Chỉ sử dụng cho mục đích giáo dục và nghiên cứu
- Không sử dụng để tấn công hoặc lừa đảo
- Tuân thủ pháp luật về bảo mật thông tin
- Sử dụng có trách nhiệm và đạo đức

## 📞 Liên hệ

Nếu bạn phát hiện lỗ hổng bảo mật thực tế, hãy báo cáo một cách có trách nhiệm thông qua các kênh chính thức.

---
**Remember: Knowledge is power, but with great power comes great responsibility! 🕷️**

---

# 🚀 HƯỚNG DẪN ĐẨY LÊN GITHUB

## 📋 Bước 1: Chuẩn bị tài khoản GitHub

1. **Tạo tài khoản GitHub** (nếu chưa có):
   - Truy cập: https://github.com
   - Nhấn "Sign up" để đăng ký
   - Xác minh email

2. **Cài đặt Git** trên máy tính:
   - Tải Git từ: https://git-scm.com/downloads
   - Cài đặt với cài đặt mặc định

## 📋 Bước 2: Tạo repository trên GitHub

1. **Đăng nhập GitHub** và nhấn nút **"New"** (màu xanh lá)
2. **Điền thông tin repository:**
   - **Repository name**: `social-engineering-demo`
   - **Description**: `Demo trang web mô phỏng tấn công Social Engineering Quid Pro Quo`
   - **Visibility**: Chọn **Public** (để mọi người có thể xem)
   - **Initialize**: ✅ Bỏ tick "Add a README file" (vì đã có sẵn)
3. **Nhấn "Create repository"**

## 📋 Bước 3: Cấu hình Git và đẩy code

### **Mở Command Prompt/Terminal trong thư mục project:**

```bash
# Kiểm tra Git đã cài đặt chưa
git --version

# Cấu hình Git (chỉ cần làm 1 lần)
git config --global user.name "Tên của bạn"
git config --global user.email "email@example.com"

# Khởi tạo Git repository
git init

# Thêm tất cả file vào staging area
git add .

# Tạo commit đầu tiên
git commit -m "Initial commit: Social Engineering Demo"

# Thêm remote repository (thay YOUR_USERNAME bằng username GitHub của bạn)
git remote add origin https://github.com/YOUR_USERNAME/social-engineering-demo.git

# Đẩy code lên GitHub
git push -u origin main
```

## 📋 Bước 4: Cấu hình GitHub Pages (để host trang web)

1. **Vào repository** vừa tạo trên GitHub
2. **Nhấn tab "Settings"** (ở menu trên cùng)
3. **Cuộn xuống phần "Pages"** (ở menu bên trái)
4. **Cấu hình:**
   - **Source**: Deploy from a branch
   - **Branch**: main
   - **Folder**: / (root)
5. **Nhấn "Save"**
6. **Chờ 5-10 phút** để GitHub build trang web
7. **Truy cập trang web** tại: `https://YOUR_USERNAME.github.io/social-engineering-demo`

## 📋 Bước 5: Cập nhật code (khi có thay đổi)

```bash
# Thêm file đã thay đổi
git add .

# Tạo commit mới
git commit -m "Mô tả thay đổi"

# Đẩy lên GitHub
git push origin main
```

## 🔧 Troubleshooting

### **Lỗi thường gặp:**

1. **"fatal: not a git repository"**
   ```bash
   git init
   ```

2. **"Permission denied"**
   - Kiểm tra username/password GitHub
   - Hoặc sử dụng Personal Access Token

3. **"remote origin already exists"**
   ```bash
   git remote remove origin
   git remote add origin https://github.com/YOUR_USERNAME/social-engineering-demo.git
   ```

4. **GitHub Pages không hiển thị**
   - Kiểm tra file `index.html` có ở thư mục gốc
   - Chờ 10-15 phút để GitHub build
   - Kiểm tra tab "Actions" để xem có lỗi không

## 📱 Demo trực tuyến

Sau khi hoàn thành, bạn sẽ có:
- **Repository GitHub**: `https://github.com/YOUR_USERNAME/social-engineering-demo`
- **Trang web demo**: `https://YOUR_USERNAME.github.io/social-engineering-demo`

## 🎯 Tips để repository đẹp hơn

1. **Thêm file `.gitignore`:**
   ```
   # OS generated files
   .DS_Store
   .DS_Store?
   ._*
   .Spotlight-V100
   .Trashes
   ehthumbs.db
   Thumbs.db
   ```

2. **Thêm license file** (MIT License)

3. **Thêm topics/tags** cho repository:
   - `social-engineering`
   - `security-education`
   - `phishing-demo`
   - `cybersecurity`

4. **Tạo Issues** để track bugs/improvements

## 🚀 Kết quả cuối cùng

Bạn sẽ có một repository GitHub hoàn chỉnh với:
- ✅ Code source đầy đủ
- ✅ README chi tiết
- ✅ Trang web demo trực tuyến
- ✅ Có thể chia sẻ với cộng đồng
- ✅ Portfolio project cho CV

**Chúc bạn thành công! 🎉**
