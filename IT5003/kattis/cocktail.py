




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




        


