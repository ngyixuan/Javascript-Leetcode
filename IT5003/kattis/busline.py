class Solution:
    def __init__(self):
        self.n = 0
        self.m = 0
        self.sums = set()
        self.edges = []

    def userinput(self):
        self.n, self.m = map(int, input().split())

   
    def calculate(self):
        if self.m < self.n - 1 or self.m > (self.n * (self.n - 1)) // 2:
            print("-1")
            return
        

        for i in range(1, self.n):
            for j in range(i + 1, self.n + 1):  
                res = i+j
                if(self.m==0):
                    break
                if(res not in self.sums):
                    self.sums.add(res)
                    self.edges.append((i,j))
                    self.m-=1

   
        if(self.m>0):
            print("-1")
            return
        
        for edge in self.edges:
            print(edge[0], edge[1])

solution = Solution()
solution.userinput()
solution.calculate()
