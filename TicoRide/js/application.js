
function clearFields() {
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
function clearFields2() {
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

function validateUser() {
	const fname = document.getElementById('fname').value;
	const password = document.getElementById('password').value;
	const errorElement = document.getElementById('error_msg');

	if (fname == 'admin' && password == 'password') {
		console.log('logged in');
		// localStorage.setItem('username', username);
		errorElement.innerHTML = 'User is valid';
		errorElement.setAttribute("style", "display:block;");
		document.location.href = "./home2.html";

	} else {
		errorElement.innerHTML = 'Username or Password invalid';
		errorElement.setAttribute("style", "display:block;");
	}
}


function loadRide() {
    // Look for the username from the querystring
    const urlParams = new URLSearchParams(window.location.search);
    const dep = urlParams.get('u'); // Make sure 'dep' is initialized
    if (dep) {
        // Loop through the user's array
        const rides = getFromLocalStorage('rides');
        let matcheduser = null;
        rides.forEach((ride) => {
            // Find the user that matches the username
            if (ride.dep === dep) {
                matcheduser = ride;
                return;
            }
        });

        if (matcheduser) {
            document.getElementById('dep').value = matcheduser.dep;
            document.getElementById('arr').value = matcheduser.arr;

            const days = ['M', 'T', 'W', 'Th', 'F', 'S', 'Su'];
            days.forEach(day => {
                const checkbox = document.getElementById(day);
                if (checkbox) {
                    checkbox.checked = matcheduser.days && matcheduser.days[day] || false;
                }
            });

            document.getElementById('time').value = matcheduser.time;
            document.getElementById('se').value = matcheduser.se;
            document.getElementById('fe').value = matcheduser.fe;
            document.getElementById('make').value = matcheduser.make;
            document.getElementById('model').value = matcheduser.model;
            document.getElementById('anio').value = matcheduser.anio;
        }
    }
}

function saveUser() {
	const fname = document.getElementById('fname').value;
	const lname = document.getElementById('lname').value;
	const numid = document.getElementById('numid').value;
	const bdate = document.getElementById('bdate').value;
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	const rpassword = document.getElementById('rpassword').value;
	const address = document.getElementById('address').value;
	const country = document.getElementById('country').value;
	const state = document.getElementById('state').value;
	const city = document.getElementById('city').value;
	const pnumber = document.getElementById('pnumber').value;


	const user = {
		fname,
		lname,
		numid,
		bdate,
		email,
		password,
		rpassword,
		address,
		country,
		state,
		city,
		pnumber,
		"type": "user"
	};

	if (saveToLocalStorage('users', user)) {
		alert('User saved');
		document.location.href = "./index.html";
	} else {
		alert('There was an error registering the user');
	}
}

function saveUserProv() {
	const fname = document.getElementById('fname').value;
	const lname = document.getElementById('lname').value;
	const numid = document.getElementById('numid').value;
	const bdate = document.getElementById('bdate').value;
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	const rpassword = document.getElementById('rpassword').value;
	const address = document.getElementById('address').value;
	const country = document.getElementById('country').value;
	const state = document.getElementById('state').value;
	const city = document.getElementById('city').value;
	const pnumber = document.getElementById('pnumber').value;
	const marca = document.getElementById('marca').value;
	const modelo = document.getElementById('modelo').value;
	const año = document.getElementById('año').value;
	const licencia = document.getElementById('licencia').value;

	const user = {
		fname,
		lname,
		numid,
		bdate,
		email,
		password,
		rpassword,
		address,
		country,
		state,
		city,
		pnumber,
		marca,
		modelo,
		año,
		licencia,
		"type": "user"
	};

	if (saveToLocalStorage('users', user)) {
		alert('User saved');
		document.location.href = "./index.html";
	} else {
		alert('There was an error registering the user');
	}
}
function saveRide() {
	const dep = document.getElementById('dep').value;
	const arr = document.getElementById('arr').value;
	const days = ['M', 'T', 'W', 'Th', 'F', 'S', 'Su'];
	const selectedDays = {};

	days.forEach(day => {
		const checkbox = document.getElementById(day);
		selectedDays[day] = checkbox.checked;
	});

	const time = document.getElementById('time').value;
	const se = document.getElementById('se').value;
	const fe = document.getElementById('fe').value;
	const make = document.getElementById('make').value;
	const model = document.getElementById('model').value;
	const anio = document.getElementById('anio').value;

	const Ride = {
		dep,
		arr,
		days: selectedDays,
		time,
		se,
		fe,
		make,
		model,
		anio,
		type: "Ride"
	};

	if (saveToLocalStorage('rides', Ride)) {
		alert('Ride saved');
		document.location.href = "./Ride.html";
	} else {
		alert('There was an error registering the ride');
	}
}

function loadRides() {
	// Retrieve the rides from localStorage
	const rides = getFromLocalStorage('rides');

	rides.forEach((Ride, index) => {
		// Create a new row for each ride
		const table = document.getElementById("user-table-rows");

		table.innerHTML += `
            <th scope="row">${index}</th>
            <td>${Ride.dep}</td>
            <td>${Ride.arr}</td>
            <td>${Ride.se}</td>
            <td>${Ride.make} ${Ride.model} ${Ride.anio}</td>
            <td>${Ride.fe}</td>
			<td> <a href="./edit_ride.html?u=${Ride.dep}">Edit</a> | <a href="#" class="deleteButton" data-dep="${Ride.dep}">Delete</a></td>`;
	});
}

function editUser() {
	const dep = document.getElementById('dep').value;
	const arr = document.getElementById('arr').value;
	const days = ['M', 'T', 'W', 'Th', 'F', 'S', 'Su'];
	const selectedDays = {};

	days.forEach(day => {
		const checkbox = document.getElementById(day);
		selectedDays[day] = checkbox.checked;
	});

	const time = document.getElementById('time').value;
	const se = document.getElementById('se').value;
	const fe = document.getElementById('fe').value;
	const make = document.getElementById('make').value;
	const model = document.getElementById('model').value;
	const anio = document.getElementById('anio').value;

	let rides = JSON.parse(localStorage.getItem('rides')) || [];
	const existingUserIndex = rides.findIndex(Ride => Ride.dep === dep);
	if (existingUserIndex !== -1) {
		rides[existingUserIndex] = { dep, arr, day, time, se, fe, make, model, anio, "type": "Ride" };
		localStorage.setItem('rides', JSON.stringify(rides));
		alert('Rides updated');
		document.location.href = "./Ride.html";
	} else {
		alert('Ride not found');
	}
}

/**
 * Binds the different events to the different elements of the page
 */
function bindEvents() {
	// document.getElementById('login-button').addEventListener('click', loginButtonHandler);
	if (document.getElementById('addUserButton')) {
		document.getElementById('addUserButton').addEventListener('click', addUserButtonHandler);
	}
	if (document.getElementById('RegisterButton')) {
		document.getElementById('RegisterButton').addEventListener('click', RegisterButtonHandler);
	}
	if (document.getElementById('editarButton')) {
		document.getElementById('editarButton').addEventListener('click', editButtonHandler);
	}
	if (document.getElementById('loginButton')) {
		document.getElementById('loginButton').addEventListener('click', loginButtonHandler);
	}
	if (document.getElementById('create')) {
		document.getElementById('create').addEventListener('click', createHandler);
	}
	if (document.getElementById('deleteButton')) {
		document.getElementById('deleteButton').addEventListener('click', deleteButtonHandler);
	}

}

function loginButtonHandler(element) {
	validateUser();
}

function addUserButtonHandler(element) {
	saveUser();
	clearFields();
}
function RegisterButtonHandler(element) {
	saveUserProv();
	clearFields2();
}
function createHandler(element) {
	saveRide();
}
function editButtonHandler(element) {
	editUser();
}
function deleteButtonHandler(element) {
	deleteRide();
}