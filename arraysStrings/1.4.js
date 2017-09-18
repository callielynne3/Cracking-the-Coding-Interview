// Palindrome Permutation: 

// Given a string, write a function to check if it is a permutation of a palin-drome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

// EXAMPLE
// Input: Tact Coa
// Output: True (permutations: "taco cat". "atco cta". etc.)

var palindromePermutation = function(str) {
    var hash = {};
    for(var i = 0; i < str.length; i++){
      var ele = str[i];
      if(!hash[ele]){
        hash[ele] = 1;
      } else {
        hash[ele]++;
      } 
    }
    var count = 0;
    for(var key in hash){
      if(hash[key] % 2 !== 0){
        count++;
      }
      if(count > 1){
        return false
       }
    }
    return true
};