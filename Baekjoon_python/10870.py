#피보나치 수 재귀함수 2022-05-10
def fib(n):
    if (n == 0):
        return 0
    elif (n==1):
        return 1
    else:
        return fib(n-1)+fib(n-2)

n = int(input())
print(fib(n))
# done
