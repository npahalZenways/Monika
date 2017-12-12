//ES6
//constants
const pi = 3.414;

//rest parameters
function abc(a,b, ...c){
	console.log(a,b,c)
}

abc(1,2,3,4,5,6,6);

//arrow functions

function abc(a,b, ...c){
	console.log("First two params are: ", a,b);

	//arrow function is used here
	c.forEach(item => console.log(item));
}

//scope

if(true){
	var a = 10;
}

if(true){
	let b = 10;
}

//multiple line string
var a = `<div>
	<a></a>
</div>`