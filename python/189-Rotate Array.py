def rotate(nums, k):
    arr1= nums[-k:]
    arr2 = nums[:-k]
    nums[:] = arr1+arr2
    print(nums)

nums1=[1,2,3,4,5,6,7]
# nums1= [-1,-100,3,99]
k = 3
rotate(nums1,k)
