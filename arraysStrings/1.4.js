// Palindrome Permutation: 

// Given a string, write a function to check if it is a permutation of a palin-drome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

// EXAMPLE
// Input: Tact Coa
// Output: True (permutations: "taco cat". "atco cta". etc.)

// function palindromePermutation(str){
//   var dict = {};
//   for(var i = 0; i < str.length; i++){
//     var char = str[i];
//     if(dict[char]){
//       dict[char] += 1;
//     }else {
//       dict[char] = 1;
//     }
//   }
//   str.keys(dict).forEach(function(keys) {
//     var count = 0;
//     var value = dict[keys];
//     if(value % 2 === 1){
//       count++;
//     }else {
      
//     }
//   })
// }