#2022-05-10 하노이의 탑
def hanoi(N):
    if N == 1:
        print('1 3')
    if N == 2:
        print('1 2')
        print('1 3')
        print('2 3')
    elif (N%2==1) :
        

N = int(input())