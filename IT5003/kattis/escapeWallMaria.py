import random
class Solution:
    def __init__(self):
        self.t = 0
        self.n = 0
        self.m = 0
        # self.grid = [['1', '0', '0', '1'], ['1', '0', '0', '1'], ['S', '0', '1', '1'], ['0', 'U', '1', '1']]
        self.grid = []
        self.dir = [(0,1),(1,0),(0,-1),(-1,0)]
        self.visited = []
        self.path = 1000
    
    def userInput(self):
        self.t, self.n, self.m = map(int, input().split())
        for _ in range(self.n):
            row = input()
            self.grid.append(list(row))
        self.visited = [[False for _ in range(self.m)] for _ in range(self.n)]

    def dfs(self, x, y, count):
        if (x == 0 or x == self.n-1 or y == 0 or y == self.m-1):
            self.path = min(self.path, count)
            return
        elif(count+1>self.t): return
        elif self.visited[x][y] or self.grid[x][y] == '1':
            return 

        self.visited[x][y] = True

        for i in range(len(self.dir)):
            dx = self.dir[i][0]
            dy = self.dir[i][1]
            nextx = x + dx
            nexty = y + dy
            
            if (count+1>self.t and 0<=nextx < self.n and 0<=nexty < self.m and 
                (self.grid[nextx][nexty] == '0' or 
                 (self.grid[nextx][nexty] == 'R' and dy == -1) or 
                 (self.grid[nextx][nexty] == 'L' and dy == 1) or 
                 (self.grid[nextx][nexty] == 'U' and dx == 1) or 
                 (self.grid[nextx][nexty] == 'D' and dx == -1))):
                    self.dfs(nextx, nexty, count + 1)
        return


            
    def solve(self):
        for i in range(self.n):
            for j in range(self.m):
                  if self.grid[i][j] == 'S':
                    self.dfs(i, j,0)
                    if(self.t<self.path):
                        print("NOT POSSIBLE")
                    else:
                        print(self.path)
                   
        
                    
                    
solution = Solution()
solution.userInput()
solution.solve()
    
    

'''
2 4 4
1111
1S01
1011
0U11

4 3 4
1D11
RRS1
1U11




'''