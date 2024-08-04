var RIDES = {
    property: 20,

    initialize: function () {
        RIDES.clearFields2();
        RIDES.loadUsers();
    },

    initializeEvents: function () {
    },
    loadUsers: function () {
        var users = [];
        if (localStorage.getItem('users')) {
            users = JSON.parse(localStorage.getItem('users'));
        }
        users.forEach(function (user, index, users) {
            RIDES.addUser(user);
        });
    },
    addUser: function (user) {
        var users = [];
        if (localStorage.getItem('users')) {
            users = JSON.parse(localStorage.getItem('users'));
        }
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        RIDES.clearFields2();
    },
    clearFields2: function () {
        document.getElementById('fname').value = ' ';
        document.getElementById('lname').value = ' ';
        document.getElementById('numid').value = ' ';
        document.getElementById('bdate').value = '';
        document.getElementById('email').value = ' ';
        document.getElementById('password').value = '';
        document.getElementById('rpassword').value = '';
        document.getElementById('address').value = ' ';
        document.getElementById('country').value = ' ';
        document.getElementById('state').value = ' ';
        document.getElementById('city').value = ' ';
        document.getElementById('pnumber').value = ' ';
        document.getElementById('marca').value = ' ';
        document.getElementById('modelo').value = ' ';
        document.getElementById('año').value = ' ';
        document.getElementById('licencia').value = ' ';
    }
}