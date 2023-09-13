// while loop and do while loop

let num1 = 0
while ( num1 <= 8){
    console.log(num1)
    num1 += 1
}

// using while loop to creat a multiplication table

let i = 1;
let i2 = 2;

while (i <= 12) {
    // let j = 3;

    // while (j <= 8) {
        // console.log(`${i} x ${j} = ${i * j}`);
        // j++;``
    // }
    console.log(`${i} x ${i2} = ${i * i2}`);
    i++;
}

let a = 1 

do {
    console.log(`this is iteration ${a}`);

    a++;
} while ( a <= 6 )

let f = 2
let f2 = 5

do {

    console.log(`${f} x ${f2} = ${f * f2}`);

    f++
} while ( f <= 8 )

let m = 0

do{
    let m2 = 1;  
        while ( m2 <= 5){
            console.log(`${m} x ${m2} = ${m * m2}`);
            m2++
        } 
    m++
}       while (m <= 6)
