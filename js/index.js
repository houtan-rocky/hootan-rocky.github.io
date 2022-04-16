object = {
	firstName: "Hootan",
	lastName: "Abasi",
	age: 25,
};

const getDateInFormat = (inputDate) => {
	const YYYY = inputDate.getFullYear();
	const MM = inputDate.getMonth();
	const DD = inputDate.getDate();
	return YYYY + "/" + MM + "/" + DD;
};

document.getElementById(
	"time"
).innerHTML = `last time updated : ${getDateInFormat(new Date(2022, 4, 16))} `;

userLogin = { username: "hootan", password: "1234" };
let username = prompt("please enter your username");
let password = prompt(`please enter password for username ${username}`);
if (!(username === userLogin.username && password === userLogin.password)) {
	document.getElementById("body").innerHTML =
		"You aren't allowed to visit this page";
}
