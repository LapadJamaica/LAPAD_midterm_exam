// define sumArray function with parameter array
function sumArray(array) {
    // return the sum of the array
    // use the reduce method to sum the array
    // initialize the accumulator with 0
    // add the current value to the accumulator
    // return the accumulator
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// test sumArray function
console.log(sumArray([1, 2, 3, 4, 5]));