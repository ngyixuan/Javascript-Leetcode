class Solution:
    def __init__(self):
        self.n = 0 
        self.m = 0
        self.AL = {}
        self.tasks_indegree
        self.ordering = []

    def userInput(self):
        self.n, self.m = map(int, input().split())
        self.dict = {_:[] for _ in range(self.n+1)}
        self.visited = [0 for _ in range(self.n+1)]

        for _ in range(self.m):
            # u must be executed before v
            u,v = map(int, input().split())
            self.dict[v].append(u) 
        self.ordering = list(map(int,input().split()))
        print(self.dict)
      

    def checkOrdering(self):
  
        for i in self.ordering:
            if(self.dict[i]==[] or self.dict[i]==[0]):
                self.visited[i] = 1
            elif (len(self.dict[i])>0):
                for j in self.dict[i]:
                    if(self.visited[j]==0):
                        print("Fail")
                        return
                self.visited[i] = 1
        print("Go Ahead")
        print(self.visited)


    

solution = Solution()
solution.userInput()
solution.checkOrdering()

'''
3 2
1 2
1 3
1 2 3
'''

'''
3 2
1 2
1 3
2 1 3
'''

'''
5 0
5 2 1 3 4
'''

'''
5 1
1 2
5 2 1 3 4

'''
    