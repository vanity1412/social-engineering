// Social Engineering Demo - Quid Pro Quo Attack Simulation
// WARNING: This is for educational purposes only

document.addEventListener('DOMContentLoaded', function() {
    // Show warning modal on page load
    showWarningModal();
    
    // Initialize countdown timer
    initializeCountdown();
    
    // Handle form submission
    handleFormSubmission();
    
    // Add fake loading states and interactions
    addFakeInteractions();
});

// Show warning modal
function showWarningModal() {
    const modal = document.getElementById('warningModal');
    modal.style.display = 'block';
    
    // Close modal handlers
    document.getElementById('closeWarning').addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    document.getElementById('continueDemo').addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close on outside click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Initialize countdown timer (fake urgency)
function initializeCountdown() {
    let timeLeft = 5 * 60; // 5 minutes in seconds
    const countdownElement = document.getElementById('countdown');
    
    const timer = setInterval(function() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        
        countdownElement.textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        // Change color when time is running out
        if (timeLeft <= 60) {
            countdownElement.style.background = 'rgba(255, 0, 0, 0.3)';
            countdownElement.style.borderColor = '#ff0000';
        }
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            countdownElement.textContent = 'HẾT HẠN!';
            countdownElement.style.background = 'rgba(255, 0, 0, 0.5)';
            countdownElement.style.borderColor = '#ff0000';
            
            // Show fake "time expired" message
            showTimeExpiredMessage();
        }
        
        timeLeft--;
    }, 1000);
}

// Show fake time expired message
function showTimeExpiredMessage() {
    const banner = document.querySelector('.promo-banner');
    banner.innerHTML = `
        <div class="promo-content">
            <h1>⏰ HẾT HẠN! Nhưng bạn vẫn có thể tham gia với điều kiện đặc biệt</h1>
            <p>Chúng tôi sẽ tạo ngoại lệ cho bạn! Hoàn thành ngay để nhận iPhone 15 Pro Max!</p>
        </div>
    `;
    banner.style.background = 'linear-gradient(45deg, #ff4757, #ff6b6b)';
}

// Handle form submission with fake processing
function handleFormSubmission() {
    const form = document.getElementById('surveyForm');
    const submitBtn = document.querySelector('.submit-btn');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Show fake processing
        showFakeProcessing();
        
        // Simulate data collection (in real attack, this would send data to attacker)
        await collectFakeData();
        
        // Show fake success message
        setTimeout(() => {
            showFakeSuccess();
        }, 3000);
    });
}

// Show fake processing animation
function showFakeProcessing() {
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<span class="loading"></span> Đang xử lý thông tin...';
    submitBtn.disabled = true;
    submitBtn.style.background = '#6c757d';
    
    // Add fake progress steps
    setTimeout(() => {
        submitBtn.innerHTML = '<span class="loading"></span> Đang xác minh thông tin...';
    }, 1000);
    
    setTimeout(() => {
        submitBtn.innerHTML = '<span class="loading"></span> Đang chuẩn bị phần thưởng...';
    }, 2000);
}

// Collect fake data (simulate what attacker would do)
async function collectFakeData() {
    const formData = new FormData(document.getElementById('surveyForm'));
    const collectedData = {};
    
    // Collect all form data
    for (let [key, value] of formData.entries()) {
        collectedData[key] = value;
    }
    
    // In a real attack, this data would be sent to attacker's server
    console.log('🚨 FAKE DATA COLLECTION (Educational Demo):', collectedData);
    
    // GỬI DỮ LIỆU ĐẾN SERVER (LƯU VÀO JSON)
    try {
        const response = await fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(collectedData)
        });
        
        const result = await response.json();
        console.log('✅ Dữ liệu đã được lưu vào JSON file:', result);
    } catch (error) {
        console.error('❌ Lỗi khi lưu dữ liệu:', error);
    }
    
    // Show what data was "collected"
    showDataCollectionWarning(collectedData);
}

// Show warning about data collection
function showDataCollectionWarning(data) {
    console.log(`
    ⚠️  CẢNH BÁO DEMO SOCIAL ENGINEERING ⚠️
    
    Trong một cuộc tấn công thực tế, kẻ tấn công đã thu thập được:
    
    📧 Email: ${data.email || 'Chưa nhập'}
    📱 Số điện thoại: ${data.phone || 'Chưa nhập'}
    🏠 Địa chỉ: ${data.address || 'Chưa nhập'}
    💳 Số tài khoản: ${data.bankAccount || 'Chưa nhập'}
    💳 Số thẻ: ${data.cardNumber || 'Chưa nhập'}
    🔐 Mật khẩu: ${data.password || 'Chưa nhập'}
    
    Với thông tin này, kẻ tấn công có thể:
    - Truy cập tài khoản ngân hàng
    - Thực hiện giao dịch trái phép
    - Đánh cắp danh tính
    - Tạo tài khoản giả mạo
    
    🛡️  CÁCH PHÒNG CHỐNG:
    - Không bao giờ cung cấp thông tin nhạy cảm trên trang web lạ
    - Luôn kiểm tra URL và chứng chỉ SSL
    - Sử dụng trang web chính thức của ngân hàng
    - Không tin vào các lời hứa "miễn phí" quá hấp dẫn
    `);
}

