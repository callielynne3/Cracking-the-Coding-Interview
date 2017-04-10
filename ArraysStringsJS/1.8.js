// Zero Matrix: 

// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to O.

function checkAndSet(matrix){
  var M = matrix.length,
    N = matrix[0].length;
  var zeroSet = [];
  for (var r = 0; r < M; r++){
    for (var c = 0; c < N; c++){
      if (matrix[r][c] === "0"){
        zeroSet.push([r,c]);
      }
    }
  }
  zeroSet.forEach(function(coord){
    console.log(coord);
    setZeros(matrix, coord[0], coord[1]);
  });
  return matrix;
}

function setZeros(matrix, r, c){
  var M = matrix.length,
    N = matrix[0].length;
    len = (M > N) ? M : N;
  for( var i = 0; i < len; i++){
    if (matrix[r] && matrix[r][i]) matrix[r][i] = 0;
    if (matrix[i] && matrix[i][c]) matrix[i][c] = 0;
  }
  return matrix;
}