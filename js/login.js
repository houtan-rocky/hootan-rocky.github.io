const userLogin = { username: "hootan", password: "1234" };

function login() {
	let username = prompt("please enter your username");
	let password = prompt(`please enter password for username ${username}`);
	if (!(username === userLogin.username && password === userLogin.password)) {
		window.stop();
	}
}

login();
