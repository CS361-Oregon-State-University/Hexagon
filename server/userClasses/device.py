class Device:
    def __init__(self, workoutType, name, difficulty):   
        self.__type = workoutType  # workoutType inherited child of abstract workoutType class
        self.__name = name #name of the device
        self.__difficulty = difficulty #how hard it is to use/learn device 1-5
    
    def getType(self): 
        return self.__type

    def setType(self, type): 
        self.__type = type
        
    def getName(self) -> str:
        return self.__name

    def setName(self, name: str) -> None:
        self.__name = name
    
    def getDifficulty(self) -> int:
        return self.__difficulty
    
    def setDifficulty(self, difficultyLevel) -> None:
        self.__difficulty = difficultyLevel

    
        