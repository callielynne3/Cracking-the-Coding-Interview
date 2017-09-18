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

// OR 

function isUnique(str){
  var hash = {};
  for (var i = 0; i < str.length; i++ ){
    var ele = str[i];
    if(!hash[ele]){
     hash[ele] = 1;
   } else {
     hash[ele]++;
    }
  }
  for(var key in hash){
    if(hash[key] > 1){
      return false;
    }
  }
  return true;
}
