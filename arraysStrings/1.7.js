// Rotate Matrix: 

// Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees - can you do this in place?

function rotateMatrix(matrix) {
  var min = 0;
  var max = matrix.length - 1;
  while (min < max ) {
    var top = [];
    for (var i = min; i < max; i++) {
      top = matrix[min][i];
      matrix[min][i] = matrix[max - i + min][min];
      matrix[max - i + min][min] = matrix[max][max - i + min];
      matrix[max][max - i + min] = matrix[i][max];
      matrix[i][max] = top;
    }
    min++;
    max--;
  }
  return matrix;
}