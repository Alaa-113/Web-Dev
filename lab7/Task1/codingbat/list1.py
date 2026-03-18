#first_last6
def first_last6(nums):
    return nums[0] == 6 or nums[-1] == 6

#common_end
def common_end(a, b):
    return a[0] == b[0] or a[-1] == b[-1]


#reversethree
def reverse3(nums):
    return nums[::-1]

#middleway
def middle_way(a, b):
    return [a[1], b[1]]

#same_firstast
def same_first_last(nums):
    return len(nums) >= 1 and nums[0] == nums[-1]

#sum3
def sum3(nums):
    return sum(nums)

#maxend3
def max_end3(nums):
    max_val = max(nums[0], nums[2])
    return [max_val, max_val, max_val]

#makeneds
def make_ends(nums):
    return [nums[0], nums[-1]]

#makepi
def make_pi():
    return [3, 1, 4]

#rotateleft3
def rotate_left3(nums):
    return [nums[1], nums[2], nums[0]]

#sum2
def sum2(nums):
    return sum(nums[:2])

#has23
def has23(nums):
    return 2 in nums or 3 in nums

