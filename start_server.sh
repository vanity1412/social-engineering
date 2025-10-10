#!/bin/bash

# Set UTF-8 encoding
export LANG=en_US.UTF-8

echo ""
echo "╔══════════════════════════════════════════════════════════════════════════════╗"
echo "║                                                                              ║"
echo "║              🚨 SOCIAL ENGINEERING DEMO - WEB SERVER 🚨                      ║"
echo "║                                                                              ║"
echo "║  ⚠️  CẢNH BÁO: Trang web này chỉ dùng cho mục đích GIÁO DỤC                ║"
echo "║      KHÔNG sử dụng cho mục đích bất hợp pháp hoặc gây hại                  ║"
echo "║                                                                              ║"
echo "╚══════════════════════════════════════════════════════════════════════════════╝"
echo ""

# Kiểm tra Python
if ! command -v python3 &> /dev/null; then
    echo "❌ Python3 chưa được cài đặt!"
    echo "💡 Cài đặt Python3:"
    echo "   Ubuntu/Debian: sudo apt install python3 python3-pip"
    echo "   macOS: brew install python3"
    exit 1
fi

echo "✅ Đã tìm thấy Python3"
echo ""

# Kiểm tra Flask
if ! python3 -c "import flask" &> /dev/null; then
    echo "📦 Đang cài đặt Flask..."
    pip3 install Flask
    echo ""
fi

# Chạy web server
echo "🚀 Đang khởi động web server..."
echo ""
python3 web.py

