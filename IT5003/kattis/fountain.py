class Solution:
    def __init__(self):
        # n is num of rows, m is nums of columns
        self.n = 0 
        self.m = 0
        self.graph = []

    def input(self):
        self.n, self.m = map(int, input().split())
        if(self.m<=0): return
        for _ in range(self.n):
            row = input()
            self.graph.append(list(row))

    def calculate(self):

        for i in range(self.n-1):
            for j in range(self.m):
                if(self.graph[i][j] == 'V'):
                    if(self.graph[i+1][j] == '.'):
                          self.graph[i+1][j] = 'V'
                    elif(self.graph[i+1][j] == '#'):
                        left = j-1
                        right = j+1
                        while left>=0 and self.graph[i][left] == '.' and self.graph[i+1][left] == '#': 
                            self.graph[i][left] = 'V' 
                            left -= 1
                        if(left>=0 and self.graph[i][left] == '.'):
                            self.graph[i][left] = 'V'
                            self.graph[i+1][left] = 'V'
                        if right<self.m and self.graph[i][right] == '.': 
                            self.graph[i][right] = 'V'

                        


        for _ in range(self.n):
            print(''.join(self.graph[_]))

solution = Solution()
solution.input()
solution.calculate()

'''
5 14
....V...V.....
..............
..............
...........VV.
.###.#######..




'''