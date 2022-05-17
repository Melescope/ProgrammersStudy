# 아파트 단지 구분 문제. https://www.acmicpc.net/problem/2667
# 일단 첫 줄에 정사각형 변의 길이 나오고 단지를 구분해야 한다. 1이 집 0이 빈땅
# 일단 집이 있으면 주변에 집이 없을 때 까지 탐색해야 한다. dfs 재귀 사용해야함.
# 1으로 집이 주어지니까 각 단지를 a로 표현하자

# (1) 우선 지도에서 1을 찾고
# (2) 집탐색 함수를 사용해서 1을 a로 교체
# (3) 집탐색 함수는 1을 문자로 바꾸고, 바꾼 수를 카운트해야 한다.
# (4) 그럼 cnt를 리스트에 넣어서 sort 출력하면 끝이다.

# map은 [[01001],[01110]] 꼴이므로 1st[]가 y 좌표, 2nd[]가 x 좌표 역할이다. 2nd는 String 내 index다.
# list.index(a)하면 a의 index 구할 수 있음
# 집찾기 함수는 재귀로 풀자

# x , y 방향 이동은 아래 리스트를 활용하자 (구글 피셜)
# dx = [1,-1,0,0]
# dy = [0,0,1,-1]
# nx = x + dx[i]
# ny = y + dy[i]



map = []
ans = [] # 각 단지의 apt 숫자
N = int(input())

for i in range(N):
    map.append(list(input()))


def findzip(y,x,N):
    cnt = 0
    dx = [1,-1,0,0]
    dy = [0,0,1,-1]
    if map[y][x] == 1:
        map[y][x] = 0
        cnt += 1

    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if (0 <= nx < N) and (0 <= ny < N) : 
            findzip(nx,ny,N)
            
for y in map:
    for x in y:
        if x == '1':
            imsilist = []
            findzip(map , map.index(y) , y.index(x) , imsilist )
            ans.append(len(imsilist))
print(ans)
