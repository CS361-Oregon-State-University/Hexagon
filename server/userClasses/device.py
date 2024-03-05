
class Device:
    def __init__(self):   
        self.__type = "" #TODO: finish after WorkoutType is merged
        self.__name = "" #name of the device
        self.__difficulty = 1 #how hard it is to use/learn device 1-5
    
    # def getType(self) -> str: #TODO: finish after WorkoutType is merged
    #     return self.__type

    # def setType(self, type: str): #TODO
        
    def getName(self) -> str:
        return self.__name

    def setName(self, name: str) -> None:
        self.__name = name
    
    def getDifficulty(self) -> int:
        return self.__difficulty
    
    def setDifficulty(self, difficultyLevel) -> None:
        self.__difficulty = difficultyLevel

    
        