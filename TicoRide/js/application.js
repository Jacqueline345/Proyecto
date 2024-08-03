var RIDES = {
    property: 20,

    initialize: function () {
        RIDES.clearFields();
        RIDES.loadUsers();
    },

    initializeEvents: function () {
    },

    loadUsers: function () {
        var users = [];
        if (localStorage.getItem('users')) {
            users = JSON.parse(localStorage.getItem('users'));
        }
        users.forEach(function (registro, index, users) {
            RIDES.addUser(registro);
        });
    },
    addUser: function (user) {
            var users = [];
            if (localStorage.getItem('users')) {
                users = JSON.parse(localStorage.getItem('users'));
            }
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            RIDES.clearFields();
    },

    clearFields: function () {
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
    }
}