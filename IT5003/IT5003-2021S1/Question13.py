import heapq
M =input()
queueArr = input().split()
pq = []
for index,value in enumerate(queueArr):
    heapq.heappush(pq, (int(value),  index))

for i in range(int(M)):
   value, index =  heapq.heappop(pq)
   print(value)
   value+=1
   heapq.heappush(pq,(value, index))
    
'''
use an array to receive the use input about the current queue length in each cashier
iterate through the queueArray and store as tuple into the priority queue in form of (value, index)
pop the top of priority queue to get the minimum queue length and print the length.
add 1 to the minimum value and push it back to priority queue.
'''

