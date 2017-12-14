var count;
var names;
count = 10;
names = 'Nitin';
var phones = [1, 2, 3, 4, 5];
var studentNames = ['Red', 'Green', 'Blue'];
var aarr;
var test = {
    name: 'ntini',
    phone: 1
};
var objarr;
objarr.push({
    name: 'ntiti'
});
var isTrue; //true | false
var tup;
tup = ['dfgh', 1];
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 1] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green; // c = 1
var colorName = Color[1];
console.log(c, colorName);
function abc(param1, param2) {
    return {};
}
//generics
function genStock(param, param1) {
    return param;
}
genStock(1, 1);
genStock('Nitin', true);
genStock(true, {});
var numarr;
var strarr;
//Unions
var padding;
function optional(param) {
    if (typeof param == 'number') {
        padding = param + 'px';
    }
    else if (typeof param == 'string') {
        padding = param;
    }
    else {
        console.log("Not recognised");
    }
}
//# sourceMappingURL=Datatypes.js.map