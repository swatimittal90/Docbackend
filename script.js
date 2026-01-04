function scrollToForm() {
    const formSection = document.getElementById('join');
    formSection.scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('leadForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitBtn = document.getElementById('submitBtn');
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const role = document.getElementById('role').value;
    
    if (!validatePhone(phone)) {
        alert("Please enter a valid phone number.");
        return;
    }

    // Set loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    // Simulate API calls
    try {
        await simulateBackendCall(name, phone, role);
        
        // Success Feedback
        alert(`Thanks ${name}! We've registered your interest.\n\nSimulated Actions:\n- WhatsApp welcome sent to ${phone}\n- VoiceAPI call scheduled.`);
        
        this.reset();
    } catch (error) {
        alert("Something went wrong. Please try again.");
        console.error(error);
    } finally {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
    }
});

function validatePhone(phone) {
    // Basic regex for demonstration (allow + and digits)
    const phoneRegex = /^[+]?[\d\s-]{10,15}$/;
    return phoneRegex.test(phone);
}

// Mock Backend Function to simulate "VoiceAPI" and "WhatsApp" integration
function simulateBackendCall(name, phone, role) {
    return new Promise((resolve) => {
        console.log("--- SIMULATING BACKEND CALL ---");
        console.log(`Payload: { name: "${name}", phone: "${phone}", role: "${role}" }`);
        
        // Simulate WhatsApp API
        console.log(`> [Mock WhatsApp] Sending template 'welcome_msg' to ${phone}...`);
        
        // Simulate Voice API
        console.log(`> [Mock VoiceAPI] Scheduling welcome call for ${phone}...`);
        
        setTimeout(() => {
            console.log("--- BACKEND CALL SUCCESS ---");
            resolve("Success");
        }, 1500); // 1.5s delay to show loader
    });
}
