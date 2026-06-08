
/*
Problem:
Remove all occurrences of val in-place.

Return number of remaining elements.

Example:
nums = [3,2,2,3]
val = 3

Return:
2

Array becomes:
[2,2,...]
*/

function removeElement(nums, val) {
    // TODO:
    // Use a write pointer.
    // Copy values that are NOT equal to val.
    // Return new length.
    let write = 0; 
    for (let read = 0; read < nums.length; read++) {
        if (nums[read] !== val) {
            
        }
    }
}

// ----------------------
// Test Cases
// ----------------------

// let nums1 = [3, 2, 2, 3];
// let val1 = 3;

// console.log(removeElement(nums1, val1));
// console.log(nums1);

// let nums2 = [0,1,2,2,3,0,4,2];
// let val2 = 2;

// console.log(removeElement(nums2, val2));
// console.log(nums2);

/*
Problem:
Given a sorted array of integers,
return an array of squares sorted in ascending order.

Example:
[-4,-1,0,3,10]

Output:
[0,1,9,16,100]
*/

function sortedSquares(nums) {
    // TODO:
    // Use two pointers.
    // Compare absolute values.
    // Fill result from end to beginning.
}

// ----------------------
// Test Cases
// ----------------------

// let nums1 = [-4, -1, 0, 3, 10];
// console.log(sortedSquares(nums1));

// let nums2 = [-7, -3, 2, 3, 11];
// console.log(sortedSquares(nums2));

/*
Problem:
Given a sorted array and a target,
return the indices (1-indexed)
of the two numbers that add up to target.

Example:

numbers = [2,7,11,15]
target = 9

Output:
[1,2]
*/

function twoSum(numbers, target) {
    // TODO:
    // Use left and right pointers.
    // If sum is too small -> move left.
    // If sum is too large -> move right.
    // Return 1-indexed positions.
}

// ----------------------
// Test Cases
// ----------------------

// let numbers1 = [2, 7, 11, 15];
// let target1 = 9;

// console.log(twoSum(numbers1, target1));

// let numbers2 = [2, 3, 4];
// let target2 = 6;

// console.log(twoSum(numbers2, target2));

// let numbers3 = [-1, 0];
// let target3 = -1;

// console.log(twoSum(numbers3, target3));