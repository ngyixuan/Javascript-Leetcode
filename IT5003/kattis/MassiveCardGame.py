import bisect
# import math 
cardArr = []
cardTotal = int(input())
cardNumber = input().split()
cardArr = [int(i) for i in cardNumber]

rangesTotal = int(input())
rangesArr = []
for i in range(rangesTotal):
    numberPairs =input().split()
    rangesArr.append([int(numberPairs[0]),int(numberPairs[1])])


# def mergeSort(arr):
#     if(len(arr)>1):
#         mid = len(arr)//2
#         arrayLeft = arr[:mid]
#         arrayRight = arr[mid:]
#         mergeSort(arrayLeft)
#         mergeSort(arrayRight)


#         i,j,k=0,0,0

#         while i < len(arrayLeft) and j < len(arrayRight):
#             if arrayLeft[i] < arrayRight[j]:
#                 arr[k] = arrayLeft[i]
#                 i += 1
#             else:
#                 arr[k] = arrayRight[j]
#                 j += 1
#             k += 1

#     # When all elements are traversed in either arr1 or arr2,
#     # pick up the remaining elements and put in sorted array
#         while i < len(arrayLeft):
#             arr[k] = arrayLeft[i]
#             i += 1
#             k += 1

#         while j < len(arrayRight):
#             arr[k] = arrayRight[j]
#             j += 1
#             k += 1

    


# def insertionSort(arr):
#     for i in range(1,len(arr)):
#         value = arr[i]
#         hole = i
#         while(hole>0 and arr[hole-1]>value):
#             arr[hole] = arr[hole-1]
#             hole = hole-1
#         arr[hole] = value
#     return arr

def binarySearch(sortArr,rangeArr,minArr):

    for min,max in rangeArr:
        count = 0
        if(min>max):
            min,max = max,min
 
        if(minArr>max):
            print(count)
            continue
        left = bisect.bisect_left(sortArr,min)
        # print("left",left)
    
        right = bisect.bisect_right(sortArr,max, lo=left)
        # print("right",right)

        # print("right",right)
        if(left>len(sortArr)-1):
            print(count)
            continue
    

        else:
            count = right-left
            print(count)
     



# def binarySearch(sortArr,l,r,rangeArr):
#     flag = 0
#     count = 0
#     while(l<=r):
#         mid = (l+r)//2
       
#         if(sortArr[mid]<rangeArr[0]):
#             l = mid+1
#         elif(sortArr[mid]>rangeArr[1]):
#             r = mid-1

#         elif(sortArr[mid]>=rangeArr[0] and sortArr[mid]<=rangeArr[1]):
#             # print("mid",mid)
#             return mid
        
#     return -1
            
# def searchRange(sortArr,l,r,rangeArr):
#     count=0
#     if(max(sortArr)<rangeArr[0]):
#         print(0)
#         return
#     firstFind = binarySearch(sortArr,l,r,rangeArr)
#     if(firstFind==-1):
#         print(0)
#         return
#     # print(firstFind)
#     l = firstFind
#     r = firstFind
#     while(l>=0 and sortArr[l] > rangeArr[0]-1):
#         if(l == 0):
#             l-=1
#             break
#         l-=1
#     l = l+1
#     # print(l)
#     while(sortArr[r] < rangeArr[1]+1):
#         if(r == len(sortArr)-1):
#             r+=1
#             break
#         r +=1
    
#     # print(r)

#     print(r-l)
    
    
    # while(sortArr[l]<=rangeArr[1]):
    #     l+=1
    #     count+=1
    #     if(l==len(sortArr)):
            
    #         print(count)
    #         return

    # print(count)
    # return


# def countCard(countRangeArr,sortedArr):
#     for i in range(len(countRangeArr)):
#         searchRange(sortedArr,0,len(sortedArr),rangesArr[i])

    # if(max(sortArr)>=rangeArr[0] and min(sortArr)<=rangeArr[0]):
        
    #     mid = int(l+(r-1)/2)
       
        # if(sortArr[mid] == rangeArr[0]):
        #     count=1
        #     print(mid)
            
                
            
        #     while(sortArr[mid]<=rangeArr[1]):
        #         print(mid,sortArr[mid])
        #         mid+=1
        #         count+=1
               
        #         if(mid+1==len(sortArr) and sortArr[mid]<=rangeArr[1]):
                    
        #             print(count) 
        #             return
        #     print (count)
            
    #     elif(sortArr[mid]>=rangeArr[0]):
    #         return decreaseRange(sortArr,l,mid,rangeArr)
    #     else:
    #         decreaseRange(sortArr,mid+1,r,rangeArr)
    
    # else:
    #     print(0) 


              

            


# def countCard(countRangeArr,sortedArr):
#     for i in range(len(countRangeArr)):
#         minIndex =0
#         index = 0
#         while(index<len(sortedArr)):
#             if(sortedArr[index]>=countRangeArr[i][0] and sortedArr[index]<=countRangeArr[i][1]):
#                 minIndex+=1
#                 if(index == len(sortedArr)-1):
#                     print(minIndex)

#             elif(sortedArr[index]>countRangeArr[i][1]):
#                 print(minIndex)
#                 break

#             elif (index==len(sortedArr)-1 and minIndex==0) or ( sortedArr[index]>countRangeArr[i][1] and minIndex==0):
#                 print(minIndex)
#                 break

#             index+=1
            
            
            
            

    
        

# def countCard(countRangeArr,sortedArr):
#     elementDict = {}
#     for number in sortedArr:
#         if(number in elementDict.keys()):
#             elementDict[number]+=1
#         else:
#             elementDict[number] = 1
#     for i in range(len(countRangeArr)):
#         count=0
#         for j in range(countRangeArr[i][0],countRangeArr[i][1]+1):
#             if j in elementDict.keys():
#                 count+=elementDict[j]
#         print(count)

        

            

# rangesArr = [[1,0]]
# rangesArr = [[4,5]]
# # cardArr = [1,0]
# cardArr = [2]

# cardArr = [0, 2,3, 4, 2, 4 ,2 ,4 ,2, 4 ,-2]
cardArr.sort()
# mergeSort(cardArr)


# print(cardArr)
# countingArr = countCard(rangesArr,cardArr)
minimumArr= min(cardArr)
binarySearch(cardArr,rangesArr,minimumArr)








