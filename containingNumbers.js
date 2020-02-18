let listOfNumbers = [8,11, 4, 6, 16, 5, 7,9];
let max=listOfNumbers[0];

for(let i=1; i<=listOfNumbers.length; i++ ) {
 if (max < listOfNumbers[i]) {
 max=listOfNumbers[i];

}

}

console.log(max);
