# Rotate Matrix: 

# Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees - can you do this in place?

def rotate_matrix(array)
  array_flipped = []
  array.transpose.each do |row|
    array_flipped << row.reverse
  end
  array_flipped
end