
class Solution:
    def __init__(self) -> None:
        self.N = 0
        self.namedict = dict()
        # self.nameSet = set()


    def userInput(self):
        self.N = int(input())


    def declareName(self):
        for i in range(self.N):
            name = int(input())
            if ((name not in self.namedict)):
                self.namedict[name] = 1
                print(name)

                
            else:
                
                self.namedict[name] +=1
                newName = self.namedict.get(name)* name
                while ((newName in self.namedict)):
                    self.namedict[name] +=1
                    newName = self.namedict.get(name)* name
                self.namedict[newName] = 1
                print(newName)

solution = Solution()
solution.userInput()
solution.declareName()
'''
7
1
3
1
2
1
5
5



'''