import heapq
import collections
import random
class Solution:
    def __init__(self):

        # self.sizeArray = 10
        # self.totalRemoveElement = 10
        # self.frequencyDict = {}
        # self.numberList =  [3 ,1 ,7, 3, 3, 3, 7, 3 ,1 ,7]
        # self.priorityHeap = []
        self.sizeArray = 0
        self.totalRemoveElement = 0
        self.frequencyDict = {}
        self.priorityHeap = []

    def userInput(self):
        inputUser = input().split()
        self.sizeArray = inputUser[0]
        self.totalRemoveElement = inputUser[1]
        self.numberList = input().split()
        self.frequencyDict = collections.Counter(self.numberList)
        self.priorityHeap = [(-frequency, number)for number,frequency in self.frequencyDict.items()]
        heapq.heapify(self.priorityHeap)
        

    def smoothenDistribution(self):
        k = int(self.totalRemoveElement)
        while(k>0 and len(self.priorityHeap)>0):
            frequency,number = heapq.heappop(self.priorityHeap)
            frequency*=-1
            if(frequency>1):
                frequency-=1
                heapq.heappush(self.priorityHeap, (-frequency,number))
            
            k-=1
        if(len(self.priorityHeap)>0):
            maxOccurenceNum = heapq.heappop(self.priorityHeap)
            print(maxOccurenceNum[0]*-1)
        else:
            print(0)
solution = Solution()
solution.userInput()
solution.smoothenDistribution()
