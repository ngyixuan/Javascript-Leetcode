

n = ""
str = ""
def inputStr():
    global n
    global str
    n = int(input())
    str= input()

def breacketMatching(n,str):
    items = []
    if(n==1):
            print("Invalid")
            return
    for i in range(n):
            if(i>0 and len(items)>0):

                if(items[-1]=="(" and str[i]==")"):
                    items.pop()
                    continue
                    
                elif(items[-1]=="[" and str[i]=="]"):
                    items.pop()
                    continue

                elif(items[-1]=="{" and str[i]=="}"):
                    items.pop()
                    continue
                else: 
                 items.append(str[i])
            else: 
                items.append(str[i])
    if(len(items)>0):
        print("Invalid")
    else:
        print("Valid")

# n= 3
# str = "{}}"
inputStr()

breacketMatching(n,str)

    
