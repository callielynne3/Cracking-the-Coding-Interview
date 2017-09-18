// One Away: 

// There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

// EXAMPLE:
// pale, pIe -> true
// pales. pale -> true
// pale. bale -> true
// pale. bake -> false

function oneAway(a,b){
  if(a.length < 1){
    return b.length;
  }
  if(b.length < 1){
    return a.length;
  }
  if(a[0] === b[0]){
    return oneAway(a.substring(1), b.substring(1));
  } else {
    var deleteCount = oneAway(a.substring(1), b);
    var insertCount = oneAway(b[0] + a, b);
    var replaceCount = oneAway(b[0] + a.substring(1), b);
    return Math.min(Math.min(deleteCount, insertCount), replaceCount) + 1;
  }
}