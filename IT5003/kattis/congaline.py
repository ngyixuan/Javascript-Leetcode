class ListNode():
    def __init__(self,val):
        self.val = val
        self.next = None
        self.couple = None
        self.prev = None

class Solution:
    def __init__(self):
        self.head = None
        self.tail = None
        self.size = 0
        self.shout = False
        self.coupleArr = []
        self.count = 0
        self.instruction = ''
        self.coupleNum = 0
        self.instrutionNum = 0
        # self.coupleArr = ['amelia', 'bubba','kiryu', 'coco','ollie', 'udin']
        # self.count = 0
        # self.instruction = 'BRBPRFFPRBBBBBRPCBBCFP'
        # self.coupleNum = 3
        # self.instrutionNum = 22
        
        

    def userInput(self):
        num = input().split()
        self.coupleNum = int(num[0])
        self.instrutionNum = int(num[1])
        for i in range(self.coupleNum):
            name = input().split()
            self.coupleArr.append(name[0])
            self.coupleArr.append(name[1])
        self.instruction = input()


    def createLinkedList(self):
        # create linked list

        count = 0
        for i in self.coupleArr:
            newNode = ListNode(i)
            if(not self.head):
                self.head = newNode
                self.tail = newNode
                current = self.head
                
            else:
                temp = current
                current.next =newNode
                if(count%2!=0):
                    temp.couple = newNode
                    current.next.couple = temp
                self.tail.next = newNode
                self.tail = newNode
                current = current.next
                current.prev = temp
            count+=1
            self.size+=1

        return self.head

   

    def printLinkedList(self,head):
    #  test for linked list 
        current = head
        if(self.shout):
            print()
        while(current):
          
            print(current.val)
            current =current.next


    def excuteInstruction(self):
        current = self.head

        for i in range(len(self.instruction)):
            if(self.instruction[i]=='F'):
                current = current.prev
  
            elif(self.instruction[i]=='B'):
                current = current.next

            elif(self.instruction[i]=='R'):
        
                # 如果是最后一个
                
                if(not current.next):
                    current = self.head

                else:
                    temp = current
                    current = current.next
                    
                    if(not temp.prev):
                        self.head= current
                        current.prev = None
                       
                    else:
                        temp.prev.next = current
                        current.prev = temp.prev
                    
                  

                    tempTail = self.tail
                    self.tail.next = temp
                    self.tail = temp
                    self.tail.prev= tempTail
                    self.tail.next = None

                

                    
                    
   

            elif(self.instruction[i]=='C'):
                if(not current.next):
                    current = self.head
                else:
                    temp = current
                    coupleNext = temp.couple.next
                    
                    current = current.next
                    if(not temp.prev):
                        self.head= current
                        current.prev = None
                    else:
                        temp.prev.next = current
                        current.prev = temp.prev
                    if(coupleNext):
                        temp.couple.next = temp
                        temp.next = coupleNext
                        temp.prev = temp.couple
                        coupleNext.prev = temp

                    else:
                        tempTail = self.tail
                        self.tail.next = temp
                        self.tail = temp
                        self.tail.prev= tempTail
                        self.tail.next = None

                

                    

                
            elif(self.instruction[i]=='P'):
                self.shout = True
                # print("current",current.val)
                print(current.couple.val)
        return self.head


        


solution = Solution()
solution.userInput()
head=solution.createLinkedList()
couplePosition = solution.excuteInstruction()
solution.printLinkedList(couplePosition)