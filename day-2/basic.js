1. Largest in Array

class Solution {
    
    largest(arr) {
        // code here
      let max = arr[0]
      for(let i=0; i<arr.length; i++){
          if(max < arr[i]){
              max = arr[i]
          }
      } return max
    }
}



2. Min and Max in Array
class Solution {
    getMinMax(arr) {
        // code here
        let max = arr[0];
        let min = arr[0];
        for(let i = 1 ; i<arr.length; i++){
            if(max < arr[i]){
                max = arr[i]
            }
            if(min > arr[i]){
                min = arr[i]
            }
        } return [min,max]
    }
}


3. Rotate Array by One
class Solution {
    rotate(arr) {
        // code here
        let last = arr[arr.length - 1]
        for(let i=arr.length-1; i>0; i--){
       arr[i] = arr[i-1]
        }
        arr[0] = last 
        return arr
    } 
}

4.  Sum of Array
class Solution {
    arraySum(arr) {
        // code here
        let sum = 0 
        for(let i = 0 ; i<arr.length; i++){
            sum = sum+arr[i]
            
        }
        return sum
    }
}



5. Alternates in Array
class Solution {
    getAlternates(arr) {
        // code here
        let result = []
        for(let i=0; i<arr.length; i+=2){
            result.push(arr[i])
        }
    return result
    }
}