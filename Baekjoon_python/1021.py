N , M = map(int,input().split())
result = 0
pickup = input().split()
print('뽑을 애들은' , pickup)

for i in pickup:
    doing = min(int(i) - 1 , int(N) - int(i) + 1)
    print('N은', N ,'i는 ' , i , '수행 회수는' , doing)
    result += doing
    N -= 1
print(result)