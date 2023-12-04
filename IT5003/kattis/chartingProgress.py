recordLog = []
recordRows = []


def inputData():
    global recordLog
    global recordRows
    while True:
        try:
                inputLine = input().strip()

                if (inputLine):
                    recordRows.append(inputLine)
                else:
                    if(recordRows):
                        recordLog.append(recordRows)
                        recordRows = []
         
        except EOFError:
            if recordRows:
                recordLog.append(recordRows)
            break


    # for i in range(100):
    #     global recordLog
    #     global recordRows
        
    #     inputLine = input().strip()

    #     if (inputLine):
    #         recordRows.append(inputLine)
    #     else:
    #         if(recordRows):
    #             recordLog.append(recordRows)
    #             recordRows = []
    #         elif(not recordRows):
    #             break

def sorting(stringLst,start):
    newRecordRow = ['.' for i in range(len(stringLst))]
    for i in range(len(stringLst)):
            if(stringLst[i]=="*" ):
                newRecordRow[len(stringLst)-1-start] = '*' 
                start+=1
    
    return start, newRecordRow      
       
def sortData():
    newRecordLogs = [] 
    for logs in range(len(recordLog)):
        start = 0
        newLogs = []
        for row in range(len(recordLog[logs])):
            start,newRecordRow = sorting(list(recordLog[logs][row]),start)
            newLogs.append(''.join(newRecordRow))
        
        newRecordLogs.append(newLogs)
    printResult(newRecordLogs)

def printResult(result):
    for i in range(len(result)):
        for j in range(len(result[i])):
            print(result[i][j])
        if (i<len(result)-1):
            print("")
            
inputData()
sortData()


                



        
