
/*
=========================================
QUESTION 3
Move Zeroes
=========================================

Move all zeroes to the end.

Must modify the array in-place.

Example:
[0,1,0,3,12]

becomes

[1,3,12,0,0]
*/

function moveZeroes(nums) {

}

// TESTS
// let nums1 = [0,1,0,3,12];
// moveZeroes(nums1);
// console.log(nums1); // [1,3,12,0,0]

// let nums2 = [0,0,1];
// moveZeroes(nums2);
// console.log(nums2); // [1,0,0]

// let nums3 = [1,2,3];
// moveZeroes(nums3);
// console.log(nums3); // [1,2,3]



/*
=========================================
QUESTION 4
Remove Duplicates
=========================================

Array is sorted.

Remove duplicates in-place.

Return the count of unique values.

Example:

[1,1,2]

becomes

[1,2,_]

returns 2
*/

function removeDuplicates(nums) {

}

// TESTS
// let arr1 = [1,1,2];
// console.log(removeDuplicates(arr1)); // 2
// console.log(arr1);

// let arr2 = [0,0,1,1,1,2,2,3,3,4];
// console.log(removeDuplicates(arr2)); // 5
// console.log(arr2);



/*
=========================================
QUESTION 5
Remove Element
=========================================

Remove all occurrences of val in-place.

Return the new length.

Example:

nums = [3,2,2,3]
val = 3

returns 2

array starts with:

[2,2,...]
*/

function removeElement(nums, val) {

}

// TESTS
// let remove1 = [3,2,2,3];
// console.log(removeElement(remove1, 3)); // 2
// console.log(remove1);

// let remove2 = [0,1,2,2,3,0,4,2];
// console.log(removeElement(remove2, 2)); // 5
// console.log(remove2);



/*
=========================================
QUESTION 6
Two Sum II
=========================================

Array is sorted.

Return indices of the two numbers
that add up to target.

Example:

[2,7,11,15]
target = 9

returns [0,1]
*/

function twoSumSorted(nums, target) {

}

// TESTS
// console.log(twoSumSorted([2,7,11,15], 9));      // [0,1]
// console.log(twoSumSorted([2,3,4], 6));          // [0,2]
// console.log(twoSumSorted([-1,0], -1));          // [0,1]



/*
=========================================
QUESTION 7
Squares of Sorted Array
=========================================

Return a new sorted array of squares.

Example:

[-4,-1,0,3,10]

returns

[0,1,9,16,100]
*/

function sortedSquares(nums) {

}

// TESTS
// console.log(sortedSquares([-4,-1,0,3,10]));
// // [0,1,9,16,100]

// console.log(sortedSquares([-7,-3,2,3,11]));
// // [4,9,9,49,121]



/*
=========================================
QUESTION 8
Container With Most Water
=========================================

Return maximum area.

Example:

[1,8,6,2,5,4,8,3,7]

returns 49

(Harder interview question)
*/

function maxArea(height) {

}

// TESTS
// console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
// console.log(maxArea([1,1]));               // 1



/*
=========================================
BONUS CHALLENGE
=========================================

3Sum

Return all unique triplets
that sum to zero.

Example:

[-1,0,1,2,-1,-4]

returns

[
  [-1,-1,2],
  [-1,0,1]
]

Skip if you're still learning
the main two-pointer patterns.
*/

function threeSum(nums) {

}

// TESTS
// console.log(threeSum([-1,0,1,2,-1,-4]));