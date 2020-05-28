/*
// ES5
var name5 = "Jane Smith";
var age5 = 23;
name5 = "Jane Miller";
console.log(name5);

// ES6
const name6 = "Jane Smith";
let age6 = 23;
name6 = "Jane Miller";
console.log(name6);

// ES5

function driversLicense(passedTest) {
    if (passedTest) {
        var firstName = "John";
        var yearOfBirth = 1990;
    }
    console.log(
        firstName + " born in " + yearOfBirth + " is now officially allowed to drive a car"
    );
}

driversLicense(true);

// ES6
function driversLicense6(passedTest) {
    let firstName;
    const yearOfBirth = 1990;

    if (passedTest) {
        firstName = "John";
    }
    console.log(
        firstName + " born in " + yearOfBirth + " is now officially allowed to drive a car"
    );
}

driversLicense6(true);

///////////////////////////////////////////

// Blocks and IIFEs

{
    const a = 1;
    let b = 2;
    var c = 3;
}

//console.log(a + b); NOT WORKING DUE TO BLOCK SCOPED
console.log(c);



let firstName = "John";
let lastName = "Smith";
const yearOfBirth = 1993;

function calculateAge(year) {
    return 2020 - year;
}

// ES5
console.log(
    "This is " +
        firstName +
        " " +
        lastName +
        ". He was born in " +
        yearOfBirth +
        ". Today he is " +
        calculateAge(yearOfBirth) +
        " years old"
);

// ES6
console.log(
    `This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calculateAge(
        yearOfBirth
    )} years old`
);

const n = `${firstName} ${lastName}`;

console.log(n.startsWith("J"));



///////////////////////////////////////////
// Arrow functions

const years = [1990, 1964, 1982, 1947];

// ES5
var ages5 = years.map(function (el) {
    return 2020 - el;
});

console.log(ages5);

// ES6
let ages6 = years.map((el) => 2020 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2020 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`;
});

console.log(ages6);


///////////////////////////////////////////
// Arrow functions 2

// ES5
var box = {
    color: "green",
    position: 1,
    clickMe: function () {
        var self = this;
        document.querySelector(".green").addEventListener("click", function () {
            var str = "this is box number " + self.position + " and it is " + self.color;
            alert(str);
        });
    },
};

box.clickMe();

// ES6
const box6 = {
    color: "blue",
    position: 2,
    clickMe: function () {
        document.querySelector(".blue").addEventListener("click", () => {
            var str = "this is box number " + this.position + " and it is " + this.color;
            alert(str);
        });
    },
};

box6.clickMe();

function Person(name) {
    this.name = name;
}

//ES5
Person.prototype.myFriends5 = function (friends) {
    var arr = friends.map(function (el) {
        return this.name + " is friends with " + el;
    });
    console.log(arr);
};

var friends = ["Bob", "Jane", "Tommy"];

new Person("John").myFriends5(friends);

//ES6
Person.prototype.myFriends6 = (friends) => {
    var arr = friends.map((el) => {
        return this.name + " is friends with " + el;
    });
    console.log(arr);
};

var friends = ["Bob", "Jane", "Tommy"];

new Person("John").myFriends6(friends);
*/

