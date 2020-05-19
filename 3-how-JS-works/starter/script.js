///////////////////////////////////////
// Lecture: Hoisting

// Functions
calculateAge(1993);

function calculateAge(year) {
    console.log(2020 - year);
}

var retirement = function (year) {
    console.log(65 - (2020 - year));
};

retirement(1993);

// Variables

//undefined
console.log(age);

//global set
var age = 27;
console.log(age);

function foo() {
    //local set variable
    var age = 65;
    console.log(age);
}

foo();
console.log(age);

///////////////////////////////////////
// Lecture: Scoping

// First scoping example

var a = "Hello!";
first();

function first() {
    var b = "Hi!";
    second();

    function second() {
        var c = "Hey!";
        console.log(a + b + c);
        third();
    }
}

// Example to show the differece between execution stack and scope chain

var a = "Hello!";
first();

function first() {
    var b = "Hi!";
    second();

    function second() {
        var c = "Hey!";
        third();
    }
}

function third() {
    var d = "John";
    //console.log(a + b + c + d);
    console.log(a + d);
}

///////////////////////////////////////
// Lecture: The this keyword

calculateAge(1993);

function calculateAge(year) {
    console.log(2020 - year);
    //Prints the window object
    console.log(this);
}

var john = {
    name: "John",
    yearOfBirth: 1993,
    calculateAge: function () {
        //Prints the John Object
        console.log(this);
        console.log(2020 - this.yearOfBirth);

        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    },
};

john.calculateAge();
