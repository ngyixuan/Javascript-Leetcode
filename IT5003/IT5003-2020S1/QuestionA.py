# A-Q1, Sample Input = "1 4 2 6 9 5 3 8 7 10", Sample Output = "8"
# L = list(map(int, input().split())) # there are n (7 <= n <= 100000) integers in L
# print(L.index(7))

#A-Q2
# L = list(map(int, input().split()))
# L = [i for i in L if i >=7]
# print(L)

#A-Q3
L = list(map(int, input().split()))
L.sort()
print(",".join(map(str,L[-7:])))


#A-Q4
# from heapq import heapify, heappop
# PQ = list(map(lambda x: -int(x), input().split())) 
# heapify(PQ)
# print(",".join(map(str, [-heappop(PQ) for i in range(7)])))

#A-Q5
# s = set(map(int, input().split()))
# print([i for i in range(1,10) if i not in s])
