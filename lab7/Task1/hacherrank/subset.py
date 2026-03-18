T = int(input())

for _ in range(T):
    n = int(input())
    a = set(map(int, input().split()))
    m = int(input())
    b = set(map(int, input().split()))
    
    print(a.issubset(b))