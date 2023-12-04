participants = int(input() )

vaccine_group = 0
infection_vaccine_A = 0
infection_vaccine_B = 0
infection_vaccine_C = 0

control_group = 0
infection_control_A = 0
infection_control_B = 0
infection_control_C = 0


for i in range(participants):
    infection_status = input().strip()
    if(infection_status[0]=='Y'):
        vaccine_group+=1
        if(infection_status[1]=="Y"):
            infection_vaccine_A += 1
        if(infection_status[2]=="Y"):
            infection_vaccine_B += 1
        if(infection_status[3]=="Y"):
            infection_vaccine_C += 1
    else:
        control_group+=1
        if(infection_status[1]=="Y"):
            infection_control_A += 1
        if(infection_status[2]=="Y"):
            infection_control_B += 1
        if(infection_status[3]=="Y"):
            infection_control_C += 1


decrease_infectionA = infection_control_A/control_group-infection_vaccine_A/vaccine_group
decrease_infectionB = infection_control_B/control_group-infection_vaccine_B/vaccine_group
decrease_infectionC = infection_control_C/control_group-infection_vaccine_C/vaccine_group
if(decrease_infectionA<=0):
    print("Not Effective")
else:
    vaccineEfficacyA = (decrease_infectionA /( infection_control_A/control_group ))*100
    print(f'{vaccineEfficacyA:.2f}')

if(decrease_infectionB<=0):
    print("Not Effective")
else:
    vaccineEfficacyB = (decrease_infectionB / (infection_control_B/control_group)) *100
    print(f'{vaccineEfficacyB:.2f}')

if(decrease_infectionC<=0):
    print("Not Effective")
else:
    vaccineEfficacyC = (decrease_infectionC / (infection_control_C/control_group))*100
    print(f'{vaccineEfficacyC:.2f}')

