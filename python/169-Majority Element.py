
def majorityElement( nums) :
    numsDict = {}
    for i in range(len(nums)):
        if nums[i] not in numsDict.keys():
            numsDict[nums[i]] = 1
        else:
            numsDict[nums[i]] +=1

    for k, v in numsDict.items():
        if (v>(int(len(nums)/2))):
            return k
            

print(majorityElement(nums = [2,2,1,1,1,2,2]))

