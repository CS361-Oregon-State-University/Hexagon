from fastapi import FastAPI
from pydantic import BaseModel
from abc import ABC
from abc import abstractmethod

app = FastAPI()


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


class goal:
    def __init__(self, reason, stats, startDate):
        self.reason = reason
        self.stats = stats
        self.startDate = startDate

    def setReason(self, reason):
        self.reason = reason

    def setStats(self, stats):
        self.stats = stats

    def getReason(self):
        return self.reason

    def getStats(self):
        return self.stats


class workoutType(ABC):

    @abstractmethod
    def getType(self):
        pass


class Cardio(workoutType):
    def __init__(self, intensity, length, name):
        self.intensity = intensity
        self.length = length
        self.name = name

    def getType(self):
        return "Cardio"

    def getIntensity(self):
        return self.intensity

    def getLength(self):
        return self.length

    def getName(self):
        return self.name

    def setIntensity(self, intnsty):
        if (type(intnsty) is int):
            if (intnsty > 0 and intnsty < 6):
                self.intensity = intnsty
            else:
                raise Exception(
                    "Sorry, the numbers have to be between 1 and 5")
        else:
            raise TypeError("Sorry, but only integers are allowed")

    def setLength(self, lenth):
        if (type(lenth) is int):
            if (lenth > 0):
                self.length = lenth
            else:
                raise Exception(
                    "Sorry, the length of your workout can't be negative")
        else:
            raise TypeError("Sorry, please input a valid length of time")

    def setName(self, namie):
        if (len(namie) <= 100):
            self.name = namie
        else:
            raise Exception(
                "Sorry, but the name of the cardio workout is too long")


class Milestone(ABC):
    def __init__(self, user_stats):
        self.user_stats = user_stats

    @abstractmethod
    def define_tasks(self):
        pass


class WeightLossMilestone(Milestone):
    def define_tasks(self):
        # Assuming user_stats is a dictionary with relevant stats
        weight_loss_goal = self.user_stats['weight_loss_goal']
        return [f"Lose {weight_loss_goal} pounds", "Exercise 30 minutes a day", "Drink 2 liters of water daily"]


class StrengthTrainingMilestone(Milestone):
    def define_tasks(self):
        strength_goal = self.user_stats['strength_goal']
        return [f"Increase bench press to {strength_goal} pounds", "Perform 50 push-ups daily", "Increase protein intake"]


class FlexibilityMilestone(Milestone):
    def define_tasks(self):
        flexibility_goal = self.user_stats['flexibility_goal']
        return [f"Achieve a {flexibility_goal} inch sit-and-reach", "Stretch for 20 minutes daily", "Attend yoga twice a week"]


# Example usage:
user_stats = {
    'weight_loss_goal': 10,  # User wants to lose 10 pounds
    'strength_goal': 200,  # User wants to bench press 200 pounds
    'flexibility_goal': 15  # User wants to achieve a 15 inch sit-and-reach
}


class Weightlifting(workoutType):
    def __init__(self, reps, sets, name, weight):
        self.reps = reps
        self.sets = sets
        self.name = name
        self.weight = weight

    def getType(self):
        return "Weightlifting"

    def getReps(self):
        return self.reps

    def getSets(self):
        return self.sets

    def getName(self):
        return self.name

    def getWeight(self):
        return self.weight

    def setReps(self, reps):
        if (reps > 0):
            self.reps = reps
        else:
            raise Exception("The number of repititions must be greater than 0")

    def setSets(self, sets):
        if (sets > 0):
            self.sets = sets
        else:
            raise Exception("The number of sets must be greater than 0")

    def setName(self, name):
        if (len(name) <= 100):
            self.name = name
        else:
            raise Exception(
                "The name of the Weightlifting workout is too long")


