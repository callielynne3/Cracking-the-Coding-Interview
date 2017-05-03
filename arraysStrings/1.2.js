// Check Permutation: 

// Given two strings, write a method to decide if one is a permutation of the other.

function isPermutation(a, b) {
    if (a.length !== b.length) {
      return false;
    }
    return a.split("").sort().join() === b.split("").sort().join();
}