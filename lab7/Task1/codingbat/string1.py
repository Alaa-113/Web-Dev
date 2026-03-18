#helloname
def hello_name(name):
    return "Hello " + name + "!"

#makeoutword
def make_out_word(out, word):
    return out[:2] + word + out[2:]

#firsthalf
def first_half(s):
    return s[:len(s)//2]

#nonstart
def non_start(a, b):
    return a[1:] + b[1:]

#makeabba
def make_abba(a, b):
    return a + b + b + a

#extraend
def extra_end(s):
    last2 = s[-2:] 
    return last2 * 3


#withoutend
def without_end(s):
    return s[1:-1]

#left2
def left2(s):
    return s[2:] + s[:2]

#maketags
def make_tags(tag, word):
    return f"<{tag}>{word}</{tag}>"

#firsttwo
def first_two(s):
    return s[:2]

#combostring
def combo_string(a, b):
    if len(a) < len(b):
        return a + b + a
    else:
        return b + a + b