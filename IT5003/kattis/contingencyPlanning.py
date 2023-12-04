from math import *

n= int(input())
total = 0
if n>11:
     print("JUST RUN!!")
else:
    for i in range(1,n+1):
        fact = factorial(n) /factorial(n-i)
        total+= fact
    print(int(total))
