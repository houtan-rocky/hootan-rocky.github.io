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
