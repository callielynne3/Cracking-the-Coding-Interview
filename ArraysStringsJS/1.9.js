// String Rotation: 

// Assume you have a method isSubst ring which checks if one word is a substring of another. Given two strings, 51 and 52, write code to check if 52 is a rotation of 51 using only one call to isSubstring (e.g., "waterbottle" is a rotation of"erbottlewat").

function isRotation(str1, str2) {
  var newStr = str1 + str1;
  if(str1.length != str2.length || str1.length <= 1 ) return false;
  else return newStr.includes(str2);
}