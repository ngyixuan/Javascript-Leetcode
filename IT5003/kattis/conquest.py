
import heapq
class Solution:
    def __init__(self):
        self.numberOfIslands = 0
        self.numberOfBridges = 0
        self.bridgesDict = dict()
        self.armySizeArr = []
        self.connectedIslandsHeap = []
        self.visitedIslands = set()
        self.insideHeap = set()
        self.spanningNotionArmySize = 0
    def userInput(self):
        numberOfIslands, numberOfBridges = map(int,input().split())
        self.numberOfIslands = numberOfIslands
        self.numberOfBridges = numberOfBridges
        bridges =[list(map(int, input().split())) for _ in range(self.numberOfBridges)]
        self.armySizeArr = [int(input()) for _ in range(self.numberOfIslands)]
        for i in bridges:
            u,v = i
            if u in self.bridgesDict : self.bridgesDict[u].append(v) 
            else: self.bridgesDict[u] = [v] 
            if v in self.bridgesDict: self.bridgesDict[v].append(u) 
            else: self.bridgesDict[v] = [u]
        

        self.visitedIslands.add(1)
        self.spanningNotionArmySize = self.armySizeArr[0]
        # print(self.bridgesDict)


    def solve(self):
        for connectedIsland in self.bridgesDict[1]:
            heapq.heappush(self.connectedIslandsHeap,(self.armySizeArr[connectedIsland-1],connectedIsland))
            self.insideHeap.add(connectedIsland)

        while(self.connectedIslandsHeap): 
            armySize, island = heapq.heappop(self.connectedIslandsHeap)
            # print("armySize, island",armySize, island  )
            self.insideHeap.remove(island)
            if(island not in self.visitedIslands):
                if(self.spanningNotionArmySize>armySize):
                    self.spanningNotionArmySize+=armySize
                    self.visitedIslands.add(island)
                    for connectedIsland in self.bridgesDict[island]:
                        if(connectedIsland not in self.visitedIslands and connectedIsland not in self.insideHeap):
                            heapq.heappush(self.connectedIslandsHeap,(self.armySizeArr[connectedIsland-1],connectedIsland))
                            self.insideHeap.add(connectedIsland)
                            # print("connectedIslandsHeap",self.connectedIslandsHeap)
               

                else:
                    break
                    
                    # heapq.heappush(self.connectedIslandsHeap,(armySize, island))
                    # self.insideHeap.add(island)
            
        print(self.spanningNotionArmySize)
        

        
solution = Solution()
solution.userInput()
solution.solve()
'''
6 5
1 4
3 4
2 4
6 3
5 4
2
4
1
0
10
2

6 5
3 4
3 1
2 3
6 1
5 3
2
3
0
1
3
3

5 4
3 4
3 5
3 2
1 2
2
1 
3 
4 
5

'''