class Calisthenics(workoutType):
    def __init__(self, intensity, reps, sets, name):
        self.intensity = intensity
        self.reps = reps
        self.sets = sets
        self.name = name

    def getType(self):
        return "Calisthenics"

    def getReps(self):
        return self.reps

    def getSets(self):
        return self.sets

    def getName(self):
        return self.name

    def setReps(self, reps):
        if (reps > 0):
            self.reps = reps
        else:
            raise Exception("The number of repititions must be greater than 0")

    def setSets(self, sets):
        if (sets > 0):
            self.sets = sets
        else:
            raise Exception("The number of sets must be greater than 0")

    def setName(self, name):
        if (len(name) <= 100):
            self.name = name
        else:
            raise Exception("The name of the Calisthenics workout is too long")


class workoutPlan(ABC):
    def __init__(self, weekOne, weekTwo, weekThree, weekFour):
        self.planName = "default"
        self.completion = 0
        self.goal = None
        self.weekOneExercises = weekOne
        self.weekTwoExercises = weekTwo
        self.weekThreeExercises = weekThree
        self.weekFourExercises = weekFour

    def setCompletion(self, completion):
        self.__completion = completion

    def getCompletion(self):
        return self.__completion

    def setGoal(self, reason, stats, startDate):
        self.__goal = goal(reason, stats, startDate)

    def getGoal(self):
        return self.__goal

    def displayCurrentWorkoutPlan(self):
        return {"week one": self.__weekOneExercises,
                "week two": self.__weekTwoExercises,
                "week three": self.__weekThreeExercises,
                "week four": self.__weekFourExercises}  # should update UI elements

    # given the week (1-4) and plan, sets weeks workouts
    def setWorkoutPlan(self, week, plan, add):
        weeks = {1: self.__weekOneExercises, 2: self.__weekTwoExercises,
                 3: self.__weekTwoExercises, 4: self.__weekFourExercises}

        if week >= 1 and week <= 4 and not add:
            weeks[week] = plan

        if week >= 1 and week <= 4 and add:
            weeks[week].append(plan)


class Username(BaseModel):
    username: str


class Calendar:
    def __init__(self, hasSchedule, currentDay, schedule):
        self.hasSchedule = hasSchedule
        self.currentDay = currentDay
        self.schedule = schedule

    def getSchedule(self):
        if (self.hasSchedule):
            return self.schedule
        else:
            return "You don't have a schedule right now."

    def setSchedule(self, schedule):
        self.schedule = schedule
        return


class Week:
    def __init__(self, weekNumber, schedule):
        self.weekNumber = weekNumber
        self.schedule = schedule  # added array of days
        if (len(schedule) > 0):
            self.hasSchedule = True
        else:
            self.hasSchedule = False

    def getSchedule(self):
        if (self.hasSchedule):
            return self.schedule
        else:
            return "You don't have a schedule right now."

    def setSchedule(self, schedule):
        self.schedule = schedule
        return

    def getWeekNumber(self):
        return self.weekNumber

    # took out weekSummary

    # took out currentDay, using dayNumber in Day class instead


class Day:
    def __init__(self, dayType, dayNumber, workouts, date):
        self.dayType = dayType
        self.dayNumber = dayNumber
        self.dayStatus = "Incomplete"
        self.workouts = workouts  # WorkoutType object(s)
        self.date = date

    def getdayType(self):
        return self.dayType

    def setDayType(self, dayType):
        self.dayType = dayType
        return

    def getDayNumber(self):
        return self.dayNumber

    def setDayNumber(self, dayNumber):
        self.dayNumber = dayNumber
        return

    def getDayStatus(self):
        return self.dayStatus

    def setDayStatus(self, dayStatus):
        self.dayStatus = dayStatus
        return

    def getWorkouts(self):
        return self.workouts

    def setWorkouts(self, workouts):
        self.workouts = workouts
        return

    def getDate(self):
        return self.date

    def setDate(self, date):
        self.date = date
        return

    def addWorkout(self, workout):  # adds a workout to the list for today, caps at 3
        self.workouts.append(workout)
        return

    def removeWorkout(self, index):
        self.workouts.pop(index)
        return

    def getWorkout(self, index):
        if index >= 0 and index <= 2:
            return self.workouts[findIndex]
        else:
            return "No workout at this index"

    # added pushWorkout to workoutPlan class


