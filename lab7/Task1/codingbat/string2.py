#doublechar
def double_char(s):
    result = ""
    for char in s:
        result += char * 2
    return result

#countcode
def count_code(s):
    count = 0
    for i in range(len(s) - 3):
        if s[i:i+2] == "co" and s[i+3] == "e":
            count += 1
    return count


#counthi
def count_hi(s):
    count = 0
    for i in range(len(s) - 1):
        if s[i:i+2] == "hi":
            count += 1
    return count

#endother
def end_other(a, b):
    a_lower = a.lower()
    b_lower = b.lower()
    return a_lower.endswith(b_lower) or b_lower.endswith(a_lower)


#catdog
def cat_dog(s):
    return s.count("cat") == s.count("dog")

#xyz

def xyz_there(s):
    i = 0
    while i < len(s) - 2:
        if s[i:i+3] == "xyz":
            if i == 0 or s[i-1] != ".":
                return True
        i += 1
    return False
