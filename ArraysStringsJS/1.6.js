// String Compression: 

// Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).

function stringCompression(str){
  var newStr = "";
  var count = 1;
  var char = str[0];
  var i = 1;
  while (i < str.length){
    if (str[i] == char){
      count++;
      i++;
    }
    else{
      newStr += char + count;
      char = str[i];
      count = 0;
    }
  }
  newStr += char + count;
  return newStr.length < str.length ? newStr : str;
}

// function stringCompression(str){
//   count = 0;
//   compressed = [];
//   for(var i = 0; i < str.length; i++){
//     var char = str[i];
//     if(char != char + 1){
//       compressed.push(char.concat(count))
//     } else {
//       count = 0;
//       return compressed;
//   }
//   return compressed.length < str ? compressed : str;
// }