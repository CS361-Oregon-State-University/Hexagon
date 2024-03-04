from fastapi import FastAPI
from pydantic import BaseModel

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


workoutAppInstance = workoutApp()


class library:
    def __init__(self, courses):
        self.courses = courses  # an array of courses

    def setCourses(self, course):
        self.courses.append(course)

    def getCourses(self):
        return self.courses

    def removeCourse(self, removeIndex):
        if removeIndex >= 0 and len(self.courses)-1 <= removeIndex:
            self.courses.pop(removeIndex)
            return self.courses
        return -1

    def sortLibrary(self, sortValue):
        # sort value will be an int -> each will be one of the options such as popular, recent,
        # or by name based on how they appear in the object
        return sorted(self.courses, key=lambda x: x[sortValue])


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
