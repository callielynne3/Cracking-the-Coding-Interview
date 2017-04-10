// URLify: 

// Write a method to replace all spaces in a string with '%20: You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string. (Note: If implementing in Java, please use a character array so that you can perform this operation in place.)

// EXAMPLE:
// Input: "Mr John Smith "J 13
// Output: "Mr%20J ohn%20Smith"

function lastLetterIndex(str) {
  for ( var i = str.length-1; i >= 0 ; i--) {
    if ( str[i] != " ") {
      return i;
    }
  }
  return 0;
}

function replaceSp(str) {
  var end = str.length -1;
  var i = lastLetterIndex(str);
  str = str.split("");
  while ( i >= 0 ) {
    if (str[i] === " ") {
      str[end] = "0";
      str[end-1] = "2";
      str[end-2] = "%";
      end = end - 3;
      i--;
    }
    else {
      str[end] = str[i];
      end--;
      i--;
    }
  }
  return str.join("");
}