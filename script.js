var database = [
{

	username: "vanya",
	password: "qwerty"
},
{

	username: "kek",
	password: "123"
},
{

	username: "holo",
	password: "777"
},
];



var newsFeed =[
	{
		username: "Max",
		timeline: "You crazy!",
	},
	{
		username: "Yuri",
		timeline: "superstaar",
	},
	{
		username: "Anna",
		timeline: "I am cool day!",       
	},

	
];


function isUserValid(username, password){
	for(var i=0; i<database.length; i++){
		if(database[i].username === username && database[i].password === password){
			return true;
		}
	}
	return false;
}

function signIn(username,password) {
	if(isUserValid(username,password)) {
		console.log(newsFeed);
	} else{
		alert("Извините, неправильный логин и пароль");
	}
}




var userNamePrompt = prompt("Ваш логин?");
var passwordPrompt = prompt("Ваш пароль?");



signIn(userNamePrompt, passwordPrompt);

