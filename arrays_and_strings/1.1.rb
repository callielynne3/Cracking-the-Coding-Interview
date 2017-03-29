# Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

# for each character in the string
#   if any subsequent character matches it
#     fail
# succeed

# Algorithm 1
# Use array's unique method and compare size to original string size
def has_dup?(s)
  s = s.split('')
  s.uniq.size != s.size
  # .uniq returns a new array by removing duplicate values in self.
end

# Algorithm 2
# Sort characters first, then check if next character is equal to check uniqueness
def sort_check_unique(s)
  s = s.chars.sort.join
  (0...s.size).each do |i|
    return false if s[i] == s[i+1]
  end
  true
end