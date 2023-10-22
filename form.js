function validateForm() {
    var name = document.getElementById("name");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    var errorName = document.getElementById('errorName');
    var errorPhone = document.getElementById('errorPhone');
    var errorEmail = document.getElementById('errorEmail');
    
    // Reset error messages
    errorName.textContent = '';
    errorPhone.textContent = '';
    errorEmail.textContent = '';

    if (name.value === "") {
        errorName.textContent = 'Please insert your name';
        name.focus();
        return false;
    }

    var namePattern = /^[a-zA-Z\s]+$/; // Pola untuk nama (hanya huruf dan spasi)

    if (!namePattern.test(name.value)) {
        errorName.textContent = "Please enter a valid name (only letters and spaces)";
        name.focus();
        return false;
    }

    if (phone.value === "") {
        errorPhone.textContent = 'Please insert your phone number';
        phone.focus();
        return false;
    }

    var phonePattern = /^(62\d{10,13})$/; 
    if (!phonePattern.test(phone.value)) {
        errorPhone.textContent = "Please insert a valid phone number started with 62";
        phone.focus();
        return false;
    }

    if (email.value === "") {
        errorEmail.textContent = 'Please insert your email';
        email.focus();
        return false;
    }

    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value)) {
        errorEmail.textContent = 'Please enter a valid email address';
        email.focus();
        return false;
    }

    return true;
}
