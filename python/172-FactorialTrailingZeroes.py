def trailingZeroes(n):

    if(n <= 0):
        return 0
 
    # Initialize result
    count = 0
 
    # Keep dividing n by
    # 5 & update Count
    while(n >= 5):
        n //= 5
        count += n

    if(count==0):
        return 0
 
    return count

print(trailingZeroes(3))
