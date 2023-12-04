def metronome():
    tick = int(input())
    return round(tick/4,2)

def sumNumber():
    testCase = int(input())
    result = []
    for i in range(testCase):
        first = int("".join(input().split()))
        second = int("".join(input().split()))
        result.append(" ".join(str(first+second)))
    for i in result:
        print(i)
        
def addingNum():
    inputNum= input().split()
    a = int(inputNum[0])
    b = int(inputNum[1])
    c = int(inputNum[2])
    if((a+b)==c):
        print("correct!")
    else:
        print("wrong!")
    

def internationalDay():
    DD,MM,YYYY = map(input().split())