### Basic Questions --------------
### 1.Check Even or Odd
### 2.Multiplication Table
### 3.Sum of Naturals
### 4.Sum of Squares
### 5.Swap Two Numbers

### 1. Check Even or Odd ------------
class Solution {
    isEven(n) {
        // code here
         if(n%2 === 0){
             return true;
         } else {
             return false}
    }
}

### 2. Multiplication Table ----------
const fs = require('fs');
const n = parseInt(fs.readFileSync(0, 'utf-8').trim());

// code here
// let output = ""
let output = "";

for (let i = 1; i <= 10; i++) {
    const result = n * i;
    output += result + " ";
}

console.log(output);

### 3.Sum of Naturals -----------
const fs = require("fs");
const n = Number(fs.readFileSync(0, "utf8").trim());

// code here
let output = 0
for(let i = 0 ; i<=n; i++){
  
    output = output + i
    
}
console.log(output)

### 4. Sum of Squares ----------
class Solution {
    sumOfSquares(n) {
        // code here
        let output = 0
     for(let i=1 ; i<=n; i++){
         output = output + (i*i)
     }
     return output
    }
}


### 5. Swap Two Numbers ---------
const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let a = input[0];
let b = input[1];

// code here
a = input[1]
b= input[0]

console.log(a + " " + b);