class workoutApp:
    def __init__(self):
        self.isWorkingOut = False
        self.timeLeft = 0
        self.day = Day("1", "0", [], "friday smth")
        self.currentWorkout = None
        self.isFromLibrary = False
        self.workoutPlan = workoutPlan([Day(1, 0, [Cardio("Medium", 5 * 60, "Running"), Cardio("High", int(2.5 * 60), "Burpee"), Cardio(
            "High", 4 * 60, "Mountain Climbers"), Weightlifting(5, 3, "Benchpress", 180)], "Wed March 20th"), Day(1, 1, [Cardio("Medium", 5 * 60, "Running"), Weightlifting(5, 3, "Benchpress", 180), Cardio("High", int(2.5 * 60), "Burpee"), Cardio(
                "High", 4 * 60, "Mountain Climbers")], "Wed March 21th"), Day(1, 2, [Cardio("Medium", 5 * 60, "Running"), Cardio("High", int(2.5 * 60), "Burpee"), Cardio(
                    "High", 4 * 60, "Mountain Climbers")], "Wed March 22th"), Day(1, 3, [Cardio("Medium", 5 * 60, "Running"), Cardio("High", int(2.5 * 60), "Burpee"), Cardio(
                        "High", 4 * 60, "Mountain Climbers")], "Wed March 23th"), Day(1, 4, [Cardio("Medium", 5 * 60, "Running"), Cardio("High", int(2.5 * 60), "Burpee"), Cardio(
                            "High", 4 * 60, "Mountain Climbers")], "Wed March 24th"), Day(1, 5, [Cardio("Medium", 5 * 60, "Running"), Cardio("High", int(2.5 * 60), "Burpee"), Cardio(
                                "High", 4 * 60, "Mountain Climbers")], "Wed March 25th"), Day(1, 6, [Cardio("Medium", 5 * 60, "Running"), Cardio("High", int(2.5 * 60), "Burpee"), Cardio(
                                    "High", 4 * 60, "Mountain Climbers")], "Wed March 26th")], [], [], [])
        self.workouts = [Cardio("Medium", 5 * 60, "Running"), Cardio("High", int(2.5 * 60), "Burpee"), Cardio(
            "High", 4 * 60, "Mountain Climbers"), Cardio("High", 2 * 60, "High Knee"), Cardio("High", 3 * 60, "Squat"), Weightlifting(5, 3, "Benchpress", 180)]

    def setIsInWorkout(self, timeLeft):
        self.isWorkingOut = True
        self.timeLeft = timeLeft

    def getCurrentWorkout(self):
        return self.currentWorkout

    def setFinishedWorkout(self):
        self.isWorkingOut = False
        self.timeLeft = 0

    def removeCompletedExercises(self, moreThanOne, i):
        if moreThanOne:
            for _ in range(i):
                self.workoutPlan.pop(0)
        else:
            self.workoutPlan.pop(i)

    def setIsFromLibrary(self, isFromLibrary):
        self.isFromLibrary = isFromLibrary

    def getIsFromLibrary(self):
        return self.isFromLibrary


workoutAppInstance = workoutApp()


@app.get("/getWorkouts")
def getWorkouts():
    workouts = []
    for workout in workoutAppInstance.workouts:
        if workout.getType() == "Cardio":
            workouts.append({"name": workout.getName(), "intensity": workout.getIntensity(
            ), "time": workout.getLength(), "type": workout.getType()})
        else:
            workouts.append({"name": workout.getName(), "reps": workout.getReps(
            ), "sets": workout.getSets(), "type": workout.getType(), "weight": workout.getWeight()})
    return workouts


@app.get("/isUserWorkingOut")
def getIsWorkingOut():
    if (workoutAppInstance.isWorkingOut):
        return {"isWorkingOut": True, "timeLeft": workoutAppInstance.timeLeft}
    else:
        return {"isWorkingOut": False}


class workoutInfo(BaseModel):
    timeLeft: int


