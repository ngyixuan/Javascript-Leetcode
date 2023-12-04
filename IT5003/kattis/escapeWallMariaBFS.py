from collections import deque
class Solution:
    def __init__(self):
        self.t = 0
        self.n = 0
        self.m = 0
        self.grid = []
        self.visited = []
    
    def userInput(self):
        self.t, self.n, self.m = map(int, input().split())
        for _ in range(self.n):
            row = input()
            self.grid.append(list(row))
        self.visited = [[-1] * self.m for _ in range(self.n)]

    def validNode(self, grid, x, y):
        if 0 <= x < self.m and 0 <= y < self.n:
            return grid[y][x]
        else:
            return None
    def bfs(self, x,y):
        queue = deque()
        queue.append((x, y, -1, "S"))
        while queue:
            x, y, count, direction = queue.popleft()
            node = self.validNode(self.grid, x, y)
            distance = self.validNode(self.visited, x, y)
            if node is None:
                return count
            elif not ((node == "0" or node == direction) and (distance == -1 or count + 1 < distance)):
                continue

            nextDistance = count+1
            
            if 0 <= x < self.m and 0 <= y < self.n:
                self.grid[y][x] = nextDistance
          
            queue.append((x+ 1 , y, nextDistance, "L"))
            queue.append((x- 1, y , nextDistance, "R"))
            queue.append((x, y + 1, nextDistance, "U"))
            queue.append((x, y - 1, nextDistance, "D"))

        return None



            
    def solve(self):
        for i in range(self.n):
            for j in range(self.m):
                  if self.grid[i][j] == 'S':
                 
                    totalEscapeTime = self.bfs(j,i)
                   
                    if(totalEscapeTime is None or self.t<totalEscapeTime):
                        print("NOT POSSIBLE")
                    else:
                        print(totalEscapeTime)
                   
        
                    
                    
solution = Solution()
solution.userInput()
solution.solve()
    
    

'''
2 4 4
1111
1001
1S11
0U11

4 3 4
1D11
RRS1
1U11




'''