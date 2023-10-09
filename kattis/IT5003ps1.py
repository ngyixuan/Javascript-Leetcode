


# from math import *

# n= int(input())
# total = 0
# if n>11:
#      print("JUST RUN!!")
# else:
#     for i in range(1,n+1):
#         fact = factorial(n) /factorial(n-i)
#         total+= fact
#     print(int(total))


totalPotions, timeConsume = input().split()
timeEffect = 0
for i in range(int(totalPotions)):
    duration = int(input())
    if(duration>timeEffect):
        timeEffect=duration
        
if(int(totalPotions)*int(timeConsume) <timeEffect+int(timeConsume)):
    print("YES")
else:
    print("NO")




        


