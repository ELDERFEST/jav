let addition = 30
addition /= 3

console.log(addition)


// arithemetic operators
let num1 = 30
let num2 = 23
let num3 = 40
let sum = num1 + num2 + num3
console.log(sum)

let year1 = 1979
let year2 = 2023
let age = year2 - year1
console.log(`1 am ${age} years old`)
console.log(year1 < year2)
console.log(num1 == age)

// assignment number 1

let base = 10
let height = 20
let area = base * height / 2
console.log(area)

// assignment number 2

let hour2 = 60
let seconds = hour2 * 60
console.log(seconds)

// assignment 3

let lcm20 = 2 * 2 * 5
let lcm10 = 2 * 5
let lcm20_lcm10 = 2 * 5
console.log(lcm20_lcm10)

// logical operators

let head1 = 10
let head2 = 10
let head3 = 3
console.log(head1 >= head2 && head3 < head1 && head2 > head3)
console.log(head1 > head2 || head3 > head1 || head1 > head3)
console.log(head1 > head2 && head3 > head1 || head1 > head3)
console.log(head1 > head2 || head3 > head1 && head1 > head3)
console.log(!head2 > head1)


// conditional

if (head1 >= head2 && head3 < head1 && head2 > head3) {
    console.log(" it is working")
}


if (head1 < head2) {
    console.log("working too")
} else if (head2 > head3) {
    console.log("its greater")
} else {
    console.log("not working")
}

// class work

let numbers = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
let evenNumbers = (2, 4, 6, 8, 10)

if (numbers >= evenNumbers) {
    console.log("its true")
} else {
    console.log("part of numbers")
}

if (evenNumbers < 5) {
    console.log("true")
} else if (evenNumbers = 5) {
    console.log("its great")
}

if (numbers < evenNumbers && evenNumbers < 5) {
    console.log("even numbers")
} else if (evenNumbers = 6) {
    console.log("true")
} else if (evenNumbers < numbers) {
    console.log("job done")
}