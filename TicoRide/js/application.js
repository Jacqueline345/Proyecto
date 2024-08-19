
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

	// Recopilar los días seleccionados
	days.forEach(day => {
		const checkbox = document.getElementById(day);
		selectedDays[day] = checkbox ? checkbox.checked : false; // Asegurarse de que el checkbox exista
	});

	const time = document.getElementById('time').value;
	const se = document.getElementById('se').value;
	const fe = document.getElementById('fe').value;
	const make = document.getElementById('make').value;
	const model = document.getElementById('model').value;
	const anio = document.getElementById('anio').value;
	// Crear el objeto de ride
	const ride = {
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

	// Función para guardar en localStorage
	function saveToLocalStorage(key, value) {
		try {
			let existingData = JSON.parse(localStorage.getItem(key)) || [];
			existingData.push(value);
			localStorage.setItem(key, JSON.stringify(existingData));
			return true;
		} catch (error) {
			console.error('Error saving data to localStorage:', error);
			return false;
		}
	}

	if (saveToLocalStorage('rides', ride)) {
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
	const modelo = document.getElementById('modelo').value;
	const año = document.getElementById('año').value;
	const licencia = document.getElementById('licencia').value;

	let drivers = JSON.parse(localStorage.getItem('drivers')) || [];
	const existingDriverIndex = drivers.findIndex(driver => driver.fname === fname);
	if (existingDriverIndex !== -1) {
		drivers[existingDriverIndex] = { fname, lname, numid, bdate, email, password, rpassword, address, country, state, city, pnumber, marca, modelo, año, licencia, "type": "driver" };
		localStorage.setItem('drivers', JSON.stringify(drivers));
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
	// Selecciona todos los botones de eliminar
	document.querySelectorAll('.deleteButton').forEach(button => {
		button.addEventListener('click', function () {
			// Obtiene el ride id desde la fila de la tabla
			const rideId = this.closest('tr').getAttribute('data-ride-id');

			// Muestra un cuadro de confirmación
			if (confirm('¿Estás seguro de que quieres eliminar este ride?')) {
				// Elimina el ride del localStorage
				let rides = JSON.parse(localStorage.getItem('rides')) || [];
				rides = rides.filter(ride => ride.id !== rideId);
				localStorage.setItem('rides', JSON.stringify(rides));

				// Elimina la fila de la tabla
				this.closest('tr').remove();
			}
		});
	});

}
function loginUser() {
		const fname = document.getElementById('fname').value;
		const password = document.getElementById('password').value;
	
		let users = JSON.parse(localStorage.getItem('users')) || [];
		const user = users.find(user => user.fname === fname && user.password === password);
		localStorage.setItem('loggedInUser', JSON.stringify(user)); // Guarda el usuario en localStorage

	
		if (user) {
			if (user.type === 'user') {
				alert('Usuario encontrado correctamente');
			} else {
				alert('Usuario no encontrado');
			}
		} 
	} 
	function loginDriver() {
		const fname = document.getElementById('fname').value;
		const password = document.getElementById('password').value;
	
		let drivers = JSON.parse(localStorage.getItem('drivers')) || [];
		const driver = drivers.find(driver => driver.fname === fname && driver.password === password);
		localStorage.setItem('loggedInDriver', JSON.stringify(driver)); // Guarda el usuario en localStorage

	
		if (driver) {
			if (user.type === 'driver') {
				alert('Driver encontrado correctamente');
			} else {
				alert('Driver no encontrado');
			}
		} 
	} 
function saveRideData(){
	    const loggedInDriver = JSON.parse(localStorage.getItem('loggedInDriver'));
        const rides = JSON.parse(localStorage.getItem('rides'));
        const rideData = {
            driver: loggedInDriver,
            rides: rides
        };
	if (saveRiToLocalStorage('rideData', rideData)) {
		alert('Ride guardados correctamente');
		document.location.href = "./Ride.html";
	} else {
		alert('There was an error registering the user');
	}
}
function searchRides() {
	// Obtener los valores del formulario
	const dep = document.getElementById('dep').value.toLowerCase();
	const arr = document.getElementById('arr').value.toLowerCase();
  
	// Obtener los datos de localStorage
	const rideData = JSON.parse(localStorage.getItem('rideData')) || { driver: null, rides: [] };
	const rides = rideData.rides || [];
  
	// Filtrar los rides
	const filteredRides = rides.filter(ride => {
	  return ride.dep.toLowerCase().includes(dep) && ride.arr.toLowerCase().includes(arr) && ride.days.toLowerCase().includes(days);
	});
  
	// Mostrar los resultados en la tabla
	const tableBody = document.getElementById('ridetable').getElementsByTagName('tbody')[0];
	tableBody.innerHTML = ''; // Limpiar resultados anteriores
  
	filteredRides.forEach(ride => {
	  const row = tableBody.insertRow();
	  const driver = row.insertCell(0);
	  const dep= row.insertCell(1);
	  const arr = row.insertCell(2);
  
	  driver.textContent = ride.driver;
	  dep.textContent = ride.dep;
	  locationCell.textContent = ride.arr;
	});
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
	if (document.getElementById('editarButton')) {
		document.getElementById('editarButton').addEventListener('click', editarButtonHandler);
	}
	if (document.getElementById('editarDriveButton')) {
		document.getElementById('editarDriveButton').addEventListener('click', editarDriveButtonHandler);
	}
	if (document.getElementById('buscar')) {
		document.getElementById('buscar').addEventListener('click', BuscarHandler);
	}


}

function loginButtonHandler(element) {
	validateUser();
	loginUser();
	loginDriver();
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
	saveRideData();
}
function editButtonHandler(element) {
	editRide();
}
function deleteButtonHandler(element) {
	Delete();
}
function editarButtonHandler(element){
	editUser();
}
function editarDriveButtonHandler(element){
	editDrive();
}
function BuscarHandler(element){
	searchRides();
}