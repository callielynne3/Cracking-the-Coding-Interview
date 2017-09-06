// binary search
function binarySearch(arr, num){
  var left = 0, 
      right = arr.length - 1, 
      mid = (Math.floor(left + right) / 2);
  if(arr[mid] === num){
    return -1;
  }
  while(left < right){
    if(num < arr[mid]){  
      right = mid - 1; 
    } else if(num > arr[mid]){
      left = mid + 1; 
    }
    mid = Math.floor((left + right) / 2);
  }
  if(arr[mid] === num){
    return mid;
  } else {
    return -1; 
  }
}  