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


class lesson:
    def __init__(self, topic, article, videoURL):
        self.topic = topic
        self.article = article
        self.videoURL = videoURL

    def setTopic(self, topic):
        self.topic = topic

    def setArticle(self, article):
        self.article = article

    def setVideo(self, videoURL):
        self.videoURL = videoURL

    def getTopic(self):
        return self.topic

    def getArticle(self):
        return self.article

    def getVideo(self):
        return self.videoURL


class course:
    def __init__(self, lessons):
        self.lessons = lessons  # array of lessons

    def addLesson(self, lesson):
        self.lessons.append(lesson)
        return self.lessons

    def removeLesson(self, removeIndex):
        self.lessons.pop(removeIndex)
        return self.lessons

    def getLesson(self, findIndex):
        if findIndex >= 0 and len(self.lessons)-1 <= findIndex:
            return self.lessons[findIndex]
        else:
            return -1


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
