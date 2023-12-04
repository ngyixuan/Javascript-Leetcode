import heapq
class Solution:
    def __init__(self):
        self.pq = []
        self.L = []
        self.N = 0
        self.tempCost = 0
        self.minCost = 0
        self.count=0

    def userInput(self):
        self.N = int(input())
        self.L = map(int, input().split())
    def addition(self):
        heapq.heapify(self.pq)
        for i in self.L:
            heapq.heappush(self.pq, i)
        while(self.pq):
            element = heapq.heappop(self.pq)
            self.count+=1
            self.tempCost += element
            if(self.count>=2): self.minCost+= self.tempCost

        
        print(self.minCost)
        
solution = Solution()
solution.userInput()
solution.addition()