1. Array Insert at Index

ex=======
Input: arr[] = [1, 2, 3, 4, 5], index = 5, val = 90
Output: 1 2 3 4 5 90

Explanation: 90 is inserted at index 5(0-based indexing). After inserting, array elements are like [1, 2, 3, 4, 5, 90].


Input: arr[] = [1, 2, 3, 4, 5], index = 2, val = 90
Output: [1, 2, 90, 3, 4, 5]

Explanation: 90 is inserted at index 2(0-based indexing). After inserting, array elements are like [1, 2, 90, 3, 4, 5].

sol==
1st approch -----
class Solution {
    insertAtIndex(arr, index, val) {
        // code here
     arr.splice(index,0,val)
         return arr;
     
    }
}

2nd approch----
class Solution {
    insertAtIndex(arr, index, val) {

        for(let i = arr.length; i > index; i--) {
            arr[i] = arr[i - 1];
        }

        arr[index] = val;

        return arr;
    }
}
=========================

2. Most Frequent of Two
ex==
Input: arr[] = [1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5], x = 4, y = 5
Output: 4
Explanation: frequency of 4 is 4.frequency of 5 is 1.Since 4>1 so return 4
Input: arr[] = [1, 2, 3, 4, 5, 6, 7, 8], x = 1, y = 7
Output: 1
Explanation: frequency of 1 is 1.frequency of 7 is 1.Since 1 < 7, return 1.

sol====
1st approach---
class Solution {
    moreFrequent(arr, x, y) {
        let freqOfx = 0;
        let freqOfy = 0;

        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === x) {
                freqOfx++;
            }
            else if(arr[i] === y) {
                freqOfy++;
            }
        }

        if(freqOfx > freqOfy) {
            return x;
        } 
        else if(freqOfy > freqOfx) {
            return y;
        } 
        else {
            return Math.min(x, y);
        }
    }
}
========================================================
3.Array Leaders
ex==
Input: arr = [16, 17, 4, 3, 5, 2]
Output: [17, 5, 2]
Explanation: Note that there is nothing greater on the right side of 17, 5 and, 2.
Input: arr = [10, 4, 2, 4, 1]
Output: [10, 4, 4, 1]
Explanation: Note that both of the 4s are in output, as to be a leader an equal element is also allowed on the right. side

sol==
class Solution {
    leaders(arr) {
        // code here
        let result = [];
        let maxRight = arr[arr.length-1];
        result.push(maxRight);
        for(let i=arr.length-2; i>=0; i--){
            if (arr[i] >= maxRight){
                result.push(arr[i])
                maxRight = arr[i]
            }
           
        } return result.reverse()
    }
}
================================================
4.Rotate Array (medium)
 ex==
Input: arr[] = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], d = 3
Output: [8, 10, 12, 14, 16, 18, 20, 2, 4, 6]
Explanation: when rotated by 3 elements, it becomes [8, 10, 12, 14, 16, 18, 20, 2, 4, 6].
Input: arr[] = [7, 3, 9, 1], d = 9
Output: [3, 9, 1, 7]
Explanation: when we rotate 9 times, we'll get [3, 9, 1, 7] as resultant array.


sol==

class Solution {
    rotateArr(arr, d) {
        // code here
        let n= arr.length;
        d=d%n;
        for(let j=0; j<d; j++){
            let first = arr[0];
            for(let i=0; i<n-1; i++){
                arr[i]= arr[i+1]
            } arr[n-1] = first
        }
    }
}

2nd ===
class Solution {
    rotateArr(arr, d) {
        let n = arr.length;

        d = d % n;

        let temp = [];

        // first d elements
        for(let i = 0; i < d; i++) {
            temp.push(arr[i]);
        }

        // remaining elements ko left shift
        for(let i = d; i < n; i++) {
            arr[i - d] = arr[i];
        }

        // temp ke elements end mein
        for(let i = 0; i < d; i++) {
            arr[n - d + i] = temp[i];
        }
    }
}
===========================================================
Q5. 


sol==
1st appr---time janda lg rha nested loop ki bjh s 
class Solution {
    duplicates(arr) {
        let result = [];

        for(let i = 0; i < arr.length; i++) {
            for(let j = i + 1; j < arr.length; j++) {
                if(arr[i] === arr[j]) {
                    result.push(arr[i]);
                    break;
                }
            }
        }

        return result;
    }
}

2nd appr--- using set 
class Solution {
    findDuplicates(arr) {
        let seen = new Set();
        let result = [];

        for(let num of arr) {
            if(seen.has(num)) {
                result.push(num);
            } else {
                seen.add(num);
            }
        }

        return result;
    }
}


===================================================
Q6. Move All Zeroes to End
ex==Input: arr[] = [1, 2, 0, 4, 3, 0, 5, 0]
Output: [1, 2, 4, 3, 5, 0, 0, 0]
Explanation: The three zeros are moved to the end while the order of the non-zero elements remains unchanged.

sol==class Solution {
    pushZerosToEnd(arr) {
        let index = 0;

        for(let i = 0; i < arr.length; i++){
            if(arr[i] !== 0){
                arr[index] = arr[i];
                index++;
            }
        }

        for(let i = index; i < arr.length; i++){
            arr[i] = 0;
        }
    }
}
========================================================
Q7.Reverse Array
ex==Note: Modify the array in place.

Examples:

Input: arr = [1, 4, 3, 2, 6, 5]
Output: [5, 6, 2, 3, 4, 1]
Explanation: The elements of the array are [1, 4, 3, 2, 6, 5]. After reversing the array, the first element goes to the last position, the second element goes to the second last position and so on. Hence, the answer is [5, 6, 2, 3, 4, 1].

sol==
class Solution {
    reverseArray(arr) {
        // code here
       let start = 0;
       let end = arr.length-1;
       while(start < end){
           let temp = arr[start];
           arr[start] = arr[end];
           arr[end] = temp;
           start++;
           end--;
       }
       return arr;
    }
}