@app.post("/updateWorkoutTime")
def updateWorkoutProgress(timeLeft: workoutInfo):
    workoutAppInstance.setIsInWorkout(timeLeft.timeLeft)


@app.get("/finishedWorkout")
def finishedWorkout():
    workoutAppInstance.setFinishedWorkout()


@app.get("/getCurrentExercise")
def getCurrentExercise():
    return workoutAppInstance.getCurrentExercise()


class addExercise(BaseModel):
    name: str or None
    type: str or None
    intensity: str | None = None
    length: int | None = None
    reps: int | None = None
    sets: int | None = None


@app.post("/addExerciseToWorkoutPlan")
def addExerciseToWorkoutPlan(exerciseToAdd: addExercise):
    workout = None

    if exerciseToAdd.type == "Cardio":
        workout = Cardio(exerciseToAdd.intensity,
                         exerciseToAdd.length, exerciseToAdd.name)
    elif exerciseToAdd.type == "Weightlifting":
        workout = Weightlifting(exerciseToAdd.reps,
                                exerciseToAdd.sets, exerciseToAdd.name, exerciseToAdd.weight)
    else:
        workout = Calisthenics(exerciseToAdd.intensity, exerciseToAdd.reps,
                               exerciseToAdd.sets, exerciseToAdd.name)

    workoutAppInstance.workoutPlan.weekOneExercises[0].addWorkout(workout)


@app.get("/getWorkoutPlan")
def getDays():
    workouts = []

    for i in range(3):
        workouts_week = []  # Initialize list for workouts of the week
        for workout in workoutAppInstance.workoutPlan.weekOneExercises[i].getWorkouts():
            workout_object = {}
            if workout.getType() == "Cardio":
                workouts_week.append({"name": workout.getName(), "intensity": workout.getIntensity(
                ), "time": workout.getLength(), "type": workout.getType()})
            else:
                workouts_week.append({"name": workout.getName(), "reps": workout.getReps(
                ), "sets": workout.getSets(), "type": workout.getType(), "weight": workout.getWeight()})
        # Append the list of workouts for the current day to the main list
        workouts.append(workouts_week)
    return workouts


@app.get("/calculateWorkoutTime")
def calculateWorkoutTime():
    time = 0

    for workout in workoutAppInstance.workoutPlan.weekOneExercises[0].getWorkouts():
        if workout.getType() == "Cardio":
            time += workout.getLength()
        else:
            time += workout.getSets() * 60

    return time


@app.get("/getCurrentWorkout")
def getCurrentWorkout():
    time = None

    if workoutAppInstance.currentWorkout["type"] == "Cardio":
        time = workoutAppInstance.currentWorkout["length"]
    else:
        time = workoutAppInstance.currentWorkout["sets"] * 60

    print(workoutAppInstance.getCurrentWorkout(), time)
    return {"exercise": workoutAppInstance.getCurrentWorkout(), "time": time}


class WorkoutUpdate(BaseModel):
    name: str
    length: int | None = None
    intensity: str | None = None
    type: str
    sets: int | None = None
    reps: int | None = None
    weight: int | None = None


@app.post("/updateCurrentWorkout")
def updateCurrentWorkout(updateItem: WorkoutUpdate):
    workoutAppInstance.currentWorkout = {"name": updateItem.name, "length": updateItem.length, "intensity": updateItem.intensity,
                                         "type": updateItem.type, "sets": updateItem.sets, "reps": updateItem.reps, "weight": updateItem.weight}
    print(workoutAppInstance.currentWorkout)


class UpdateIsFromLibrary(BaseModel):
    isFromLibrary: bool


@app.post("/updateIsFromLibrary")
def update_is_from_library(update: UpdateIsFromLibrary):
    print(update)
    workoutAppInstance.setIsFromLibrary(update.isFromLibrary)
    return {"message": "Update successful"}


@app.get("/getIsFromLibrary")
def getIsFromLibrary():
    return workoutAppInstance.getIsFromLibrary()
