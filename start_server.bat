@echo off
chcp 65001 >nul
title Social Engineering Demo - Web Server

echo.
echo ╔══════════════════════════════════════════════════════════════════════════════╗
echo ║                                                                              ║
echo ║              🚨 SOCIAL ENGINEERING DEMO - WEB SERVER 🚨                      ║
echo ║                                                                              ║
echo ║  ⚠️  CẢNH BÁO: Trang web này chỉ dùng cho mục đích GIÁO DỤC                ║
echo ║      KHÔNG sử dụng cho mục đích bất hợp pháp hoặc gây hại                  ║
echo ║                                                                              ║
echo ╚══════════════════════════════════════════════════════════════════════════════╝
echo.

REM Kiểm tra Python đã cài đặt chưa
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Python chưa được cài đặt!
    echo 💡 Tải Python tại: https://www.python.org/downloads/
    echo.
    pause
    exit /b 1
)

echo ✅ Đã tìm thấy Python
echo.

REM Kiểm tra Flask đã cài đặt chưa
python -c "import flask" >nul 2>&1
if errorlevel 1 (
    echo 📦 Đang cài đặt Flask...
    pip install Flask
    echo.
)

REM Chạy web server
echo 🚀 Đang khởi động web server...
echo.
python web.py

pause

