### 1.Array with All Palindromes
### ex--Input: arr[] = [111, 222, 333, 444, 555] 
Output: true
Explanation:
arr[0] = 111, which is a palindrome number.
arr[1] = 222, which is a palindrome number.
arr[2] = 333, which is a palindrome number.
arr[3] = 444, which is a palindrome number.
arr[4] = 555, which is a palindrome number.
As all numbers are palindrome so This will return true.

sol===
class Solution {
    isPalinArray(arr) {
        // code here
       for(let i = 0 ; i<arr.length; i++){
           let original = arr[i];
           let n= arr[i];
           let reverse = 0;
           while(n > 0){
               let digit = n%10;
               reverse = reverse *10 + digit;
               n = Math.floor(n/10);
               
           } 
           if(original !== reverse){
               return false
           } 
       } 
       return true;
    }
}

### 2.Array or List Traversal

ex==
Input: arr[] = [54, 43, 2, 1, 5]
Output: 54 43 2 1 5
Explanation: Just traverse and print the numbers.

sol==
class Solution {
    arrayTraversal(arr) {
        // code here
        for(let value of arr){
            process.stdout.write(value + " ") //isse new line nhi aati ek hi line m mil jata h sol
        }
    }
}

for return ---
let result = "";

for(let value of arr) result += value + " ";

return result;

for loop---- // isse hr bar no. newline m print hoga
for(let i = 0; i < arr.length; i++) console.log(arr[i]);


### 3.Replace all 0's with 5
ex==
Input: n = 1004
Output: 1554
Explanation: There are two zeroes in 1004 on replacing all zeroes with 5, the new number will be 1554.

sol==
class Solution {
    convertFive(n) {
        // code here
return Number(String(n).replaceAll("0", "5"));    }
}

### 4.Count Smaller in Array
ex==
Input: x = 9, arr[] = [10, 1, 2, 8, 4, 5] 
Output: 5
Explanation: The 5 elements are 1, 2, 8, 4 and 5.

sol==
class Solution {
    countOfElements(x, arr) {
        // code here
        let count = 0 ;
        for(let num of arr){
            if(num <= x){
                count++
            }
        }
        return count
    }
}


### 5.Count Odd and Even
ex==
Input: arr[] = [1, 2, 3, 4, 5]
Output: 3 2
Explanation: There are 3 odd elements (1, 3, 5) and 2 even elements (2 and 4).
Input: arr[] = [1, 1]
Output: 2 0
Explanation: There are 2 odd elements (1, 1) and no even elements.

sol==
class Solution {

    countOddEven(arr) {
        // Your code here
        let countEven = 0
        let countOdd = 0
       
        for(let i = 0; i<arr.length; i++){
            if(arr[i]%2 !== 0){
               countOdd++
            } else{
                countEven++}
        } 
        return [countOdd,countEven]
    }
}