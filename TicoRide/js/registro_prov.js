RIDES.initializeEvents = function() {
    if(document.getElementById('addUserButton')){
        document.getElementById('addUserButton').addEventListener('click',function() {
            var user = {
                fname: document.getElementById('fname').value,
                lname: document.getElementById('lname').value,
                numid: document.getElementById('numid').value,
                bdate: document.getElementById('bdate').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                rpassword: document.getElementById('rpassword').value,
                address: document.getElementById('address').value,
                country: document.getElementById('country').value,
                state: document.getElementById('state').value,
                city: document.getElementById('city').value,
                pnumber: document.getElementById('pnumber').value,
                marca: document.getElementById('marca').value,
                modelo: document.getElementById('modelo').value,
                año: document.getElementById('año').value,
                licencia: document.getElementById('licencia').value
            }
            RIDES.addUser(user);
        });
    }
};
RIDES.initializeEvents();