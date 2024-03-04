from fastapi import FastAPI
from pydantic import BaseModel
import datetime
app = FastAPI()


class workoutApp:
    def __init__(self):
        self.username = "admin"
        self.password = "admin"
        self.hasworkedout = False

    def whatIsMyName(self):
        return self.username

    def updateUsername(self, username):
        self.username = username


class workoutPlan:
    def __init__(self, planName, completion, planGoal):
        self.planName = planName
        self.completion = completion
        self.planGoal = planGoal

    def setCompletion(self, newCompletion):
        self.completion = newCompletion

    def getCompletion(self):
        return self.completion

    def setGoal(self, newGoal):
        self.planGoal = newGoal

    def getGoal(self):
        return self.planGoal


class Injury:
    def __init__(self): #TODO 
        self.injury = ""

class Device:
    def __init__(self):  #TODO 
        self.device = ""

class User:
    def __init__(self):
        self.__firstName = ""
        self.__lastName = ""
        self.__email = ""
        self.__password = ""
        self.__sex = ''
        self.__gender = ''
        self.__weight = 0
        self.__height = 0
        self.__birthday = datetime.datetime(0, 0, 0) #year, month, day
        self.__experienceLevels = [] #int[]
        self.__injuryList = Injury()
        self.__deviceList = Device() #
    
    def getFirstName(self) -> str: 
        return self.__firstName
    
    def setFirstName(self, firstName: str) -> None:
        self.__firstName = firstName

    def getLastName(self) -> str:
        return self.__lastName

    def setLastName(self, lastName: str) -> None:
        self.__lastName = lastName
    
    def getEmail(self) -> str:
        return self.__email
    
    def setEmail(self, email: str) -> None:
        self.__email = email
    
    def getPassword(self) -> str:
        return self.__password

    def setPassword(self, password) -> None:
        self.__password 
    
    def getSex(self) -> str:
        return self.__sex

    def setSex(self, sex: str) -> None:
        self.__sex = sex
    
    def getGender(self) -> str:
        return self.__gender

    def setGender(self, gender: str) -> None:
        self.__gender = gender
    
    def getWeight(self) -> int:
        return self.__weight
    
    def setWeight(self, weight: int) -> None:
        self.__weight = weight
    
    def getHeight(self) -> int:
        return self.__height

    def setHeight(self, height) -> None:
        self.__height = height
    
    def getBirthday(self) -> datetime.datetime:
        return self.__birthday
    
    def setBirthday(self, year: int, month: int, day: int) -> None:
        self.__birthday = datetime.datetime(year, month, day)
    
    def getExperienceLevels(self) -> list[int]:
        return self.__experienceLevels
    
    def setExperienceLevels(self, experienceLevels: list[int]) -> None: #could make a different setter
        self.__experienceLevels = experienceLevels
    
    def getInjuryList(self) -> list[Injury]:
        return self.__injuryList
    
    def setInjuryList(self, injuryList: list[Injury]) -> None:
        self.__injuryList = injuryList
    
    def getDeviceList(self) -> list[Device]:
        return self.__deviceList

    def setDeviceList(self, deviceList: list[Device]) -> None:
        self.__deviceList = deviceList

    def calculateAge(self) -> int:
        today = datetime.datetime.today().date() #returns today's date in yyyy-mm-dd
        birthday = self.getBirthday()
        years = today.year - birthday.year
        if today.month < birthday.month or (today.month == birthday.month and today.day < birthday.day):
            years -= 1
        
        return years
    
    def addInjury(self, injury: Injury) -> None:
        self.__injuryList.append(injury)
    
    def addDevices(self,device: Device) -> None:
        self.__deviceList.append(device)
    
    def shareUserStats(self) -> tuple: #share user stats
        age = self.calculateAge()
        weight = self.getWeight()
        height = self.getHeight()
        sex = self.getSex()
        gender = self.getGender()
        return (age, weight, height, sex, gender)

        


workoutAppInstance = workoutApp()


@app.get("/test")
async def test():
    return {"message": "test worked"}


@app.get("/username")
async def getUsername():
    return {"username": {workoutAppInstance.whatIsMyName()}}


class Username(BaseModel):
    username: str


@app.post("/updateUsername")
async def updateUsername(username: Username):
    workoutAppInstance.updateUsername(username.username)


@app.get("/loginInfo")
async def checkLogin():
    return {"username": workoutAppInstance.username,
            "password": workoutAppInstance.password}

