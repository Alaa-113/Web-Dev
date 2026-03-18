#countevens
def count_evens(nums):
    count = 0
    for num in nums:
        if num % 2 == 0:
            count += 1
    return count

#sum23
def sum13(nums):
    total = 0
    skip_next = False
    for num in nums:
        if skip_next:
            skip_next = False
            continue
        if num == 13:
            skip_next = True
            continue
        total += num
    return total


#bigdiff
def big_diff(nums):
    return max(nums) - min(nums)

#sum67
def sum67(nums):
    total = 0
    in_section = False
    for num in nums:
        if num == 6:
            in_section = True
            continue
        if in_section:
            if num == 7:
                in_section = False
            continue
        total += num
    return total



#centeredaverage
def centered_average(nums):
    total = sum(nums)
    total -= min(nums)  
    total -= max(nums)  
    return total // (len(nums) - 2)  

##has22
def has22(nums):
    for i in range(len(nums) - 1):
        if nums[i] == 2 and nums[i+1] == 2:
            return True
    return False