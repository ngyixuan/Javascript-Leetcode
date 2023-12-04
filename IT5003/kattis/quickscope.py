class Solution:
    def __init__(self):
        self.variableList = []


    def userInput(self):
        self.N = int(input())

    
    def constructDict(self):
        variableDict = {}
        self.variableList.append(variableDict)  # add initial empty dictionary
        currentDictIndex = 0  # keep track of current dictionary index
        
        for i in range(self.N):
            inputArr = input().split()
            instruction = inputArr[0]
            
            if(instruction=="DECLARE"):
                variable,type = inputArr[1],inputArr[2]
                 
                if(variable in variableDict):
                    print("MULTIPLE DECLARATION")
                    break
                else:
                    variableDict[variable]= type
            elif(instruction == "TYPEOF"):
                variable = inputArr[1]

                if(variable in variableDict):
                    print(variableDict[variable])
                
                elif(variable not in variableDict):
                    variableDictIndex = currentDictIndex
                    while(variableDictIndex>=0):
                        if(variable in self.variableList[variableDictIndex]):
                            print(self.variableList[variableDictIndex][variable])
                            break
                        else:
                            variableDictIndex -= 1
                    if(variableDictIndex<0):
                        print("UNDECLARED")
            
            elif(instruction=="{"):
                variableDict = {}  # create new dictionary
                self.variableList.append(variableDict)  # add to list
                currentDictIndex += 1  # update current dictionary index

            elif(instruction=="}"):
                self.variableList.pop()  # remove current dictionary from list
                currentDictIndex -= 1  # update current dictionary index
                variableDict = self.variableList[currentDictIndex]  # set current dictionary to previous dictionary

            # print(self.variableList)
            



solution = Solution()
solution.userInput()
solution.constructDict()


'''
5
DECLARE a int
DECLARE a float
TYPEOF a
DECLARE a double
TYPEOF a

'''

'''
16
DECLARE apple int
DECLARE banana double
{
DECLARE apple float
DECLARE orange char
TYPEOF apple
TYPEOF banana
TYPEOF orange
}
TYPEOF apple
TYPEOF banana
TYPEOF orange
DECLARE orange char
TYPEOF orange
DECLARE banana char
TYPEOF banana


'''
