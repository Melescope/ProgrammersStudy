# 팩토리얼을 재귀함수로 구현! 2022-05-09
def factorial(n):
    if n < 0:
        raise Exception('팩토리얼은 음수 ㄴㄴ해')
    elif n == 0:
        return 1
    else: 
        return n * factorial(n-1)
print(factorial(int(input())))