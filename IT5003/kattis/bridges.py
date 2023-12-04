import heapq
class Solution:
    def __init__(self):
        self.V = 0
        self.E = 0
        self.AL = []
        self.INF = int(1e9)

    def userInput(self):
       
        self.V,self.E = map(int,input().split())
        self.AL = [[] for u in range (self.V+1)]
        self.dist = [self.INF for u in range(self.V+1)]
        for _ in range(self.E):
            u,v,w = map(int, input().split())
            self.AL[u].append((v,w))
            self.AL[v].append((u,w))
        # print(self.AL)

    def dijkstra(self):
        self.dist[1] = 0
        pq = []
        heapq.heappush(pq,(0,1))
        while(len(pq)>0):
            d,u = heapq.heappop(pq) #latest distance, vertex position
            if d >self.dist[u] : continue
            for v,w, in self.AL[u]:
                if(self.dist[u]+w>=self.dist[v]):
                    continue
                self.dist[v] = self.dist[u]+w
                heapq.heappush(pq,(self.dist[v],v))
                # print("pq",pq)  
                # print("dist",self.dist) 
        
        print(self.dist[self.V])



solution = Solution()
solution.userInput()
solution.dijkstra()

'''
3 3
3 1 1
1 2 1
2 3 1

6 6
5 6 1
5 4 1
2 1 1
2 3 1
4 3 1
1 4 1

10 13
2 8 0
2 10 1
3 10 0
4 1 0
4 5 0
4 6 0
4 8 0
5 7 1
5 9 1
6 9 0
7 3 0
7 6 1
7 10 1







'''