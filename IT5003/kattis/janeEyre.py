import heapq

class Solution:
    def __init__(self):
        self.ownBooksNum = 0
        self.extraBooksNum = 0
        self.janeEyrePages = 0
        self.currentTime = 0
        self.booksHeap = []
       
        
    def userInput(self):
        booksNumber = input().split()
        ownBooksNum = int(booksNumber[0])
        extraBooksNum = int(booksNumber[1])
        self.janeEyrePages = int(booksNumber[2])
        heapq.heappush(self.booksHeap,(0,"Jane Eyre", self.janeEyrePages))
        for i in range(ownBooksNum):
            booksDetail = input().split('"')
            booksTitle = booksDetail[1:][0]
            booksPages = int(booksDetail[1:][1])
            heapq.heappush(self.booksHeap,(0,booksTitle,booksPages))

        for i in range(extraBooksNum):
            booksDetail = input().split('"')
            booksReceiveTime = booksDetail[0]
            booksTitle = booksDetail[1]
            booksPages = int(booksDetail[2])
            heapq.heappush(self.booksHeap,(int(booksReceiveTime), booksTitle,booksPages))

    def readBooks(self):
        readingHeap = []
        while(True):
            
            while( (self.booksHeap and int(self.booksHeap[0][0])<=self.currentTime)):
                time, title, pages = heapq.heappop(self.booksHeap)
                heapq.heappush(readingHeap,(title, pages))
                # print(readingHeap)

            if(readingHeap):
                currentbook = heapq.heappop(readingHeap)
                self.currentTime += int(currentbook[1]) #add the reading pages time
                if(currentbook[0]=='Jane Eyre'):
                    print(self.currentTime)
                    break
                
            # elif(not readingHeap):
            #     self.currentTime+=self.janeEyrePages
            #     print(self.currentTime)
            #     break

solution = Solution()
solution.userInput()
solution.readBooks()
'''
2 2 592
"Pride and Predjudice" 432
"Don Quixote" 863
863 "Great Gatsby" 218
1082 "Crime and Punishment" 545


'''   
'''
3 1 592
"aa" 2
"bb" 3
"cc" 4
"Pride and Predjudice" 432

'''   