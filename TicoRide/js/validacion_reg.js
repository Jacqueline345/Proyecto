function validateForm() {
    let errorMessages = '';

    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const numid = document.getElementById('numid').value.trim();
    const bdate = document.getElementById('bdate').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const rpassword = document.getElementById('rpassword').value.trim();
    const address = document.getElementById('address').value.trim();
    const country = document.getElementById('country').value.trim();
    const state = document.getElementById('state').value.trim();
    const city = document.getElementById('city').value.trim();
    const pnumber = document.getElementById('pnumber').value.trim();

    if (!fname) {
        errorMessages += 'First Name is required.\n';
    }
    if (!lname) {
        errorMessages += 'Last Name is required.\n';
    }
    if (!numid) {
        errorMessages += 'identification is required.\n';
    }
    if (!bdate) {
        errorMessages += 'birthday is required.\n';
    }
    if (!email) {
        errorMessages += 'Email is required.\n';
    }
    if (!password) {
        errorMessages += 'Password is required.\n';
    }
    if (!rpassword) {
        errorMessages += 'Repeat password is required.\n';
    }
    if (password != rpassword) {
        errorMessages += 'Passwords do not match.\n';
    }
    if (!address) {
        errorMessages += 'Address is required.\n';
    }
    if (!country) {
        errorMessages += 'Country is required.\n';
    }
    if (!state) {
        errorMessages += 'State is required.\n';
    }
    if (!city) {
        errorMessages += 'City is required.\n';
    }
    if (!pnumber) {
        errorMessages += 'Phone Number is required.\n';
    }

    if (errorMessages) {
        alert(errorMessages);
    } else {
        window.location.href = 'index.html'; // Redirect after validation

    }
}
function validateForm2() {
    let errorMessages = '';

    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const numid = document.getElementById('numid').value.trim();
    const bdate = document.getElementById('bdate').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const rpassword = document.getElementById('rpassword').value.trim();
    const address = document.getElementById('address').value.trim();
    const country = document.getElementById('country').value.trim();
    const state = document.getElementById('state').value.trim();
    const city = document.getElementById('city').value.trim();
    const pnumber = document.getElementById('pnumber').value.trim();
    const marca = document.getElementById('marca').value.trim();
    const modelo = document.getElementById('modelo').value.trim();
    const año = document.getElementById('año').value.trim();
    const licencia = document.getElementById('licencia').value.trim();

    if (!fname) {
        errorMessages += 'First Name is required.\n';
    }
    if (!lname) {
        errorMessages += 'Last Name is required.\n';
    }
    if (!numid) {
        errorMessages += 'identification is required.\n';
    }
    if (!bdate) {
        errorMessages += 'birthday is required.\n';
    }
    if (!email) {
        errorMessages += 'Email is required.\n';
    }
    if (!password) {
        errorMessages += 'Password is required.\n';
    }
    if (!rpassword) {
        errorMessages += 'Repeat password is required.\n';
    }
    if (password != rpassword) {
        errorMessages += 'Passwords do not match.\n';
    }
    if (!address) {
        errorMessages += 'Address is required.\n';
    }
    if (!country) {
        errorMessages += 'Country is required.\n';
    }
    if (!state) {
        errorMessages += 'State is required.\n';
    }
    if (!city) {
        errorMessages += 'City is required.\n';
    }
    if (!pnumber) {
        errorMessages += 'Phone Number is required.\n';
    }
    if (!marca) {
        errorMessages += 'brand is required.\n';
    }
    if (!modelo) {
        errorMessages += 'model is required \n';
    }
    if (!año) {
        errorMessages += 'year is required \n';
    }
    if (!licencia) {
        errorMessages += 'license is required \n';
    }
    if (errorMessages) {
        alert(errorMessages);
    } else {
        window.location.href = 'index.html'; // Redirect after validation

    }
}
