# One Away: 

# There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

# EXAMPLE:
# pale, pIe -> true
# pales. pale -> true
# pale. bale -> true
# pale. bake -> false

def one_away(init, final)
  letter_diff = Hash.new(0)

  if (init.length - final.length).abs > 1
    return false
  else
    init.length.times { |i| letter_diff[init[i]] += 1 }
    final.length.times { |i| letter_diff[init[i]] -= 1 }
    letter_diff.keys.each do |letter|
      letter_diff.delete(letter) if letter_diff[letter] == 0
    end
    return false if letter_diff.length > 1
  end

  return true
end