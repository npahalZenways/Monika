var count : number;
var names : string;
count = 10;
names = 'Nitin';
var phones : number[] = [1,2,3,4,5];
var studentNames : string[] = ['Red', 'Green', 'Blue'];
var aarr : any[];
var test : object = {
	name: 'ntini',
	phone: 1
}
var objarr : object[];
objarr.push({
	name: 'ntiti'
})

var isTrue : boolean; //true | false
var tup : [string, number];
tup = ['dfgh', 1];

enum Color{Red= 5, Green= 3, Blue= 1};
var c : Color = Color.Green;  // c = 1
var colorName: string = Color[1];
console.log(c, colorName)

function abc(param1:number, param2:string):object{
	return {}
}

//generics

function genStock<T>(param:T, param1: any):T{
	return param
}

genStock<number>(1, 1);
genStock<string>('Nitin', true);
genStock<boolean>(true, {});

var numarr : Array<number>;
var strarr : Array<string>;

//Unions
var padding;
function optional(param : string | number){
	if(typeof param == 'number'){
		padding = param + 'px';
	} else if(typeof param == 'string'){
		padding = param;
	} else {
		console.log("Not recognised")
	}
}
