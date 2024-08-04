RIDES.initializeEvents = function () {
    if (document.getElementById('addUserButton')) {
        document.getElementById('addUserButton').addEventListener('click', function () {
            // obtener la información del form
            var user = {
                fname: document.getElementById('fname').value,
                password: document.getElementById('password').value
            };
            RIDES.addUser(user);
        });
    }
};

RIDES.initializeEvents();