///////////////////////////////////////////
// Arrays
/*
const boxes = document.querySelectorAll(".box");
const boxesArr6 = Array.from(boxes);
// ES5


var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function (curr) {
    curr.style.backgroundColor = "dodgerblue";
});

//ES6
Array.from(boxes).forEach((curr) => (curr.style.backgroundColor = "dodgerblue"));
*/
/*
//ES5
for (var i = 0; i < boxesArr5.length; i++) {
    if (boxesArr5[i].className === "box blue") {
        continue;
    } else {
        boxesArr5[i].textContent = "I changed to blue!";
    }
}


//ES6

for (const curr of boxesArr6) {
    if (curr.className.includes("blue")) {
        continue;
    } else {
        curr.textContent = "I changed to blue! IN ES6";
    }
}

//ES5
var ages = [12, 17, 8, 21, 14, 11, 41];
var full = ages.map(function (curr) {
    return curr >= 18;
});

console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6

console.log(ages.findIndex((curr) => curr >= 18));
console.log(ages.find((curr) => curr >= 18));

///////////////////////////////////////////
// Spread operator

function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

//ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ["John", "Jane", "Mark"];
const familyMiller = ["Mary", "Bob", "Ann"];

const bigFamily = [...familySmith, "Ronny", ...familyMiller];
console.log(bigFamily);

const h = document.querySelector("h1");
const boxes = document.querySelectorAll(".box");
const all = [h, ...boxes];

Array.from(all).forEach((curr) => (curr.style.color = "purple"));

///////////////////////////////////////////
// Rest parameters

//ES5
function isFullAge5(limit) {
    var argsArr = Array.prototype.slice.call(arguments, 1);

    argsArr.forEach((curr) => {
        console.log(2016 - curr >= 18);
    });
    console.log(argsArr);
}

isFullAge5(1990, 1999, 1965);

//ES6
function isFullAge6(limit, ...years) {
    years.forEach((curr) => {
        console.log(2016 - curr >= limit);
    });
}

isFullAge6(18, 1990, 1999, 1965);


///////////////////////////////////////////
// Default parameters

//ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    lastName === undefined ? (lastName = "Smith") : lastName;
    nationality === undefined ? (nationality = "American") : nationality;

    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

var john = new SmithPerson("John", 1990, "Ericsson", "Swedish");
var emily = new SmithPerson("Emily", 1993, "Diaz", "Mexican");

console.log(john);
console.log(emily);


//ES6
function SmithPerson(firstName, yearOfBirth, lastName = "Smith", nationality = "American") {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

var john = new SmithPerson("John", 1990);
var emily = new SmithPerson("Emily", 1993, "Diaz", "Mexican");

console.log(john);
console.log(emily);


///////////////////////////////////////////
// Maps

const question = new Map();
question.set("question", "What is the offical name of the latest major JS version?");
question.set(1, "ES5");
question.set(2, "ES6");
question.set(3, "ES7");
question.set(4, "ES8");
question.set("correct", 3);
question.set(true, "Correct answer");
question.set(false, "Wrong, please try again!");

console.log(question.get("question"));
console.log(question.size);

question.delete(4);

//question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

for (let [key, value] of question.entries()) {
    if (typeof key === "number") {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt("Write the correct answer"));

console.log(question.get(ans === question.get("correct")));
*/

class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area;
        this.numTrees = numTrees;
    }

    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
        return density;
    }
}

class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, "tiny");
        classification.set(2, "small");
        classification.set(3, "normal");
        classification.set(4, "big");
        classification.set(5, "huge");
        console.log(
            `${this.name}, built in ${this.buildYear}, is a ${classification.get(
                this.size
            )} street.`
        );
    }
}

const Parks = [
    new Park("Green Park", 1987, 0.2, 215),
    new Park("National Park", 1894, 2.9, 3541),
    new Park("Oak Park", 1953, 0.4, 949),
];

const Streets = [
    new Street("Ocean Avenue", 1999, 1, 1, 4),
    new Street("Evergreen Street", 2008, 2.7, 2),
    new Street("4th Street", 2015, 0.8),
    new Street("Sunset Boulevard", 1982, 2.5, 5),
];

function calc(arr) {
    const sum = arr.reduce((prev, curr, index) => prev + curr, 0);

    return [sum, sum / arr.length];
}

function reportParks(p) {
    console.log("-----------PARKS REPORT------------\n\n");
    //Density
    p.forEach((el) => el.treeDensity());
    //Average Age
    const ages = p.map((el) => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);
    //Which park has more than 1000 trees
    const i = p.map((el) => el.numTrees).findIndex((el) => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);
}

function reportStreets(s) {
    console.log("\n-----------STREETS REPORT------------");
    //Total and avg length of the towns street.
    const [totalLength, avgLength] = calc(s.map((el) => el.length));
    console.log(
        `Our ${s.length} streets have a total length of ${totalLength}km, with an average of ${avgLength}km.`
    );
    //Classify sizes
    s.forEach((el) => el.classifyStreet());
}

reportParks(Parks);
reportStreets(Streets);
