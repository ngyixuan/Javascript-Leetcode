import heapq
class Solution:
    def __init__(self):
        self.INF = 1e9
        self.n = 0
        self.k = 0
        self.uniquesAppear = []
        self.uniquesPos=[]
        self.uniquesCount = 0
    def userInput(self):
        self.n,  self.k = map(int,(input().split()))
        self.uniquesAppear = [False for _ in range(self.k + 1)]
        self.uniquesPos = [[] for _ in range(self.k + 1)]
        for j in range(self.n):
            newRow = list(map(int,(input().split()))) 
            for i,value in enumerate(newRow):
                self.uniquesPos[value].append((i,j))
                if not self.uniquesAppear[value]:
                    self.uniquesAppear[value] = True 
                    self.uniquesCount+=1

        # print(self.uniquesAppear)
        # print(self.uniquesPos)

    def solve(self):
        if(not self.uniquesCount==self.k): 
            print(-1)
            return -1
        elif self.k==1:
            print(0) 
            return
        pq = []
        dist = [[self.INF for _ in range(self.n)] for _ in range(self.n)]

        for x1,y1 in self.uniquesPos[self.k]:
            for x2,y2 in self.uniquesPos[self.k-1]:
                cost = abs(x1-x2) + abs(y1-y2)
                # print(x1,x2,y1,y2)
                if dist[x2][y2] > cost:
                    heapq.heappush(pq, (cost,self.k-1,x2,y2))
                    dist[x2][y2] = cost
       

        while pq:
            cost, k, curr_i, curr_j = heapq.heappop(pq)
            if k == 1:
                print(cost)
                return

            for x, y in self.uniquesPos[k - 1]:
                nextStep = cost + abs(x - curr_i) + abs(y - curr_j)
                if( nextStep >= dist[x][y] ):continue
                dist[x][y] = nextStep
                heapq.heappush(pq, (nextStep, k - 1, x, y))
                    

        print(-1)






solution = Solution()
solution.userInput()
solution.solve()