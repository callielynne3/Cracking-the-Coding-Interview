# String Rotation: 

# Assume you have a method isSubst ring which checks if one word is a substring of another. Given two strings, 51 and 52, write code to check if 52 is a rotation of 51 using only one call to isSubstring (e.g., "waterbottle" is a rotation of"erbottlewat").

# Algorithm 1
def is_substring?(s1, s2)
  return s1.include?(s2) ? true : false
end

def string_rotation?(s1, s2)
  if s1.length != s2.length
    return false
  else
    return is_substring?(s1 + s1, s2)
  end
end

# Algorithm 2
def string_rotation(s1, s2)
  matching = false
  if s1.length == s2.length
    count =  0
    until count == s1.length
      splitted = s1.split('')
      s1 = splitted.push(splitted.shift).join
      if s1 == s2
        matching = true
      end
      count += 1
    end
  else
    false
  end
  matching
end