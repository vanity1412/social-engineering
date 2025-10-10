# 🚀 HƯỚNG DẪN CHẠY WEB SERVER

## 📋 Yêu cầu hệ thống

- Python 3.7 trở lên
- OpenSSL (nếu muốn chạy HTTPS)

## 🔧 Cài đặt

### Bước 1: Cài đặt Python
- Tải Python từ: https://www.python.org/downloads/
- Chọn "Add Python to PATH" khi cài đặt

### Bước 2: Cài đặt thư viện Flask

Mở Command Prompt/Terminal trong thư mục project và chạy:

```bash
pip install -r requirements.txt
```

Hoặc cài đặt trực tiếp:

```bash
pip install Flask
```

## ▶️ Cách chạy

### Cách 1: Chạy bằng Python

```bash
python web.py
```

Sau đó chọn:
- **1** - Chạy HTTP (port 5000)
- **2** - Chạy HTTPS (port 5443) - Yêu cầu OpenSSL

### Cách 2: Chạy bằng file batch (Windows)

Double-click vào file `start_server.bat`

### Cách 3: Chạy trực tiếp với tham số

**HTTP:**
```bash
python web.py
# Chọn 1
```

**HTTPS:**
```bash
python web.py
# Chọn 2
```

## 🌐 Truy cập trang web

### HTTP (Option 1):
- http://localhost:5000
- http://127.0.0.1:5000
- http://[IP-của-bạn]:5000

### HTTPS (Option 2):
- https://localhost:5443
- https://127.0.0.1:5443
- https://[IP-của-bạn]:5443

⚠️ **Lưu ý với HTTPS:** Trình duyệt sẽ cảnh báo về certificate không tin cậy. 
Nhấn **"Advanced"** → **"Proceed to localhost (unsafe)"** để tiếp tục.

## 📊 Xem logs truy cập

- HTTP: http://localhost:5000/api/logs
- HTTPS: https://localhost:5443/api/logs

## 🛑 Dừng server

Nhấn `Ctrl + C` trong terminal

## 🔐 HTTPS với OpenSSL

### Cài đặt OpenSSL trên Windows:

1. Tải Git for Windows: https://git-scm.com/download/win
2. OpenSSL đi kèm với Git Bash

Hoặc tải trực tiếp:
- https://slproweb.com/products/Win32OpenSSL.html

### Tạo certificate thủ công (optional):

```bash
openssl req -x509 -newkey rsa:4096 -nodes -out cert.pem -keyout key.pem -days 365
```

## ❓ Troubleshooting

### Lỗi "Port already in use"
```bash
# Thay đổi port trong web.py hoặc tắt ứng dụng đang dùng port đó
```

### Lỗi "Module not found: Flask"
```bash
pip install Flask
```

### Lỗi "OpenSSL not found" (khi chọn HTTPS)
- Cài đặt OpenSSL hoặc chọn chạy HTTP (option 1)

### Lỗi "Permission denied"
- Chạy terminal/CMD với quyền Administrator

## 🎯 Các tính năng

✅ Serve trang HTML/CSS/JS
✅ Hỗ trợ HTTP và HTTPS
✅ Auto-generate SSL certificate
✅ Log truy cập
✅ API endpoint để submit form
✅ Xem logs qua web

## ⚠️ Lưu ý bảo mật

- Đây là server demo, KHÔNG dùng cho production
- Self-signed certificate chỉ dùng cho development
- Dữ liệu form không được lưu trữ (chỉ log ra console)
- Chỉ dùng cho mục đích giáo dục

## 📱 Truy cập từ thiết bị khác

1. Tìm IP máy tính của bạn:
   ```bash
   # Windows
   ipconfig
   
   # Linux/Mac
   ifconfig
   ```

2. Truy cập từ điện thoại/máy khác:
   - http://[IP-của-bạn]:5000
   - https://[IP-của-bạn]:5443

3. Đảm bảo firewall cho phép kết nối đến port 5000/5443

## 🎉 Hoàn tất!

Giờ bạn đã có thể chạy trang web Social Engineering Demo trên máy local của mình!

**Chúc bạn học tập hiệu quả! 📚🔐**

