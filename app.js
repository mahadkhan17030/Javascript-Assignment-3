
// Chapter 1
// 1
alert("MUHAMMAD MAHAD");
alert("KHAN");
alert("muhammadmahadkhan80@gmail.com");
alert("03022185293");
alert("xxxxxxxx");
// 2
alert("You're learning javascript!");
// 3
alert("Hello World!");

// Chapter 2
// 1
var firstName = "MAHAD";
// 2
var lastName;
lastName = "Khan";
// 3
var teamName = "Gangsters";
alert(teamName);
// 4
var bestMan = "Charlie";
bestMan = "Muraad";

// Chapter 3
// 1,2
var caseQty = 144;
// 3
var num = 9;
// 4
var secondNum = 144 + 9;
// 5
var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
// 6
var thirdNum = 9;
thirdNum = thirdNum + 6;

// Chapter 4
// 1
var productCost = 4.45;
// 2
var nameOfBand;
// 3
var fourthNum = 67;
// 4
var name = firstName + " " + lastName
    // 5
    // IllEGAL VARIABLES
    // var first Name = 
    // var 1stname = 
    // var _name = 
    // var firstname =   (WRITE IN CAMELCASE)

    // LEGAL VARIABLES
    // var name = 
    // var first_name=
    // var $name=

    // Chapter 5
    ("%")

var num = 20 % 6;
console.log(num)

var largeNumber = 1000 * 2000
console.log(largeNumber)

var a = 300;
var b = 700;
var c = b - a;

var a = 90 % 6;
console.log(a)

var k = 3 * 6
alert(k)
//  chapter 6



var a = 3;

a = ++a

console.log(a)


var j = 100;

j = --j

console.log(j)


var x = 50;
var y = x++;
console.log(y)

var y = 50;
var z = --y;
console.log(z);









var f = 15;
var f = ++f;
alert(f)
// chapter 7


var math = 6 + (3 * 7);
console.log(math)

var science = (3 + 7) * 6;
console.log(science)

var phy = (3 + 7) * (6 + 3);
console.log(phy)

var che = ((3 + 6) * 6 + 7);
console.log(che)

var cost = (2 + 2) * (4 + 10);
console.log(cost)

var unit = 2 + 2 * 4 + 10;
console.log(unit)
//  7
var pressure = 4 / 2 * 4
console.log(pressure)
// chapter 8

var num = "2" + "2"
console.log(num)

var message = "Dolly" + "Hello"
alert(message)

alert("33" + 3)


var a = "pakistan"
var b = "zindabad"
alert(a + b)

var a = "Babu"
var b = 70
alert(a + b)

var k = "king"
var m = "khan"
var l = (k + m)

// chapter 9 

var r = prompt("Enter first name")
console.log(r)

var p = prompt("country?", "china")
console.log(p)

var yourName = prompt("Enter your Name")
console.log(yourName)

userName = prompt("what is your age", "18+")
console.log(userName)

var n = "what's your favorite color?"
var m = "blue";
var o = prompt(n, m)

var t = ("what is your favorite food", "pizza")
alert(t)

// chapter 10 

var city = "karachi"
if (city = "karachi") {
    console, log("the city of light")
}

var zipCode = 10010
if (zipCode == 10010) {
    alert("karachi")
    if (zipCode != 10010) {
        alert("plese write correct city")
    }
}

var x = 5
if (x === 5) {
    x = 1
    console.log(x)
}




// Chapter 11
// 1
var a = 10
var b = 8
if (a != b) {
    alert("unequal")
} else { alert("equal") }
// 2
if (a > b) { alert("a > b") } else { alert("a<b") }
// 3
// 4
if (a > b) { alert("congratulation unequal") } else { alert("less than") }
// 5
var name = prompt("Enter name")
var name1 = "mahad"
if (name != name1) { alert("No match") } else { alert("Access granted") }

// Chapter 12
// 1
var a = 6
var b = 8
if (a == b) {
    alert("Equal")
} else {
    alert("Not equal")
}
// 2
var a = prompt("Enter your marks between 1 to 100")
if (a >= 80) {
    alert("A+")
} else if (a < 80 && a >= 70) {
    alert("B")
} else if (a < 70 && a >= 60) {
    alert("C")
} else { alert("Below C") }
// 3
var a = prompt("Give value of a")
a = Number(a)
if (a === 10) { alert(Correct) }
else { alert(a) }
// 4
var city = prompt("Enter city name")
if (city == "karachi") {
    alert("its karachi")
} else if (city == "lahore") {
    alert("its lahore")
} else { alert("its some where else") }

