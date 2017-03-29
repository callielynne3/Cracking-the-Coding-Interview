# Zero Matrix: 

#Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to O.

def zero_matrix(matrix)
  zero = nil
  matrix.length.times do |row|
    if matrix[row].include?(0)
      matrix[row].each_with_index do |zeros, idx|
        if zeros == 0
          zero = idx
        else
          matrix[row][idx] = 0
        end
      end
    end
  end
  matrix = matrix.transpose
  matrix.length.times do |row|
    if zero == row
      matrix[row].each_with_index do |zeros, idx|
        matrix[row][idx] = 0
      end
    end
  end
  matrix = matrix.transpose
