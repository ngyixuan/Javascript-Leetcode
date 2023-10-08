def factorial(n):
       
    res = 1
      
    for i in range(2, n+1):
        res *= i
    return res


def factorial(n):
       
    if n == 0:
        return 1
      
    return n * factorial(n-1)
   