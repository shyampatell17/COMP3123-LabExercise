function capitalizeWords(str){
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalizeWords("my name is shyam"))
console.log(capitalizeWords("the quick brown fox"))


function max(a,b,c){
    return Math.max(Number(a),Number(b),Number(c))
}

console.log(max(101, "2000", 101))
console.log(max(100, 200, 300))
console.log(max(100, 200, 300.5))
console.log(max (1,0,1));
console.log(max (0,-10,-20));
console.log(max (1000,510,440));


function midSwap(str){
    if(str.length >= 3){
        return str.slice(-3) + str.slice(0,-3)
    }
    return str
}

console.log(midSwap("Shyam"));
console.log(midSwap("Python"));     
console.log(midSwap("JavaScript"));   
console.log(midSwap("Hi"));   

function angle_Type(angle) {
    if (angle < 90) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
    }
}

console.log(angle_Type(47));   // "Acute angle"
console.log(angle_Type(90));   // "Right angle"
console.log(angle_Type(145));  // "Obtuse angle"
console.log(angle_Type(180));  // "Straight angle"


function array_max_sum(arr, k) {
    //Finding sum of first 2 elements of the array
    let maxSum = 0;
    for (let i = 0; i < k; i++) {
        maxSum += arr[i];
    }

    //After getting the sum of first two array elements, we will start a loop from the third element

    let currentSum = maxSum;
    for (let i = k; i < arr.length; i++) {
        // Summing the next two elements by subtracting the leftmost element
        currentSum = currentSum - arr[i - k] + arr[i];
        // Update maxSum if the current sliding sum is larger
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }

    return maxSum;
}

console.log(array_max_sum([1, 2, 3, 14, 5], 2)); 
console.log(array_max_sum([2, 3, 5, 1, 6], 3));  
console.log(array_max_sum([9, 3, 5, 1, 7], 2));  
