function number(x, y) {
    if (x>y) {
        console.warn(`${x} is greater than ${y}`);
    } else {
        console.log(`The numbers are equal: ${x}, ${y}`);
    }
}

var x = 100;
var y = 200;

number(x, y);