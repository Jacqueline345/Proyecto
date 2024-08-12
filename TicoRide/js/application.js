
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
	// Obtener los valores del formulario
	const fname = document.getElementById('fname').value; // Ajusta según el ID del input de nombre
	const password = document.getElementById('password').value; // Ajusta según el ID del input de contraseña

	if (fname && password) {
		// Obtener los usuarios y conductores del localStorage
		const users = JSON.parse(localStorage.getItem('users')) || [];
		const drivers = JSON.parse(localStorage.getItem('drivers')) || [];

		let matchedUser = null;

		// Buscar en los usuarios
		for (const user of users) {
			if (user.fname === fname && user.password === password) {
				matchedUser = user;
				break; // Salir del bucle una vez que se encuentra una coincidencia
			}
		}

		// Buscar en los conductores solo si no se encontró una coincidencia en usuarios
		if (!matchedUser) {
			for (const driver of drivers) {
				if (driver.fname === fname && driver.password === password) {
					matchedUser = driver;
					break; // Salir del bucle una vez que se encuentra una coincidencia
				}
			}
		}

		// Ahora puedes usar matchedUser según sea necesario
		if (matchedUser) {
			// Autenticación exitosa, proceder con el usuario autenticado
			alert('User authenticated ');
			window.location.href = './home2.html'; // Redirigir solo después de encontrar un usuario
		} else {
			// Autenticación fallida
			alert('Invalid credentials');
			// Mostrar mensaje de error al usuario, si lo deseas
		}
	} else {
		alert('Please enter both username and password');
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

	const driver = {
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
		"type": "driver"
	};

	if (savedToLocalStorage('drivers', driver)) {
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

	if (saveRToLocalStorage('rides', Ride)) {
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
			<td> <a href="./edit_ride.html?u=${Ride.dep}">Edit</a> | <a href="#" id="deleteButton" data-dep="${Ride.dep}">Delete</a></td>`;
	});
}
function editUser() {
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

	let users = JSON.parse(localStorage.getItem('users')) || [];
	const existingUserIndex = users.findIndex(user => user.fname === fname);
	if (existingUserIndex !== -1) {
		users[existingUserIndex] = { fname, lname, numid, bdate, email, password, rpassword, address, country, state, city, pnumber, "type": "user" };
		localStorage.setItem('users', JSON.stringify(users));
		alert('User updated');
		document.location.href = "./index.html";
	} else {
		alert('User not found');
	}

}
function editDrive() {
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
	const modelo = document.getElementById('model').value;
	const año = document.getElementById('año').value;
	const licencia = document.getElementById('licencia').value;

	let users = JSON.parse(localStorage.getItem('users')) || [];
	const existingUserIndex = users.findIndex(user => user.fname === fname);
	if (existingUserIndex !== -1) {
		users[existingUserIndex] = { fname, lname, numid, bdate, email, password, rpassword, address, country, state, city, pnumber, marca, modelo, año, licencia, "type": "user" };
		localStorage.setItem('users', JSON.stringify(users));
		alert('User updated');
		document.location.href = "./index.html";
	} else {
		alert('User not found');
	}

}
function editRide() {
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
	const existingRideIndex = rides.findIndex(ride => ride.dep === dep && ride.arr === arr);
	if (existingRideIndex !== -1) {
		rides[existingRideIndex] = { dep, arr, selectedDays, time, se, fe, make, model, anio, "type": "Ride" };
		localStorage.setItem('rides', JSON.stringify(rides));
		alert('Ride updated');
		document.location.href = "./Ride.html";
	} else {
		alert('Ride not found');
	}
}
function Delete() {
	const rides = document.querySelector('rides');
	const updatedRides = rides.filter(Ride => rides.arr !== arr);

	saveRToLocalStorage('rides', updatedRides);

	alert('Rides deleted');
	loadRides(); //recarga la tabla de usuarios
}
localStorage.setItem('currentUserFname', user.fname);

function loadUserProfile() {
    const fname = localStorage.getItem('currentUserFname', user.fname); // Obtener el fname del localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const drivers = JSON.parse(localStorage.getItem('drivers')) || [];
    
    let user = null;
    let driver = null;
    
    // Buscar el usuario en los usuarios
    user = users.find(u => u.fname === fname);
    
    // Buscar el conductor en los conductores si no se encontró un usuario
    if (!user) {
        driver = drivers.find(d => d.fname === fname);
    }
    
    // Rellenar el formulario con los datos del usuario
    if (user) {
        document.getElementById('fname').value = user.fname;
        document.getElementById('lname').value = user.lname;
        document.getElementById('numid').value = user.numid;
        document.getElementById('bdate').value = user.bdate;
        document.getElementById('email').value = user.email;
        document.getElementById('password').value = user.password;
        document.getElementById('rpassword').value = user.rpassword;
        document.getElementById('address').value = user.address;
        document.getElementById('country').value = user.country;
        document.getElementById('state').value = user.state;
        document.getElementById('city').value = user.city;
        document.getElementById('pnumber').value = user.pnumber;

    } else if (driver) {
        document.getElementById('fname').value = driver.fname;
        document.getElementById('lname').value = driver.lname;
        document.getElementById('numid').value = driver.numid;
        document.getElementById('bdate').value = driver.bdate;
        document.getElementById('email').value = driver.email;
        document.getElementById('password').value = driver.password;
        document.getElementById('rpassword').value = driver.rpassword;
        document.getElementById('address').value = driver.address;
        document.getElementById('country').value = driver.country;
        document.getElementById('state').value = driver.state;
        document.getElementById('city').value = driver.city;
        document.getElementById('pnumber').value = driver.pnumber;
        document.getElementById('marca').value = driver.marca;
        document.getElementById('model').value = driver.modelo;
        document.getElementById('año').value = driver.año;
        document.getElementById('licencia').value = driver.licencia;
    }
}

// Llama a la función cuando la página se carga
window.onload = loadUserProfile();

function saveUserProfile() {
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
    const marca = document.getElementById('marca')?.value;
    const modelo = document.getElementById('model')?.value;
    const año = document.getElementById('año')?.value;
    const licencia = document.getElementById('licencia')?.value;
    const currentFname = localStorage.getItem('currentUserFname'); // Obtener el fname actual
    
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let drivers = JSON.parse(localStorage.getItem('drivers')) || [];
    
    // Actualizar el usuario en la lista de usuarios
    let updated = false;
    for (let user of users) {
        if (user.fname === currentFname) {
            user.fname = fname;
            user.lname = lname;
            user.numid = numid;
            user.bdate = bdate;
            user.email = email;
            user.password = password;
            user.rpassword = rpassword;
            user.address = address;
            user.country = country;
            user.state = state;
            user.city = city;
            user.pnumber = pnumber;
            updated = true;
            break;
        }
    }
    
    // Actualizar el conductor en la lista de conductores si no estaba en usuarios
    if (!updated) {
        for (let driver of drivers) {
            if (driver.fname === currentFname) {
                driver.fname = fname;
                driver.lname = lname;
                driver.numid = numid;
                driver.bdate = bdate;
                driver.email = email;
                driver.password = password;
                driver.rpassword = rpassword;
                driver.address = address;
                driver.country = country;
                driver.state = state;
                driver.city = city;
                driver.pnumber = pnumber;
                driver.marca = marca;
                driver.modelo = modelo;
                driver.año = año;
                driver.licencia = licencia;
                break;
            }
        }
    }
    
    // Guardar los datos actualizados en el localStorage
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('drivers', JSON.stringify(drivers));
    
    // Confirmar los cambios y redirigir si es necesario
    console.log('Profile updated successfully');
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
	if (document.getElementById('editButton')) {
		document.getElementById('editButton').addEventListener('click', editButtonHandler);
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
	editRide();
}
function deleteButtonHandler(element) {
	Delete();
}
