# ⚡ QUICK START - Bắt Đầu Nhanh

## 🚀 Chạy ngay trong 3 bước

### Windows:

```bash
# Bước 1: Cài Flask
pip install Flask

# Bước 2: Chạy server
python web.py

# Bước 3: Mở trình duyệt
# Chọn option 1 (HTTP) hoặc 2 (HTTPS)
# Sau đó truy cập: http://localhost:5000
```

### Linux/Mac:

```bash
# Bước 1: Cài Flask
pip3 install Flask

# Bước 2: Chạy server
python3 web.py

# Bước 3: Mở trình duyệt
# Chọn option 1 (HTTP) hoặc 2 (HTTPS)
# Sau đó truy cập: http://localhost:5000
```

## 🎯 Hoặc đơn giản hơn:

### Windows:
**Double-click vào file:** `start_server.bat`

### Linux/Mac:
```bash
chmod +x start_server.sh
./start_server.sh
```

## 🌐 Truy cập

- **HTTP**: http://localhost:5000
- **HTTPS**: https://localhost:5443
- **Admin Panel**: http://localhost:5000/admin (Xem dữ liệu đã thu thập)

## ❓ Gặp lỗi?

### "Python not found"
👉 Cài Python: https://www.python.org/downloads/

### "Flask not found"
```bash
pip install Flask
```

### "Port already in use"
👉 Đổi port trong file `web.py` (dòng PORT = 5000)

## 📚 Tài liệu chi tiết

- `HUONG_DAN_CHAY.md` - Hướng dẫn đầy đủ
- `README.md` - Thông tin về dự án

## ⚠️ Lưu ý

✅ Chỉ dùng cho mục đích giáo dục  
✅ Không lưu trữ dữ liệu thực  
✅ Self-signed certificate (HTTPS) chỉ cho development  

**Chúc bạn học tập vui vẻ! 🎉**

