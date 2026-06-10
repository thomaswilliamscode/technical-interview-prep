// ==================================================
// 1. Count Vowels From Ends
// ==================================================

/*
Problem:
Count how many mirrored pairs are BOTH vowels.

Input:
"aeioua"

Pairs:
a-a  ✅
e-u  ✅
i-o  ✅

Output:
3
*/

function countVowelPairs(str) {
    // TODO
}

let str = "aeioua";

console.log(countVowelPairs(str));

// ==================================================
// 2. First Matching Pair
// ==================================================

/*
Problem:
Return the first matching pair of indexes
found from opposite ends.

Input:
"abccbx"

Comparisons:
a-x ❌
b-b ✅

Output:
[1,4]
*/

function firstMatchingPair(str) {
    // TODO
}

let str = "abccbx";

console.log(firstMatchingPair(str));

// ==================================================
// 3. Count Mismatches
// ==================================================

/*
Problem:
Count how many mirrored pairs do NOT match.

Input:
"abcdef"

Pairs:
a-f ❌
b-e ❌
c-d ❌

Output:
3
*/

function countMismatches(str) {
    // TODO
}

let str = "abcdef";

console.log(countMismatches(str));

// ==================================================
// 4. Maximum Mirrored Sum
// ==================================================

/*
Problem:
Return the largest mirrored pair sum.

Input:
[1,4,2,8]

Pairs:
1+8 = 9
4+2 = 6

Output:
9
*/

function maxMirroredSum(nums) {
    // TODO
}

let nums = [1,4,2,8];

console.log(maxMirroredSum(nums));

// ==================================================
// 5. Count Equal Mirrored Pairs
// ==================================================

/*
Problem:
Count how many mirrored pairs contain
the exact same value.

Input:
[1,2,3,2,1]

Pairs:
1-1 ✅
2-2 ✅

Output:
2
*/

function countEqualPairs(nums) {
    // TODO
}

let nums = [1,2,3,2,1];

console.log(countEqualPairs(nums));

// ==================================================
// 6. Remove Outer Digits
// ==================================================

/*
Problem:
Keep removing matching outer digits
while they match.

Input:
"122221"

Process:
1 == 1
2 == 2
2 == 2

Output:
""
*/

function removeOuterDigits(str) {
    // TODO
}

let str = "122221";

console.log(removeOuterDigits(str));

// ==================================================
// 7. Reverse Only Numbers
// ==================================================

/*
Problem:
Reverse only the digits.

Input:
"a1b2c3"

Digits:
1,2,3

Output:
"a3b2c1"
*/

function reverseOnlyNumbers(str) {
    // TODO
}

let str = "a1b2c3";

console.log(reverseOnlyNumbers(str));

// ==================================================
// 8. Find Middle Character(s)
// ==================================================

/*
Problem:
Using opposite pointers,
return the middle character(s).

Input:
"abcde"

Output:
"c"

Input:
"abcd"

Output:
"bc"
*/

function middleCharacters(str) {
    // TODO
}

let str1 = "abcde";
let str2 = "abcd";

console.log(middleCharacters(str1));
console.log(middleCharacters(str2));

// ==================================================
// 9. Compare Ends Score
// ==================================================

/*
Problem:
+1 for every matching mirrored pair.

Input:
"racecar"

Pairs:
r-r ✅
a-a ✅
c-c ✅

Output:
3
*/

function compareEndsScore(str) {
    // TODO
}

let str = "racecar";

console.log(compareEndsScore(str));

// ==================================================
// 10. Reverse Only Consonants
// ==================================================

/*
Problem:
Reverse only consonants.

Input:
"hello"

Consonants:
h,l,l

Output:
"lelho"
*/

function reverseOnlyConsonants(str) {
    // TODO
}

let str = "hello";

console.log(reverseOnlyConsonants(str));