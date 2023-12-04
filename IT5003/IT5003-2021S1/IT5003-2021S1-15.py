import heapq
n,m = map(int,input().split())
language = input().split()
languageDict = { language:{} for language in ['English']+language }
for _ in range(m):
    l1,l2,cost  = input().split()
    languageDict[l1][l2] = int(cost)
    languageDict[l2][l1] = int(cost)

INF = 1e9
dist = {language: INF for language in languageDict.keys()}
dist['English'] = 0
print("costDictionary",dist)
print("languageDictionary",languageDict)
pq = [(0,'English')]
while pq:
    currentCost,currentLanguage= heapq.heappop(pq)
    for next_language, next_cost in languageDict[currentLanguage].items():
#         totalCost = currentCost+next_cost
#         if(totalCost > dist[next_language]):continue
#         dist[next_language] = totalCost
#         heapq.heappush(pq,(totalCost,next_language))


# total_translation_cost = sum(dist[language] for language in 'English')


'''
4 6
Chinese French Portuguese Swedish
English Chinese 1
English French 1
English Portuguese 5
Chinese Portuguese 1
Portuguese Swedish 5
French Swedish 1
'''