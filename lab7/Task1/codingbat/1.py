#sleep_in
def sleep_in(weekday, vacation):
    return not weekday or vacation

#diff21
def diff21(n):
    if n > 21:
        return 2 * (n - 21)
    else:
        return 21 - n
    
#nearhundred
def near_hundred(n):
    return abs(n - 100) <= 10 or abs(n - 200) <= 10

#missingchar
def missing_char(s, n):
    return s[:n] + s[n+1:]


#monkey
def monkey_trouble(a_smile, b_smile):
    return a_smile == b_smile

#parrot
def parrot_trouble(talking, hour):
    return talking and (hour < 7 or hour > 20)

#posneg
def pos_neg(a, b, negative):
    if negative:
        return a < 0 and b < 0
    else:
        return (a < 0 and b > 0) or (a > 0 and b < 0)
    
#frontback
def front_back(s):
    if len(s) <= 1:
        return s
    return s[-1] + s[1:-1] + s[0]

#sumdouble
def sum_double(a, b):
    if a == b:
        return 2 * (a + b)
    return a + b

#makes10
def makes10(a, b):
    return a == 10 or b == 10 or (a + b) == 10

#notstring
def not_string(s):
    if s.startswith("not"):
        return s
    return "not " + s

#Fronthree
def front3(s):
    front = s[:3]  
    return front * 3

    

