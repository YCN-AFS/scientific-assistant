function submitForm(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (!name || !email || !phone || !subject || !message) {
        alert('Vui lòng điền đầy đủ thông tin');
        return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Email không hợp lệ');
        return false;
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        alert('Số điện thoại không hợp lệ');
        return false;
    }

    // Here you would typically send the form data to a server
    // For now, we'll just show a success message
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
    
    // Reset form
    document.getElementById('contactForm').reset();
    
    return false;
}

// Optional: Add real-time validation
document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(input => {
    input.addEventListener('input', function() {
        if (this.value.trim() === '') {
            this.style.borderColor = '#ff4444';
        } else {
            this.style.borderColor = '#ddd';
        }
    });
}); 