// Chapter 13
// 1
var a = b
var c = d
if (a == b && c == d) {
    alert("OK")
}
// 2
var a = b
var c = d
if (a == b && c != d) {
    alert("OK")
}
// 3
var name = "Arsalan"
var age = 19
if (name == "Arsalan" || name == "Hamza" && age < 60) {
    alert("OK")
}
// 4
var num1 = 7
var num2 = 8
if (num1 < num2) {
    console.log("num1 < num 2")
} else {
    console.log("num1 > num 2")
}
// 5
var firstName = "mahad"
var lastName = "khan"
var name1 = prompt("Enter first name")
var name2 = prompt("Enter last name")
if (name1 === firstName && name2 === lastName) {
    alert("OK")
}
// Chapter 14
// 1
password = 4
if (password != 0) {
    if (password < 5) {
        console.log("password must be greater than 5")
    }
} else {
    console.log("OK")
}
// 2
var a = 1
var c = "Max"
if (a === 1) {
    if (c === "Max") {
        alert("OK")
    }
}
// 3
if (a === 1 && c === "Max") {
    alert("OK")
}
// 4
var b = 3
var c = 3
if (b == c) {
    if (c < b) {
        alert("OK")
    }
}

// Chapter 15
// 1
var arr = []
// 2
var arr = ["mahad"]
// 3
var alphabet = ["h", "i", "j", "k", "l"]
alert(alphabet[2])
// 4
console.log(alphabet.length)
// 5
var alphabet = ["h", "i", "j", "k", "l"]
alphabet[5] = "m"
console.log(alphabet[5])

// Chapter 16 Part I
// 1
var arr = ["mahad"]
arr.push("muzammil")
// 2
var alphabet = ["h", "i", "j", "k"]
alphabet.pop()
// 3
var alphabet = ["h", "i", "j", "k"]
alphabet.push(2)

// Chapter 16 Part II
// 1
var sizes = ["S", "M", "XL", "XXL", "XXXL"]
sizes.shift()
// 2
var sizes = ["S", "M", "XL", "XXL", "XXXL"]
sizes.unshift(1, 2, 3)
// 3
var name = ["mahad"]
name.unshift("muzammil")
alert(name[0])
// 4
var sizes = ["S", "M", "XL", "XXL", "XXXL"]
sizes.splice(2, 0, "L")
// 5
var sizes = ["S", "M", "XL", "XXL", "XXXL"]
var regSizes = sizes.slice(0, 3)
// 6
var pets = ["dog", "cat", "ox", "duck", "frog"]
pets.splice(1, 3, "fish", "bunny")
// 7
var pets = ["dog", "cat", "ox", "duck", "frog"]
pets.splice(1, 2,)
// 8
var pets = ["dog", "cat", "ox", "duck", "frog", "flea"]
pets = pets.slice(3, 5)

// Chapter 17-20
// 1
for (var i = 0; i < 11; i++) {
    console.log(i)
}
// 2
for (var i = 0; i <= 12; i++) {
    console.log(i)
}
// 3
for (var i = 0; i <= 4; i++) {
}
// 4
for (var j = 0; j < 101; j++) {
    console.log(i)
}
// 5
for (var i = 0; i > 2; i++) {
    console.log(i)
}
// 6
var num = []
for (i = 0; i < 5; i++) {
    num.push(i)
}
// 7
// 8
// 9
for (i = 0; i < 11; i++) {
    if (i == 1) {
        console.log(i)
    }
    break;
}
// 10
var userNames = ["mahad", "muzammil", "mudassir"]
var userName = prompt("Enter user name.")
for (var i = 0; i < userNames.length; i++) {
    if (userName == "mahad" || userName == "muzammil" || userName == "mudassir") {
        alert("Enter")
    } else {
        alert("Enter correct username")
    }
}
// 11
var list = ["mahad", "muzammil", "mudassir"]
var userName = prompt("Enter user name.")
for (var i = 0; i < list.length; i++) {
    if (userName == list[i]) {
        alert("match found")
    } break;
}
// 12
var a = ["a", "b", "c", "d", "e"]
var b = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
for (var i = 1; i < 2; i++) {
    for (var k = 1; k < 10; k++) {
        console.log(k + "a")
        console.log(k + "b")
        console.log(k + "c")
        console.log(k + "d")
        console.log(k + "e")
    }
}