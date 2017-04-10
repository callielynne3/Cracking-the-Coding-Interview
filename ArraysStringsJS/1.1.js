// Is Unique:

// Implement an algorithm to determine if a string has all unique characters.

function isUnique(str){
  var element = {};
  for (var i = 0; i < str.length; i++ ){
    if (element[str[i]]){
      return false;
    }
    element[str[i]] = true;
  }
  return true;
}
