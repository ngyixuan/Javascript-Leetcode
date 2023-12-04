# L = a+2H
# W =  b+2H

# H = L-a / 2
# H = W-a /2
# volume = a * b * H
# volume = (L-2H)(W-2H)H
# volume = LWH - 2LH^2 - 2WH^2 +4H^3

# V = 4*H^3 - 2H^2(L+W) + LW

from math import *

def linearEquation(a,b,c):
    r = sqrt(b**2-4*a*c)
    ans1 = (-b+r)/(2*a)
    ans2 = (-b-r)/(2*a)

    return ans1, ans2


def cuboicEquation(H,L,W):
    return 4*(H**3) - 2*(H**2)*(L+W) + L*W*H

def calculateLargestVolume(L,W):
    volume = 0
    ans1, ans2 = linearEquation(12,(-4*(L+W)),L*W)
    if((ans1*L*W)>0 and ans1< min(L,W)/2):
        volume = cuboicEquation(ans1, L, W)
    if((ans2*L*W)>0 and ans2< min(L,W)/2):
        volume = round(cuboicEquation(ans2, L, W),11)
        


    print(volume)

def inputTestCase():
    numCase = int(input())
    for i in range (numCase):
        X,Y = input().split()
        calculateLargestVolume(int(X),int(Y))

inputTestCase()
# calculateLargestVolume(2,4)





