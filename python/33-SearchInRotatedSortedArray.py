def search(nums,target):
    # binarysearch
    nums.sort()
    low = 0
    high = len(nums)
    while(low<=high):
        mid = (low+high)//2
        if(nums[mid]>target):
            low = mid+1
            

        elif(nums[mid]<target):
            high=mid-1
        else:
            return mid
    return -1
        

nums =[4,5,6,7,0,1,2]
print(search(nums,0))