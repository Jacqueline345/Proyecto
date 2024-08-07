
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
function clearFields2 () {
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
	} else {
		errorElement.innerHTML = 'Username or Password invalid';
		errorElement.setAttribute("style", "display:block;");
	}
}


function loadUser() {
	// look for the username from the querystring
	const urlParams = new URLSearchParams(window.location.search);
	username = urlParams.get('u');
	if (fname) {
		//loop through the user's array
		const users = getFromLocalStorage('users');
		let matcheduser = '';
		users.forEach((user) => {
			//find the user that matches the username
			if(user.fname === fname){
				matcheduser = user;
				return;
			}
		 });

		//fill the edit form with the user values
		document.getElementById('fname').value = matcheduser.fname;
		document.getElementById('lname').value = matcheduser.lname;
		document.getElementById('password').value = matcheduser.password;

	}
}

function loadUsers() {
	// loop the users in localstorage
	const users = getFromLocalStorage('users');
	users.forEach((user,index) => {
		// add each user to the the existing table
		const table = document.getElementById("user-table-rows");
		table.innerHTML +=  `<tr><th scope="row">${index}</th><td>${user.firstname}</td><td>${user.username}</td><td>${user.type}</td><td> <a href="./edit_user.html?u=${user.username}">Edit</a> | <a href="">Delete</a></td></tr>`
	});

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
function deleteUser(username) {
	const users = getFromLocalStorage('users');
	const updatedUsers = users.filter(user => user.username !== username);

	saveToLocalStorage('users', updatedUsers);

	alert('User deleted');
	loadUser(); //recarga la tabla de usuarios
}

function editUser() {
	const username = document.getElementById('username').value;
	const firstname = document.getElementById('firstname').value;
	const password = document.getElementById('password').value;

	let users = JSON.parse(localStorage.getItem('users')) || [];
	const existingUserIndex = users.findIndex(user => user.username === username);
	if (existingUserIndex !== -1) {
		users[existingUserIndex] = { username, firstname, password, "type": "user" };
		localStorage.setItem('users', JSON.stringify(users));
		alert('User updated');
		document.location.href = "./dashboard.html";
	} else {
		alert('User not found');
	}
}

/**
 * Binds the different events to the different elements of the page
 */
function bindEvents() {
	// document.getElementById('login-button').addEventListener('click', loginButtonHandler);
	if(document.getElementById('addUserButton')) {
		document.getElementById('addUserButton').addEventListener('click', addUserButtonHandler);
	}
	if(document.getElementById('RegisterButton')){
		document.getElementById('RegisterButton').addEventListener('click', RegisterButtonHandler);
	}
	if(document.getElementById('editarButton')) {
		document.getElementById('editarButton').addEventListener('click', editButtonHandler);
	}
	// jQuery('#login-button').bind('click', loginButtonHandler);
	// jQuery('#register-button').bind('click', registerButtonHandler);
}

function loginButtonHandler(element) {
	validateUser();
}

function addUserButtonHandler(element) {
	saveUser();
	clearFields();
}
function RegisterButtonHandler(element){
	saveUserProv();
	clearFields2();
}
function editButtonHandler(element){
	editUser();
}