// Show fake success message
function showFakeSuccess() {
    const container = document.querySelector('.container');
    
    container.innerHTML = `
        <div class="success-page">
            <div class="success-content">
                <div class="success-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h1>🎉 Chúc mừng! Bạn đã hoàn thành khảo sát</h1>
                <p>iPhone 15 Pro Max sẽ được giao đến địa chỉ của bạn trong 3-5 ngày làm việc.</p>
                
                <div class="fake-tracking">
                    <h3>📦 Theo dõi đơn hàng</h3>
                    <div class="tracking-steps">
                        <div class="step completed">
                            <i class="fas fa-check"></i>
                            <span>Đã xác nhận thông tin</span>
                        </div>
                        <div class="step completed">
                            <i class="fas fa-check"></i>
                            <span>Đang chuẩn bị hàng</span>
                        </div>
                        <div class="step">
                            <i class="fas fa-truck"></i>
                            <span>Đang vận chuyển</span>
                        </div>
                        <div class="step">
                            <i class="fas fa-home"></i>
                            <span>Giao hàng</span>
                        </div>
                    </div>
                </div>
                
                <div class="warning-box">
                    <h3>⚠️ CẢNH BÁO QUAN TRỌNG</h3>
                    <p>Đây là trang demo để mô phỏng tấn công Social Engineering. Trong thực tế:</p>
                    <ul>
                        <li>❌ Bạn sẽ KHÔNG nhận được iPhone</li>
                        <li>❌ Thông tin của bạn đã bị thu thập</li>
                        <li>❌ Kẻ tấn công có thể sử dụng thông tin này để gây hại</li>
                    </ul>
                    <p><strong>Hãy luôn cảnh giác với các trang web yêu cầu thông tin nhạy cảm!</strong></p>
                </div>
                
                <button onclick="location.reload()" class="btn-primary">
                    <i class="fas fa-redo"></i> Xem lại demo
                </button>
            </div>
        </div>
    `;
    
    // Add success page styles
    addSuccessPageStyles();
}

// Add success page styles
function addSuccessPageStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .success-page {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        
        .success-content {
            background: white;
            padding: 50px;
            border-radius: 20px;
            text-align: center;
            max-width: 600px;
            box-shadow: 0 25px 80px rgba(0, 0, 0, 0.2);
        }
        
        .success-icon {
            font-size: 80px;
            color: #4CAF50;
            margin-bottom: 30px;
        }
        
        .success-content h1 {
            color: #2c3e50;
            margin-bottom: 20px;
            font-size: 32px;
        }
        
        .success-content p {
            color: #7f8c8d;
            font-size: 18px;
            margin-bottom: 40px;
        }
        
        .fake-tracking {
            background: #f8f9fa;
            padding: 30px;
            border-radius: 15px;
            margin: 30px 0;
            text-align: left;
        }
        
        .fake-tracking h3 {
            color: #2c3e50;
            margin-bottom: 20px;
            text-align: center;
        }
        
        .tracking-steps {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .step {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            flex: 1;
            position: relative;
        }
        
        .step:not(:last-child)::after {
            content: '';
            position: absolute;
            top: 20px;
            right: -50%;
            width: 100%;
            height: 2px;
            background: #e1e8ed;
            z-index: -1;
        }
        
        .step.completed:not(:last-child)::after {
            background: #4CAF50;
        }
        
        .step i {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #e1e8ed;
            color: #7f8c8d;
        }
        
        .step.completed i {
            background: #4CAF50;
            color: white;
        }
        
        .step span {
            font-size: 12px;
            color: #7f8c8d;
            text-align: center;
        }
        
        .warning-box {
            background: #fff3cd;
            border: 2px solid #ffeaa7;
            padding: 25px;
            border-radius: 15px;
            margin: 30px 0;
            text-align: left;
        }
        
        .warning-box h3 {
            color: #856404;
            margin-bottom: 15px;
        }
        
        .warning-box ul {
            margin: 15px 0;
            padding-left: 20px;
        }
        
        .warning-box li {
            margin: 8px 0;
            color: #856404;
        }
        
        .warning-box p {
            color: #856404;
            font-weight: 600;
        }
        
        @media (max-width: 768px) {
            .tracking-steps {
                flex-direction: column;
                gap: 20px;
            }
            
            .step:not(:last-child)::after {
                display: none;
            }
        }
    `;
    document.head.appendChild(style);
}

// Add fake interactions to make it seem more realistic
function addFakeInteractions() {
    // Add fake typing effects to inputs
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#007AFF';
            this.style.boxShadow = '0 0 0 3px rgba(0, 122, 255, 0.1)';
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.style.borderColor = '#e1e8ed';
                this.style.boxShadow = 'none';
            }
        });
    });
    
    // Add fake validation messages
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            const value = this.value.replace(/\D/g, '');
            if (value.length > 0 && value.length < 10) {
                this.style.borderColor = '#ff6b6b';
            } else if (value.length >= 10) {
                this.style.borderColor = '#4CAF50';
            }
        });
    }
    
    // Add fake card number formatting
    const cardInput = document.getElementById('cardNumber');
    if (cardInput) {
        cardInput.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
            this.value = value;
        });
    }
    
    // Add fake CVV validation
    const cvvInput = document.getElementById('cvv');
    if (cvvInput) {
        cvvInput.addEventListener('input', function() {
            this.value = this.value.replace(/\D/g, '').substring(0, 3);
        });
    }
}

// Add some fake testimonials animation
function animateTestimonials() {
    const testimonials = document.querySelectorAll('.testimonial');
    
    testimonials.forEach((testimonial, index) => {
        setTimeout(() => {
            testimonial.style.opacity = '0';
            testimonial.style.transform = 'translateY(20px)';
            testimonial.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                testimonial.style.opacity = '1';
                testimonial.style.transform = 'translateY(0)';
            }, 100);
        }, index * 200);
    });
}

// Initialize testimonials animation when page loads
setTimeout(animateTestimonials, 1000);
