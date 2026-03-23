#stringtimes
def string_times(s, n):
    return s * n

#stringsplosion
def string_splosion(s):
    result = ""
    for i in range(1, len(s) + 1):
        result += s[:i]
    return result

#arrayfront
def array_front9(nums):
    end = min(4, len(nums))
    for i in range(end):
        if nums[i] == 9:
            return True
    return False


#fronttimes
def front_times(s, n):
    front = s[:3] 
    return front * n

#last2
def last2(s):
    if len(s) < 2:
        return 0
    
    last2_sub = s[-2:] 
    count = 0
    
    for i in range(len(s) - 2):
        if s[i:i+2] == last2_sub:
            count += 1
    return count

#array123
def array123(nums):
    for i in range(len(nums) - 2):
        if nums[i] == 1 and nums[i+1] == 2 and nums[i+2] == 3:
            return True
    return False

#stringbits

def string_bits(s):
    return s[::2]

#array_count9
def array_count9(nums):
    count = 0
    for num in nums:
        if num == 9:
            count += 1
    return count

#stringmatch
def string_match(a, b):
    count = 0
    end = min(len(a), len(b)) - 1
    for i in range(end):
        if a[i:i+2] == b[i:i+2]:
            count += 1
    return count

